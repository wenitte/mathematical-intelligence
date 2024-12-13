# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_5_y%27_%2B_6_y_%3D_cos_x_%2B_sin_x

Theorem
The second order ODE:

$(1): \quad y' ' - 5 y' + 6 y = \cos x + \sin x$
has the general solution:

$y = C_1 e^{2 x} + C_2 e^{3 x} + \dfrac {\cos x} 5$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE in the form:

$y' ' + p y' + q y = \map R x $
where:

$p = -5$
$q = 5$
$\map R x = \cos x + \sin x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y' ' - 5 y' + 6 y = 0$
From Linear Second Order ODE: $y - 5 y' + 6 y = 0$, this has the general solution:

$y_g = C_1 e^{2 x} + C_2 e^{3 x}$

It remains to find a particular solution $y_p$ to $(1)$.

We have that:

$\map R x = e^{-x} \cos x$
From the Method of Undetermined Coefficients for Sine and Cosine:

$y_p = A \cos x + B \sin x$
where $A$ and $B$ are to be determined.

Hence:














\(\ds y_p\)

\(=\)







\(\ds A \cos x + B \sin x\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds -A \sin x + B \cos x\)





Derivative of Sine Function, Derivative of Cosine Function








\(\ds \leadsto \ \ \)





\(\ds {y_p}' '\)

\(=\)







\(\ds -A \cos x - B \sin x\)





Derivative of Sine Function, Derivative of Cosine Function




Substituting into $(1)$:














\(\ds \paren {-A \cos x - B \sin x} - 5 \paren {-A \sin x + B \cos x} + 6 \paren {A \cos x + B \sin x}\)

\(=\)







\(\ds \cos x + \sin x\)














\(\ds \leadsto \ \ \)





\(\ds \paren {5 A - 5 B} \cos x\)

\(=\)







\(\ds \cos x\)





equating coefficients














\(\ds \paren {5 B + 5 A} \sin x\)

\(=\)







\(\ds \sin x\)














\(\ds \leadsto \ \ \)





\(\ds 10 A\)

\(=\)







\(\ds 2\)




















\(\ds 10 B\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \dfrac 1 5\)




















\(\ds B\)

\(=\)







\(\ds 0\)










Hence the result:

$y_p = \dfrac {\cos x} 5$
So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^{2 x} + C_2 e^{3 x} + \dfrac {\cos x} 5$
is the general solution to $(1)$.
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: Problems for Chapter $1$: $7$




