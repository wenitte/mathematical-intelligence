# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_y_%3D_exp_-x_cos_x

Theorem
The second order ODE:

$(1): \quad y + y = e^{-x} \cos x$
has the general solution:

$y = \dfrac {e^{-x} } 5 \paren {\cos x - 2 \sin x} + C_1 \sin x + C_2 \cos x$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE in the form:

$y + p y' + q y = \map R x$
where:

$p = 0$
$q = 1$
$\map R x = e^{-x} \cos x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y + y = 0$
From Linear Second Order ODE: $y + y = 0$, this has the general solution:

$y_g = C_1 \sin x + C_2 \cos x$

It remains to find a particular solution $y_p$ to $(1)$.

We have that:

$\map R x = e^{-x} \cos x$
From the Method of Undetermined Coefficients for Exponential of Sine and Cosine:

$y_p = e^{-x} \paren {A \cos x + B \sin x}$
where $A$ and $B$ are to be determined.

Hence:














\(\ds y_p\)

\(=\)







\(\ds e^{-x} \paren {A \cos x + B \sin x}\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds -e^{-x} \paren {A \cos x + B \sin x} + e^{-x} \paren {-A \sin x + B \cos x}\)





Product Rule for Derivatives etc.














\(\ds \)

\(=\)







\(\ds e^{-x} \paren {\paren {B - A} \cos x - \paren {A + B} \sin x}\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}\)

\(=\)







\(\ds -e^{-x} \paren {\paren {B - A} \cos x - \paren {A + B} \sin x} + e^{-x} \paren {-\paren {B - A} \sin x - \paren {A + B} \cos x}\)





Product Rule for Derivatives etc.














\(\ds \)

\(=\)







\(\ds e^{-x} \paren {-2 B \cos x + 2 A \sin x}\)










Substituting into $(1)$:














\(\ds e^{-x} \paren {-2 B \cos x + 2 A \sin x} + e^{-x} \paren {A \cos x + B \sin x}\)

\(=\)







\(\ds e^{-x} \cos x\)














\(\ds \leadsto \ \ \)





\(\ds -2 B \cos x + A \cos x\)

\(=\)







\(\ds \cos x\)





equating coefficients














\(\ds 2 A \sin x + B \sin x\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds A - 2 B\)

\(=\)







\(\ds 1\)




















\(\ds 2 A + B\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 5 A\)

\(=\)







\(\ds 1\)




















\(\ds 5 B\)

\(=\)







\(\ds -2\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \dfrac 1 5\)




















\(\ds B\)

\(=\)







\(\ds -\dfrac 2 5\)










Hence the result:

$y_p = \dfrac {e^{-x} } 5 \paren {\cos x - 2 \sin x}$
So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = \dfrac {e^{-x} } 5 \paren {\cos x - 2 \sin x} + C_1 \sin x + C_2 \cos x$
is the general solution to $(1)$.
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: Problems for Chapter $1$: $6$




