document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('.sidebar nav a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
           
            document.querySelectorAll('.section').forEach(section => {
                section.style.display = 'none';  
            });
            targetSection.style.display = 'block'; 
        });
    });

    document.getElementById('home').style.display = 'block';
});
