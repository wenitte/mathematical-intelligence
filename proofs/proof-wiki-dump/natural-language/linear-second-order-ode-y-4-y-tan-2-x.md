# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_4_y_%3D_tan_2_x

Theorem
The second order ODE:

$(1): \quad y + 4 y = \tan 2 x$
has the general solution:

$y = C_1 \cos 2 x + C_2 \sin 2 x - \dfrac 1 4 \cos 2 x \map \ln {\sec 2 x + \tan 2 x}$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE in the form:

$y + p y' + q y = \map R x$
where:

$p = 0$
$q = 4$
$\map R x = \tan 2 x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y + 4 y = 0$
From Linear Second Order ODE: $y + 4 y = 0$, this has the general solution:

$y_g = C_1 \cos 2 x + C_2 \sin 2 x$

It remains to find a particular solution $y_p$ to $(1)$.

Expressing $y_g$ in the form:

$y_g = C_1 \map {y_1} x + C_2 \map {y_2} x$
we have:














\(\ds \map {y_1} x\)

\(=\)







\(\ds \cos 2 x\)




















\(\ds \map {y_2} x\)

\(=\)







\(\ds \sin 2 x\)














\(\ds \leadsto \ \ \)





\(\ds \map { {y_1}'} x\)

\(=\)







\(\ds -2 \sin 2 x\)





Derivative of Sine Function














\(\ds \map { {y_2}'} x\)

\(=\)







\(\ds 2 \cos 2 x\)





Derivative of Cosine Function




By the Method of Variation of Parameters, we have that:

$y_p = v_1 y_1 + v_2 y_2$
where:














\(\ds v_1\)

\(=\)







\(\ds \int -\frac {y_2 \map R x} {\map W {y_1, y_2} } \rd x\)




















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







\(\ds \cos 2 x \paren {2 \cos 2 x} - \sin 2 x \paren {-2 \sin 2 x}\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {\cos^2 2 x + \sin^2 2 x}\)




















\(\ds \)

\(=\)







\(\ds 2\)










Hence:














\(\ds v_1\)

\(=\)







\(\ds \int -\frac {y_2 \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int -\frac {\sin 2 x \tan 2 x} 2 \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 2 \int \frac {\sin^2 2 x} {\cos 2 x} \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 2 \paren {-\frac {\sin 2 x} 2 + \frac 1 2 \ln \map \tan {x + \frac \pi 4} }\)





Primitive of $\dfrac {\sin^2 a x} {\cos a x}$














\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {\sin 2 x - \map \ln {\sec 2 x + \tan 2 x} }\)





Tangent of Half Angle plus $\dfrac \pi 4$


















\(\ds v_2\)

\(=\)







\(\ds \int \frac {y_1 \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\cos 2 x \tan 2 x} 2 \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \sin 2 x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {-\frac {\cos 2 x} 2}\)





Primitive of $\sin a x$














\(\ds \)

\(=\)







\(\ds -\frac 1 4 \cos 2 x\)










It follows that:














\(\ds y_p\)

\(=\)







\(\ds \frac 1 4 \paren {\sin 2 x - \map \ln {\sec 2 x + \tan 2 x} } \cos 2 x - \frac 1 4 \cos 2 x \sin 2 x\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 4 \cos 2 x \map \ln {\sec 2 x + \tan 2 x}\)





simplifying




So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 \cos 2 x + C_2 \sin 2 x - \dfrac 1 4 \cos 2 x \map \ln {\sec 2 x + \tan 2 x}$
is the general solution to $(1)$.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.19$: Problem $3 \ \text{(a)}$




