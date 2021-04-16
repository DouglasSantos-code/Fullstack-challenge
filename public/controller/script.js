document.addEventListener('DOMContentLoaded', () => {
    updatePosts()
})

function updatePosts() {
    fetch("http://localhost:3000/api/all").then(res => {
        return res.json()
    }).then(json => {
        let postElements = ''
        let posts = json
        let user = []
        let participation = []
        let color = []
        posts.forEach((post) => {
            let postElement = `<tr id=${post.id}>
                                 <th id="numero" class="text-center" scope="row">${post.number}</th>
                                    <td>${post.firstName}</td>
                                    <td>${post.lastName}</td>
                                    <td class="text-center">${post.participation}%</td>
                                </tr>`
            postElements += postElement

            let users = post.firstName
            let participations = post.participation
            user.push(users)
            participation.push(participations)

            // === GERAR CORES PARA O GRÁFICO ===== // 
            function gerar_cor_hexadecimal() {
                return '#' + parseInt((Math.random() * 0xFFFFFF))
                    .toString(16)
                    .padStart(6, '0');
            }
            let colors = gerar_cor_hexadecimal()
            color.push(colors)
        })
        // ============ Graphic ============ //
        document.querySelector('tbody').innerHTML = postElements
        let ctx = document.getElementById("myChart");

        let dados = {
            datasets: [{
                data: participation,
                backgroundColor: color
            }],
            labels: user
        };
        let opcoes = {
            cutoutPercentage: 40,
            legend: {
                position: 'right'
            }
        };
        let meuDonutChart = new Chart(ctx, {
            type: 'doughnut',
            data: dados,
            options: opcoes
        });
    })
}

function newPost() {
    let firstName = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    let participation = document.querySelector('#participation').value

    let post = {
        firstName,
        lastName,
        participation
    }
    const options = {
        method: "POST",
        headers: new Headers({
            'content-type': 'application/json'
        }),
        body: JSON.stringify(post)
    }
    fetch("http://localhost:3000/api/new", options).then(res => {

    })
}