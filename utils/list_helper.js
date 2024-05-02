const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const initialValue = 0
    const sum = blogs.reduce(
        (acc, value) => acc + value.likes,
        initialValue
    )

    return sum
}

const favoriteBlog = (blogs) => {
    const favorite = blogs.reduce(
        (prev, current) => (prev && prev.likes > current.likes) ? prev : current
        , null)

    if(!favorite) return null

    const formattedFavorite = Object.keys(favorite).reduce((acc, key) => {
        if (key !== '_id' && key !== '__v' && key !== 'url') {
            acc[key] = favorite[key]
        }

        return acc
    }, {})

    return formattedFavorite
}

const mostBlogs = (blogs) => {
    if(blogs.length === 0) return null

    const authorCounts = {}
    let maxBlogs = 0
    let maxAuthor = ""

    blogs.forEach(blog => {
        authorCounts[blog.author] = (authorCounts[blog.author] || 0) + 1
        if(authorCounts[blog.author] > maxBlogs) {
            maxBlogs = authorCounts[blog.author]
            maxAuthor = blog.author
        }
    })

    return {
        author: maxAuthor,
        blogs: maxBlogs
    }
}

const mostLikes = (blogs) => { 
    if(blogs.length === 0) return null

    const authorLikes = {}
    let maxLikes = 0
    let maxAuthor = ""

    blogs.forEach(blog => {
        authorLikes[blog.author] = (authorLikes[blog.author] || 0) + blog.likes
        if(authorLikes[blog.author] > maxLikes) {
            maxLikes = authorLikes[blog.author]
            maxAuthor = blog.author
        }
    })

    return {
        author: maxAuthor,
        likes: maxLikes
    }    
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}