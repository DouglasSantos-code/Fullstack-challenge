module.exports = {
    posts: [{
            id: "fsfsuhifs",
            number: "1",
            firstName: "Carlos",
            lastName: "Moura",
            participation: "5"
        },
        {
            id: "sfiusfssf",
            number: "2",
            firstName: "Fernanda",
            lastName: "Oliveira",
            participation: "15"
        },
        {
            id: "ssjoifosif",
            number: "3",
            firstName: "Hugo",
            lastName: "Silva",
            participation: "20"
        },
        {
            id: "whrbwbiw",
            number: "4",
            firstName: "Eliza",
            lastName: "Souza",
            participation: "20"
        },
        {
            id: "nawndfaoi",
            number: "5",
            firstName: "Anderson",
            lastName: "Santos",
            participation: "40"
        },
    ],
    getAll() {
        return this.posts
    },
    newPost(firstName, lastName, participation) {
        this.posts.push({
            id: generateID(),
            number: numero(),
            firstName,
            lastName,
            participation
        })
    }
}

function generateID() {
    return Math.random().toString(36).substr(2, 9)
}
let number = 6

function numero() {
    return number++
}