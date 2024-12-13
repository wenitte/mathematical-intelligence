# 

Source: https://proofwiki.org/wiki/Second_Order_ODE/x%5E2_y%27%27_%3D_2_x_y%27_%2B_(y%27)%5E2

Theorem
The second order ODE:

$x^2 y = 2 x y' + \paren {y'}^2$
has the general solution:

$y = -\dfrac {x^2} 2 - C_1 x - {C_1}^2 \, \map \ln {x - C_1} + C_2$


Proof
The proof proceeds by using Solution of Second Order Differential Equation with Missing Dependent Variable.
Substitute $p$ for $y'$:














\(\ds x^2 \dfrac {\d p} {\d x}\)

\(=\)







\(\ds 2 x p + p^2\)














\(\ds \leadsto \ \ \)





\(\ds p = \frac {\d y}{\d x}\)

\(=\)







\(\ds -\frac {x^2} {x - C_1}\)





Bernoulli's Equation: $x^2 \rd y = \paren {2 x y + y^2} \rd x$








\(\ds \leadsto \ \ \)





\(\ds \int \rd y\)

\(=\)







\(\ds -\int \frac {x^2} {x - C_1} \rd x\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds -\frac {x^2} 2 - C_1 x - {C_1}^2 \, \map \ln {x - C_1} + C_2\)





Primitive of $\dfrac {x^2} {a x + b}$



$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.11$: Problem $1 \ \text{(d)}$




