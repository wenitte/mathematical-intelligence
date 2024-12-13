# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_2_y%27_-_3_y_%3D_64_x_exp_-x

Theorem
The second order ODE:

$(1): \quad y - 2 y' - 3 y = 64 x e^{-x}$
has the general solution:

$y = C_1 e^{3 x} + C_2 e^{-x} - e^{-x} \paren {8 x^2 + 4 x + 1}$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE in the form:

$y + p y' + q y = \map R x$
where:

$p = -2$
$q = -3$
$\map R x = 64 x e^{-x}$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y - 2 y' - 3 y = 0$
From Linear Second Order ODE: $y - 2 y' - 3 y = 0$, this has the general solution:

$y_g = C_1 e^{3 x} + C_2 e^{-x}$

It remains to find a particular solution $y_p$ to $(1)$.

Expressing $y_g$ in the form:

$y_g = C_1 \, \map {y_1} x + C_2 \, \map {y_2} x$
we have:














\(\ds \map {y_1} x\)

\(=\)







\(\ds e^{3 x}\)




















\(\ds \map {y_2} x\)

\(=\)







\(\ds e^{-x}\)














\(\ds \leadsto \ \ \)





\(\ds \map { {y_1}'} x\)

\(=\)







\(\ds 3 e^{3 x}\)





Derivative of Exponential Function














\(\ds \map { {y_2}'} x\)

\(=\)







\(\ds -e^{-x}\)





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







\(\ds e^{3 x} \paren {-e^{-x} } - e^{-x} \paren {3 e^{3 x} }\)




















\(\ds \)

\(=\)







\(\ds -e^{2 x} - 3 e^{2 x}\)




















\(\ds \)

\(=\)







\(\ds -4 e^{2 x}\)










Hence:














\(\ds v_1\)

\(=\)







\(\ds \int -\frac {y_2 \, \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int -\frac {e^{-x} 64 x e^{-x} } {-4 e^{2 x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds 16 \int x e^{-4 x} \rd x\)




















\(\ds \)

\(=\)







\(\ds 16 \frac {e^{-4 x} } {-4} \paren {x - \frac 1 {-4} }\)





Primitive of $x e^{a x}$














\(\ds \)

\(=\)







\(\ds -4 e^{-4 x} \paren {x + \frac 1 4}\)




















\(\ds \)

\(=\)







\(\ds -4 x e^{-4 x} - e^{-4 x}\)
























\(\ds v_2\)

\(=\)







\(\ds \int \frac {y_1 \, \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {e^{3 x} 64 x e^{-x} } {-4 e^{2 x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds - 16 \int x \rd x\)




















\(\ds \)

\(=\)







\(\ds -8 x^2\)





Primitive of Power




It follows that:














\(\ds y_p\)

\(=\)







\(\ds \paren {-4 x e^{-4 x} - e^{-4 x} } e^{3 x} + \paren {-8 x^2} e^{-x}\)




















\(\ds \)

\(=\)







\(\ds -4 x e^{-x} - e^{-x} - 8 x^2 e^{-x}\)





simplifying














\(\ds \)

\(=\)







\(\ds -e^{-x} \paren {8 x^2 + 4 x + 1}\)





simplifying




So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^{3 x} + C_2 e^{-x} - e^{-x} \paren {8 x^2 + 4 x + 1}$
is the general solution to $(1)$.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.19$: Problem $3 \ \text{(c)}$




