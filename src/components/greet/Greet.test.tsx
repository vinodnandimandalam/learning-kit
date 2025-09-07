import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test('Should render', () => {
    render(<Greet/>)
    const textEle = screen.getByText('Hello')
    expect(textEle).toBeTruthy
})

test('Should render with name if provided', () => {
    render(<Greet name = "vinod"/>)
    const textEle = screen.getByText('Hello vinod')
    expect(textEle).toBeTruthy
})