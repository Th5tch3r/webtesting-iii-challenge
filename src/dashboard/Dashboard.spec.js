// Test away
import React from 'react';
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

test ("Dashboard shows the controls and display", () => {
    const { getByText } = render(<Dashboard />);

    getByText(/open/i);
    getByText(/close/i);
    getByText(/locked/i);
    getByText(/unlocked/i)
})