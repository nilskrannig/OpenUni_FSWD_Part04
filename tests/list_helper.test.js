const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const { log } = require('node:console')

const blogExamples = [
    {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
        __v: 0
    },
    {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
        __v: 0
    },
    {
        _id: "5a422b3a1b54a676234d17f9",
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 12,
        __v: 0
    },
    {
        _id: "5a422b891b54a676234d17fa",
        title: "First class tests",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
        likes: 10,
        __v: 0
    },
    {
        _id: "5a422ba71b54a676234d17fb",
        title: "TDD harms architecture",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
        likes: 0,
        __v: 0
    },
    {
        _id: "5a422bc61b54a676234d17fc",
        title: "Type wars",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
        likes: 2,
        __v: 0
    }
]

test('dummy returns one', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    assert.strictEqual(result, 1)
})

describe('total likes', () => {
    test('of empty list is zero', () => {
        assert.strictEqual(listHelper.totalLikes([]), 0)
    })

    test('when list has only one blog equals the likes of that', () => {
        assert.strictEqual(listHelper.totalLikes(
            [
                {
                    title: "title",
                    author: "author",
                    url: "url",
                    likes: 23
                }
            ]), 23)
    })

    test('of a bigger list is calculated right', () => {
        assert.strictEqual(listHelper.totalLikes(blogExamples), 36)
    })
})

describe('favorite blog', () => {
    test('of empty list is null', () => {
        assert.deepStrictEqual(listHelper.favoriteBlog([]), null)
    })

    test('when list has only one blog equals that one', () => {
        const testBlog = {
            _id: "5a422bc61b54a676234d17fc",
            title: "Type wars",
            author: "Robert C. Martin",
            url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
            likes: 2,
            __v: 0
        }
        assert.deepStrictEqual(
            listHelper.favoriteBlog([testBlog])
            , {
                title: "Type wars",
                author: "Robert C. Martin",
                likes: 2,
            })
    })

    test('of bigger list is the one with the highest likes count', () => {
        assert.deepStrictEqual(
            listHelper.favoriteBlog(blogExamples)
            , {
                title: "Canonical string reduction",
                author: "Edsger W. Dijkstra",
                likes: 12,
            })
    })

    test('of a list is one of multiple with the highest likes count', () => {
        const alsoTwelve = {
            _id: "1234bc61b54a676234d17fc",
            title: "Pig Wars",
            author: "Robert Schwartin",
            url: "www.google.com",
            likes: 12,
            __v: 0
        }
        const testBlogs = [...blogExamples, alsoTwelve]

        assert.deepStrictEqual(
            listHelper.favoriteBlog(testBlogs),
            {
                title: "Pig Wars",
                author: "Robert Schwartin",
                likes: 12,
            }
        )
    })
})

describe('mostBlogs', () => {
    test('of empty list is null', () => {
        assert.deepStrictEqual(listHelper.mostBlogs([]), null)
    })

    test('identifies the author with the most blogs', () => {
        const result = listHelper.mostBlogs(blogExamples)
        assert.deepStrictEqual(result, { author: 'Robert C. Martin', blogs: 3 })
    })

    test('handles a list with one blog', () => {
        const result = listHelper.mostBlogs([blogExamples[0]])
        assert.deepStrictEqual(result, { author: 'Michael Chan', blogs: 1 })
    })
})

describe('mostLikes', () => {
    test('of empty list is null', () => {
        assert.deepStrictEqual(listHelper.mostLikes([]), null)
    })

    test('identifies the author with the most likes', () => {
        const result = listHelper.mostLikes(blogExamples)
        assert.deepStrictEqual(result, { author: 'Edsger W. Dijkstra', likes: 17 })
    })

    test('handles a list with one blog', () => {
        const result = listHelper.mostLikes([blogExamples[0]])
        assert.deepStrictEqual(result, { author: 'Michael Chan', likes: 7 })
    })
})