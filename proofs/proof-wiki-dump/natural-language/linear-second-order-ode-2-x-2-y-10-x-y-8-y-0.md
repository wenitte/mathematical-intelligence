# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/2_x%5E2_y%27%27_%2B_10_x_y%27_%2B_8_y_%3D_0

Theorem
The second order ODE:

$(1): \quad 2 x^2 y' ' + 10 x y' + 8 y = 0$
has the general solution:

$y = C_1 x^{-2} + C_2 x^{-2} \ln x$


Proof
Let $(1)$ be rewritten as:

$x^2 y' ' + 5 x y' + 4 y = 0$
It can be seen to be an instance of the Cauchy-Euler Equation:

$x^2 y' ' + p x y' + q y = 0$
where:

$p = 5$
$q = 4$

By Conversion of Cauchy-Euler Equation to Constant Coefficient Linear ODE, this can be expressed as:

$\dfrac {\d^2 y} {\d t^2} + \paren {p - 1} \dfrac {\d y} {\d t^2} + q y = 0$
by making the substitution:

$x = e^t$

Hence it can be expressed as:

$(2): \quad \dfrac {\d^2 y} {\d t^2} + 4 \dfrac {\d y} {\d t^2} + 4 y = 0$

From Linear Second Order ODE: $y' ' + 4 y' + 4 y = 0$, this has the general solution:














\(\ds y\)

\(=\)







\(\ds C_1 e^{-2 t} + C_2 t e^{-2 t}\)




















\(\ds \)

\(=\)







\(\ds C_1 x^{-2} + C_2 t x^{-2}\)





substituting $x = e^t$














\(\ds \)

\(=\)







\(\ds C_1 x^{-2} + C_2 x^{-2} \ln x\)





substituting $t = \ln x$



$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.17$: Problem $4 \ \text{(b)}$




