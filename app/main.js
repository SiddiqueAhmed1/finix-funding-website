const form = document.querySelector('.form-control');
const msg = document.querySelector('.msg');
const loader = document.querySelector('img');


form.onsubmit = (e) => {
   e.preventDefault();

   const form_data = new FormData(e.target);
   const data = Object.fromEntries(form_data);

   loader.style.display = 'block';

   setTimeout(() => {
      loader.style.display = 'none';
      if(!data.subject || !data.mark){
         msg.innerHTML = creatalert('All fileds are required', 'danger', 'danger');
      }else{
         const {gpa, grade} = getResult(data.mark);
   
         msg.innerHTML = creatalert(
            `Subject : ${data.subject} / GPA : ${gpa} / GRADE : ${grade}`, 'info', 'success'
         );
   
      }
      e.target.reset();
   }, 3000)

   
   
}