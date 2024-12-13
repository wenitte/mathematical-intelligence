# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_k%5E2_y_%3D_sine_b_x

Theorem
The second order ODE:

$(1): \quad y + k^2 y = \sin b x$
has the general solution:

$y = \begin{cases} C_1 \sin k x + C_2 \cos k x + \dfrac {\sin b x} {k^2 - b^2} & : b \ne k \\
C_1 \sin k x + C_2 \cos k x - \dfrac {x \cos k x} {2 k} & : b = k 
\end{cases}$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = 0$
$q = k^2$
$\map R x = \sin b x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$(2): \quad y + k^2 y = 0$
From Linear Second Order ODE: $y + k^2y = 0$, this has the general solution:

$y_g = C_1 \sin k x + C_2 \cos k x$

We have that:

$\map R x = \sin b x$
There are two cases to address:

$b = k$
$b \ne k$

First suppose that $b = k$.
It is noted that $\sin b x = \sin k x$ is a particular solution of $(2)$.
So from the Method of Undetermined Coefficients for Sine and Cosine:

$y_p = A x \sin k x + B x \cos k x$
where $A$ and $B$ are to be determined.

Hence:














\(\ds y_p\)

\(=\)







\(\ds A x \sin k x + B x \cos k x\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds A k x \cos k x - B k x \sin k x + A \sin k x + B \cos k x\)





Derivative of Sine Function, Derivative of Cosine Function, Product Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds {y_p}\)

\(=\)







\(\ds -A k^2 x \sin k x - B k^2 x \cos k x + A k \cos k x - B k \sin k x + A k \cos k x - B k \sin k x\)





Derivative of Sine Function, Derivative of Cosine Function, Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -A k^2 x \sin k x - B k^2 x \cos k x + 2 A k \cos k x - 2 B k \sin k x\)










Substituting into $(1)$:














\(\ds -A k^2 x \sin k x - B k^2 x \cos k x + 2 A k \cos k x - 2 B k \sin k x + k^2 \paren {A x \sin k x + B x \cos k x}\)

\(=\)







\(\ds \sin k x\)














\(\ds \leadsto \ \ \)





\(\ds A \paren {k^2 - k^2} x \sin k x - 2 B k \sin k x\)

\(=\)







\(\ds \sin k x\)





equating coefficients














\(\ds B \paren {k^2 - k^2} x \cos k x + 2 A k \cos k x\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds - 2 B k\)

\(=\)







\(\ds 1\)




















\(\ds 2 A k\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds -\frac 1 {2 k}\)










So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 \sin k x + C_2 \cos k x - \dfrac {x \cos k x} {2 k}$
$\Box$

Now suppose that $b \ne k$.
It is noted that $\sin b x$ is not a particular solution of $(2)$.
So from the Method of Undetermined Coefficients for Sine and Cosine:

$y_p = A \sin b x + B \cos b x$
where $A$ and $B$ are to be determined.

Hence:














\(\ds y_p\)

\(=\)







\(\ds A \sin b x + B \cos b x\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds A b \cos b x - B b \sin b x\)





Derivative of Sine Function, Derivative of Cosine Function








\(\ds \leadsto \ \ \)





\(\ds {y_p}\)

\(=\)







\(\ds -A b^2 \sin b x - B b^2 \cos b x\)





Derivative of Sine Function, Derivative of Cosine Function




Substituting into $(1)$:














\(\ds -A b^2 \sin b x - B b^2 \cos b x + k \paren {A \sin b x + B \cos b x}\)

\(=\)







\(\ds \sin b x\)














\(\ds \leadsto \ \ \)





\(\ds A \paren {k^2 - b^2} \sin b x\)

\(=\)







\(\ds \sin b x\)





equating coefficients














\(\ds B \paren {k^2 - b^2} \cos b x\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds 0\)




















\(\ds B\)

\(=\)







\(\ds \frac 1 {k^2 - b^2}\)










So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 \sin k x + C_2 \cos k x + \dfrac {\sin b x} {k^2 - b^2}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.18$: Problem $2$




