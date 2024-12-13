# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_4_y%27_%2B_5_y_%3D_2_exp_-2_x

Theorem
The second order ODE:

$(1): \quad y + 4 y' + 5 y = 2 e^{-2 x}$
has the general solution:

$y = e^{-2 x} \paren {C_1 \cos x + C_2 \sin x + 2}$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE in the form:

$y + p y' + q y = \map R x$
where:

$p = 4$
$q = 5$
$\map R x = 2 e^{-2 x}$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y + 4 y' + 5 y = 0$
From Linear Second Order ODE: $y + 4 y' + 5 y = 0$, this has the general solution:

$y_g = e^{-2 x} \paren {C_1 \cos x + C_2 \sin x}$

It remains to find a particular solution $y_p$ to $(1)$.

We have that:

$\map R x = 2 e^{-2 x}$
and so from the Method of Undetermined Coefficients for the Exponential Function:

$y_p = \dfrac {K e^{a x} } {a^2 + p a + q}$
where:

$K = 2$
$a = -2$
$p = 4$
$q = 5$

Hence:














\(\ds y_p\)

\(=\)







\(\ds \dfrac {2 e^{-2 x} } {\paren {-2}^2 + 4 \times \paren {-2} + 5}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 e^{-2 x} } {4 - 8 + 5}\)




















\(\ds \)

\(=\)







\(\ds 2 e^{-2 x}\)










So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = e^{-2 x} \paren {C_1 \cos x + C_2 \sin x + 2}$
is the general solution to $(1)$.
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: Problems for Chapter $1$: $5$




