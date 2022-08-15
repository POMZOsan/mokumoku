document.addEventListener('DOMContentLoaded', () => {
  const url = document.getElementById('url');
  const online = document.getElementById('online');
  const prefecture = document.getElementById('prefecture');

  online.addEventListener('click', (e)=>{
      if(e.target.checked){
          url.style.display = 'block';
          prefecture.options[47].selected = true;
      } else {
          url.style.display = 'none';
      }
  }, false);
  if(online.checked){
    url.style.display = 'block';
  };
})
