# Mock_API_Of_Social_Networking

API Project: Social Media Platform API

This is a mock API project for a social media platform that allows users to manage user accounts, create and manage posts, add and manage comments, like/unlike posts and comments, and connect with friends.

Endpoints:
User Management:

GET /api/users: Retrieve all users.
GET /api/users/{user_id}: Retrieve a specific user by ID.
POST /api/users: Create a new user.
PUT /api/users/{user_id}: Update a user by ID.
DELETE /api/users/{user_id}: Delete a user by ID.
Post Management:

GET /api/posts: Retrieve all posts.
GET /api/posts/{post_id}: Retrieve a specific post by ID.
POST /api/posts: Create a new post.
PUT /api/posts/{post_id}: Update a post by ID.
DELETE /api/posts/{post_id}: Delete a post by ID.
Comment Management:

GET /api/posts/{post_id}/comments: Retrieve all comments for a post.
GET /api/posts/{post_id}/comments/{comment_id}: Retrieve a specific comment for a post.
POST /api/posts/{post_id}/comments: Create a new comment for a post.
PUT /api/posts/{post_id}/comments/{comment_id}: Update a comment for a post.
DELETE /api/posts/{post_id}/comments/{comment_id}: Delete a comment for a post.
Like/Unlike Management:

POST /api/posts/{post_id}/like: Like a post.
POST /api/posts/{post_id}/unlike: Unlike a post.
POST /api/posts/{post_id}/comments/{comment_id}/like: Like a comment.
POST /api/posts/{post_id}/comments/{comment_id}/unlike: Unlike a comment.
Friendship/Connection Management:

GET /api/users/{user_id}/friends: Retrieve friends of a user.
POST /api/users/{user_id}/friends/{friend_id}: Add a friend for a user.
DELETE /api/users/{user_id}/friends/{friend_id}: Remove a friend for a user.
Setup:
Install Node.js and MongoDB on your machine.

Clone this repository and navigate to the project folder.

Install dependencies using npm install.

Start the server using npm start.

API Documentation:
For detailed API documentation and usage examples, please refer to the API documentation provided in the docs folder.

Notes:
This is a mock API project for educational purposes and does not have real user authentication or production-level security features. It is meant for practice and learning the basics of building APIs using Express and MongoDB.

Feel free to use Postman or any API testing tool to interact with the API endpoints and explore the functionalities provided.

Enjoy building and exploring the Social Media Platform API!
