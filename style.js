let search = document.querySelector('.searchbar');

document.querySelector('#search').onclick =()=>{
    search.classList.toggle('active');
    favorite.classList.remove('active');
    checkout.classList.remove('active');
    login.classList.remove('active');
}


let favorite = document.querySelector('.favorite');

document.querySelector('#favorite').onclick =()=>{
    favorite.classList.toggle('active');
    search.classList.remove('active');
    checkout.classList.remove('active');
    login.classList.remove('active');
}



let checkout = document.querySelector('.checkout');

document.querySelector('#checkout').onclick =()=>{
    checkout.classList.toggle('active');
    search.classList.remove('active');
    favorite.classList.remove('active');
    login.classList.remove('active');
    
}


let login = document.querySelector('.login');

document.querySelector('#login').onclick =()=>{
    login.classList.toggle('active');
    search.classList.remove('active');
    favorite.classList.remove('active');
    checkout.classList.remove('active');
    
}







const container10 = document.getElementById('container10');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login10');

registerBtn.addEventListener('click', () => {
    container10.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container10.classList.remove("active");
});





window.onscroll =()=>{
    search.classList.remove('active');
    favorite.classList.remove('active');
    checkout.classList.remove('active');
    login.classList.remove('active');
    
}



