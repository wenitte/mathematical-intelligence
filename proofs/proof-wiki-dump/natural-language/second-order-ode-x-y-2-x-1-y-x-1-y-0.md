# 

Source: https://proofwiki.org/wiki/Second_Order_ODE/x_y%27%27_-_(2_x_%2B_1)_y%27_%2B_(x_%2B_1)_y_%3D_0

Theorem
The second order ODE:

$(1): \quad x y - \paren {2 x + 1} y' + \paren {x + 1} y = 0$
has the general solution:

$y = C_1 e^x + C_2 x^2 e^x$


Proof
Note that:

$x - \paren {2 x + 1} + \paren {x + 1} = 0$
so if $y = y' = y$ we find that $(1)$ is satisfied.
So:














\(\ds y_1\)

\(=\)







\(\ds e^x\)














\(\ds \leadsto \ \ \)





\(\ds {y_1}'\)

\(=\)







\(\ds e^x\)





Derivative of Exponential Function








\(\ds \leadsto \ \ \)





\(\ds {y_1}\)

\(=\)







\(\ds e^x\)





Derivative of Exponential Function



and so:

$y_1 = e^x$
is a particular solution of $(1)$.

$(1)$ can be expressed as:

$(2): \quad y - \dfrac {2 x + 1} x y' + \dfrac {x + 1} x y = 0$
which is in the form:

$y + \map P x y' + \map Q x y = 0$
where:

$\map P x = -\dfrac {2 x + 1} x$

From Particular Solution to Homogeneous Linear Second Order ODE gives rise to Another:

$\map {y_2} x = \map v x \, \map {y_1} x$
where:

$\ds v = \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x$
is also a particular solution of $(1)$.

We have that:














\(\ds \int P \rd x\)

\(=\)







\(\ds \int \paren {-\dfrac {2 x + 1} x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {-2 - \dfrac 1 x} \rd x\)




















\(\ds \)

\(=\)







\(\ds -2 x - \ln x\)














\(\ds \leadsto \ \ \)





\(\ds e^{-\int P \rd x}\)

\(=\)







\(\ds e^{-\paren {-2 x - \ln x} }\)




















\(\ds \)

\(=\)







\(\ds e^{2 x + \ln x}\)




















\(\ds \)

\(=\)







\(\ds e^{2 x} e^{\ln x}\)




















\(\ds \)

\(=\)







\(\ds x e^{2 x}\)










Hence:














\(\ds v\)

\(=\)







\(\ds \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x\)





Definition of $v$














\(\ds \)

\(=\)







\(\ds \int \dfrac 1 {e^{2 x} } x e^{2 x} \rd x\)





as $y_1 = e^x$














\(\ds \)

\(=\)







\(\ds \int x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {x^2} 2\)










and so:














\(\ds y_2\)

\(=\)







\(\ds v y_1\)





Definition of $y_2$














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 e^x\)










From Two Linearly Independent Solutions of Homogeneous Linear Second Order ODE generate General Solution:

$y = C_1 e^x + k \dfrac {x^2} 2 e^x$
and so setting $C_2 = \dfrac k 2$:

$y = C_1 e^x + C_2 x^2 e^x$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.16$: Problem $9$




