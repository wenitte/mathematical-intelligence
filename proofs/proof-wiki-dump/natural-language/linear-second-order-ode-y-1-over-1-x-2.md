# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%3D_1_over_1_-_x%5E2

Theorem
The second order ODE:

$(1): \quad y = \dfrac 1 {1 - x^2}$
has the general solution:

$y = x \tanh^{-1} x + \map \ln {1 - x^2} + C x + D$


Proof













\(\ds y\)

\(=\)







\(\ds \dfrac 1 {1 - x^2}\)














\(\ds \leadsto \ \ \)





\(\ds \int \dfrac {\d^2 y} {\d x^2} \rd x\)

\(=\)







\(\ds \int \frac 1 {1 - x^2} \rd x\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d y} {\d x}\)

\(=\)







\(\ds \tanh^{-1} x + C\)





Primitive of $\dfrac 1 {a^2 - x^2}$: Inverse Hyperbolic Tangent Form








\(\ds \leadsto \ \ \)





\(\ds \int \dfrac {\d y} {\d x} \rd x\)

\(=\)







\(\ds \int \paren {\tanh^{-1} x + C} \rd x\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds x \tanh^{-1} x + \map \ln {1 - x^2} + C x + D\)





Primitive of $\tanh^{-1} x$



$\blacksquare$


Sources
1963: Morris Tenenbaum and Harry Pollard: Ordinary Differential Equations ... (previous) ... (next): Chapter $1$: Basic Concepts: Lesson $3$: The Differential Equation: $(3.13)$




