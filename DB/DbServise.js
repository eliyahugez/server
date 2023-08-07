const ENVAIRMENT = process.env.ENVAIRMENT || 'dev';
// cosnt ENVAIRMENT = 'prod';

const connectToDB = () => {
    if (ENVAIRMENT === 'dev')   {require('./dataBases/connectToMongo')}
    if (ENVAIRMENT === 'prod')   {require('./dataBases/connectToAtlas')}
}

module.exports = connectToDB;