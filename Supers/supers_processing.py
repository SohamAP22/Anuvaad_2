
# **** Note: Change the input video and output video directory also the gpu is turn off on line number 18 ****
# Step 1: Install required libraries
# !pip install opencv-python-headless Pillow deep-translator easyocr

# Step 2: Import necessary libraries
import cv2
from deep_translator import GoogleTranslator as Translator
from PIL import Image, ImageDraw, ImageFont
import numpy as np
import time
import easyocr  # For better OCR

# Cache for storing repeated translations
translation_cache = {}

# Initialize EasyOCR reader for multilingual text extraction, using the GPU
# ocr_reader = easyocr.Reader(['en', 'hi'], gpu=True)
ocr_reader = easyocr.Reader(['en', 'hi'])

# Function to translate text using Google Translator
def translate_text(text, target_language):
    if text in translation_cache:
        return translation_cache[text]

    try:
        translated = Translator(source='auto', target=target_language).translate(text)
        translation_cache[text] = translated
        return translated
    except Exception as e:
        print(f"Error translating text: {str(e)}")
        return None

# Function to add translated text above the original text
def add_translated_text_to_frame(frame, text_boxes, translated_texts, font_path, font_size=20, text_color=(2, 250, 233)):
    image = Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
    draw = ImageDraw.Draw(image)

    # Specify the font and size
    font = ImageFont.truetype(font_path, font_size)

    for (box, translated_text) in zip(text_boxes, translated_texts):
        # Calculate position to place the translated text just above the original text
        text_x = box[0][0]
        text_y = box[0][1] - font_size  # Adjust Y position to place above original text

        # Add translated text to the image at the new position
        draw.text((text_x, text_y), translated_text, font=font, fill=text_color)

    return cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)

# Function to process a single frame with OCR and translation
def process_frame(frame, font_path, target_language, min_text_size=(20, 20)):
    gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    results = ocr_reader.readtext(gray_frame, detail=1)  # detail=1 gives bounding boxes and detected text

    text_boxes = []
    translated_texts = []

    for (bbox, text, _) in results:
        # Calculate the width and height of the bounding box
        box_width = bbox[2][0] - bbox[0][0]
        box_height = bbox[2][1] - bbox[0][1]

        # Check if the detected text size is above the specified minimum size
        if box_width >= min_text_size[0] and box_height >= min_text_size[1]:
            text_boxes.append(bbox)  # Store the bounding box
            translated_text = translate_text(text, target_language)  # Pass target_language to translate_text
            if translated_text:
                translated_texts.append(translated_text)
            else:
                translated_texts.append(text)  # Fallback to original text if translation fails

    # Return bounding boxes and translated texts
    return text_boxes, translated_texts

# Step 3: Main code to process the video
if __name__ == "__main__":
    video_path = "/content/drive/MyDrive/MAJOR_PROJECT_D20B/anuvaad_materials/video_test_3.mp4"
    output_path = "/content/drive/MyDrive/MAJOR_PROJECT_D20B/anuvaad_materials/output_video.mp4"
    target_language = "hi"
    font_path = "/content/drive/MyDrive/MAJOR_PROJECT_D20B/anuvaad_materials/SakalBharati.ttf"

    cap = cv2.VideoCapture(video_path)
    fps = int(cap.get(cv2.CAP_PROP_FPS))
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

    print(f"FPS: {fps}, Total Frames: {total_frames}")

    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))  # Keep original width and height

    current_frame = 0

    # Buffers for translated texts and boxes
    buffered_texts = []
    buffered_boxes = []

    start_time = time.time()

    while current_frame < total_frames:
        ret, frame = cap.read()
        if not ret:
            break

        # Process every 3rd frame
        if current_frame % 3 == 0:
            # Process the frame
            text_boxes, translated_texts = process_frame(frame, font_path, target_language, min_text_size=(50, 20))
            buffered_texts = translated_texts
            buffered_boxes = text_boxes  # Store the current frame's translations
            processed_frame = add_translated_text_to_frame(frame, buffered_boxes, buffered_texts, font_path)
            out.write(processed_frame)  # Write the processed frame to the output video
        else:
            # Add translated text from buffered frames to the current frame
            if buffered_texts and buffered_boxes:
                frame = add_translated_text_to_frame(frame, buffered_boxes, buffered_texts, font_path)
            out.write(frame)  # Write the unprocessed frame to the output video

        current_frame += 1
        print(f"Processed frame {current_frame}/{total_frames}")

    cap.release()
    out.release()
    cv2.destroyAllWindows()

    end_time = time.time()
    total_time = end_time - start_time
    print(f"Total time taken: {total_time} seconds")
