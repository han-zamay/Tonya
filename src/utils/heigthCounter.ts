const SIZE_COEF = 0.025;

export const getSize = (height: number) => height * SIZE_COEF;

export const getSonyaInitial = (height: number): {
    initialX: number;
    initialY: number;
    size: number;
} => ({
    initialX: 3.75 * height * SIZE_COEF,
    initialY: -3.75 * height * SIZE_COEF,
    size: height * SIZE_COEF,
});

