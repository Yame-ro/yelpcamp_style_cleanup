const express = require('express')
const router = express.Router({mergeParams:true})
const catchAsync = require('../utils/catchAsync');
const {reviewSchema} = require('../schemas');
const Campground = require('../models/campground');
const Review = require('../models/review');
const {validateReviews,isLoggedIn,isReviewAuthor} = require('../middleware')
const reviews = require('../controllers/reviews')




router.post('/',isLoggedIn,validateReviews,catchAsync(reviews.createReview))

router.delete('/:reviewId',isLoggedIn,isReviewAuthor,catchAsync(reviews.deleteReview))

module.exports = router