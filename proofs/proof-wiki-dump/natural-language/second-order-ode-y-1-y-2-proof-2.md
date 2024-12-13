# 

Source: https://proofwiki.org/wiki/Second_Order_ODE/y%27%27_%3D_1_%2B_(y%27)%5E2/Proof_2

Theorem
The second order ODE:

$(1): \quad y = 1 + \paren {y'}^2$
has the general solution:

$y = \map {\ln \sec} {x + C_1} + C_2$


Proof
The proof proceeds by using Solution of Second Order Differential Equation with Missing Dependent Variable.
Substitute $p$ for $y'$ in $(1)$:














\(\ds \dfrac {\d p} {\d x}\)

\(=\)







\(\ds p^2 + 1\)





where $p = \dfrac {\d y} {\d x}$








\(\ds \leadsto \ \ \)





\(\ds \int \rd x\)

\(=\)







\(\ds \int \frac {\d p} {p^2 + 1}\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \arctan p + A_1\)





Primitive of $\dfrac 1 {x^2 + a^2}$








\(\ds \leadsto \ \ \)





\(\ds p = \frac {\d y} {\d x}\)

\(=\)







\(\ds \map \tan {x - A_1}\)














\(\ds \leadsto \ \ \)





\(\ds \int \rd y\)

\(=\)







\(\ds \int \map \tan {x - A_1} \rd x\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \map {\ln \sec} {x - A_1} + A_2\)





Primitive of $\tan a x$














\(\ds \)

\(=\)







\(\ds \map {\ln \sec} {x + C_1} + C_2\)





rearranging constants



$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.11$: Problem $3$




