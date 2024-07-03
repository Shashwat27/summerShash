import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card, ListGroup, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { username } = useParams(); // Get the username from route parameters
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [editPost, setEditPost] = useState(null);
  const [editContent, setEditContent] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch existing posts from the server
    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://localhost:8000/post/posts/${username}`);
        const data = await response.json();
        if (response.ok) {
          setPosts(data);
        } else {
          console.error('Error fetching posts:', data);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [username]);

  const handleCreatePost = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/post/createPost/${username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: newPost }),
      });

      const data = await response.json();

      if (response.ok) {
        setPosts([...posts, data]);
        setNewPost('');
      } else {
        console.error('Error creating post:', data);
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleEditPost = async () => {
    try {
      const response = await fetch(`http://localhost:8000/post/update/${editPost._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: editContent }),
      });

      const data = await response.json();

      if (response.ok) {
        setPosts(posts.map(post => (post._id === editPost._id ? { ...post, description: data.description } : post)));
        setEditPost(null);
        setEditContent('');
        setShowModal(false);
      } else {
        console.error('Error editing post:', data);
      }
    } catch (error) {
      console.error('Error editing post:', error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(`http://localhost:8000/post/delete/${postId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setPosts(posts.filter(post => post._id !== postId));
      } else {
        const data = await response.json();
        console.error('Error deleting post:', data);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleShowModal = (post) => {
    setEditPost(post);
    setEditContent(post.description);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditPost(null);
    setEditContent('');
  };

  return (
    <Container>
      <br />
      <h2>Welcome, {username}!</h2>
      <hr />
      <Form onSubmit={handleCreatePost}>
        <Form.Group controlId="formNewPost">
          <Form.Label>Create a New Post</Form.Label>
          <Form.Control
            type="text"
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Post
        </Button>
      </Form>
      <hr />
      <h3>Your Posts</h3>
      <ListGroup>
        {posts.map((post) => (
          <ListGroup.Item key={post._id}>
            <Card>
              <Card.Body>
                <Card.Text>{post.description}</Card.Text>
                <Button variant="secondary" onClick={() => handleShowModal(post)}>
                  Edit
                </Button>
                {' '}
                <Button variant="danger" onClick={() => handleDeletePost(post._id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditPost}>
            <Form.Group controlId="formEditPost">
              <Form.Label>Post Content</Form.Label>
              <Form.Control
                type="text"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Profile;
