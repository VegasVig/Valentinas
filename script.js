document.addEventListener('DOMContentLoaded', () => {
    console.log('Site Valentina Mimos carregado com sucesso!');
    
    /* ======================================= */
    /* LÓGICA DO CARROSSEL DE KITS MATERNIDADE */
    /* ======================================= */

    // 1. Defina o array de fotos dos kits maternidade
    // **IMPORTANTE: TROQUE ESTES NOMES PELOS NOMES DOS SEUS ARQUIVOS DE IMAGEM (ex: 'kit1.jpg', 'kit2.png', etc.)**
    const maternityPhotos = [
        'kit maternidade1.jpg',
        'kit maternidade2.jpg',
        'kit maternidade3.jpg',
        'kit_maternidade_foto4.jpg'
    ]; 

    let currentPhotoIndex = 0;
    
    // Elementos do Modal
    const modal = document.getElementById('maternityModal');
    const closeButton = modal.querySelector('.close-button');
    const prevButton = modal.querySelector('.prev-button');
    const nextButton = modal.querySelector('.next-button');
    const carouselImage = document.getElementById('carouselImage');
    const imageCounter = document.getElementById('imageCounter');

    // Função para atualizar a imagem e o contador
    const updateCarousel = () => {
        carouselImage.src = maternityPhotos[currentPhotoIndex];
        imageCounter.textContent = `${currentPhotoIndex + 1}/${maternityPhotos.length}`;
    };

    // Função para abrir o modal
    const openMaternityModal = () => {
        if (maternityPhotos.length === 0) {
            alert('Ainda não há fotos de Kits Maternidade para exibir.');
            return;
        }
        currentPhotoIndex = 0; // Começa sempre na primeira foto
        updateCarousel();
        modal.style.display = 'block';
    };

    // Função para fechar o modal
    const closeMaternityModal = () => {
        modal.style.display = 'none';
    };

    // Função para avançar/voltar no carrossel
    const changePhoto = (n) => {
        currentPhotoIndex += n;
        
        // Loop infinito (se chegar ao final, volta para o início, e vice-versa)
        if (currentPhotoIndex >= maternityPhotos.length) {
            currentPhotoIndex = 0;
        }
        if (currentPhotoIndex < 0) {
            currentPhotoIndex = maternityPhotos.length - 1;
        }
        updateCarousel();
    };

    // 2. Conecta o clique no box "Kits Maternidade"
    // Mudamos a função openServiceDetail no serviço de maternidade para abrir o modal
    window.openServiceDetail = (serviceId) => {
        if (serviceId === 'maternidade') {
            openMaternityModal();
        } else {
            // Mantém a funcionalidade de alerta para os outros serviços
            alert(`Você clicou no serviço: ${serviceId}. Aqui você poderia abrir um modal ou navegar para uma página de detalhes.`);
        }
    };

    // 3. Adiciona ouvintes de evento para os botões do modal
    closeButton.onclick = closeMaternityModal;
    prevButton.onclick = () => changePhoto(-1);
    nextButton.onclick = () => changePhoto(1);

    // Fechar ao clicar fora da área da foto
    window.onclick = (event) => {
        if (event.target === modal) {
            closeMaternityModal();
        }
    };
    
    // Fechar ao apertar a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeMaternityModal();
        }
    });

    /* ======================================= */
    /* LÓGICA EXISTENTE (WHATSAPP/INSTAGRAM) */
    /* ======================================= */
    
    const whatsappNumber = '5524999334402';
    const message = 'Olá, gostaria de um orçamento personalizado. Vi o site da Valentina Mimos!';

    // Botões principais do WhatsApp
    const whatsappButton = document.querySelector('.whatsapp-button');
    if (whatsappButton) {
        whatsappButton.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    }
    
    // Botões pequenos do WhatsApp
    const whatsappSmallButtons = document.querySelectorAll('.whatsapp-small-button');
    whatsappSmallButtons.forEach(button => {
        button.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    });

    // Botão Siga no Instagram
    const instagramButton = document.querySelector('.instagram-button');
    if (instagramButton) {
        instagramButton.addEventListener('click', () => {
            window.open('https://www.instagram.com/valentinamimosvr', '_blank');
        });
    }

    // Adiciona funcionalidade ao botão Enviar Mensagem (simulação de contato)
    const sendMessageButton = document.querySelector('.send-message-button');
    if (sendMessageButton) {
        sendMessageButton.addEventListener('click', () => {
            alert('Funcionalidade de Enviar Mensagem: Em um projeto real, isso abriria um formulário ou um link mailto:');
        });
    }
});