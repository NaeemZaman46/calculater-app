let result = document.getElementById("display");

    let appendToDisplay=(number)=>{
    result.value+=number;
    } 

    let calculater2=()=> {
      try {
        result.value = eval(result.value);
      } 
      catch (error) {
        alert('Enter a valid input')
      }
    }

    function clearDisplay() {
      document.getElementById('inputText').value = '';
    }