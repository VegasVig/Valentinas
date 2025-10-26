document.addEventListener('DOMContentLoaded', () => {
    console.log('Site Valentina Mimos carregado com sucesso!');

    /* ======================================= */
    /* CONFIGURAÇÃO DE FOTOS POR SERVIÇO */
    /* ======================================= */

    // **IMPORTANTE: TROQUE OS NOMES DOS ARQUIVOS PELAS SUAS FOTOS REAIS!**
    // Se um serviço não tiver fotos, deixe o array vazio: []
    const servicePhotos = {
        'roupas': [
            'medida1.jpg',
            'medida2.jpg',
            'medida3.jpg'
        ],
        'ajustes': [
            'ajustes1.jpg',
            'ajustes2.jpg',
            'ajustes3.jpg'
        ],
        'bordados': [
            'bordados1.jpg',
            'bordados2.jpg',
            'bordados3.jpg',
            'bordados4.jpg',
            'bordados5.jpg',
            'bordados6.jpg',
            'bordados7.jpg',
            'bordados8.jpg',
            'bordados9.jpg',
            'bordados10.jpg',
            'bordados11.jpg',
            'bordados12.jpg',
            'bordados13.jpg'
        ],
        'consertos': [
            'consertos_foto1.jpg'
        ],
        'decorativas': [
            'decorativas_foto1.jpg',
            'decorativas_foto2.jpg'
        ],
        'maternidade': [ // O serviço que já estava configurado
            'kit maternidade1.jpg', 
            'kit maternidade2.jpg',
            'kit maternidade3.jpg',
            'kit maternidade4.jpg',
            'kit maternidade5.jpg', 
            'kit maternidade6.jpg',
            'kit maternidade7.jpg',
            'kit maternidade8.jpg',
            'kit maternidade9.jpg', 
            'kit maternidade10.jpg',
            'kit maternidade11.jpg',
            'kit maternidade12.jpg',
            'kit maternidade13.jpg', 
            'kit maternidade14.jpg',
            'kit maternidade15.jpg',
            'kit maternidade16.jpg',
             'kit maternidade17.jpg', 
            'kit maternidade18.jpg',
            'kit maternidade19.jpg',
            'kit maternidade20.jpg'
        ], 
        'lembrancinhas': [
            'lembrancinhas1.jpg',
            'lembrancinhas2.jpg',
            'lembrancinhas3.jpg',
            'lembrancinhas4.jpg',
            'lembrancinhas5.jpg',
            'lembrancinhas6.jpg',
            'lembrancinhas7.jpg',
            'lembrancinhas8.jpg'
        ],
        'criativa': [
            'criativa1.jpg',
            'criativa2.jpg'
            
        ]
    };


    /* ======================================= */
    /* LÓGICA DO CARROSSEL DE FOTOS */
    /* ======================================= */

    let currentPhotoIndex = 0;
    let currentServicePhotos = []; // Armazenará as fotos do serviço clicado

    // Elementos do Modal
    const modal = document.getElementById('maternityModal');
    const closeButton = modal.querySelector('.close-button');
    const prevButton = modal.querySelector('.prev-button');
    const nextButton = modal.querySelector('.next-button');
    const carouselImage = document.getElementById('carouselImage');
    const imageCounter = document.getElementById('imageCounter');

    // Função para atualizar a imagem e o contador
    const updateCarousel = () => {
        if (currentServicePhotos.length === 0) return;
        
        carouselImage.src = currentServicePhotos[currentPhotoIndex];
        imageCounter.textContent = `${currentPhotoIndex + 1}/${currentServicePhotos.length}`;
    };

    // Função para abrir o modal
    const openServiceModal = (serviceId) => {
        currentServicePhotos = servicePhotos[serviceId] || [];

        if (currentServicePhotos.length === 0) {
            alert('Ainda não há fotos disponíveis para este serviço.');
            return;
        }
        
        currentPhotoIndex = 0; // Começa sempre na primeira foto
        updateCarousel();
        modal.style.display = 'block';
    };

    // Função para fechar o modal
    const closeServiceModal = () => {
        modal.style.display = 'none';
        currentServicePhotos = []; // Limpa o array de fotos
    };

    // Função para avançar/voltar no carrossel
    const changePhoto = (n) => {
        if (currentServicePhotos.length === 0) return;

        currentPhotoIndex += n;
        
        // Loop infinito (se chegar ao final, volta para o início, e vice-versa)
        if (currentPhotoIndex >= currentServicePhotos.length) {
            currentPhotoIndex = 0;
        }
        if (currentPhotoIndex < 0) {
            currentPhotoIndex = currentServicePhotos.length - 1;
        }
        updateCarousel();
    };

    // 2. Conecta o clique em QUALQUER box de serviço
    // A função é chamada no HTML: onclick="openServiceDetail('nome_do_serviço')"
    window.openServiceDetail = (serviceId) => {
        openServiceModal(serviceId);
    };

    // 3. Adiciona ouvintes de evento para os botões do modal
    closeButton.onclick = closeServiceModal;
    prevButton.onclick = () => changePhoto(-1);
    nextButton.onclick = () => changePhoto(1);

    // Fechar ao clicar fora da área da foto
    window.onclick = (event) => {
        if (event.target === modal) {
            closeServiceModal();
        }
    };
    
    // Fechar ao apertar a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeServiceModal();
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