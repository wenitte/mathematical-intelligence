# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/(x%5E2_-_1)_y%27%27_-_2_x_y%27_%2B_2_y_%3D_(x%5E2_-_1)%5E2

Theorem
The second order ODE:

$(1): \quad \paren {x^2 - 1} y - 2 x y' + 2 y = \paren {x^2 - 1}^2$
has the general solution:

$y = C_1 x + C_2 \paren {x^2 + 1} + \dfrac {x^4} 6 - \dfrac {x^2} 2$


Proof
$(1)$ can be manipulated into the form:

$y - \dfrac {2 x} {x^2 - 1} y' + \dfrac 2 {x^2 - 1} y = x^2 - 1$
It can be seen that this is a nonhomogeneous linear second order ODE in the form:

$y + \map P x y' + \map Q x y = \map R x$
where:

$\map P x = -\dfrac {2 x} {x^2 - 1}$
$\map Q x = \dfrac 2 {x^2 - 1}$
$\map R x = x^2 - 1$

First we establish the solution of the corresponding homogeneous linear second order ODE:

$\paren {x^2 - 1} y - 2 x y' + 2 y = 0$
From Second Order ODE: $\paren {x^2 - 1} y - 2 x y' + 2 y = 0$, this has the general solution:

$y_g = C_1 x + C_2 \paren {x^2 + 1}$

It remains to find a particular solution $y_p$ to $(1)$.

Expressing $y_g$ in the form:

$y_g = C_1 \map {y_1} x + C_2 \map {y_2} x$
we have:














\(\ds \map {y_1} x\)

\(=\)







\(\ds x\)




















\(\ds \map {y_2} x\)

\(=\)







\(\ds x^2 + 1\)














\(\ds \leadsto \ \ \)





\(\ds \map { {y_1}'} x\)

\(=\)







\(\ds 1\)





Power Rule for Derivatives














\(\ds \map { {y_2}'} x\)

\(=\)







\(\ds 2 x\)





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







\(\ds x \paren {2 x} - \paren {x^2 + 1} \paren 1\)




















\(\ds \)

\(=\)







\(\ds 2 x^2 - x^2 - 1\)




















\(\ds \)

\(=\)







\(\ds x^2 - 1\)










Hence:














\(\ds v_1\)

\(=\)







\(\ds \int -\frac {y_2 \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int -\frac {\paren {x^2 + 1} \paren {x^2 - 1} } {x^2 - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds -\int \paren {x^2 + 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac {x^3} 3 - x\)





Primitive of Power


















\(\ds v_2\)

\(=\)







\(\ds \int \frac {y_1 \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {x \paren {x^2 - 1} } {x^2 - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {x^2} 2\)





Primitive of Power




It follows that:














\(\ds y_p\)

\(=\)







\(\ds \paren {-\frac {x^3} 3 - x} x + \paren {\frac {x^2} 2} \paren {x^2 + 1}\)




















\(\ds \)

\(=\)







\(\ds -\frac {x^4} 3 - x^2 + \frac {x^4} 2 + \frac {x^2} 2\)





rearranging














\(\ds \)

\(=\)







\(\ds \frac {x^4} 6 - \frac {x^2} 2\)





rearranging




So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 x + C_2 \paren {x^2 + 1} + \dfrac {x^4} 6 - \dfrac {x^2} 2$
is the general solution to $(1)$.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.19$: Problem $4 \ \text{(a)}$




