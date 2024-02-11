const CLASS_CLICK_ANIMATION = 'clickAnimation';
const DISPLAY_NONE = 'none';
const DISPLAY_INLINE = 'inline';
const ANIMATION_DURATION = 1000;

const addToCartButton = document.querySelector('.btn.btn-primary.btn-buy');
const defaultText = document.querySelector('.addProduct-default-text');
const clickAnimationText = document.querySelector('.addProduct-click-animation-text');

function toggleAnimation() {
    addToCartButton.classList.toggle(CLASS_CLICK_ANIMATION);
    defaultText.style.display = addToCartButton.classList.contains(CLASS_CLICK_ANIMATION) ? DISPLAY_NONE : DISPLAY_INLINE;
    clickAnimationText.style.display = addToCartButton.classList.contains(CLASS_CLICK_ANIMATION) ? DISPLAY_INLINE : DISPLAY_NONE;
}

addToCartButton.addEventListener('click', () => {
    toggleAnimation();
    setTimeout(toggleAnimation, ANIMATION_DURATION);
});









function getProductName() {
    const productNameElement = document.querySelector('.product-detail-name');
    return productNameElement ? productNameElement.textContent.trim() : '';
}

function getProductID() {
    const productIDElement = document.querySelector('input[name="redirectParameters[productId]"]');
    return productIDElement ? productIDElement.value : '';
}

const faqRepository = JSON.parse(localStorage.getItem('faqRepository')) || [];
const faqQuestionSubmitStatus = document.querySelector('#faqQuestionSubmitStatus');

function faqQuestionSubmit() {
    const faqQuestionInput = document.getElementById('faqQuestionInput');
    const productName = getProductName();
    const productId = getProductID();

    if (faqQuestionInput.value !== '') {
        faqRepository.push({ 
            productId: productId,
            productName: productName, 
            question: faqQuestionInput.value, 
            answer: null 
        });
        localStorage.setItem('faqRepository', JSON.stringify(faqRepository));
        faqQuestionInput.value = '';
        faqQuestionSubmitStatusSuccess();
        displayAnsweredFAQs();  
    } else {
        faqQuestionSubmitStatusError();
    }
    setTimeout(() => faqQuestionSubmitStatus.textContent = '', 5000);
}

function faqQuestionSubmitStatusSuccess() {
    const savedDataString = JSON.stringify(faqRepository, null, 2);
    faqQuestionSubmitStatus.textContent = `Question was send.`; //This is what has been send: ${savedDataString}
    faqQuestionSubmitStatus.style.color = 'green';
}

function faqQuestionSubmitStatusError() {
    faqQuestionSubmitStatus.textContent = `Error: Question was not send.`;
    faqQuestionSubmitStatus.style.color = 'red';
}

function createFaqElement(tag, className, textContent) {
    const element = document.createElement(tag);
    element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
}

function displayAnsweredFAQs() {
    const currentProductName = getProductName();
    const answeredFAQs = document.getElementById('answeredFAQs');
    answeredFAQs.innerHTML = '';
faqRepository.forEach((obj) => {
    if (obj.answer && obj.productName === currentProductName) {
        const div = createFaqElement('div', 'faq-answered-container');
        const question = createFaqElement('h2', 'faq-answered-question-question', `Question: ${obj.question}`);
        const answer = createFaqElement('p', 'faq-answered-answer', `Answer: ${obj.answer}`);

        div.appendChild(question);
        div.appendChild(answer);
        answeredFAQs.appendChild(div);
    }
});
}

document.getElementById('faqQuestionSubmit').addEventListener('click', faqQuestionSubmit);
displayAnsweredFAQs();