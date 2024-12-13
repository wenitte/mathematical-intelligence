# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_y_%3D_cosecant_x

Theorem
The second order ODE:

$(1): \quad y + y = \csc x$
has the general solution:

$y = C_1 \sin x + C_2 \cos x - x \cos x + \sin x \map \ln {\sin x}$


Proof
It can be seen that $\paren 1$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = 0$
$q = 1$
$\map R x = \csc x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$\paren 2: \quad y + y = 0$
From Linear Second Order ODE: $y + y = 0$, this has the general solution:

$y_g = C_1 \sin x + C_2 \cos x$

It remains to find a particular solution $y_p$ to $\paren 1$.

Expressing $y_g$ in the form:

$y_g = C_1 \map {y_1} x + C_2 \map {y_2} x$
we have:














\(\ds \map {y_1} x\)

\(=\)







\(\ds \sin x\)




















\(\ds \map {y_2} x\)

\(=\)







\(\ds \cos x\)














\(\ds \leadsto \ \ \)





\(\ds \map {y_1'} x\)

\(=\)







\(\ds \cos x\)





Derivative of Sine Function














\(\ds \map {y_2'} x\)

\(=\)







\(\ds -\sin x\)





Derivative of Cosine Function




By the Method of Variation of Parameters, we have that:

$y_p = v_1 y_1 + v_2 y_2$
where:














\(\ds v_1\)

\(=\)







\(\ds -\int \frac {y_2 \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds v_2\)

\(=\)







\(\ds \int \frac {y_1 \map R x} {\map W {y_1, y_2} } \rd x\)









where $\map W {y_1, y_2}$ is the Wronskian of $y_1$ and $y_2$.

We have that:














\(\ds \map W {y_1, y_2}\)

\(=\)







\(\ds y_1 {y_2}' - y_2 {y_1}'\)





Definition of Wronskian














\(\ds \)

\(=\)







\(\ds \sin x \paren {- \sin x} - \cos x \cos x\)




















\(\ds \)

\(=\)







\(\ds -\paren {\sin^2 x + \cos^2 x}\)




















\(\ds \)

\(=\)







\(\ds -1\)










Hence:














\(\ds v_1\)

\(=\)







\(\ds \int -\frac {y_2 \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds -\int \frac {\cos x \csc x} {-1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\cos x} {\sin x} \rd x\)





Definition of Cosecant














\(\ds \)

\(=\)







\(\ds \map \ln {\sin x}\)





Primitive of $\cot x$


















\(\ds v_2\)

\(=\)







\(\ds \int \frac {y_1 \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\sin x \csc x} {-1} \rd x\)




















\(\ds \)

\(=\)







\(\ds -\int \frac {\sin x} {\sin x} \rd x\)





Definition of Cosecant














\(\ds \)

\(=\)







\(\ds -x\)










It follows that:

$y_p = \sin x \map \ln {\sin x} - x \cos x$

So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 \sin x + C_2 \cos x + \sin x \map \ln {\sin x} - x \cos x$
is the general solution to $\paren 1$.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.19$: The Method of Variation of Parameters: Example $1$




