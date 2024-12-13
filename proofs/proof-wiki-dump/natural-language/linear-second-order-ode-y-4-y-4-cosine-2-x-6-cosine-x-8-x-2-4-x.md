# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_4_y_%3D_4_cosine_2_x_%2B_6_cosine_x_%2B_8_x%5E2_-_4_x

Theorem
The second order ODE:

$(1): \quad y + 4 y = 4 \cos 2 x + 6 \cos x + 8 x^2 - 4 x$
has the general solution:

$y = C_1 \sin 2 x + C_2 \cos 2 x + x \sin 2 x + 2 \cos x - 1 - x + 2 x^2$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = 0$
$q = 4$
$\map R x = 4 \cos 2 x + 6 \cos x + 8 x^2 - 4 x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$(2): \quad y + 4 y = 0$
From Linear Second Order ODE: $y + 4 y = 0$, this has the general solution:

$y_g = C_1 \sin 2 x + C_2 \cos 2 x$

We have that:

$\map R x = 4 \cos 2 x + 6 \cos x + 8 x^2 - 4 x$
Let:

$\map R x = \map {R_1} x + \map {R_2} x + \map {R_3} x$
where:

$\map {R_1} x = 4 \cos 2 x$
$\map {R_2} x = 6 \cos x$
$\map {R_3} x = 8 x^2 - 4 x$

Consider in turn the solutions to:

$y + p y' + q y = \map {R_1} x$
From Linear Second Order ODE: $y + 4 y = 4 \cos 2 x$, this has the general solution:

$y = C_1 \sin 2 x + C_2 \cos 2 x + x \sin 2 x$


$y + p y' + q y = \map {R_2} x$
From Linear Second Order ODE: $y + 4 y = 6 \cos x$, this has the general solution:

$y = C_1 \sin 2 x + C_2 \cos 2 x + 2 \cos x$


$y + p y' + q y = \map {R_3} x$
From Linear Second Order ODE: $y + 4 y = 8 x^2 - 4 x$, this has the general solution:

$y = C_1 \sin 2 x + C_2 \cos 2 x - 1 - x + 2 x^2$

It follows from Combination of Solutions to Non-Homogeneous LSOODE with same Homogeneous Part that the general solution to $(1)$ is:

$y = C_1 \sin 2 x + C_2 \cos 2 x + x \sin 2 x + 2 \cos x - 1 - x + 2 x^2$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.18$: Problem $3$




