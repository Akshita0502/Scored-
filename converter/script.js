document.getElementById('convertBtn').addEventListener('click', function() {
    const inputValue = document.getElementById('inputValue').value;
    const conversionType = document.getElementById('conversionType').value;
    const value = parseFloat(inputValue);

    if (isNaN(value) || value < 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    let result;
    let message = '';

    if (conversionType === 'toCGPA') {
      
        result = (value / 9.5).toFixed(2);
        if (result > 9) {
            message = "🎉 That's a great score!";
        }
        document.getElementById('result').textContent = `Your CGPA is: ${result}`;
    } else {
        
        result = (value * 9.5).toFixed(2);
        if (value > 9) {
            message = "🎉 That's a great score!";
        }
        document.getElementById('result').textContent = `Your Percentage is: ${result}`;
    }

   
    document.getElementById('result').style.display = 'block';
    
    if (message) {
        const flashMessage = document.createElement('h3');
        flashMessage.textContent = message;
        flashMessage.style.color = 'green';
        flashMessage.style.textAlign = 'center';
        flashMessage.style.marginTop = '10px';
        document.querySelector('.container').appendChild(flashMessage);
        
        setTimeout(() => {
            flashMessage.style.display = 'none';
        }, 3000); 
    }
});

