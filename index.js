function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left, 10);
    if (left > 0) {
      dodger.style.left = `${left - 10}px`; // Move left by 10px
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left, 10);
    if (left < 360) {
      dodger.style.left = `${left + 10}px`; // Move right by 10px
    }
  }
