let student = {};

    function processInfo() {
      const name = document.getElementById('name').value;
      const birthYear = Number(document.getElementById('birthYear').value);
      const city = document.getElementById('city').value;
      const currentYear = new Date().getFullYear();
      const errorDiv = document.getElementById('infoError');
      const outputDiv = document.getElementById('infoOutput');
   
      if (!name || !birthYear || !city || birthYear > currentYear ) {
        errorDiv.innerText = "Please fill all details correctly.";
        return;
      }

      const age = currentYear - birthYear;
      const eligible = age >= 18 ? "Yes " : "No ";

      student = { name, birthYear, city, age, eligible };

      outputDiv.innerText = `Hello ${name} from ${city}. You are ${age} years old. ${eligible}`;
    }

    function showGreeting() {
      const hour = new Date().getHours();
      let greeting;
      if (hour < 12) greeting = "Good Morning ";
      else if (hour < 15) greeting = "Good Afternoon ";
      else greeting = "Good Evening ";

      document.getElementById('greeting').innerText = `${greeting}, ${student.name || "Student"}!`;
    }

    function doMath() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const op = document.getElementById('operation').value;
      const errorDiv = document.getElementById('mathError');
      const resultDiv = document.getElementById('mathOutput');
      errorDiv.innerText = '';
      resultDiv.innerText = '';

      if (isNaN(num1) || isNaN(num2)) {
        errorDiv.innerText = "Please enter valid numbers.";
        return;
      }

      let result;
      switch (op)   {
        case 'add': result = num1 + num2; break;
        case 'subtract': result = num1 - num2; break;
        case 'multiply': result = num1 * num2; break;
        case 'divide':
          if (num2 === 0) {
            errorDiv.innerText = "infinity";
            return;
          }
          result = num1 / num2;
          break;
        default:
          errorDiv.innerText = "Unknown operation.";
          return;
      }

      resultDiv.innerText = `Result: ${result}`;
    }

    function showQuote() {
      const quotes = [
        "Believe in yourself and all that you are.",
        "Every accomplishment starts with the decision to try.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "You are capable of amazing things.",
        "Push yourself, because no one else is going to do it for you."
      ];
      const randomIndex = Math.floor(Math.random()*quotes.length);
      document.getElementById('quoteOutput').innerText = quotes[randomIndex];
    }

    function showJSON(){
      if (!student.name) {
        document.getElementById('jsonOutput').innerText = "Please enter personal info first.";
        return;
      }
      document.getElementById('jsonOutput').innerText = JSON.stringify(student, null, 2);
    }
    
    