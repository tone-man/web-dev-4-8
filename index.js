    // Making this a function means that I can use a button to prompt.
    function getUserNumber() {
        // Prompt the user for a number
        const num = prompt("Please enter an integer:");

        if (num == null || num == undefined) return;

        let sum = 0;
        let factorial = 1;
        let isPrime = true;

        for (let i = 1; i <= num; i++) {
            sum += i;
            factorial *= i;

            if (num % i === 0 && num / i != 1 && num / i != num) 
                isPrime = false;
        }

        // Format a string with results
        let numberInfo =
            "Number: " + num + "<br>Sum: " + sum + "<br>Factorial " + factorial +
            "<br>Is Prime: " + isPrime;

        // Display the number's information inside a div tag with id "number-info"
        document.getElementById("number-info").innerHTML = numberInfo
    }