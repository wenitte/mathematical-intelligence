# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_4_y_%3D_6_cosine_x

Theorem
The second order ODE:

$(1): \quad y + 4 y = 6 \cos x$
has the general solution:

$y = C_1 \sin 2 x + C_2 \cos 2 x + 2 \cos x$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = 0$
$q = 4$
$\map R x = 6 \cos x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$(2): \quad y + 4 y = 0$
From Linear Second Order ODE: $y + 4 y = 0$, this has the general solution:

$y_g = C_1 \sin 2 x + C_2 \cos 2 x$

It is noted that $\cos x$ is not a particular solution of $(2)$.
So from the Method of Undetermined Coefficients for Sine and Cosine:

$y_p = A \sin x + B \cos x$
where $A$ and $B$ are to be determined.

Hence:














\(\ds y_p\)

\(=\)







\(\ds A \sin x + B \cos x\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds A \cos x - B \sin x\)





Derivative of Sine Function, Derivative of Cosine Function








\(\ds \leadsto \ \ \)





\(\ds {y_p}\)

\(=\)







\(\ds -A \sin x - B \cos x\)





Derivative of Sine Function, Derivative of Cosine Function




Substituting into $(1)$:














\(\ds -A \sin x - B \cos x + 4 \paren {A \sin x + B \cos x}\)

\(=\)







\(\ds 6 \cos x\)














\(\ds \leadsto \ \ \)





\(\ds 3 A \sin x\)

\(=\)







\(\ds 0\)





equating coefficients














\(\ds 3 B \cos x\)

\(=\)







\(\ds 6 \cos x\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds 0\)




















\(\ds B\)

\(=\)







\(\ds 2\)










So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 \sin k x + C_2 \cos k x + 2 \cos x$
is the general solution to $(1)$.
$\blacksquare$





