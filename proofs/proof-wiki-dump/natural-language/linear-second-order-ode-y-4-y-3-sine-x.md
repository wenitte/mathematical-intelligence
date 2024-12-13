# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_4_y_%3D_3_sine_x

Theorem
The second order ODE:

$(1): \quad y' ' + 4 y = 3 \sin x$
has the general solution:

$y = C_1 \cos 2 x + C_2 \sin 2 x + \sin x$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y' ' + p y' + q y = \map R x$
where:

$p = 0$
$q = 4$
$\map R x = 3 \sin x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$(2): \quad y' ' + 4 y = 0$
From Linear Second Order ODE: $y + 4 y = 0$, this has the general solution:

$y_g = C_1 \cos 2 x + C_2 \sin 2 x$

We have that:

$\map R x = 3 \sin x$
and it is noted that $\sin x$ is not itself a particular solution of $(2)$.
So from the Method of Undetermined Coefficients for the Sine and Cosine functions:

$y_p = A \sin x + B \cos x$
for some $A$ and $B$ to be determined.

Hence:














\(\ds y_p\)

\(=\)







\(\ds A \sin x + B \cos x\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds A \cos x = B \sin x\)





Derivative of Sine Function, Derivative of Cosine Function








\(\ds \leadsto \ \ \)





\(\ds {y_p}\)

\(=\)







\(\ds -A \sin x - B \cos x\)





Derivative of Sine Function, Derivative of Cosine Function




Substituting into $(1)$:














\(\ds -A \sin x - B \cos x + 4 \paren {A \sin x + B \cos x}\)

\(=\)







\(\ds 3 \sin x\)














\(\ds \leadsto \ \ \)





\(\ds \paren {-A + 4 A} \sin x\)

\(=\)







\(\ds 3 \sin x\)




















\(\ds -B \cos x + B \cos x\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 3 A\)

\(=\)







\(\ds 3\)




















\(\ds -B \cos x + 4 B \cos x\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds 1\)




















\(\ds B\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds y_p\)

\(=\)







\(\ds \sin x\)









So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 \cos 2 x + C_2 \sin 2 x + \sin x$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.18$: Problem $1 \ \text{(b)}$




