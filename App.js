export const add =  (x, y) => {
    return x + y;
};

export const total = (subTotal, shipping) => {
    return '$' + add(shipping, subTotal);
}