document.addEventListener("DOMContentLoaded", function () {
    
    // FEATURE 1: WALLET INTERACTIVE TAB MANAGEMENT
    const tabLinks = document.querySelectorAll(".cyber-tab-link");
    tabLinks.forEach(tab => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();
            tabLinks.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
            
            // Dynamic swap simulated action
            const viewName = this.innerText.trim();
            console.log(`Switching view segment to: ${viewName}`);
        });
    });

    // FEATURE 2: CYBER CONTACT VALIDATION ROUTINE
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            let isValid = true;
            const name = document.getElementById("clientName");
            const email = document.getElementById("clientEmail");
            const message = document.getElementById("clientMessage");

            if (name.value.trim().length < 3) { name.classList.add("is-invalid"); isValid = false; }
            else { name.classList.remove("is-invalid"); name.classList.add("is-valid"); }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { email.classList.add("is-invalid"); isValid = false; }
            else { email.classList.remove("is-invalid"); email.classList.add("is-valid"); }

            if (message.value.trim().length < 10) { message.classList.add("is-invalid"); isValid = false; }
            else { message.classList.remove("is-invalid"); message.classList.add("is-valid"); }

            e.preventDefault();
            if (isValid) {
                alert("Secure encrypted routing established. Your message has been sent directly to node logs.");
                contactForm.reset();
            }
        });
    }

    // FEATURE 3: DYNAMIC LEDGER FORECASTER
    const calcBtn = document.getElementById("calcBtn");
    if (calcBtn) {
        calcBtn.addEventListener("click", function () {
            const income = parseFloat(document.getElementById("calcIncome").value);
            const expenses = parseFloat(document.getElementById("calcExpenses").value);
            const goal = parseFloat(document.getElementById("calcGoal").value);
            const feedback = document.getElementById("calcFeedback");

            if (isNaN(income) || isNaN(expenses) || isNaN(goal)) {
                feedback.className = "alert alert-danger mt-3 bg-dark text-danger border-danger";
                feedback.innerText = "Error: Input fields contain malformed parameters.";
                feedback.classList.remove("d-none");
                return;
            }

            const remainder = income - expenses;
            if (remainder <= 0) {
                feedback.className = "alert alert-warning mt-3 bg-dark text-warning border-warning";
                feedback.innerText = "Velocity Warning: Outflow equals or outpaces resource ingress metrics.";
            } else {
                feedback.className = "alert alert-success mt-3 text-white border-0";
                feedback.style.background = "linear-gradient(90deg, #8338ec, #3a86ff)";
                const targetMonths = Math.ceil(goal / remainder);
                feedback.innerText = `Projection Complete: Yielding +$${remainder.toLocaleString()}/mo liquidity. Goal complete in ${targetMonths} months.`;
            }
            feedback.classList.remove("d-none");
        });
    }
});