/* 
    Project: Freelance Data Anonymization & Privacy Consultant
    Script: Dashboard Logic
*/

document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('.dashboard-section');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-section');

            // Update Active Link
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Switch Sections
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });

            // Mobile: Close sidebar after click
            if (window.innerWidth < 992) {
                document.querySelector('.sidebar').classList.remove('show');
            }
        });
    });

    // Sidebar Toggle for Mobile
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarClose = document.getElementById('sidebar-close');
    const sidebar = document.querySelector('.sidebar');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.add('show');
        });
    }

    if (sidebarClose) {
        sidebarClose.addEventListener('click', () => {
            sidebar.classList.remove('show');
        });
    }

    // Chart Placeholders (could use Chart.js if needed, but using CSS for now as per tech stack)
    // Dynamic progress bars for upload
    const uploadBtn = document.querySelector('.btn-upload');
    if (uploadBtn) {
        uploadBtn.addEventListener('click', () => {
            const progressBar = document.querySelector('.upload-progress-bar');
            let width = 0;
            const interval = setInterval(() => {
                if (width >= 100) {
                    clearInterval(interval);
                    alert('Dataset Uploaded & Validated!');
                } else {
                    width += 5;
                    progressBar.style.width = width + '%';
                }
            }, 100);
        });
    }
});
