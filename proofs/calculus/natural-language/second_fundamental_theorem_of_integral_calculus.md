This theorem seeks to prove the second part of the Fundamental Theorem of Calculus, which states that if a function, f, is continuous on a closed interval [a, b], and function F is an antiderivative of f, then the definite integral of f from a to b equals the value of F at b minus the value of F at a.

The first step in this proof is defining two functions. We're going to let g(x) be the integral of f from a to x, and h(x) be g(x) minus F(x).

Next step, we compute the derivative of the function h, where h'(x) is calculated, showing that h'(x) equals g'(x) minus F'(x). From the given premises, F'(x) is equal to f(x), and g'(x) is also equal to f(x), resulting in h'(x) equal to zero. This tells us that h(x) is a constant function since its derivative is always zero.

Now, given that h(x) is constant, h(a) must equal h(b). Substituting g(x) and F(x) into h(x) gives us the equation g(a) minus F(a) equals g(b) minus F(b).

After that, we specify the definition of g(x). At point a, g(a) equals to zero, and at point b, g(b) equals to the definite integral of f from a to b.

Finally, in the substitution phase, we use this definition of h to replace g(b) minus F(b) with the negative of (g(a) minus F(a)) in the equation. This gives us the final result: the integral of f from a to b is equal to F(b) minus F(a).

Therefore, the theorem is proved.