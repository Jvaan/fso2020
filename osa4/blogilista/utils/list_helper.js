const _ = require('lodash')

// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => {
  return 1
}

const authorWithMostBlogs = blogs => {
  const reducer = (previousMax, currentAuthor) => {
    const newBlogObject = {
      author: _.head(currentAuthor).author,
      blogs: currentAuthor.length
    }
    return (previousMax.blogs > newBlogObject.blogs) ? previousMax : newBlogObject
  }

  if (blogs.length === 0) {
    return {}
  } else {
    const groupByAuthor = _.groupBy(blogs, 'author') // get collection which is grouped by author
    const authorBlogs = _.reduce(groupByAuthor, reducer, 0) // get one author with most blogs
    return authorBlogs
  }
}

const mostLikes = blogs => {
  const reducer = (previousMax, currentAuthor) => {
    const newBlogObject = {
      author: _.head(currentAuthor).author,
      likes: _.sumBy(currentAuthor, (author) => { return author.likes })
    }
    return (previousMax.likes > newBlogObject.likes) ? previousMax : newBlogObject
  }

  if (blogs.length === 0) {
    return {}
  } else {
    const groupByAuthor = _.groupBy(blogs, 'author') // get collection which is grouped by author
    const authorBlogs = _.reduce(groupByAuthor, reducer, 0) // get one author with most likes
    return authorBlogs
  }
}

const blogWithMostLikes = blogs => {
  const reducer = (previousMax, currentBlog) => {
    return (previousMax.likes > currentBlog.likes) ? previousMax : currentBlog
  }
  if (blogs.length === 0) {
    return {}
  } else {
    const blog = blogs.reduce(reducer, 0)

    const newBlogObject = {
      title: blog.title,
      author: blog.author,
      likes: blog.likes
    }
    return newBlogObject
  }
}

const totalLikes = blogs => {
  const reducer = (accumulator, currentBlog) => {
    return accumulator + currentBlog.likes
  }
  return blogs.length === 0
    ? 0
    : blogs.reduce(reducer, 0)
}

module.exports = {
  dummy, totalLikes, blogWithMostLikes, authorWithMostBlogs, mostLikes
}