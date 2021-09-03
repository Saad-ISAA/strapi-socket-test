'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        async afterUpdate(params, data) {
            // console.log(data);
            // console.log(params);
            strapi.StrapIO.io.in('mynotifications').emit('got_notification', data)
            // strapi.StrapIO.emit({ identity: 'notification' }, 'mycustomevent', data);

        }
    },
};
