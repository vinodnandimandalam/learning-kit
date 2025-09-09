import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should render the initial count based on the props", () => {
    const { result } = renderHook(useCounter, {
      initialProps: 10,
    });
    expect(result.current.count).toBe(10);
  });

  test("should increment the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: 10,
    });

    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(11);
  });

  test("should decrement the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: 10,
    });

    act(() => {
      result.current.decrement();
    });
  });

  test("should reset the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: 10,
    });

    act(() => {
      result.current.reset();
    });
  });
});
