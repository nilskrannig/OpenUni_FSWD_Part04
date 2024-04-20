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

module.exports = {
    dummy,
    totalLikes
}