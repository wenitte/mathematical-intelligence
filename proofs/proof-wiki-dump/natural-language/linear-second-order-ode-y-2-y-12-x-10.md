# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_2_y%27_%3D_12_x_-_10

Theorem
The second order ODE:

$(1): \quad y - 2 y' = 12 x - 10$
has the general solution:

$y = C_1 + C_2 e^{2 x} + 2 x - 3 x^2$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = 2$
$q = 0$
$\map R x = 12 x - 10$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y - 2 y' = 0$
From Linear Second Order ODE: $y - 2 y' = 0$, this has the general solution:

$y_g = C_1 + C_2 e^{2 x}$

We have that:

$\map R x = 12 x - 10$
and it is noted that $12 x - 10$ is not itself a particular solution of $(2)$.
So from the Method of Undetermined Coefficients for Polynomials:

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














\(\ds 2 A_2 - 2 \paren {A_1 + 2 A_2 x}\)

\(=\)







\(\ds 12 x - 10\)














\(\ds \leadsto \ \ \)





\(\ds -4 A_2 x\)

\(=\)







\(\ds 12 x\)





equating coefficients














\(\ds 2 A_2 - 2 A_1\)

\(=\)







\(\ds -10\)














\(\ds \leadsto \ \ \)





\(\ds A_2\)

\(=\)







\(\ds -3\)














\(\ds \leadsto \ \ \)





\(\ds -6 - 2 A_1\)

\(=\)







\(\ds -10\)














\(\ds \leadsto \ \ \)





\(\ds -2 A_1\)

\(=\)







\(\ds -4\)














\(\ds \leadsto \ \ \)





\(\ds A_1\)

\(=\)







\(\ds 2\)









So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 + C_2 e^{2 x} + 2 x - 3 x^2$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.18$: Problem $1 \ \text{(h)}$




