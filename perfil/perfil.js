const profileImage = document.getElementById('profile-image');
const username = document.getElementById('username');
let editForm = document.getElementById('edit-form');
const saveButton = document.getElementById('save-button');
const editButton = document.getElementById('edit-button');
const description = document.getElementById('description');

// Animação quando o mouse passa sobre a foto do perfil
profileImage.addEventListener('mouseover', () => {
    profileImage.style.transform = 'scale(1.1)';
    profileImage.style.transition = 'transform 0.3s';
});

profileImage.addEventListener('mouseout', () => {
    profileImage.style.transform = 'scale(1)';
});

// Animação quando o nome do usuário é clicado
username.addEventListener('click', () => {
    if (username.style.color !== 'red') {
        username.style.color = 'red';
    } else {
        username.style.color = 'black';
    }
});



// Animação quando o mouse passa sobre a foto do perfil
profileImage.addEventListener('mouseover', () => {
    profileImage.style.transform = 'scale(1.1)';
    profileImage.style.transition = 'transform 0.3s';
});

profileImage.addEventListener('mouseout', () => {
    profileImage.style.transform = 'scale(1)';
});

// Animação quando o nome do usuário é clicado
username.addEventListener('click', () => {
    if (username.style.color !== 'red') {
        username.style.color = 'red';
    } else {
        username.style.color = 'black';
    }
});

// Animação suave para o botão "Editar Perfil"
editButton.addEventListener('mouseover', () => {
    editButton.style.backgroundColor = '#183D3D';
    editButton.style.color = '#b7d8cc';
    editButton.style.transition = 'background-color 0.3s, color 0.3s';
});

editButton.addEventListener('mouseout', () => {
    editButton.style.backgroundColor = '#b7d8cc';
    editButton.style.color = '#183D3D';
});

// Animação quando o mouse passa sobre a descrição do usuário
description.addEventListener('mouseover', () => {
    description.style.transform = 'scale(1.05)';
    description.style.transition = 'transform 0.3s';
});

description.addEventListener('mouseout', () => {
    description.style.transform = 'scale(1)';
});



// Mostrar o formulário de edição quando o botão é clicado
editButton.addEventListener('click', () => {
    editForm.style.display = 'block';
});

// Salvar e esconder o formulário de edição quando o botão "Salvar" é clicado
saveButton.addEventListener('click', () => {
    editForm.style.display = 'none';
    // Aqui você pode adicionar lógica para salvar os dados do formulário
});

const plantGardenButton = document.getElementById('plant-Garden-button');
const overlay = document.getElementById('overlay');
const gardenForm = document.querySelector('.garden-form');
const gardenTextArea = document.getElementById('garden-text');
const plantButton = document.getElementById('plant-button');
const closeButton = document.getElementById('close-button');
const gardenItems = document.querySelector('.garden-items');
const fileUpload = document.getElementById('file-upload');

plantGardenButton.addEventListener('click', () => {
    overlay.style.display = 'flex';
    gardenTextArea.focus();
});

closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    gardenTextArea.value = '';
    fileUpload.value = '';
});

plantButton.addEventListener('click', () => {
    const gardenText = gardenTextArea.value;
    if (gardenText.trim() !== '') {
        const newGarden = document.createElement('div');
        newGarden.className = 'garden-item';
        newGarden.innerHTML = `
            <p>${gardenText}</p>
            <p class="timestamp">agora</p>
        `;

          // Verifica se um arquivo foi carregado
          if (fileUpload.files.length > 0) {
            const file = fileUpload.files[0];
            const image = document.createElement('img');
            image.src = URL.createObjectURL(file);
            newGarden.appendChild(image);
        }

        gardenItems.appendChild(newGarden);
        gardenTextArea.value = '';
        fileUpload.value = '';
        overlay.style.display = 'none';
    }
});
