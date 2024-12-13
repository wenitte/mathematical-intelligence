# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_2_y%27_%2B_5_y_%3D_exp_-x_secant_2_x

Theorem
The second order ODE:

$(1): \quad y + 2 y' + 5 y = e^{-x} \sec 2 x$
has the general solution:

$y = e^{-x} \paren {C_1 \cos 2 x + C_2 \sin 2 x} + \dfrac {x e^{-x} \sin 2 x} 2 + \dfrac {e^{-x} \cos 2 x \ln \cos 2 x} 4$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE in the form:

$y + p y' + q y = \map R x$
where:

$p = 2$
$q = 5$
$\map R x = e^{-x} \sec 2 x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y + 2 y' + 5 y = 0$
From Linear Second Order ODE: $y + 2 y' + 5 y = 0$, this has the general solution:

$y_g = e^{-x} \paren {C_1 \cos 2 x + C_2 \sin 2 x}$

It remains to find a particular solution $y_p$ to $(1)$.

Expressing $y_g$ in the form:

$y_g = C_1 \, \map {y_1} x + C_2 \, \map {y_2} x$
we have:














\(\ds \map {y_1} x\)

\(=\)







\(\ds e^{-x} \cos 2 x\)




















\(\ds \map {y_2} x\)

\(=\)







\(\ds e^{-x} \sin 2 x\)














\(\ds \leadsto \ \ \)





\(\ds \map { {y_1}'} x\)

\(=\)







\(\ds -e^{-x} \cos 2 x - 2 e^{-x} \sin 2 x\)





Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds -e^{-x} \paren {\cos 2 x + 2 \sin 2 x}\)




















\(\ds \map { {y_2}'} x\)

\(=\)







\(\ds -e^{-x} \sin 2 x + 2 e^{-x} \cos 2 x\)





Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds e^{-x} \paren {2 \cos 2 x - \sin 2 x}\)










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







\(\ds e^{-x} \cos 2 x \paren {e^{-x} \paren {2 \cos 2 x - \sin 2 x} } - e^{-x} \sin 2 x \paren {-e^{-x} \paren {\cos 2 x + 2 \sin 2 x} }\)




















\(\ds \)

\(=\)







\(\ds e^{-2 x} \paren {2 \cos^2 2 x - \cos 2 x \sin 2 x + \sin 2 x \cos 2 x + 2 \sin^2 2 x}\)




















\(\ds \)

\(=\)







\(\ds 2 e^{-2 x} \paren {\cos^2 2 x + \sin^2 2 x}\)




















\(\ds \)

\(=\)







\(\ds 2 e^{-2 x}\)





Sum of Squares of Sine and Cosine




Hence:














\(\ds v_1\)

\(=\)







\(\ds \int -\frac {y_2 \, \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int -\frac {e^{-x} \sin 2 x e^{-x} \sec 2 x} {2 e^{-2 x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 2 \int \sin 2 x \sec 2 x \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 2 \int \frac {\sin 2 x} {\cos 2 x} \rd x\)





Secant is Reciprocal of Cosine














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \int \tan 2 x \rd x\)





Tangent is Sine divided by Cosine














\(\ds \)

\(=\)







\(\ds \frac 1 4 \ln \cos 2 x\)





Primitive of $\tan a x$


















\(\ds v_2\)

\(=\)







\(\ds \int \frac {y_1 \, \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {e^{-x} \cos 2 x e^{-x} \sec 2 x} {2 e^{-2 x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \cos 2 x \sec 2 x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \rd x\)





Secant is Reciprocal of Cosine














\(\ds \)

\(=\)







\(\ds \frac x 2\)





Primitive of Constant




It follows that:














\(\ds y_p\)

\(=\)







\(\ds \paren {\frac 1 4 \ln \cos 2 x} e^{-x} \cos 2 x + \paren {\frac x 2} e^{-x} \sin 2 x\)




















\(\ds \)

\(=\)







\(\ds \frac {x e^{-x} \sin 2 x} 2 + \frac {e^{-x} \cos 2 x \ln \cos 2 x} 4\)





rearranging




So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = e^{-x} \paren {C_1 \cos 2 x + C_2 \sin 2 x} + \dfrac {x e^{-x} \sin 2 x} 2 + \dfrac {e^{-x} \cos 2 x \ln \cos 2 x} 4$
is the general solution to $(1)$.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.19$: Problem $3 \ \text{(d)}$




