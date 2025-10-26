document.addEventListener('DOMContentLoaded', () => {
    console.log('Site Valentina Mimos carregado com sucesso!');
    
    // Adiciona funcionalidade simples ao botão de WhatsApp
    const whatsappButton = document.querySelector('.whatsapp-button');
    const whatsappNumber = '5524999334402'; // Número de telefone da imagem (24) 99933-4402
    const message = 'Olá, gostaria de um orçamento personalizado. Vi o site da Valentina Mimos!';

    if (whatsappButton) {
        whatsappButton.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    }
    
    const whatsappSmallButtons = document.querySelectorAll('.whatsapp-small-button');
    whatsappSmallButtons.forEach(button => {
        button.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    });

    // Função de exemplo para abrir detalhes do serviço (você pode customizar isso)
    window.openServiceDetail = (serviceId) => {
        alert(`Você clicou no serviço: ${serviceId}. Aqui você poderia abrir um modal ou navegar para uma página de detalhes.`);
        // Exemplo de como você faria se fosse para navegar:
        // window.location.href = `/servicos/${serviceId}.html`; 
    };

    // Adiciona funcionalidade ao botão Enviar Mensagem (simulação de contato)
    const sendMessageButton = document.querySelector('.send-message-button');
    if (sendMessageButton) {
        sendMessageButton.addEventListener('click', () => {
            // Em um site real, isso abriria um formulário de contato ou um email
            alert('Funcionalidade de Enviar Mensagem: Em um projeto real, isso abriria um formulário ou um link mailto:');
            // Exemplo de link mailto:
            // window.location.href = 'mailto:contato@valentinamimos.com.br?subject=Orçamento%20Valentina%20Mimos';
        });
    }
    
    // Adiciona funcionalidade ao botão Siga no Instagram
    const instagramButton = document.querySelector('.instagram-button');
    if (instagramButton) {
        instagramButton.addEventListener('click', () => {
            window.open('https://www.instagram.com/valentinamimosvr', '_blank'); // Altere para o seu link real do Instagram
        });
    }
});