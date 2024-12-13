# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_y_%3D_K

Theorem
The second order ODE:

$(1): \quad y + y = K$
has the general solution:

$y = C_1 \sin x + C_2 \cos x + K$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = 0$
$q = 1$
$\map R x = K$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$(2): \quad y + y = 0$
From Linear Second Order ODE: $y + y = 0$, this has the general solution:

$y_g = C_1 \sin x + C_2 \cos x$

We have that:

$\map R x = K$
So from the Method of Undetermined Coefficients for Polynomial:

$y_p = A K$
where $A$ is to be determined.

Hence:














\(\ds y_p\)

\(=\)







\(\ds A K\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds 0\)





Derivative of Constant








\(\ds \leadsto \ \ \)





\(\ds {y_p}\)

\(=\)







\(\ds 0\)





Derivative of Constant




Substituting into $(1)$:














\(\ds A K\)

\(=\)







\(\ds K\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds 1\)









Our work is done.
So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 \sin x + C_2 \cos x + K$
$\blacksquare$





