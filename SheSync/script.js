function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.remove('active'));




    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }




    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        const dot = item.querySelector('.active-dot');
        if (dot) dot.remove();
    });




    const activeNavItem = document.querySelector(`[onclick="showScreen('${screenId}')"]`);
    if (activeNavItem && activeNavItem.classList.contains('nav-item')) {
        activeNavItem.classList.add('active');
        const dot = document.createElement('span');
        dot.className = 'active-dot';
        activeNavItem.appendChild(dot);
    }
}




const checkInButtons = document.querySelectorAll('.check-btn');




checkInButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('done');
    button.textContent = 'Check-in realizado';




    alert('Check-in realizado com sucesso!');




    function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.remove('active'));




    document.getElementById(screenId).classList.add('active');




   
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
       
        if(item.getAttribute('onclick').includes(screenId)) {
            item.classList.add('active');
        }
    });
    const items = document.querySelectorAll('.setting-item');




items.forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('h2').innerText;
       
        this.style.opacity = '0.7';
        setTimeout(() => {
            this.style.opacity = '1';
        }, 100);
       
        console.log(`Abrindo configurações de: ${title}`);
    });
});




const navLinks = document.querySelectorAll('.nav-link');




navLinks.forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-link.active').classList.remove('active');
        this.classList.add('active');
    });
});




}
  });
});
function addSchedule() {
    // 1. Pegar os valores dos campos
    const day = document.getElementById('newDay').value;
    const time = document.getElementById('newTime').value;
    const location = document.getElementById('newLocation').value;


    // 2. Validação simples
    if (time === "" || location === "") {
        alert("Por favor, preencha a hora e o local.");
        return;
    }


    // 3. Referenciar o corpo da tabela
    const tableBody = document.querySelector('#scheduleTable tbody');


    // 4. Criar uma nova linha (tr)
    const newRow = document.createElement('tr');


    // 5. Inserir as células (td) na linha
    newRow.innerHTML = `
        <td>${day}</td>
        <td>${time}</td>
        <td><button class="check-btn">${location}: Fazer Check-in</button></td>
    `;


    // 6. Adicionar a nova linha à tabela
    tableBody.appendChild(newRow);


    // 7. Limpar os campos após adicionar
    document.getElementById('newTime').value = "";
    document.getElementById('newLocation').value = "";
}
