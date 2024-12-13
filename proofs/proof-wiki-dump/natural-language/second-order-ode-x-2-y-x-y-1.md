# 

Source: https://proofwiki.org/wiki/Second_Order_ODE/x%5E2_y%27%27_%2B_x_y%27_%3D_1

Theorem
The second order ODE:

$x^2 y + x y' = 1$
has the general solution:

$y = \dfrac {\paren {\ln x}^2} 2 + C_1 \ln x + C_2$


Proof
The proof proceeds by using Solution of Second Order Differential Equation with Missing Dependent Variable.
Substitute $p$ for $y'$:














\(\ds x^2 \dfrac {\d p} {\d x} + x p\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds x \dfrac {\d p} {\d x} + p\)

\(=\)







\(\ds \frac 1 x\)














\(\ds \leadsto \ \ \)





\(\ds x p\)

\(=\)







\(\ds \int \frac {\d x} x\)





Linear First Order ODE: $x y' + y = \map f x$














\(\ds \)

\(=\)







\(\ds \ln x + C_1\)





Primitive of Reciprocal








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d y} {\d x}\)

\(=\)







\(\ds \frac {\ln x} x + \frac {C_1} x\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \int \paren {\frac {\ln x} x + \frac {C_1} x} \rd x\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \frac {\paren {\ln x}^2} 2 + C_1 \ln x + C_2\)





Primitive of $\dfrac {\ln x} x$



$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $16$




