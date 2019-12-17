describe("popup windows", function() {

    describe('function qrActive', function () {
        it("have elem with display none, expect display block", function() {
            const elem = 'none';
            const exp = 'flex';

            const act = qrActive(elem);

            assert.equal(exp, act);
        });
    })

    describe('function qrTextActive', function () {
        it("have elem with display none, expect display inline", function () {
            const elem = 'none';
            const exp = 'inline';

            const act = qrTextActive(elem);

            assert.equal(exp, act);
        });
    });

    describe('function closeQr', function () {
        it("have elem with display block, expect display none", function () {
            const elem = 'block';
            const exp = 'none';

            const act = closeQr(elem);

            assert.equal(exp, act);
        });

        it("have elem with display inline, expect display none", function () {
            const elem = 'inline';
            const exp = 'none';

            const act = closeQr(elem);

            assert.equal(exp, act);
        });
    });

    describe('function passowrdValidation', function () {

        it("have elem with length 8, expect true", function () {
            const value = '12344321';
            const exp = true;
            const act = passwordValidation(value);

            assert.equal(exp, act)
        });

        it("have elem with length 11, expect true", function () {
            const value = 'hello world';
            const exp = true;
            const act = passwordValidation(value);

            assert.equal(exp, act)
        });

        it("have elem with length 14, expect true", function () {
            const value = 'good bye world';
            const exp = true;
            const act = passwordValidation(value);

            assert.equal(exp, act)
        });

        it("have elem with length 18, expect true", function () {
            const value = 'thisIsMyHardPassword';
            const exp = true;
            const act = passwordValidation(value);

            assert.equal(exp, act)
        });

        it("have elem with length 18, expect true", function () {
            const value = 'qweasdzxcrtyfghvbnr';
            const exp = true;
            const act = passwordValidation(value);

            assert.equal(exp, act)
        });

        it("have elem with length 10, expect true", function () {
            const value = 'qwertyuiop';
            const exp = true;
            const act = passwordValidation(value);

            assert.equal(exp, act)
        });

        it("have elem with length 5, expect false", function () {
            const value = 'pass';
            const exp = false;
            const act = passwordValidation(value);

            assert.equal(exp, act)
        });

        it("have elem with length 2, expect false", function () {
            const value = 'hi';
            const exp = false;
            const act = passwordValidation(value);

            assert.equal(exp, act)
        });

        it("have elem with length 5, expect false", function () {
            const value = 'hello';
            const exp = false;
            const act = passwordValidation(value);

            assert.equal(exp, act)
        });

        it("have elem with length 4, expect false", function () {
            const value = '1221';
            const exp = false;
            const act = passwordValidation(value);

            assert.equal(exp, act)
        });

        it("have elem with length 21, expect false", function () {
            const value = 'qweasdzxcrtyfghvbnuio';
            const exp = false;
            const act = passwordValidation(value);

            assert.equal(exp, act)
        });

        it("have elem with length 29, expect false", function () {
            const value = 'hello it`s my biggest password';
            const exp = false;
            const act = passwordValidation(value);

            assert.equal(exp, act)
        })

    })

});