// /var/www/html/custom/plugins/DevAbdullah/src/Resources/app/administration/src/module/sw-cms/index.js

import './page/employee-module-index';
import deDE from './snippet/de-DE';
import enGB from './snippet/en-GB';

Shopware.Module.register('employee-module', {
    type: 'plugin',
    name: 'bundle',
    title: 'employee-module.general.mainMenuItemGeneral',
    description: 'employee-module.general.descriptionTextModule',
    icon: 'question-circle-s',
    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },
    routes: {
        index: {
            component: 'employee-module-index',
            path: 'index'
        },
    },
    navigation: [{
        id: 'employee-module',
        label: 'employee-module.general.mainMenuItemGeneral',
        color: '#ff3d58',
        path: 'employee.module.index',
        icon: 'question-circle-s',
        parent: 'sw-content',
        position: 100
    }],
});

Shopware.Component.register('employee-module-index', {
    template: `
        <div>
            <employee-bundle-index></employee-bundle-index>
        </div>
    `
});
