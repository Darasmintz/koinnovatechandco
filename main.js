document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            
            // Display success toast
            showToast("Message Sent Successfully");

            // Simulate form submission
            setTimeout(() => {hyu
                form.submit();
            }, 2000); // Simulate a delay for demonstration
        });
    });

    // Add event listener for page load to show loader
    window.addEventListener('beforeunload', () => {
        document.body.classList.add('loading');
    });
});

// Function to show toast message
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 500); // Match with the fade-out transition duration
    }, 3000); // Display for 3 seconds
}
