# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_4_y_%3D_3_sin_2_x

Theorem
The second order ODE:

$(1): \quad y + 4 y = 3 \sin 2 x$
has the general solution:

$y = C_1 \sin k x + C_2 \cos k x - \dfrac 3 4 x \cos 2 x$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = 0$
$q = 4$
$\map R x = 3 \sin 2 x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$(2): \quad y + 4 y = 0$
From Linear Second Order ODE: $y + 4 y = 0$, this has the general solution:

$y_g = C_1 \sin 2 x + C_2 \cos 2 x$

It is noted that $3 \sin 2 x$ is a particular solution of $(2)$.
So from the Method of Undetermined Coefficients for Sine and Cosine:

$y_p = A x \sin 2 x + B x \cos 2 x$
where $A$ and $B$ are to be determined.

Hence:














\(\ds y_p\)

\(=\)







\(\ds A x \sin 2 x + B x \cos 2 x\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds 2 A x \cos 2 x - 2 B x \sin 2 x + A \sin 2 x + B \cos 2 x\)





Derivative of Sine Function, Derivative of Cosine Function, Product Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds {y_p}\)

\(=\)







\(\ds -4 A x \sin 2 x - 4 B x \cos 2 x + 2 A \cos 2 x - 2 B \sin 2 x + 2 A \cos 2 x - 2 B \sin 2 x\)





Derivative of Sine Function, Derivative of Cosine Function, Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -4 A x \sin 2 x - 4 B x \cos 2 x + 4 A \cos 2 x - 4 B \sin 2 x\)










Substituting into $(1)$:














\(\ds -4 A x \sin 2 x - 4 B x \cos 2 x + 4 A \cos 2 x - 4 B \sin 2 x + 4 \paren {A x \sin 2 x + B x \cos 2 x}\)

\(=\)







\(\ds 3 \sin 2 x\)














\(\ds \leadsto \ \ \)





\(\ds A \paren {4 - 4} x \sin 2 x - 4 B \sin 2 x\)

\(=\)







\(\ds 3 \sin 2 x\)





equating coefficients














\(\ds B \paren {4 - 4} x \cos 2 x + 4 A \cos 2 x\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds -4 B\)

\(=\)







\(\ds 3\)




















\(\ds 4 A\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds -\dfrac 3 4\)










So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 \sin k x + C_2 \cos k x - \dfrac 3 4 x \cos 2 x$
is the general solution to $(1)$.
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 2$. The second order equation: $\S 2.5$ Particular solution: trigonometric $\map f x$: Example $8$




