# 

Source: https://proofwiki.org/wiki/Second_Order_ODE/x_y%27%27_-_y%27_%3D_3_x%5E2

Theorem
The second order ODE:

$(1): \quad x y - y' = 3 x^2$
has the general solution:

$y = x^3 + \dfrac {C_1 x^2} 2 + C^2$


Proof
The proof proceeds by using Solution of Second Order Differential Equation with Missing Dependent Variable.
Substitute $p$ for $y'$ in $(1)$:

$x \dfrac {\d p} {\d x} - p = 3 x^2$
and divide through by $x$:

$\dfrac {\d p} {\d x} - \dfrac p x = 3 x$

From:

Linear First Order ODE: $y' - \dfrac y x = 3 x$
its solution is:

$p = 3 x^2 + C_1 x$

Substituting back for $p$:

$\dfrac {\d y} {\d x} = 3 x^2 + C_1 x$
which is separable, leading to:

$y = x^3 + \dfrac {C_1 x^2} 2 + C^2$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.11$: Reduction of Order: Example $1$




