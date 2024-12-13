# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_3_y%27_-_10_y_%3D_6_exp_4_x

Theorem
The second order ODE:

$(1): \quad y' ' + 3 y' - 10 y = 6 e^{4 x}$
has the general solution:

$y = C_1 e^{2 x} + C_2 e^{-5 x} + \dfrac {e^{4 x} } 3$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y' ' + p y' + q y = \map R x$
where:

$p = 3$
$q = -10$
$\map R x = 6 e^{4 x}$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y' ' + 3 y' - 10 y = 0$
From Linear Second Order ODE: $y' ' + 3 y' - 10 y = 0$, this has the general solution:

$y_g = C_1 e^{2 x} + C_2 e^{-5 x}$

We have that:

$\map R x = 6 e^{4 x}$
and so from the Method of Undetermined Coefficients for the Exponential function:

$y_p = \dfrac {K e^{a x} } {a^2 + p a + q}$
where:

$K = 6$
$a = 4$
$p = 3$
$q = -10$

Hence:














\(\ds y_p\)

\(=\)







\(\ds \dfrac {6 e^{4 x} } {4^2 + 3 \times 4 - 10}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {6 e^{4 x} } {16 + 12 - 10}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {e^{4 x} } 3\)










So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^{2 x} + C_2 e^{-5 x} + \dfrac {e^{4 x} } 3$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.18$: Problem $1 \ \text{(a)}$




