# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_4_y_%3D_x%5E2_-_3_x_-_4

Theorem
The second order ODE:

$(1): \quad y - 4 y = x^2 - 3 x - 4$
has the general solution:

$y = C_1 e^{2 x} + C_2 e^{-2 x} - \dfrac {x^2} 4 + \dfrac {3 x} 4 + \dfrac 7 8$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = 0$
$q = -4$
$\map R x = x^2 - 3 x - 4$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y - 4 y = 0$
From Linear Second Order ODE: $y - 4 y = 0$, this has the general solution:

$y_g = C_1 e^{2 x} + C_2 e^{-2 x}$

We have that:

$\map R x = x^2 - 3 x - 4$
and so from the Method of Undetermined Coefficients for Polynomial function:

$y_p = A_1 x^2 + A_2 x + A_3$
Hence:














\(\ds y_p\)

\(=\)







\(\ds A_1 x^2 + A_2 x + A_3\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds 2 A_1 x + A_2\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}\)

\(=\)







\(\ds 2 A_1\)










Substituting in $(1)$:














\(\ds \paren {2 A_1} - 4 \paren {A_1 x^2 + A_2 x + A_3}\)

\(=\)







\(\ds x^2 - 3 x - 4\)














\(\ds \leadsto \ \ \)





\(\ds 2 A_1 - 4 A_3\)

\(=\)







\(\ds -4\)





equating coefficients














\(\ds -4 A_2\)

\(=\)







\(\ds -3\)




















\(\ds -4 A_1\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds A_1\)

\(=\)







\(\ds -\dfrac 1 4\)




















\(\ds A_2\)

\(=\)







\(\ds \dfrac 3 4\)




















\(\ds A_3\)

\(=\)







\(\ds \dfrac 7 8\)









So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^{2 x} + C_2 e^{-2 x} - \dfrac {x^2} 4 + \dfrac {3 x} 4 + \dfrac 7 8$
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: Problems for Chapter $1$: $8$




