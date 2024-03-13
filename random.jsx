import axios from 'axios';
import { useState, useEffect } from 'react';

useEffect(() => {
  const loggedInUser = JSON.parse(localStorage.getItem('user:details'));

  const fetchConversations = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5044/api/conversations/${loggedInUser.id}`
      );
      setConversations(response.data);
    } catch (error) {
      console.error('Error fetching conversations:', error);
    }
  };

  fetchConversations();
}, []);

const [user, setUser] = useState(
  JSON.parse(localStorage.getItem('user:detail'))
);
const [conversations, setConversations] = useState([]);
console.log('user:>>', user);
console.log('conversations:>>', conversations);

const fetchMessages = async (conversationId) => {
  try {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:5044/api/messages/',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        conversationId,
        senderId: user?.id,
        message: 'Hello',
        receiverId: '',
      },
    });
    console.log('resData:>>', response.data);
  } catch (error) {
    console.error('Error fetching messages:', error);
  }
};
