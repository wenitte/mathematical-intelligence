# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_2_y%27_%2B_y_%3D_exp_x

Theorem
The second order ODE:

$(1): \quad y - 2 y' + y = e^x$
has the general solution:

$y = C_1 e^x + C_2 x e^x + \dfrac {x^2 e^x} 2$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = -2$
$q = 1$
$\map R x = e^x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y - 2 y' + y = 0$
From Linear Second Order ODE: $y - 2 y' + y = 0$, this has the general solution:

$y_g = C_1 e^x + C_2 x e^x$

We have that:

$\map R x = e^x$
and so from the Method of Undetermined Coefficients for the Exponential function:

$y_p = \dfrac {K x^2 e^{a x} } 2$
where:

$K = 1$
$a = 1$

Hence:














\(\ds y_p\)

\(=\)







\(\ds \dfrac {x^2 e^x} 2\)










So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^x + C_2 x e^x + \dfrac {x^2 e^x} 2$
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 2$. The second order equation: $\S 2.5$ Particular solution: exponential $\map f x$: Example $5$




