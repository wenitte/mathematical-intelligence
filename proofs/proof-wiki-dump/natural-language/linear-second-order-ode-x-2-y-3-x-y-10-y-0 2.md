# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/x%5E2_y%27%27_%2B_3_x_y%27_%2B_10_y_%3D_0

Theorem
The second order ODE:

$(1): \quad x^2 y + 3 x y' + 10 y = 0$
has the general solution:

$y = \dfrac 1 x \paren {C_1 \map \cos {\ln x^3} + C_2 \map \sin {\ln x^3} }$


Proof
$(1)$ is an instance of the Cauchy-Euler Equation:

$x^2 y + p x y' + q y = 0$
where:

$p = 3$
$q = 10$

By Conversion of Cauchy-Euler Equation to Constant Coefficient Linear ODE, this can be expressed as:

$\dfrac {\d^2 y} {\d t^2} + \paren {p - 1} \dfrac {\d y} {\d t^2} + q y = 0$
by making the substitution:

$x = e^t$

Hence $(1)$ can be expressed as:

$(2): \quad \dfrac {\d^2 y} {\d t^2} + 2 \dfrac {\d y} {\d t^2} + 10 y = 0$

It can be seen that $(2)$ is a constant coefficient homogeneous linear second order ODE.

From Linear Second Order ODE: $y + 2 y' + 10 y = 0$, this has the general solution:














\(\ds y\)

\(=\)







\(\ds e^{-t} \paren {C_1 \cos 3 t + C_2 \sin 3 t}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 x \paren {C_1 \cos 3 t + C_2 \sin 3 t}\)





substituting $x = e^t$














\(\ds \)

\(=\)







\(\ds \dfrac 1 x \paren {C_1 \map \cos {3 \ln x} + C_2 \map \sin {3 \ln x} }\)





substituting $t = \ln x$














\(\ds \)

\(=\)







\(\ds \dfrac 1 x \paren {C_1 \map \cos {\ln x^3} + C_2 \map \sin {\ln x^3} }\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.17$: Problem $4 \ \text{(a)}$




