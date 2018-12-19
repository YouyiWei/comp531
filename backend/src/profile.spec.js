const fetch = require('isomorphic-fetch');

//const url = path => `http://localhost:3000${path}`
const url = path => `https://youyiwei-web-ic18.herokuapp.com${path}`

describe('validate /headline', () => {

    beforeEach((done) => {
        fetch(url('/login'), {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: 'realUser', password: '123456'})
        }).then(r => r.json()).then((res) => {
            cookie = 'sid=' + res['sid'];
            done();
        });
    });
    
    it('GET /headlines return array with 1 element containing headline for logged in user', (done) => {
        fetch(url('/headlines'), {
            method: 'GET',
            headers: {Cookie: cookie}
        }).then(r => r.json()).then(res => {
            expect(res['headlines'][0].username).toBe('realUser');
            done();
        });
    });

    it('PUT /headline update logged in user headline', (done) => {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Cookie', cookie);
        fetch(url('/headline'), {
            method: 'PUT',
            body: JSON.stringify({headline: 'new status'}),
            headers: headers
        }).then(r => r.json()).then(res => {
            expect(res['headline']).toBe('new status');
            done();
        });
    });
});