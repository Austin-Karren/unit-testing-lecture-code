//Component tests are done with Reacts built in testing library. When testing components, you need to:
//1. import React to display JSX.
//2. import the Component(s) that you are testing.
//3. import what you need from the testing-library/react package (render, fireEvent, etc.)
import React from 'react';
import Header from '../Components/Header';
import {render, fireEvent} from '@testing-library/react';

//it is the same thing as test(found in functions.test.js), but for component testing.
it('Does not show dropdown when mounted', () => {
    //render will simulate rendering your component on the viewport, making the elements it contains available to be tested. It will also return tools you can use to test the component, such as the queryByTestId seen below.
    const {queryByTestId} = render(<Header />);

    //queryByTestId will look for the data-testid attribute found on the elements in Header.js. If you are testing an element, you MUST provide it a data-testid so it can be selected in the test file.
    const dropdown = queryByTestId('dropdown');

    //Use matchers to test values, just like you do with Jest unit testing.
    expect(dropdown).not.toBeTruthy();
})

it('Shows dropdown when hamburger is clicked', () => {
    const {container, getByTestId} = render(<Header />);

    const hamburger = getByTestId('hamburger-menu');

    //fireEvent will simulate events being fired in the viewport. Chain on the event you want to fire(the code below fires a click event) and then pass in the element you want to simulate that event for.
    fireEvent.click(hamburger);

    //container is an object representation of your component, so you can check things such as textContent, to enhance your testing.
    expect(container.textContent).toContain('Dropdown Menu');
})