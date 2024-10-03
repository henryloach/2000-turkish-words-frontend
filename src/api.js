import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 1. Create a new user
export async function createUser(username) {
  try {
    const response = await apiClient.post('/users', { username });
    console.log('User created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error.response?.data || error.message);
    throw error;
  }
}

// 2. Get user details by username (simple login)
export async function getUser(username) {
  try {
    const response = await apiClient.get(`/users/${username}`);
    console.log('User details:', response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log('User not found');
    } else {
      console.error('Error fetching user:', error.response?.data || error.message);
    }
    throw error;
  }
}

// 3. Get card details by card ID
export async function getCard(cardId) {
  try {
    const response = await apiClient.get(`/cards/${cardId}`);
    console.log('Card details:', response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log('Card not found');
    } else {
      console.error('Error fetching card:', error.response?.data || error.message);
    }
    throw error;
  }
}

// 4. Get user progress (user’s card interactions)
export async function getUserProgress(username) {
  try {
    const response = await apiClient.get(`/users/${username}/cards`);
    console.log('User progress:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user progress:', error.response?.data || error.message);
    throw error;
  }
}

// 5. Update or create user flashcard interaction (confidence level and timestamp)
export async function updateUserFlashcard(username, cardId, confidence) {
  try {
    const response = await apiClient.put(`/users/${username}/cards/${cardId}`, {
      confidence,
    });
    console.log('User flashcard updated:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating user flashcard:', error.response?.data || error.message);
    throw error;
  }
}
