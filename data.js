let show =``
fetch("https://phallaboth.github.io/API-Airplane/data.json")
.then(response => response.json())
.then(item => {
    item.forEach(i => {
        show += `                   
                    <div class="card py-5" style="width: 18rem; height:90vh">
                        <img src="${i.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${i.name}</h5>
                            <p class="card-text">${i.description}</p>
                            <p class="card-text">${i.price}</p>
                            <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                    </div>           
        `
        
        document.getElementById("output").innerHTML = show;
    })
})

.catch(err => console.log(`Error API ${err}`));