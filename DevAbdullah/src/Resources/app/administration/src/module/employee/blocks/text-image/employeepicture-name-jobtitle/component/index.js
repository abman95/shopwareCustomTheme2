import template from './sw-cms-block-webeface-employeepicture-name-jobtitle.html.twig';
import './sw-cms-block-webeface-employeepicture-name-jobtitle.scss';

Shopware.Component.register('sw-cms-block-webeface-employeepicture-name-jobtitle', {
    template,

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
            await this.fetchEmployeePositions();
            await this.fetchEmployeeImages();
            await this.fetchBackgroundImages();
            await this.fetchEmployees();
        },
        
        async fetchEmployeePositions() {
            const criteria = new Shopware.Data.Criteria();
            try {
                const result = await this.employeeRepository.search(criteria, Shopware.Context.api);
                if (result && Array.isArray(result)) {
                    this.employeePositions = result.map(employee => ({
                        id: employee.id,
                        name: employee.position,
                    }));
                }
            } catch (error) {
                console.error('Fehler beim Laden der Mitarbeiterpositionen:', error);
                this.errorMessage = 'Fehler beim Laden der Mitarbeiterpositionen.';
            }
        },

        async fetchEmployeeImages() {
            const criteria = new Shopware.Data.Criteria();
            try {
                const result = await this.employeeRepository.search(criteria, Shopware.Context.api);
                if (result && Array.isArray(result)) {
                return result.map(employee => ({
                    id: employee.id,
                    imageUrl: employee.profileImage,
                }));
                }
            } catch (error) {
                console.error('Fehler beim Laden der Mitarbeiterbilder:', error);
                this.errorMessage = 'Fehler beim Laden der Mitarbeiterbilder.';
                return [];
            }
        },

        async fetchBackgroundImages() {
            const criteria = new Shopware.Data.Criteria();
            try {
                const result = await this.employeeRepository.search(criteria, Shopware.Context.api);
                if (result && Array.isArray(result)) {
                    return result.map(employee => ({
                        id: employee.id,
                        backgroundImageUrl: employee.backgroundImage,
                        
                    }));
                }
            } catch (error) {
                console.error('Fehler beim Laden der Hintergrundbilder:', error);
                this.errorMessage = 'Fehler beim Laden der Hintergrundbilder.';
                return [];
            }
        },

        async fetchEmployees() {
            const criteria = new Shopware.Data.Criteria();
            try {
                const result = await this.employeeRepository.search(criteria, Shopware.Context.api);
                if (result && Array.isArray(result)) {
                    this.employees = result.map(employee => ({
                        id: employee.id,
                        position: employee.position,
                        imageUrl: employee.profileImage,
                        backgroundImageUrl: employee.backgroundImage,
                        htmlText: employee.htmlText,
                    }));
                for (const employee of this.employees) {
                employee.profileImageSrc = await this.getMediaPath(employee.imageUrl);
                employee.backgroundImageSrc = await this.getMediaPath(employee.backgroundImageUrl);
                }
                }
            } catch (error) {
                console.error('Fehler beim Abrufen der Mitarbeiterdaten:', error);
                this.errorMessage = 'Fehler beim Abrufen der Mitarbeiterdaten.';
            }
        },
        async getMediaPath(mediaId) {
            if (!mediaId) {
                return '';
            }
            try {
                let mediaItem = "";
                mediaItem = await this.mediaRepository.get(mediaId, Shopware.Context.api);
                const mediaPath = await mediaItem.path;
                const fullPath = 'http://localhost/' + mediaPath;
                console.log(fullPath);
                
                return fullPath;
            } catch (error) {
                console.error('Fehler beim Abrufen des Medienpfades:', error);
                return '';
            }
        },
    }
});