document.addEventListener('DOMContentLoaded', () => {
  const url = document.getElementById('url');
  const online = document.getElementById('online');
  const prefecture = document.getElementById('prefecture');

  online.addEventListener('click', (e)=>{
      if(e.target.checked){
          url.style.display = 'block';
          prefecture.style.display = 'none';
      } else {
          url.style.display = 'none';
          prefecture.style.display = 'block';
      }
  }, false);
})
