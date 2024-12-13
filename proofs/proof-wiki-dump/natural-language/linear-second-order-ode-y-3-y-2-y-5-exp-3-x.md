# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_3_y%27_%2B_2_y_%3D_5_exp_3_x

Theorem
The second order ODE:

$(1): \quad y - 3 y' + 2 y = 5 e^{3 x}$
has the general solution:

$y = C_1 e^x + C_2 e^{2 x} + \dfrac {5 e^{3 x} } 2$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = -3$
$q = 2$
$\map R x = 5 e^{3 x}$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y - 3 y' + 2 y = 0$
From Linear Second Order ODE: $y - 3 y' + 2 y = 0$, this has the general solution:

$y_g = C_1 e^x + C_2 e^{2 x}$

We have that:

$\map R x = 5 e^{3 x}$
and so from the Method of Undetermined Coefficients for the Exponential function:

$y_p = \dfrac {K e^{a x} } {a^2 + p a + q}$
where:

$K = 5$
$a = 3$
$p = -3$
$q = 2$

Hence:














\(\ds y_p\)

\(=\)







\(\ds \dfrac {5 e^{3 x} } {3^2 - 3 \times 3 + 2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {5 e^{3 x} } {9 - 9 + 2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {5 e^{3 x} } 2\)










So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^x + C_2 e^{2 x} + \dfrac {5 e^{3 x} } 2$
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 2$. The second order equation: $\S 2.4$ Particular solution: exponential $\map f x$: Example $3$




