// import smartgrid from 'smartgrid';
var smartgrid = require('smart-grid');
 
var settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '32px',
    mobileFirst: true,
    container: {
        maxWidth: '1920px',
        fields: '24px'
    },
    breakPoints: {
        hd: {
            width: '1920px',
            fields: '64px'
        },
        xl: {
            width: '1600px'
        },
        desktop: {
            width: '1440px',
            fields: '152px'
        },
        l: {
            width: '1366px'
        },
        md: {
            width: '1280px'
        },
        tabletV: {
            width: '1024px'
        },
        tablet: {
            width: '768px',
            fields: '48px'
        },
        ms: {
            width: '600px'
        },
        s: {
            width: '375px'
        },
        mobile: {
            width: '320px'
        }
    }
};
 
smartgrid('./src/sass/helpers/', settings);
