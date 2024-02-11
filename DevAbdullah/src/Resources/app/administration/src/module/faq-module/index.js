import './page/faq-module-index';

import deDE from './snippet/de-DE';
import enGB from './snippet/en-GB';


Shopware.Module.register('faq-module', {
    type: 'plugin',
    name: 'bundle',
    title: 'faq-module.general.mainMenuItemGeneral',
    description: 'faq-module.general.descriptionTextModule',

    icon: 'question-circle-s',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },

    routes: {
        index: {
            component: 'faq-module-index',
            path: 'index'
        },
    },

    navigation: [{
        id: 'faq-module',
        label: 'faq-module.general.mainMenuItemGeneral',
        color: '#ff3d58',
        path: 'faq.module.index',
        icon: 'question-circle-s',
        parent: 'sw-product',
        position: 100
    }],
});

Shopware.Component.register('faq-module-index', {
    template: `
        <div>
            <faq-bundle-index></faq-bundle-index>
        </div>
    `
});