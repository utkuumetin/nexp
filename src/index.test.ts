import nexp from "./index"

test("Create instance with router function", function() {
    const router = new nexp;
    
    expect(router).toBeInstanceOf(nexp);
});

test("Set method", function() {
    const methods = ["GET", "POST", "PUT", "DELETE", "PATCH"];

    const router = nexp.Router();
    
    const expectedName = methods[Math.floor(Math.random() * methods.length)];
    const expectedFunction = function() {};
    
    router.set(expectedName, expectedFunction);

    expect(router.routerObject[expectedName]).toEqual(expectedFunction);
});