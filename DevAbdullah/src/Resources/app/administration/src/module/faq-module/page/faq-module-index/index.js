import template from './faq-module-index.html.twig';
import './faq-module.scss';

Shopware.Component.register('faq-module-index', {
    template,

    inject: ['repositoryFactory'],

    data() {
        return {
            question: '',
            answer: '',
            isLoading: false,
            faqRepository: [],
            productRepository: null,
            successMessage: '',
            errorMessage: '',
            mainProducts: [],
            selectedProductId: null
        };
    },

    computed: {
        mainProductsOptions() {
            return this.mainProducts.map(product => ({ id: product.id, name: product.name }));
        }
    },

    created() {
        this.productRepository = this.repositoryFactory.create('product');
        this.loadMainProducts();
    },

    watch: {
        faqRepository: {
            deep: true,
            handler(newVal) {
                const hasUnanswered = newVal.some(faq => !faq.answer);
                if (hasUnanswered) {
                    this.displayUnansweredFAQ();
                }
            }
        }
    },
    
    methods: {
        loadFAQRepository() {
            const storedFAQs = JSON.parse(localStorage.getItem('faqRepository')) || [];
            this.faqRepository.splice(0, this.faqRepository.length, ...storedFAQs);
        },
    
        updateFAQRepository() {
            localStorage.setItem('faqRepository', JSON.stringify(this.faqRepository));
            this.loadFAQRepository(); // Aktualisiert die FAQ-Liste, um Reaktivität sicherzustellen
        },

        loadMainProducts() {
            this.isLoading = true;
            const criteria = new Shopware.Data.Criteria();
            criteria.addFilter(Shopware.Data.Criteria.equals('product.parentId', null));
    
            this.productRepository.search(criteria, Shopware.Context.api)
                .then(result => {
                    this.mainProducts = result;
                    this.isLoading = false;
                })
                .catch(error => {
                    console.error('Error Loading Main Products:', error);
                    this.isLoading = false;
                });
        },

        async saveFAQ() {
            if (!this.selectedProductId || !this.question || !this.answer) {
                this.errorMessage = 'Please fill in all the fields.';
                setTimeout(() => { this.errorMessage = ''; }, 8000);
                return;
            }

            const selectedProduct = this.mainProducts.find(product => product.id === this.selectedProductId);
            if (!selectedProduct) {
                this.errorMessage = 'Selected product not found.';
                setTimeout(() => { this.errorMessage = ''; }, 8000);
                return;
            }
            
            const faqData = { productId: this.selectedProductId, productName: selectedProduct.name, question: this.question, answer: this.answer };
            this.faqRepository.push(faqData);
            localStorage.setItem('faqRepository', JSON.stringify(this.faqRepository));
            const savedDataString = JSON.stringify(this.faqRepository, null, 2);
            this.successMessage = `FAQ has been saved.`; //These data have been saved: ${savedDataString}
            setTimeout(() => { this.successMessage = ''; }, 5000);
        },

        saveFAQAnswer(index) {
            const faqAnswerInput = document.getElementById(`faqAnswerInput${index}`);
            this.faqRepository[index].answer = faqAnswerInput.value;
            localStorage.setItem('faqRepository', JSON.stringify(this.faqRepository));
            this.displayUnansweredFAQ();
        },

        createFaqElement(tag, className, textContent, placeholder, id, clickHandler) {
            const element = document.createElement(tag);
            element.className = className;
            if (textContent) element.textContent = textContent;
            if (placeholder) element.placeholder = placeholder;
            if (id) element.id = id;
            if (clickHandler) element.addEventListener('click', clickHandler);
            return element;
        },

        displayUnansweredFAQ() {
            const unansweredFaq = document.getElementById('displayUnansweredFAQ');
            unansweredFaq.innerHTML = '';
        
            this.faqRepository.forEach((obj, index) => {
                if (!obj.question || obj.answer) return;
                const div = this.createFaqElement('div', 'faq-unanswered-container');
                const question = this.createFaqElement('p', 'faq-unanswered-question', `Question: ${obj.question}. Product: ${obj.productName}`);
                const faqAnswerInput = this.createFaqElement('input', 'faq-unanswered-answer-input', null, 'Enter answer', `faqAnswerInput${index}`);
                const submitFaqAnswer = this.createFaqElement('button', 'faq-unanswered-submit-button', 'Send answer', null, null, () => this.saveFAQAnswer(index));
        
                div.appendChild(question);
                div.appendChild(faqAnswerInput);
                div.appendChild(submitFaqAnswer);
                unansweredFaq.appendChild(div);
            });
        },        


        resetFAQ() {
            this.faqRepository = [];
            localStorage.setItem('faqRepository', JSON.stringify(this.faqRepository));
            this.displayUnansweredFAQ();
        },
    },

    mounted() {
        this.loadFAQRepository();
        this.displayUnansweredFAQ();
    }
});
