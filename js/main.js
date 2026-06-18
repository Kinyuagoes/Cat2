document.addEventListener("DOMContentLoaded", function () {

    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector("i") : null;

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        if (themeIcon) {
            themeIcon.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                themeIcon.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
            } else {
                localStorage.setItem("theme", "light");
                themeIcon.classList.replace("bi-sun-fill", "bi-moon-stars-fill");
            }
        });
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            let isValid = true;

            const nameInput = document.getElementById("clientName");
            const emailInput = document.getElementById("clientEmail");
            const messageInput = document.getElementById("clientMessage");

            if (nameInput.value.trim().length < 3) {
                nameInput.classList.add("is-invalid");
                isValid = false;
            } else {
                nameInput.classList.remove("is-invalid");
                nameInput.classList.add("is-valid");
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                emailInput.classList.add("is-invalid");
                isValid = false;
            } else {
                emailInput.classList.remove("is-invalid");
                emailInput.classList.add("is-valid");
            }

            if (messageInput.value.trim().length < 10) {
                messageInput.classList.add("is-invalid");
                isValid = false;
            } else {
                messageInput.classList.remove("is-invalid");
                messageInput.classList.add("is-valid");
            }

            if (!isValid) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault(); // Stop actual submit for demo purposes
                alert("Thank you for your inquiry, Karl! The CoinKeeper team will reach out within 24 business hours.");
                contactForm.reset();
                nameInput.classList.remove("is-valid");
                emailInput.classList.remove("is-valid");
                messageInput.classList.remove("is-valid");
            }
        });
    }

    const calcBtn = document.getElementById("calcBtn");
    if (calcBtn) {
        calcBtn.addEventListener("click", function () {
            const monthlyIncome = parseFloat(document.getElementById("calcIncome").value);
            const monthlyExpenses = parseFloat(document.getElementById("calcExpenses").value);
            const savingsGoal = parseFloat(document.getElementById("calcGoal").value);

            const feedbackEl = document.getElementById("calcFeedback");

            if (isNaN(monthlyIncome) || isNaN(monthlyExpenses) || isNaN(savingsGoal) || monthlyIncome <= 0) {
                feedbackEl.className = "alert alert-danger mt-3";
                feedbackEl.innerText = "Please input valid positive numerical metrics inside all fields.";
                feedbackEl.classList.remove("d-none");
                return;
            }

            const netSavings = monthlyIncome - monthlyExpenses;

            if (netSavings <= 0) {
                feedbackEl.className = "alert alert-warning mt-3";
                feedbackEl.innerText = "Your current operational expenses match or exceed income. Allocate funds to savings vectors immediately.";
            } else {
                const monthsToGoal = Math.ceil(savingsGoal / netSavings);
                feedbackEl.className = "alert alert-success mt-3";
                feedbackEl.innerText = `Net Surplus: $${netSavings.toLocaleString()}/month. You will reach your target $${savingsGoal.toLocaleString()} configuration milestone in approximately ${monthsToGoal} months!`;
            }
            feedbackEl.classList.remove("d-none");
        });
    }
});