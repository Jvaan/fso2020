// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => {
  return 1
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
  dummy, totalLikes
}