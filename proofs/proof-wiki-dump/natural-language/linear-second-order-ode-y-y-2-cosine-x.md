# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_y_%3D_2_cosine_x

Theorem
The second order ODE:

$(1): \quad y + y = 2 \cos x$
has the general solution:

$y = C_1 \sin x + C_2 \cos x + x \cos x$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = 0$
$q = 1$
$\map R x = 2 \cos x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$(2): \quad y + y = 0$
From Linear Second Order ODE: $y + y = 0$, this has the general solution:

$y_g = C_1 \sin x + C_2 \cos x$

We have that:

$\map R x = 2 \cos x$
and it is noted that $2 \cos x$ is a particular solution of $(2)$.
So from the Method of Undetermined Coefficients for Sine and Cosine:

$y_p = A x \sin x + B x \cos x$
where $A$ and $B$ are to be determined.

Hence:














\(\ds y_p\)

\(=\)







\(\ds A x \sin x + B x \cos x\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds A x \cos x - B x \sin x + A \sin x + B \cos x\)





Derivative of Sine Function, Derivative of Cosine Function








\(\ds \leadsto \ \ \)





\(\ds {y_p}\)

\(=\)







\(\ds -A x \sin x - B x \cos x + A \cos x - B \sin x + A \cos x - B \sin x\)





Power Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -A x \sin x - B x \cos x + 2 A \cos x - 2 B \sin x\)





Power Rule for Derivatives




Substituting into $(1)$:














\(\ds -A x \sin x - B x \cos x + 2 A \cos x - 2 B \sin x + A x \sin x + B x \cos x\)

\(=\)







\(\ds 2 \cos x\)














\(\ds \leadsto \ \ \)





\(\ds -2 B \sin x\)

\(=\)







\(\ds 0\)





equating coefficients














\(\ds 2 A \cos x\)

\(=\)







\(\ds 2 \cos x\)














\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds 0\)




















\(\ds A\)

\(=\)







\(\ds 1\)









So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 \sin x + C_2 \cos x + x \sin x$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.18$: Problem $1 \ \text{(g)}$




