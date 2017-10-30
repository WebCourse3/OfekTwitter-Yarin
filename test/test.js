(function () {
    function test_group(name, test_group_function) {
        const testGroupElement = document.createElement('div');
        testGroupElement.setAttribute('class', 'test-group');
        testGroupElement.innerHTML = `<h3>${name}</h3>`;
        document.getElementById('tests-section').appendChild(testGroupElement);

        let passed = true;

        assert = (value, name) => { 
            passed = passed && value;
            let elementClass = value ? 'passed' : 'failed';
    
            const elementString = `
                <div class="test ${elementClass}">
                ${name} - ${elementClass}
                </div>
            `
    
            testGroupElement.innerHTML += elementString;
        }

        test_group_function();

        testGroupElement.className += passed ? ' passed' : ' failed';
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