# 

Source: https://proofwiki.org/wiki/Second_Order_ODE/y%27%27_%3D_f(x)

Theorem
The second order ODE:

$\dfrac {\d^2 y} {\d x^2} = \map f x$
has the general solution:

$\ds y = \iint \map f x \rd x \rd x + C_1 x + C_2$
where $C_1$ and $C_2$ are arbitrary constants.


Proof













\(\ds \dfrac {\d^2 y} {\d x^2}\)

\(=\)







\(\ds \map f x\)














\(\ds \leadsto \ \ \)





\(\ds \int \dfrac {\d^2 y} {\d x^2} \rd y\)

\(=\)







\(\ds \int \map f x \rd x\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d y} {\d x}\)

\(=\)







\(\ds \int \map f x \rd x + C_1\)





where $C_1$ is an arbitrary constant








\(\ds \leadsto \ \ \)





\(\ds \int \dfrac {\d y} {\d x} \rd y\)

\(=\)







\(\ds \int \paren {\int \map f x \rd x + C_1} \rd x\)





Solution to Separable Differential Equation














\(\ds \)

\(=\)







\(\ds \int \paren {\int \map f x \rd x} \rd x + \int C_1 \rd x\)





Linear Combination of Primitives








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \iint \map f x \rd x \rd x + C_1 x + C_2\)





Primitive of Power: $C_2$ is another arbitrary constant



$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): differential equation: differential equations of the second order: $(1)$ Equations of the form $\dfrac {\d^2 y} {\d x^2} = \map f x$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): differential equation: differential equations of the second order: $(1)$ Equations of the form $\dfrac {\d^2 y} {\d x^2} = \map f x$




