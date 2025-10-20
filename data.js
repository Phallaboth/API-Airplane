let show =``
fetch("https://phallaboth.github.io/API-Airplane/data.json")
.then(response => response.json())
.then(item => {
    item.forEach(i => {
        show += `
        
            <div class="col-lg-3 d-flex justify-content-center">
                <div class="card" style="width: 18rem; height:500px">
                    <img src="${i.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${i.name}</h5>
                        <p class="card-text">${i.description}</p>
                        <p class="card-text">${i.price}</p>
                        <a href="#" class="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            </div>
        `
        
        document.getElementById("output").innerHTML = show
    })
})

.catch(err => console.log(`Error API ${err}`));