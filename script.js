const btn = document.getElementById('action-btn');

btn.addEventListener('click', function()
    {
        if (btn.innerText === "CLICK ME!") 
            {
                btn.innerText = "SUCCESS!";
                btn.classList.add('success-state');
            }
        else 
            {
                btn.innerText = "CLICK ME!";
                btn.classList.remove('success-state');
            }
});