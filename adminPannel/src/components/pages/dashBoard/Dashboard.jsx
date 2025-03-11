import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Dashboard</h1>
      <p>Welcome to your dashboard. Here you can view analytics, manage content, and more.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
  },
};

export default Dashboard;
