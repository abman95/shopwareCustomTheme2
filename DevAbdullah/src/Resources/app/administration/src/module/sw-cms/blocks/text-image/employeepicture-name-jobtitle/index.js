// <plugin root>/src/Resources/app/administration/src/module/sw-cms/blocks/text-image/employeepicture-name-jobtitle/index.js

import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'webeface-employeepicture-name-jobtitle',
    category: 'text-image',
    label: 'sw-cms.elements.webeface-employeepicture-name-jobtitle.label',
    component: 'sw-cms-block-webeface-employeepicture-name-jobtitle',
    previewComponent: 'sw-cms-preview-webeface-employeepicture-name-jobtitle',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        employeepicture: 'image',
        name: 'text',
        jobtitle: 'text'
    }
});