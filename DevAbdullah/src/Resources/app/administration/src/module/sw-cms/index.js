import './page/sw-cms-index';

import deDE from './snippet/de-DE';
import enGB from './snippet/en-GB';


Shopware.Module.register('sw-cms', {
    type: 'plugin',
    name: 'bundle',
    title: 'sw-cms.general.mainMenuItemGeneral',
    description: 'sw-cms.general.descriptionTextModule',

    icon: 'question-circle-s',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },

    routes: {
        index: {
            component: 'sw-cms-index',
            path: 'index'
        },
    },

    navigation: [{
        id: 'sw-cms',
        label: 'sw-cms.general.mainMenuItemGeneral',
        color: '#ff3d58',
        path: 'sw-cms.index',
        icon: 'question-circle-s',
        parent: 'sw-manufacturer',
        position: 100
    }],
});


Shopware.Component.register('sw-cms-index', {
    template: `
        <div>
            <sw-cms-index></sw-cms-index>
        </div>
    `
});