const modalBtn = document.querySelectorAll('[data-modal-btn]');
modalBtn.forEach(function (item) {
   item.addEventListener('click', function () {
           const modalWindow = document.querySelector('#' + this.dataset.modalBtn)
           modalWindow.classList.toggle('mobile-active');
           item.classList.toggle('active');

           // clicked fade
           modalWindow.addEventListener('click', function () {
               this.classList.remove('mobile-active')
               modalBtn.forEach((item) => {
                   item.classList.remove('active');
               })
           })

           modalWindow.querySelector('.new-active').addEventListener('click', function (e) {
               e.stopPropagation();
           })
           
   })
})

let get = document.querySelectorAll('.plus');
get.forEach(function (appear){  
    appear.addEventListener('click', function(e){
    const styles = e.currentTarget.classList;
    if(styles.contains('one')){
    document.querySelector('.sec6__none').classList.toggle('active');
        }
    if(styles.contains('two')){
        document.querySelector('.sec6__none2').classList.toggle('active');
    }
    if(styles.contains('three')){
        document.querySelector('.sec6__none3').classList.toggle('active');
    }
  
    
    })
});



