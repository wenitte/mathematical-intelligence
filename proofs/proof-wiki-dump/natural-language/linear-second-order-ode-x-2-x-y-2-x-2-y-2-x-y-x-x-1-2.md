# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/(x%5E2_%2B_x)_y%27%27_%2B_(2_-_x%5E2)_y%27_-_(2_%2B_x)_y_%3D_x_(x_%2B_1)%5E2

Theorem
The second order ODE:

$(1): \quad \paren {x^2 + x} y + \paren {2 - x^2} y' - \paren {2 + x} y = x \paren {x + 1}^2$
has the general solution:

$y = C_1 e^x + \dfrac {C_2} x - x - 1 - \dfrac {x^2} 3$


Proof
$(1)$ can be manipulated into the form:

$y + \dfrac {2 - x^2} {x^2 + x} y' - \dfrac {2 + x} {x^2 + x} y = x + 1$
It can be seen that this is a nonhomogeneous linear second order ODE in the form:

$y + \map P x y' + \map Q x y = \map R x$
where:

$\map P x = \dfrac {2 - x^2} {x^2 + x}$
$\map Q x = -\dfrac {2 + x} {x^2 + x}$
$\map R x = x + 1$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$\paren {x^2 + x} y + \paren {2 - x^2} y' - \paren {2 + x} y = 0$
From Linear Second Order ODE: $\paren {x^2 + x} y + \paren {2 - x^2} y' - \paren {2 + x} y = 0$, this has the general solution:

$y_g = C_1 e^x + \dfrac {C_2} x$

It remains to find a particular solution $y_p$ to $(1)$.

Expressing $y_g$ in the form:

$y_g = C_1 \map {y_1} x + C_2 \map {y_2} x$
we have:














\(\ds \map {y_1} x\)

\(=\)







\(\ds e^x\)




















\(\ds \map {y_2} x\)

\(=\)







\(\ds \dfrac 1 x\)














\(\ds \leadsto \ \ \)





\(\ds \map { {y_1}'} x\)

\(=\)







\(\ds e^x\)





Derivative of Exponential Function














\(\ds \map { {y_2}'} x\)

\(=\)







\(\ds -\dfrac 1 {x^2}\)





Power Rule for Derivatives




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







\(\ds e^x \paren {-\dfrac 1 {x^2} } - \paren {\dfrac 1 x} \paren {e^x}\)




















\(\ds \)

\(=\)







\(\ds -\dfrac {e^x} {x^2} - \dfrac {e^x} x\)




















\(\ds \)

\(=\)







\(\ds -e^x \, \dfrac {x + 1} {x^2}\)










Hence:














\(\ds v_1\)

\(=\)







\(\ds \int -\frac {y_2 \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int -\frac {\paren {\dfrac 1 x} \paren {x + 1} } {-e^x \, \dfrac {x + 1} {x^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int x e^{-x} \rd x\)




















\(\ds \)

\(=\)







\(\ds -e^{-x} \paren {x + 1}\)





Primitive of $x e^{a x}$


















\(\ds v_2\)

\(=\)







\(\ds \int \frac {y_1 \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {e^x \paren {x + 1} } {-e^x \, \dfrac {x + 1} {x^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds -\int x^2 \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac {x^3} 3\)





Primitive of Power




It follows that:














\(\ds y_p\)

\(=\)







\(\ds \paren {-e^{-x} \paren {x + 1} } e^x + \paren {-\frac {x^3} 3} \paren {\dfrac 1 x}\)




















\(\ds \)

\(=\)







\(\ds -x - 1 - \frac {x^2} 3\)





rearranging




So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^x + \dfrac {C_2} x - x - 1 - \dfrac {x^2} 3$
is the general solution to $(1)$.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.19$: Problem $4 \ \text{(b)}$




