# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_3_y%27_%2B_2_y_%3D_14_sine_2_x_-_18_cosine_2_x

Theorem
The second order ODE:

$(1): \quad y - 3 y' + 2 y = 14 \sin 2 x - 18 \cos 2 x$
has the general solution:

$y = C_1 e^{3 x} + C_2 e^{-2 x} - 4 x e^{-2 x}$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = -3$
$q = 2$
$\map R x = 14 \sin 2 x - 18 \cos 2 x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y - 3 y' + 2 y = 0$
From Linear Second Order ODE: $y - 3 y' + 2 y = 0$, this has the general solution:

$y_g = C_1 e^x + C_2 e^{2 x}$

We have that:

$\map R x = 14 \sin 2 x - 18 \cos 2 x$
and it is noted that $14 \sin 2 x - 18 \cos 2 x$ is not itself a particular solution of $(2)$.
So from the Method of Undetermined Coefficients for Sine and Cosine:

$y_p = A \sin 2 x + B \cos 2 x$
where $A$ and $B$ are to be determined.

Hence:














\(\ds y_p\)

\(=\)







\(\ds A \sin 2 x + B \cos 2 x\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds 2 A \cos 2 x - 2 B \sin 2 x\)





Derivative of Sine Function, Derivative of Cosine Function








\(\ds \leadsto \ \ \)





\(\ds {y_p}\)

\(=\)







\(\ds -4 A \sin 2 x - 4 B \cos 2 x\)





Power Rule for Derivatives




Substituting into $(1)$:














\(\ds -4 A \sin 2 x - 4 B \cos 2 x - 3 \paren {2 A \cos 2 x - 2 B \sin 2 x} + 2 \paren {A \sin 2 x + B \cos 2 x}\)

\(=\)







\(\ds 14 \sin 2 x - 18 \cos 2 x\)














\(\ds \leadsto \ \ \)





\(\ds -4 A \sin 2 x + 6 B \sin 2 x + 2 A \sin 2 x\)

\(=\)







\(\ds 14 \sin 2 x\)





equating coefficients














\(\ds -4 B \cos 2 x - 6 A \cos 2 x + 2 B \cos 2 x\)

\(=\)







\(\ds - 18 \cos 2 x\)














\(\ds \leadsto \ \ \)





\(\ds -2 A + 6 B\)

\(=\)







\(\ds 14\)




















\(\ds -2 B - 6 A\)

\(=\)







\(\ds -18\)














\(\ds \leadsto \ \ \)





\(\ds -A + 3 B\)

\(=\)







\(\ds 7\)




















\(\ds 3 A + B\)

\(=\)







\(\ds 9\)














\(\ds \leadsto \ \ \)





\(\ds -A + 3 \paren {-3 A + 9}\)

\(=\)







\(\ds 7\)














\(\ds \leadsto \ \ \)





\(\ds -10 A\)

\(=\)







\(\ds -20\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds 2\)














\(\ds \leadsto \ \ \)





\(\ds -2 + 3 B\)

\(=\)







\(\ds 7\)














\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds 3\)









So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^x + C_2 e^{2 x} + 2 \sin 2 x + 3 \cos 2 x$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.18$: Problem $1 \ \text{(f)}$




