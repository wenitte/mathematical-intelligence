# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_2_y%27_%2B_5_y_%3D_25_x%5E2_%2B_12

Theorem
The second order ODE:

$(1): \quad y - 2 y' + 5 y = 25 x^2 + 12$
has the general solution:

$y = e^x \paren {C_1 \cos 2 x + C_2 \sin 2 x} + 2 + 4 x + 5 x^2$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = -2$
$q = 5$
$\map R x = 25 x^2 + 12$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$(2): \quad y - 2 y' + 5 y = 0$
From Linear Second Order ODE: $y - 2 y' + 5 y = 0$, this has the general solution:

$y_g = e^x \paren {C_1 \cos 2 x + C_2 \sin 2 x}$

We have that:

$\map R x = 25 x^2 + 12$
and it is noted that $25 x^2 + 12$ is not itself a particular solution of $(2)$.
So from the Method of Undetermined Coefficients for Polynomials:

$y_p = A_0 + A_1 x + A_2 x^2$
for $A_n$ to be determined.

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














\(\ds 2 A_2 - 2 \paren {A_1 + 2 A_2 x} + 5 \paren {A_0 + A_1 x + A_2 x^2}\)

\(=\)







\(\ds 25 x^2 + 12\)














\(\ds \leadsto \ \ \)





\(\ds 5 A_2 x^2\)

\(=\)







\(\ds 25 x^2\)





equating powers














\(\ds -4 A_2 x + 5 A_1 x\)

\(=\)







\(\ds 0\)




















\(\ds 2 A_2 - 2 A_1 + 5 A_0\)

\(=\)







\(\ds 12\)














\(\ds \leadsto \ \ \)





\(\ds A_2\)

\(=\)







\(\ds 5\)














\(\ds \leadsto \ \ \)





\(\ds -4 \times 5 x + 5 A_1 x\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds -4 + A_1\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds A_1\)

\(=\)







\(\ds 4\)














\(\ds \leadsto \ \ \)





\(\ds 2 \times 5 - 2 \times 4 + 5 A_0\)

\(=\)







\(\ds 12\)














\(\ds \leadsto \ \ \)





\(\ds 10 - 8 + 5 A_0\)

\(=\)







\(\ds 12\)














\(\ds \leadsto \ \ \)





\(\ds 5 A_0\)

\(=\)







\(\ds 10\)














\(\ds \leadsto \ \ \)





\(\ds A_0\)

\(=\)







\(\ds 2\)









So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = e^x \paren {C_1 \cos 2 x + C_2 \sin 2 x} + 2 + 4 x + 5 x^2$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.18$: Problem $1 \ \text{(d)}$




