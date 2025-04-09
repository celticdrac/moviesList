import focusReducer, { incrementIndex, decrementIndex, FocusState } from './focusSlice';


describe('Focus reducer', () => {
    const defaultState: FocusState = {
      value: 0,
      elementsQty: 50
    };
    const simulatedState: FocusState = {
      value: 49,
      elementsQty: 50
    };

    it('handle regular and correct increment succesfully', () => {
      const state = focusReducer(defaultState, incrementIndex());
      expect(state.value).toBe(1);
    });

    it('handle over limit increment attempt', () => {
      const state = focusReducer(simulatedState, incrementIndex());
      expect(state.value).toBe(49);
    });
    
    it('handle regular and correct decrement succesfully', () => {
      const state = focusReducer(simulatedState, decrementIndex());
      expect(state.value).toBe(48);
    });
    it('handle over limit decrement attempt', () => {
      const state = focusReducer(defaultState, decrementIndex());
      expect(state.value).toBe(0);
    });
});
