import React, { useState } from "react";
import "./Forum.css";
import { useTranslation } from "react-i18next";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [username, setUsername] = useState("");
  const [topic, setTopic] = useState("");
  const [searchTopic, setSearchTopic] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [linkInputVisible, setLinkInputVisible] = useState(false);
  const [imgInputVisible, setImgInputVisible] = useState(false);
  const [linkInput, setLinkInput] = useState("");
  const [imgInput, setImgInput] = useState("");

  const handleInputChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleSearchTopicChange = (e) => {
    setSearchTopic(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleString();
    const post = {
      id: Date.now(),
      topic,
      username,
      content: newPost,
      link: linkInput,
      img: imgInput,
      date,
    };

    if (editMode && editIndex !== null) {
      const updatedPosts = [...posts];
      updatedPosts[editIndex] = post;
      setPosts(updatedPosts);
      setEditMode(false);
      setEditIndex(null);
    } else {
      setPosts([post, ...posts]);
    }

    setNewPost("");
    setUsername("");
    setTopic("");
    setLinkInput("");
    setImgInput("");
    setLinkInputVisible(false);
    setImgInputVisible(false);
  };

  const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  const handleUpvote = (id) => {
    const updatedPosts = [...posts];
    const index = updatedPosts.findIndex((post) => post.id === id);
    if (index !== -1) {
      updatedPosts[index].upvotes += 1;
      setPosts(updatedPosts);
    }
  };

  const handleDownvote = (id) => {
    const updatedPosts = [...posts];
    const index = updatedPosts.findIndex((post) => post.id === id);
    if (index !== -1) {
      updatedPosts[index].downvotes += 1;
      setPosts(updatedPosts);
    }
  };

  const handleSortByUpvotes = () => {
    const sortedPosts = [...posts].sort((a, b) => b.upvotes - a.upvotes);
    setPosts(sortedPosts);
  };

  const handleSortByDate = () => {
    const sortedPosts = [...posts].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setPosts(sortedPosts);
  };

  const filteredPosts = posts.filter((post) =>
    post.topic.toLowerCase().includes(searchTopic.toLowerCase())
  );

  const handleLinkInputToggle = () => {
    setLinkInputVisible(!linkInputVisible);
  };

  const handleImgInputToggle = () => {
    setImgInputVisible(!imgInputVisible);
  };

  const {t} = useTranslation();

  return (
    <div className="app">
      <div className="page-content">
        <div className="posts-container">
          <form onSubmit={handlePostSubmit}>
            <input
              type="text"
              className="input-field"
              placeholder={t("username")}
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <input
              type="text"
              className="input-field"
              placeholder={t("topic")}
              value={topic}
              onChange={handleTopicChange}
              required
            />
            <textarea
              className="input-field textarea"
              placeholder={t("post")}
              value={newPost}
              onChange={handleInputChange}
              required
            ></textarea>
            <div className="input-icons">
              <div
                className={`icon ${linkInputVisible ? "active" : ""}`}
                onClick={handleLinkInputToggle}
              >
                <i className="fas fa-link"></i>
              </div>
              <div
                className={`icon ${imgInputVisible ? "active" : ""}`}
                onClick={handleImgInputToggle}
              >
                <i className="fas fa-image"></i>
              </div>
            </div>
            {linkInputVisible && (
              <input
                type="text"
                className="input-field"
                placeholder={t("link")}
                value={linkInput}
                onChange={(e) => setLinkInput(e.target.value)}
              />
            )}
            {imgInputVisible && (
              <input
                type="text"
                className="input-field"
                placeholder={t("imageurl")}
                value={imgInput}
                onChange={(e) => setImgInput(e.target.value)}
              />
            )}
            <button className="button" type="submit">
              {editMode ? "Update" : "Post"}
            </button>
          </form>
          <div className="search-bar">
            <input
              type="text"
              className="input-field"
              placeholder={t("searchforum")}
              value={searchTopic}
              onChange={handleSearchTopicChange}
            />
            <button className="button" onClick={() => setSearchTopic("")}>
              Clear
            </button>
          </div>
          <div className="post-list">
            {filteredPosts.length > 0 ? (
              <>
                <div className="sort-buttons">
                  <button className="sort-button" onClick={handleSortByUpvotes}>
                    Sort by Upvotes
                  </button>
                  <button className="sort-button" onClick={handleSortByDate}>
                    Sort by Date
                  </button>
                </div>
                {filteredPosts.map((post) => (
                  <div key={post.id} className="post">
                    <div className="post-header">
                      <div className="post-topic">{post.topic}</div>
                      <div className="post-username">By {post.username}</div>
                      <div className="post-date">{post.date}</div>
                    </div>
                    <div className="post-content">{post.content}</div>
                    {post.link && (
                      <div className="post-link">
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {post.link}
                        </a>
                      </div>
                    )}
                    {post.img && (
                      <img src={post.img} alt="Post" className="post-image" />
                    )}
                    <div className=".post-actions">
                      <div className="votes">
                        <button
                          className="vote-button upvote"
                          onClick={() => handleUpvote(post.id)}
                        >
                          <i className="fas fa-arrow-up"></i>
                        </button>
                        <span className="vote-count">{post.upvotes}</span>
                        <button
                          className="vote-button downvote"
                          onClick={() => handleDownvote(post.id)}
                        >
                          <i className="fas fa-arrow-down"></i>
                        </button>
                      </div>
                      <div className="post-actions">
                        <button
                          className="delete-button"
                          onClick={() => handleDelete(post.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="no-posts">No posts found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
