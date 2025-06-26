document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('nameInput').value;
  alert(`Thanks, ${name}! I’ll reach out soon.`);
  e.target.reset();
});

