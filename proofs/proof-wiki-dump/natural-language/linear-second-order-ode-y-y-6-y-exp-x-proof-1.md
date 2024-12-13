# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_y%27_-_6_y_%3D_exp_-x/Proof_1

Theorem
The second order ODE:

$(1): \quad y - y' - 6 y = e^{-x}$
has the general solution:

$y = C_1 e^{3 x} + C_2 e^{-2 x} - \dfrac {e^{-x} } 4$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = -1$
$q = -6$
$\map R x = e^{-x}$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y - y' - 6 y = 0$
From Linear Second Order ODE: $y - y' - 6 y = 0$, this has the general solution:

$y_g = C_1 e^{3 x} + C_2 e^{-2 x}$

We have that:

$\map R x = e^{-x}$
and so from the Method of Undetermined Coefficients for the Exponential function:

$y_p = \dfrac {K e^{a x} } {a^2 + p a + q}$
where:

$K = 1$
$a = -1$
$p = -1$
$q = -6$

Hence:














\(\ds y_p\)

\(=\)







\(\ds \dfrac {e^{-x} } {1 + 1 - 6}\)




















\(\ds \)

\(=\)







\(\ds -\dfrac {e^{-x} } 4\)










So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^{3 x} + C_2 e^{-2 x} - \dfrac {e^{-x} } 4$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.19$: Problem $2$




