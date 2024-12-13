# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/x%5E2_y%27%27_%2B_2_x_y%27_-_12_y_%3D_0

Theorem
The second order ODE:

$(1): \quad x^2 y + 2 x y' - 12 y = 0$
has the general solution:

$y = C_1 x^3 + C_2 x^{-4}$


Proof
It can be seen that $(1)$ is an instance of the Cauchy-Euler Equation:

$x^2 y + p x y' + q y = 0$
where:

$p = 2$
$q = -12$

By Conversion of Cauchy-Euler Equation to Constant Coefficient Linear ODE, this can be expressed as:

$\dfrac {\d^2 y} {\d t^2} + \paren {p - 1} \dfrac {\d y} {\d t^2} + q y = 0$
by making the substitution:

$x = e^t$

Hence it can be expressed as:

$(2): \quad \dfrac {\d^2 y} {\d t^2} + \dfrac {\d y} {\d t^2} - 12 y = 0$

From Linear Second Order ODE: $y + y' - 12 y = 0$, this has the general solution:














\(\ds y\)

\(=\)







\(\ds C_1 e^{3 t} + C_2 e^{-4 t}\)




















\(\ds \)

\(=\)







\(\ds C_1 x^3 + C_2 x^{-4}\)





substituting $x = e^t$



$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.17$: Problem $4 \ \text{(c)}$




