# 

Source: https://proofwiki.org/wiki/Second_Order_ODE/x_y%27%27_%3D_y%27_%2B_(y%27)%5E3

Theorem
The second order ODE:

$(1): \quad x y = y' + \paren {y'}^3$
has the general solution:

$x^2 + \paren {y - C_2}^2 = C_1^2$


Proof
The proof proceeds by using Solution of Second Order Differential Equation with Missing Dependent Variable.
Substitute $p$ for $y'$ in $(1)$:














\(\ds x \dfrac {\d p} {\d x}\)

\(=\)







\(\ds p + p^3\)














\(\ds \leadsto \ \ \)





\(\ds p = \frac {\d y} {\d x}\)

\(=\)







\(\ds \frac x {\sqrt {C_1^2 - x^2} }\)





First Order ODE: $x \rd y = \paren {y + y^3} \rd x$








\(\ds \leadsto \ \ \)





\(\ds \int \rd y\)

\(=\)







\(\ds \int \frac x {\sqrt {C_1^2 - x^2} }\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds -\sqrt {C_1^2 - x^2} + C_2\)





Primitive of $\dfrac x {\sqrt{a^2 - x^2} }$








\(\ds \leadsto \ \ \)





\(\ds x^2 + \paren {y - C_2}^2\)

\(=\)







\(\ds C_1^2\)





rearranging



$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.11$: Problem $1 \ \text{(b)}$




