# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_2_y%27_%2B_y_%3D_2_x/Proof_3

Theorem
The second order ODE:

$(1): \quad y' ' - 2 y' + y = 2 x$
has the general solution:

$y = C_1 e^x + C_2 x e^x + 2 x + 4$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y' ' + p y' + q y = \map R x$
where:

$p = -2$
$q = 1$
$\map R x = 2 x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$(2): \quad y' ' - 2 y' + y = 0$
From Linear Second Order ODE: $y - 2 y' + y = 0$, this has the general solution:

$y_g = C_1 e^x + C_2 x e^x$

We have that:

$R \left({x}\right) = 2 x$
So from the Method of Undetermined Coefficients for Polynomial:

$y_p = A_0 + A_1 x$

Hence:














\(\ds y_p\)

\(=\)







\(\ds A_0 + A_1 x\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds A_1\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds {y_p}\)

\(=\)







\(\ds 0\)





Derivative of Constant




Substituting into $(1)$:














\(\ds 0 - 2 A_1 + \paren {A_0 + A_1 x}\)

\(=\)







\(\ds 2 x\)














\(\ds \leadsto \ \ \)





\(\ds -2 A_1 + A_0\)

\(=\)







\(\ds 0\)





equating coefficients








\(\ds \leadsto \ \ \)





\(\ds A_1\)

\(=\)







\(\ds 2\)














\(\ds \leadsto \ \ \)





\(\ds A_0\)

\(=\)







\(\ds 4\)










So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^x + C_2 x e^x + 2 x + 4$
is the general solution to $(1)$.
$\blacksquare$





