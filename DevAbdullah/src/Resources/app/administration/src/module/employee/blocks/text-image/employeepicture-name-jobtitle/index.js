// Deutsch: Importiere die benötigten Komponenten und registriere den CMS-Block
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
    slots: {}, // Deutsch: Slots wurden entfernt
});

Shopware.Component.override('sw-cms-block-webeface-employeepicture-name-jobtitle', {
    inject: ['repositoryFactory', 'mediaRepository'],

    data() {
        return {
            employees: []
        };
    },

    created() {
        this.employeeRepository = this.repositoryFactory.create('employee_entity');
        this.mediaRepository = this.repositoryFactory.create('media');
        this.loadEmployeeData();
    },

    methods: {
        async loadEmployeeData() {
            const criteria = new Shopware.Data.Criteria();
            const result = await this.employeeRepository.search(criteria, Shopware.Context.api);
            this.employees = await Promise.all(result.map(async employee => ({
                id: employee.id,
                position: employee.position,
                profileImageSrc: await this.getMediaPath(employee.profileImage),
                backgroundImageSrc: await this.getMediaPath(employee.backgroundImage),
                htmlText: employee.htmlText,
            })));
        },

        async getMediaPath(mediaId) {
            if (!mediaId) {
                return '';
            }
            const mediaItem = await this.mediaRepository.get(mediaId, Shopware.Context.api);
            return mediaItem.url; // Annahme: Die URL ist direkt verfügbar
        },
    }
});
