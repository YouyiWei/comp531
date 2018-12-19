const fetch = require('isomorphic-fetch');

//const url = path => `http://localhost:3000${path}`;
const url = path => `https://youyiwei-web-ic18.herokuapp.com${path}`;

describe('validate /articles', (done) => {
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

    it('GET /articles/id where id is valid', (done) => {
        fetch(url('/articles/1'), {
            method: 'GET',
            headers: {Cookie: cookie},
        }).then(r => r.json()).then(res => {
            expect(res['articles'].length).toBe(1);
            done();
        });
    });

    it('GET /articles/id where id is a invalid', (done) => {
        fetch(url('/articles/0'), {
            method: 'GET',
            headers: {Cookie: cookie},
        }).then(r => r.json()).then(res => {
            expect(res['articles'].length).toBe(0);
            done();
        });
    });

    it('should return all requested articles by logged in user', (done) => {
        fetch(url('/articles'), {
            method: 'GET',
            headers: {Cookie: cookie},
        }).then(r => r.json()).then(res => {
            expect(res['articles'].length >= 6).toBe(true);
            done();
        });
    });

    it('POST /article (adding an article for logged in user returns list of articles with new article, validate list increased by one and contents of the new article)', (done) => {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Cookie', cookie);
        fetch(url('/articles'), {
            method: 'GET',
            headers: {Cookie: cookie},
        }).then(r => r.json()).then(res => {
            len = res['articles'].length;
            fetch(url('/article'), {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({text: 'for testing'})
            }).then(r => r.json()).then(re => {
                const articleArr = re['articles'];
                let hasContent = false;
                for(let i = 0 ; i < articleArr.length ; i++){
                    if(articleArr[i].body == 'for testing') {
                        hasContent = true;
                        break;
                    }
                }
                fetch(url('/articles'), {
                    method: 'GET',
                    headers: {Cookie: cookie},
                }).then(r => r.json()).then(r => {
                    hasIncreased = r['articles'].length;
                    expect(hasIncreased == len + 1 && hasContent).toBe(true);
                    done();
                });
            });
        });
    });
    
});
