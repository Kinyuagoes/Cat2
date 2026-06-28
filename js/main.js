document.addEventListener("DOMContentLoaded", function () {

    /* ── TAB SWITCHING ── */
    const tabLinks = document.querySelectorAll(".cyber-tab-link");
    tabLinks.forEach(tab => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();
            tabLinks.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
        });
    });

    /* ── CONTACT FORM VALIDATION ── */
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let isValid = true;
            const name    = document.getElementById("clientName");
            const email   = document.getElementById("clientEmail");
            const message = document.getElementById("clientMessage");

            [name, email, message].forEach(el => el.classList.remove("is-invalid","is-valid"));

            if (name.value.trim().length < 3)
                { name.classList.add("is-invalid"); isValid = false; }
            else name.classList.add("is-valid");

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()))
                { email.classList.add("is-invalid"); isValid = false; }
            else email.classList.add("is-valid");

            if (message.value.trim().length < 10)
                { message.classList.add("is-invalid"); isValid = false; }
            else message.classList.add("is-valid");

            if (isValid) {
                alert("Secure encrypted routing established. Your message has been transmitted.");
                contactForm.reset();
                [name, email, message].forEach(el => el.classList.remove("is-valid"));
            }
        });
    }

    /* ── LEDGER FORECASTER ── */
    const calcBtn = document.getElementById("calcBtn");
    if (calcBtn) {
        calcBtn.addEventListener("click", function () {
            const income   = parseFloat(document.getElementById("calcIncome").value);
            const expenses = parseFloat(document.getElementById("calcExpenses").value);
            const goal     = parseFloat(document.getElementById("calcGoal").value);
            const feedback = document.getElementById("calcFeedback");

            if (isNaN(income) || isNaN(expenses) || isNaN(goal)) {
                feedback.className = "alert mt-3 border";
                feedback.style.cssText = "background:rgba(220,53,69,0.15);border-color:rgba(220,53,69,0.4)!important;color:#ff6b6b;border-radius:14px;";
                feedback.innerText = "Error: All input fields must contain valid numbers.";
                feedback.classList.remove("d-none");
                return;
            }
            const remainder = income - expenses;
            if (remainder <= 0) {
                feedback.className = "alert mt-3 border";
                feedback.style.cssText = "background:rgba(255,193,7,0.12);border-color:rgba(255,193,7,0.4)!important;color:#ffc107;border-radius:14px;";
                feedback.innerText = "Warning: Expenses meet or exceed income. Review your allocations.";
            } else {
                const months = Math.ceil(goal / remainder);
                feedback.className = "alert mt-3 border-0 text-white";
                feedback.style.cssText = "background:linear-gradient(90deg,#8338ec,#3a86ff);border-radius:14px;";
                feedback.innerText = `Projection: +$${remainder.toLocaleString()}/mo surplus. Goal reached in ${months} month${months!==1?'s':''}.`;
            }
            feedback.classList.remove("d-none");
        });
    }

    /* ── FLOATING BADGE STAGGER ── */
    document.querySelectorAll('.float-badge').forEach((el, i) => {
        el.style.animationDuration = (3 + i * 0.7) + 's';
        el.style.animationDelay   = (i * 0.4) + 's';
    });
    document.querySelectorAll('.float-chip').forEach((el, i) => {
        el.style.animationDuration = (4 + i * 0.9) + 's';
        el.style.animationDelay   = (i * 0.6) + 's';
    });
    document.querySelectorAll('.float-orb').forEach((el, i) => {
        el.style.animationDuration = (12 + i * 4) + 's';
        el.style.animationDelay   = (i * 1.5) + 's';
    });
});