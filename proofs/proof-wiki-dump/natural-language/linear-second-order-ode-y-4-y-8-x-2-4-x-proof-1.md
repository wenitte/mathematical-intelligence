# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_4_y_%3D_8_x%5E2_-_4_x/Proof_1

Theorem
The second order ODE:

$(1): \quad y + 4 y = 8 x^2 - 4 x$
has the general solution:

$y = C_1 \sin 2 x + C_2 \cos 2 x - 1 - x + 2 x^2$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = 0$
$q = 4$
$\map R x = 8 x^2 - 4 x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$(2): \quad y + 4 y = 0$
From Linear Second Order ODE: $y + 4 y = 0$, this has the general solution:

$y_g = C_1 \sin 2 x + C_2 \cos 2 x$

From the Method of Undetermined Coefficients for Polynomials:

$y_p = A_0 + A_1 x + A_2 x^2$
where $A$ and $B$ are to be determined.

Hence:














\(\ds y_p\)

\(=\)







\(\ds A_0 + A_1 x + A_2 x^2\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds A_1 + 2 A_2 x\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds {y_p}\)

\(=\)







\(\ds 2 A_2\)





Power Rule for Derivatives




Substituting into $(1)$:














\(\ds 2 A_2 + 4 \paren {A_0 + A_1 x + A_2 x^2}\)

\(=\)







\(\ds 8 x^2 - 4 x\)














\(\ds \leadsto \ \ \)





\(\ds 2 A_2 + 4 A_0\)

\(=\)







\(\ds 0\)





equating coefficients














\(\ds 4 A_1\)

\(=\)







\(\ds -4\)




















\(\ds 4 A_2\)

\(=\)







\(\ds 8\)














\(\ds \leadsto \ \ \)





\(\ds A_1\)

\(=\)







\(\ds -1\)




















\(\ds A_2\)

\(=\)







\(\ds 2\)




















\(\ds A_0\)

\(=\)







\(\ds -1\)










So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 \sin 2 x + C_2 \cos 2 x - 1 - x + 2 x^2$
is the general solution to $(1)$.
$\blacksquare$





