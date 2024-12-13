# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_y_%3D_3_exp_-x

Theorem
The second order ODE:

$(1): \quad y - y = 3 e^{-x}$
has the general solution:

$y = C_1 e^x + C_2 e^{-x} - \dfrac {3 x e^{-x} } 2$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = 0$
$q = -1$
$\map R x = 3 e^{-x}$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y - y = 0$
From Linear Second Order ODE: $y - y = 0$, this has the general solution:

$y_g = C_1 e^x + C_2 e^{-x}$

We have that:

$\map R x = 3 e^{-x}$
and so from the Method of Undetermined Coefficients for the Exponential function:

$y_p = \dfrac {K x e^{a x} } {2 a + p}$
where:

$K = 3$
$a = -1$
$p = 0$

Hence:














\(\ds y_p\)

\(=\)







\(\ds \dfrac {3 x e^{-x} } {2 \times \paren {-1} + 0}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3 x e^{-x} } {-2}\)




















\(\ds \)

\(=\)







\(\ds -\dfrac {3 x e^{-x} } 2\)










So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^x + C_2 e^{-x} - \dfrac {3 x e^{-x} } 2$
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 2$. The second order equation: $\S 2.4$ Particular solution: exponential $\map f x$: Example $4$




