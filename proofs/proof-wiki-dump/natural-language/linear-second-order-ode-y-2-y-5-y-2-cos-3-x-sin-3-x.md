# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_2_y%27_-_5_y_%3D_2_cos_3_x_-_sin_3_x

Theorem
The second order ODE:

$(1): \quad y - 2 y' - 5 y = 2 \cos 3 x - \sin 3 x$
has the general solution:

$y = C_1 \map \exp {\paren {1 + \sqrt 6} x} + C_2 \map \exp {\paren {1 - \sqrt 6} x} + \dfrac 1 {116} \paren {\sin 3 x - 17 \cos 3 x}$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = -2$
$q = -5$
$\map R x = 2 \cos 3 x - \sin 3 x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y - 2 y' - 5 y = 0$
From Linear Second Order ODE: $y - 2 y' - 5 y = 0$, this has the general solution:

$y_g = C_1 \map \exp {\paren {1 + \sqrt 6} x} + C_2 \map \exp {\paren {1 - \sqrt 6} x}$

We have that:

$\map R x = 2 \cos 3 x - \sin 3 x$
and it is noted that $2 \cos 3 x - \sin 3 x$ is not itself a particular solution of $(2)$.

We then determine the particular solution:


Particular Solution
The second order ODE:

$(1): \quad y - 2 y' - 5 y = 2 \cos 3 x - \sin 3 x$
has a particular solution:

$y_p = \dfrac 1 {116} \paren {\sin 3 x - 17 \cos 3 x}$

So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 \map \exp {\paren {1 + \sqrt 6} x} + C_2 \map \exp {\paren {1 - \sqrt 6} x} + \dfrac 1 {116} \paren {\sin 3 x - 17 \cos 3 x}$
$\blacksquare$





