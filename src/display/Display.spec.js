// Test away!
import React from "react";
import { fireEvent, getByTestId, render } from "@testing-library/react";

import Display from "./Display";

test ("gate displays unlocked and open", () => {
    const { getByText } = render ( <Display />)

    getByText(/unlocked/i);
    getByText(/open/i);
});

test("if gate is open = closed is false", () => {
    const { getByText } = render ( <Display closed={false} />);
    getByText(/open/i)
});

test("if gate is closed = closed is true", () => {
    const { getByText } = render ( <Display closed={true} />);
    getByText(/closed/i)
});

test("if gate is unlocked = locked is false", () => {
    const { getByText } = render (<Display locked={false} />);
    getByText(/unlocked/i)
})

test("if gate is locked =  locked is true", () => {
    const { getByText } = render (<Display locked={true} />);
    getByText(/locked/i)
})

test("when closed use 'red-red'", () => {
    const { container } = render (<Display closed={true}/>);
    const gate = getByTestId(container, 'gateClosed')
    expect(gate.className).toContain('red-led')
})

test("when open use 'green-led", () => {
    const { container } = render(<Display closed={false}/>)
    const gate = getByTestId(container, 'gateClosed')
    expect(gate.className).toContain('green-led')
})

test ("when locked use 'red-led'", () => {
    const { container } = render(<Display locked={true}/>)
    const gate = getByTestId(container, 'gateLocked')
    expect(gate.className).toContain('red-led')
})

test ("when unlocked use 'green-led'", () => {
    const { container } = render(<Display locked={false}/>)
    const gate = getByTestId(container, 'gateLocked')
    expect(gate.className).toContain('green-led')
})