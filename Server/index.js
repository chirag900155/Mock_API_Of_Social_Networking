const express = require('express');
const app = express();
const dotenv = require('dotenv')
const connect = require('./connect.js')

// All the UserAPI calling is here
const RegisterRoute = require('./Router/Register.js')
const LoginRoute = require('./Router/Login.js')
const GetAllUsers = require('./Router/GetAllUsers.js')
const SpecificUser = require('./Router/GetSpecificUser.js')
const DeleteUser = require('./Router/DeleteUser.js')
const updateUser = require('./Router/UpdateUser.js')
// All the UserAPI calling end here

// <--------------------------------------------------------------------->

// All the Post APIS are here

const createPost = require('./Router/PostRouter/CreatePost.js')
const allPosts = require('./Router/PostRouter/GetAllPosts.js')
const SpecificPost = require('./Router/PostRouter/SpecificPost.js')
const UpdatePost = require('./Router/PostRouter/UpdatePost.js')
const DeletePost = require('./Router/PostRouter/DeletePost.js')

// All the Post APIS are end here

// <--------------------------------------------------------------------->

// All the comment APIS are start here

const createPostComment = require('./Router/CommentRouter/PostComment.js')
const GetAllComments = require('./Router/CommentRouter/RetriveAllPostComment.js')
const GetSpecificComment = require('./Router/CommentRouter/GetSpecificComment.js')
const UpdateComment = require('./Router/CommentRouter/UpdateComment.js')
const DeleteComment = require('./Router/CommentRouter/DeleteComment.js')

// All the comment APIS are end here

// <--------------------------------------------------------------------->

// All the Like APIS are started here

const GivingLike = require('./Router/Like_Unlike_Router/LikeRoute.js')
const GivingUnlike = require('./Router/Like_Unlike_Router/UnlikeRoute.js')

// All the like APIS are ended here

// <-------------------------------------------------------------------->

// All the Friends APIS are start here

const AddFriend = require('./Router/FriendRouter/AddFriend.js')
const GetAllFriends = require('./Router/FriendRouter/GetAllFriends.js')
const UnfriendFriend = require('./Router/FriendRouter/DeleteFriend.js')

// All the Friends APIS are end here

dotenv.config()

const PORT = process.env.PORT;

connect();

app.use(express.json());

// All the UserAPI calling is here

app.use('/api',RegisterRoute)

app.use('/api',LoginRoute)

app.use('/api',GetAllUsers)

app.use('/api',SpecificUser)

app.use('/api',DeleteUser)

app.use('/api', updateUser)

// All the UserAPI calling end here

// <--------------------------------------------------------------------->

// All the Post APIS are here

app.use('/api', createPost)

app.use('/api', allPosts)

app.use('/api', SpecificPost)

app.use('/api', UpdatePost)

app.use('/api', DeletePost)

// All the Post APIS are end here

// <--------------------------------------------------------------------->

// All the Comment APIS are start here 

app.use('/api', createPostComment)

app.use('/api', GetAllComments)

app.use('/api', GetSpecificComment)

app.use('/api', UpdateComment)

app.use('/api', DeleteComment)

// All the Comment APIS are ended here

// <--------------------------------------------------------------------->

// All the like and unlike APIS are started here

app.use('/api', GivingLike)

app.use('/api', GivingUnlike)

// All the like and unlike APIS are ended here

// <------------------------------------------------------------------->

// All the Friend APIS are start here

app.use('/api', AddFriend)

app.use('/api', GetAllFriends)

app.use('/api', UnfriendFriend)

// All the Friend APIS are start here

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})