(function () {

    function createTestGroupElement(name) {
        const testGroupElement = document.createElement('div');
        testGroupElement.setAttribute('class', 'test-group');
        testGroupElement.innerHTML = `<h3>${name}</h3>`;
        return testGroupElement;
    }

    function test_group(name, test_group_function) {
        const testGroupElement = createTestGroupElement(name);
        document.getElementById('tests-section').appendChild(testGroupElement);

        let allTestsPassed = true;

        assert = (value, name) => { 
            let elementClass = value ? 'passed' : 'failed';
            allTestsPassed = allTestsPassed && value;
            
            const elementString = `
                <div class="test ${elementClass}">
                ${name} - ${elementClass}
                </div>
            `
            testGroupElement.innerHTML += elementString;
        }

        test_group_function();

        testGroupElement.className += allTestsPassed ? ' passed' : ' failed';
    }

    test_group('shit', function() {
        assert(true, 'Test1');
        assert(false, 'Test2');
        assert(true, 'Test3');
    });

    test_group('shit2', function() {
        assert(true, 'Test4');
        assert(true, 'Test5');
        assert(true, 'Test6');
    });
})();