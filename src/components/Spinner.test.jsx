import { render, screen } from "@testing-library/react"
import Spinner from "./Spinner"
import { describe, expect, test } from "vitest";

describe('Spinner', () => {
    test('render correctly ', () => {
        render(<Spinner />);

        const cointainerDiv = screen.getByTestId('spin-container');
        expect(cointainerDiv).toBeInTheDocument()

        const innerDiv = screen.getByTestId('inner-container');
        expect(innerDiv).toBeInTheDocument();
    })
    
  
})

