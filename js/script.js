const hamburgerButton = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav__links');
const h1 = document.querySelector('h1');
const navLinksAll = document.querySelectorAll('.nav__links a');
const iframe = document.querySelector('iframe');
const wrapper = document.querySelector('.forum__wrapper');
for (let i = 0; i < 4; i++) {
    navLinksAll[i].onclick = function () {
        hamburgerButton.classList.remove('hamburger_active')
        navLinks.classList.remove('nav__links_active');
    }
}
h1.onclick = function () {
    h1.classList.toggle('h1_active');
}
hamburgerButton.onclick = function () {
    hamburgerButton.classList.toggle('hamburger_active');
    navLinks.classList.toggle('nav__links_active');
}

iframe.onload = function () {//когда в айфрейм что то загружаеться, запускаться функция и 
    wrapper.classList.add('wrapper_active');
    TgSetMessage();
    setTimeout(() => {
        document.forms.order.reset();
        wrapper.classList.remove('wrapper_active');
    }, 3000);
}

function TgSetMessage() {
    const token = '6572621682:AAHnZoYmxwNjfUaustiqYvNeXiViDVfqnuQ';
    const id = 396606827;
    console.log('loaded');
    const gmail = document.querySelector('#email').value;
    const name = document.querySelector('#name').value;
    const comment = document.querySelector('#comentary').value;
    const messageText = `Заявка с сайта яхт \n🤑 Имя - ${name}\n📧 Почта - ${gmail}\n💬 Коментарий - ${comment}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const params = {
        chat_id: id,
        text: messageText,
    };
    axios.post(url, params)
        .then(response => {
            console.log('Сообщение успешно отправлено:', response.data);
        })
        .catch(error => {
            console.error('Ошибка при отправке сообщения:', error);
        });
}


const swiper = new Swiper('.swiper', {
    loop: false,
    effect: 'coverflow',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
})