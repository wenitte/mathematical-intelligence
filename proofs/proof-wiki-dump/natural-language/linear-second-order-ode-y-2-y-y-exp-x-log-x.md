# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_2_y%27_%2B_y_%3D_exp_-x_log_x

Theorem
The second order ODE:

$(1): \quad y + 2 y' + y = e^{-x} \ln x$
has the general solution:

$y = C_1 e^{-x} + C_2 x e^{-x} - \dfrac {x^2 e^{-x} \ln x} 2 - \dfrac 3 4 x^2 e^{-x}$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE in the form:

$y + p y' + q y = \map R x$
where:

$p = 2$
$q = 1$
$\map R x = e^{-x} \ln x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y + 2 y' + y = 0$
From Linear Second Order ODE: $y + 2 y' + y = 0$, this has the general solution:

$y_g = C_1 e^{-x} + C_2 x e^{-x}$

It remains to find a particular solution $y_p$ to $(1)$.

Expressing $y_g$ in the form:

$y_g = C_1 \, \map {y_1} x + C_2 \, \map {y_2} x$
we have:














\(\ds \map {y_1} x\)

\(=\)







\(\ds e^{-x}\)




















\(\ds \map {y_2} x\)

\(=\)







\(\ds x e^{-x}\)














\(\ds \leadsto \ \ \)





\(\ds \map { {y_1}'} x\)

\(=\)







\(\ds -e^{-x}\)





Derivative of Exponential Function














\(\ds \map { {y_2}'} x\)

\(=\)







\(\ds -x e^{-x} + e^{-x}\)





Derivative of Exponential Function, Product Rule for Derivatives




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







\(\ds e^{-x} \paren {-x e^{-x} + e^{-x} } - x e^{-x} \paren {-e^{-x} }\)




















\(\ds \)

\(=\)







\(\ds -x e^{-2 x} + e^{-2 x} + x e^{-2 x}\)




















\(\ds \)

\(=\)







\(\ds e^{-2 x}\)










Hence:














\(\ds v_1\)

\(=\)







\(\ds \int -\frac {y_2 \, \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int -\frac {x e^{-x} e^{-x} \ln x} {e^{-2 x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds -\int x \ln x \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac {x^2} 2 \paren {\ln x - \frac 1 2}\)





Primitive of $x \ln x$














\(\ds \)

\(=\)







\(\ds \frac {x^2} 4 - \frac {x^2 \ln x} 2\)
























\(\ds v_2\)

\(=\)







\(\ds \int \frac {y_1 \, \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {e^{-x} e^{-x} \ln x} {e^{-2 x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \ln x \rd x\)




















\(\ds \)

\(=\)







\(\ds x \ln x - x\)





Primitive of $\ln x$




It follows that:














\(\ds y_p\)

\(=\)







\(\ds \paren {\frac {x^2} 4 - \frac {x^2 \ln x} 2} e^{-x} + \paren {x \ln x - x} x e^{-x}\)




















\(\ds \)

\(=\)







\(\ds \frac {x^2 e^{-x} } 4 - \frac {x^2 e^{-x} \ln x} 2 + x^2 e^{-x} \ln x - x^2 e^{-x}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {x^2 e^{-x} \ln x} 2 - \dfrac 3 4 x^2 e^{-x}\)





simplifying




So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^{-x} + C_2 x e^{-x} - \dfrac {x^2 e^{-x} \ln x} 2 - \dfrac 3 4 x^2 e^{-x}$
is the general solution to $(1)$.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.19$: Problem $3 \ \text{(b)}$




