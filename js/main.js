document.addEventListener("DOMContentLoaded", function () {
    
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            const icon = themeToggleBtn.querySelector("i");
            if (document.body.classList.contains("dark-mode")) {
                icon.className = "bi bi-sun";
            } else {
                icon.className = "bi bi-moon-stars";
            }
        });
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            let passed = true;
            const name = document.getElementById("clientName");
            const email = document.getElementById("clientEmail");
            const message = document.getElementById("clientMessage");

            if (name.value.trim().length < 3) { name.classList.add("is-invalid"); passed = false; }
            else { name.classList.remove("is-invalid"); name.classList.add("is-valid"); }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { email.classList.add("is-invalid"); passed = false; }
            else { email.classList.remove("is-invalid"); email.classList.add("is-valid"); }

            if (message.value.trim().length < 10) { message.classList.add("is-invalid"); passed = false; }
            else { message.classList.remove("is-invalid"); message.classList.add("is-valid"); }

            e.preventDefault();
            if (passed) {
                alert("Your consultation request has been logged securely. A private advisor will contact you shortly.");
                contactForm.reset();
            }
        });
    }

    // FEATURE 3: DYNAMIC BUDGET FORECASTER
    const calcBtn = document.getElementById("calcBtn");
    if (calcBtn) {
        calcBtn.addEventListener("click", function () {
            const inc = parseFloat(document.getElementById("calcIncome").value);
            const exp = parseFloat(document.getElementById("calcExpenses").value);
            const goal = parseFloat(document.getElementById("calcGoal").value);
            const output = document.getElementById("calcFeedback");

            if (isNaN(inc) || isNaN(exp) || isNaN(goal)) {
                output.className = "alert alert-danger mt-3";
                output.innerText = "Please complete all luxury ledger variables accurately.";
                output.classList.remove("d-none");
                return;
            }

            const profit = inc - exp;
            if (profit <= 0) {
                output.className = "alert alert-warning mt-3";
                output.innerText = "Your current operational spend matches or outpaces your inflow profile.";
            } else {
                output.className = "alert alert-success mt-3" style="background-color: var(--olive-dark); color: white; border:none;";
                output.innerText = `Net Allocation Strategy: $${profit.toLocaleString()}/mo. Targeted premium asset goal met in ${Math.ceil(goal / profit)} months.`;
            }
            output.classList.remove("d-none");
        });
    }
});