const {test ,expect}=require('@playwright/test')
test("My first test",async function({page})
{
expect(12).toBe(12);
}
)
test.skip("My second test",async function ({page}) {
    expect(100).toBe(101);
})

test("My third test",async function({page}){
     expect(true).toBe(true);
     expect(true).toBeTruthy();
      expect(false).toBeFalsy();
})

test("My fourth test",async function({page}){
expect("Abhishek Teli").toContain("Abhishek");
})

test("My fifth test",async function({page}){
expect(null).toContain(null);
})

test("My sixth test",async function({page}){
expect(null).toContain(null);
})
