# 

Source: https://proofwiki.org/wiki/Second_Order_ODE/y%27%27_%3D_f(y)

Theorem
The second order ODE:

$\dfrac {\d^2 y} {\d x^2} = \map f y$
has the general solution:

$\dfrac {\sqrt 2} 2 \ds \int \dfrac {\d y} {\sqrt {\ds \int \map f y \rd y + C_1} } = x + C_2$
where $C_1$ and $C_2$ are arbitrary constants.


Proof













\(\ds \dfrac {\d^2 y} {\d x^2}\)

\(=\)







\(\ds \map f y\)














\(\ds \leadsto \ \ \)





\(\ds 2 \dfrac {\d y} {\d x} \dfrac {\d^2 y} {\d x^2}\)

\(=\)







\(\ds 2 \map f y \dfrac {\d y} {\d x}\)














\(\ds \leadsto \ \ \)





\(\ds \int 2 \dfrac {\d y} {\d x} \dfrac {\d^2 y} {\d x^2} \rd x\)

\(=\)







\(\ds \int 2 \map f y \dfrac {\d y} {\d x} \rd x\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\dfrac {\d y} {\d x} }^2\)

\(=\)







\(\ds 2 \int \map f y \rd y + C\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d y} {\d x}\)

\(=\)







\(\ds \sqrt {2 \int \map f y \rd y + C_1}\)














\(\ds \leadsto \ \ \)





\(\ds \int \dfrac {\d y} {\sqrt {2 \ds \int \map f y \rd y + C_1} }\)

\(=\)







\(\ds \int \rd x\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\sqrt 2} 2 \int \dfrac {\d y} {\sqrt {\ds \int \map f y \rd y + C_1} }\)

\(=\)







\(\ds x + C_2\)









$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): differential equation: differential equations of the second order: $(2)$ Equations of the form $\dfrac {\d^2 y} {\d x^2} = \map f y$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): differential equation: differential equations of the second order: $(2)$ Equations of the form $\dfrac {\d^2 y} {\d x^2} = \map f y$




