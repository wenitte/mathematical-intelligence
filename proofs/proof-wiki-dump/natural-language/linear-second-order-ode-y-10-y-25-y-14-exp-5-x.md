# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_10_y%27_%2B_25_y_%3D_14_exp_-5_x

Theorem
The second order ODE:

$(1): \quad y + 10 y' + 25 y = 14 e^{-5 x}$
has the general solution:

$y = C_1 \cos 2 x + C_2 \sin 2 x + \sin x$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = 10$
$q = 25$
$\map R x = 14 e^{-5 x}$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$(2): \quad y + 10 y' + 25 y = 0$
From Linear Second Order ODE: $y + 10 y' + 25 y = 0$, this has the general solution:

$y_g = C_1 e^{-5 x} + C_2 x e^{-5 x}$

We have that:

$\map R x = 14 e^{-5 x}$
and it is noted that $14 e^{-5 x}$ is a particular solution of $(2)$.
So from the Method of Undetermined Coefficients for the Exponential function:

$y_p = A x^2 e^{-5 x}$
where:

$A = \dfrac {14} 2$
So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^{-5 x} + C_2 x e^{-5 x} + 7 x^2 e^{-5 x}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.18$: Problem $1 \ \text{(c)}$




