let count = 0;
      let msg = document.getElementById('countsMsg')
      let error = document.getElementById('error')
      let button = document.getElementById('button')

      let dec = document.getElementById('dec')
      let inc = document.getElementById('inc')
      let clear = document.getElementById('clear')


      dec.addEventListener('click', function () {
        count = count - 1;
        if (count >= 0) {
          msg.innerText = count
        }
        else {
          msg.innerHTML = count = 0;
          error.style.display = 'block';
        }
      })

      inc.addEventListener('click', function () {
          count = count + 1;
          if(count == 1) {
            button.style.display = 'inline-block';
            error.style.display = 'none';
          }
          msg.innerText = count;
      })

      clear.addEventListener('click', function () {
        msg.innerHTML = count = 0;
        error.style.display = button.style.display = 'none';
      })





