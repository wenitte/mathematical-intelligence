# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/(1_%2B_x%5E2)_y%27%27_%2B_x_y%27_%3D_0

Theorem
The second order ODE:

$\paren {1 + x^2} y + x y' = 0$
has the general solution:

$y = C_1 \map \ln {x + \sqrt {x^2 + 1} } + C_2$


Proof
The proof proceeds by using Solution of Second Order Differential Equation with Missing Dependent Variable.
Substitute $p$ for $y'$:














\(\ds \paren {1 + x^2} \dfrac {\d p} {\d x} + x p\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds p = \dfrac {\d y} {\d x}\)

\(=\)







\(\ds \frac {C_1} {\sqrt {1 + x^2} }\)





First Order ODE: $\paren {1 + x^2} y' + x y = 0$








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds C_1 \int \frac 1 {\sqrt {1 + x^2} } \rd x\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds C_1 \map \ln {x + \sqrt {x^2 + 1} } + C_2\)





Primitive of $\dfrac 1 {\sqrt{x^2 + a^2} }$



$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $23$




