import Connector from 'league-connect';

let id: string = process.argv[2];

const icon: number = parseFloat(id);

Connector.connect().then((res) => {
    Connector.sendRequest({
        url: 'lol-summoner/v1/current-summoner/icon',
        method: 'PUT',
        body: {
            profileIconId: icon
        }
    }).then((res) => {
        console.log('Summoner Icon has been changed.');
    }).catch(() => {
        console.log('Invalid Summoner Icon ID. If this problem persists, restart your League Client and retry.')
    })
}).catch((err) => {
    console.error(err);
});
