# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_y%27_-_6_y_%3D_exp_-x/Proof_2

Theorem
The second order ODE:

$(1): \quad y - y' - 6 y = e^{-x}$
has the general solution:

$y = C_1 e^{3 x} + C_2 e^{-2 x} - \dfrac {e^{-x} } 4$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE in the form:

$y + p y' + q y = \map R x$
where:

$p = -1$
$q = -6$
$\map R x = e^{-x}$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y - y' - 6 y = 0$
From Linear Second Order ODE: $y - y' - 6 y = 0$, this has the general solution:

$y_g = C_1 e^{3 x} + C_2 e^{-2 x}$

It remains to find a particular solution $y_p$ to $(1)$.

Expressing $y_g$ in the form:

$y_g = C_1 \, \map {y_1} x + C_2 \, \map {y_2} x$
we have:














\(\ds \map {y_1} x\)

\(=\)







\(\ds e^{3 x}\)




















\(\ds \map {y_2} x\)

\(=\)







\(\ds e^{-2 x}\)














\(\ds \leadsto \ \ \)





\(\ds \map { {y_1}'} x\)

\(=\)







\(\ds 3 e^{3 x}\)





Derivative of Exponential Function














\(\ds \map { {y_2}'} x\)

\(=\)







\(\ds -2 e^{-2 x}\)





Derivative of Exponential Function




By the Method of Variation of Parameters, we have that:

$y_p = v_1 y_1 + v_2 y_2$
where:














\(\ds v_1\)

\(=\)







\(\ds \int -\frac {y_2 \, \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds v_2\)

\(=\)







\(\ds \int \frac {y_1 \, \map R x} {\map W {y_1, y_2} } \rd x\)









where $\map W {y_1, y_2}$ is the Wronskian of $y_1$ and $y_2$.

We have that:














\(\ds \map W {y_1, y_2}\)

\(=\)







\(\ds y_1 {y_2}' - y_2 {y_1}'\)





Definition of Wronskian














\(\ds \)

\(=\)







\(\ds e^{3 x} \paren {-2 e^{-2 x} } - e^{-2 x} \paren {3 e^{3 x} }\)




















\(\ds \)

\(=\)







\(\ds -2 e^x - 3 e^x\)




















\(\ds \)

\(=\)







\(\ds -5 e^x\)










Hence:














\(\ds v_1\)

\(=\)







\(\ds \int -\frac {y_2 \, \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int -\frac {e^{-2 x} \cdot e^{-x} } {-5 e^x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {e^{-4 x} } 5 \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 {20} e^{-4 x}\)





Primitive of $e^{a x}$


















\(\ds v_2\)

\(=\)







\(\ds \int \frac {y_1 \, \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {e^{3 x} \cdot e^{-x} } {-5 e^x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int -\frac {e^x} 5 \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 5 e^x\)





Primitive of $e^{a x}$




It follows that:














\(\ds y_p\)

\(=\)







\(\ds -\frac 1 {20} e^{-4 x} e^{3 x} - \frac 1 5 e^x e^{-2 x}\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 {20} e^{-x} - \frac 1 5 e^{-x}\)





simplifying














\(\ds \)

\(=\)







\(\ds -\frac 1 4 e^{-x}\)





further simplifying




So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^{3 x} + C_2 e^{-2 x} - \dfrac {e^{-x} } 4$
is the general solution to $(1)$.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.19$: Problem $2$




