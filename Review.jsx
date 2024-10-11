import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent, Button, Typography, Box } from '@mui/material';

const ReviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { reviewData } = location.state || {};

  const handleDubbing = () => {
    // Navigate to video player page with dubbing instructions
    navigate('/video-player', { state: { dubbingData: reviewData } });
  };

  return (
    <Card sx={{ maxWidth: '600px', margin: '2rem auto', padding: '1.5rem' }}>
      <CardHeader
        title={<Typography variant="h4">Review Translation</Typography>}
        sx={{ textAlign: 'center', mb: 2 }}
      />
      <CardContent>
        <Box
          component="pre"
          sx={{ 
            backgroundColor: '#f5f5f5', 
            padding: '1rem', 
            borderRadius: '8px', 
            overflowX: 'auto',
            mb: 3
          }}
        >
          {JSON.stringify(reviewData, null, 2)}
        </Box>
        {reviewData && (
          <Typography variant="body1" sx={{ mb: 2 }}>
            Timestamp: {new Date(reviewData.timestamp).toLocaleString()}
          </Typography>
        )}
        <Button 
          variant="contained" 
          fullWidth 
          onClick={handleDubbing}
        >
          Proceed to Dubbing
        </Button>
      </CardContent>
    </Card>
  );
};

export default ReviewPage;
