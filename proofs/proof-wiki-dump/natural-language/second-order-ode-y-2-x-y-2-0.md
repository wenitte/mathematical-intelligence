# 

Source: https://proofwiki.org/wiki/Second_Order_ODE/y%27%27_%2B_2_x_(y%27)%5E2_%3D_0

Theorem
The second order ODE:

$(1): \quad y + 2 x \paren {y'}^2 = 0$
has the general solution:

$C_1 \map \arctan {C_1 x} = y + C_2$


Proof
The proof proceeds by using Solution of Second Order Differential Equation with Missing Dependent Variable.
Substitute $p$ for $y'$ in $(1)$ and rearranging:














\(\ds \dfrac {\d p} {\d x}\)

\(=\)







\(\ds -2 x p^2\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d p} {p^2}\)

\(=\)







\(\ds -2 \int x \rd x\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds -\frac 1 p\)

\(=\)







\(\ds -x^2 + k^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d y}\)

\(=\)







\(\ds x^2 + k^2\)





substituting back for $p$








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {x^2 + k^2}\)

\(=\)







\(\ds \int \rd y\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds \frac 1 k \map \arctan {\frac x k}\)

\(=\)







\(\ds y + C_2\)





Primitive of $\dfrac 1 {x^2 + a^2}$








\(\ds \leadsto \ \ \)





\(\ds C_1 \map \arctan {C_1 x}\)

\(=\)







\(\ds y + C_2\)





setting $C_1 = \dfrac 1 k$



$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $11$




