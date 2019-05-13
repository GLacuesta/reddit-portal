import snoowrap from 'snoowrap';

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const kFormatter = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

//dummy account
export const reddit = new snoowrap({
    userAgent: 'reddit-portal',
    clientId: '9ZbRvMkNNKoOZA',
    clientSecret: 'DrBRwnSzZu5OcfBa43jsR3UrvSE',
    refreshToken: '295159564942-BN7DAlTxOnXEcf0XA1dbPBiIM18'
});