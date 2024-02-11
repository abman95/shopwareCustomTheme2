// <plugin root>/src/Resources/app/administration/src/module/sw-cms/elements/employeepicture-name-jobtitle/index.js
Shopware.Service('cmsService').registerCmsElement({
    name: 'webeface-employeepicture-name-jobtitle',
    label: 'sw-cms.elements.webeface-employeepicture-name-jobtitle.label',
    component: 'sw-cms-el-webeface-employeepicture-name-jobtitle',
    configComponent: 'sw-cms-el-config-webeface-employeepicture-name-jobtitle',
    previewComponent: 'sw-cms-el-preview-webeface-employeepicture-name-jobtitle',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
        dailyUrl: {
            source: 'static',
            value: ''
        }
    }
});