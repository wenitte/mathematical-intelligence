# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_y%27_-_6_y_%3D_20_exp_-2_x

Theorem
The second order ODE:

$(1): \quad y - y' - 6 y = 20 e^{-2 x}$
has the general solution:

$y = C_1 e^{3 x} + C_2 e^{-2 x} - 4 x e^{-2 x}$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = -1$
$q = -6$
$\map R x = 20 e^{-2 x}$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y - y' - 6 y = 0$
From Linear Second Order ODE: $y - y' - 6 y = 0$, this has the general solution:

$y_g = C_1 e^{3 x} + C_2 e^{-2 x}$

We have that:

$\map R x = 20 e^{-2 x}$
and so from the Method of Undetermined Coefficients for the Exponential function:

$y_p = \dfrac {K x e^{a x} } {2 a + p}$
where:

$K = 20$
$a = -2$
$p = -1$

Hence:














\(\ds y_p\)

\(=\)







\(\ds \dfrac {20 x e^{-2 x} } {2 \times \paren {-2} - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {20 x e^{-2 x} } {-5}\)




















\(\ds \)

\(=\)







\(\ds -4 x e^{-2 x}\)










So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^{3 x} + C_2 e^{-2 x} - 4 x e^{-2 x}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.18$: Problem $1 \ \text{(e)}$




