const searchBook = () => {
    const searchField = document.getElementById('input-search');
    const searchText = searchField.value; 
    const errorDiv = document.getElementById('error'); 
    searchField.value = '';
     
    // error handling
    if(searchText === ''){
        errorDiv.innerText="Search field cannot be empty"; 
        return;
    }else{
        errorDiv.innerHTML ='';
    }
    const url = `https://openlibrary.org/search.json?q=${searchText}`
     
    fetch(url)
     .then(res => res.json())
     .then(data => displaySearchResult(data))
     
   
}

// display search result
const displaySearchResult = books => {
    console.log(books);
    const searchResult = document.getElementById('search-result'); 
    const searchTotalResult = document.getElementById('total-result'); 
    const div = document.createElement('div') 
    div.innerHTML = `
        <h6>display books number ${books.numFound}</h6>
    `;
    searchTotalResult.appendChild(div);
 
    if(books.numFound === 0){
        searchTotalResult.innerText =`No result Found`;
        searchResult.innerHTML ='';
    }
    else{
        searchTotalResult.innerText =`Total Book Search Result: ${books.numFound}`;
        searchResult.innerHTML ='';
    }
     
  
    //forEach loop
    books.docs.forEach(book => {
        
        console.log(book)  
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">  
        <img class="img-fluid" style="height:330px" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">${book.title}</h3>
                <h6 class="fw-bold text-success">Author: ${book.author_name}</h6>
                <p class="fw-bold">Publisher: ${book.publisher}</p>
                <span class="text-primary"  >Frist Published: ${book.first_publish_year}</span> 
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    }); 
}


 

 