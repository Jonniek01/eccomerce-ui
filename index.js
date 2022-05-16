const menu = document.getElementById('menu');
const sidebar=document.getElementById('sidebar')
const close=document.getElementById('close')

menu.onclick=()=>{
    sidebar.classList.remove('sidebarnone')
    sidebar.classList.add('sidebar')
    
}
close.onclick=()=>{
    sidebar.classList.remove('sidebar')
    sidebar.classList.add('sidebarnone')
    
}