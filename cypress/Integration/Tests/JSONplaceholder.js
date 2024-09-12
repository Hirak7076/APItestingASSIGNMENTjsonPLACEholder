///<reference types="cypress"/>
describe('JSON Placeholder API testing Assignment', () => {
    const baseURL = "https://jsonplaceholder.typicode.com"
    it('Get Request', () => {
        cy.request({
            method:'GET',
            url:baseURL+"/posts",
            headers:{
                'content-Type':'application/json'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        })
    });
    it('Post Request', () => {
        cy.request({
            method:'POST',
            url:baseURL+"/posts",
            headers:{
                'content-Type':'application/json'
            },
            body:{
                "title":"New Post",
                "body":"This is the body of the new post",
                "userID":1
            }
        }).then((response)=>{
            expect(response.status).to.eq(201)
            cy.log(JSON.stringify(response.body))
        })
    });
    it('Update Request', () => {
        cy.request({
            method:'PUT',
            url:baseURL+"/posts/1",
            headers:{
                'content-Type':'application/json'
            },
            body:{
                "title":"Updated Post",
                "body":"This is the updated body of the post",
                "userID":1
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        })
    });
    it('Delete Request', () => {
        cy.request({
            method:'DELETE',
            url:baseURL+"/posts/1",
            headers:{
                'content-Type':'application/json'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        })
    });
});