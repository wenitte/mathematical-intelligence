# 

Source: https://proofwiki.org/wiki/Second_Order_ODE/y%27%27_-_f(x)_y%27_%2B_(f(x)_-_1)_y_%3D_0

Theorem
The second order ODE:

$(1): \quad y - \map f x y' + \paren {\map f x - 1} y = 0$
has the general solution:

$\ds y = C_1 e^x + C_2 e^x \int e^{-2 x + \int \map f x \rd x} \rd x$


Proof
Note that:

$1 - \map f x + \paren {\map f x - 1} = 0$
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

$(1)$ is in the form:

$y + \map P x y' + \map Q x y = 0$
where:

$\map P x = -\map f x$

From Particular Solution to Homogeneous Linear Second Order ODE gives rise to Another:

$\map {y_2} x = \map v x \, \map {y_1} x$
where:

$\ds v = \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x$
is also a particular solution of $(1)$.

We have that:














\(\ds \int P \rd x\)

\(=\)







\(\ds \int \paren {-\map f x} \rd x\)














\(\ds \leadsto \ \ \)





\(\ds e^{-\int P \rd x}\)

\(=\)







\(\ds e^{-\int \paren {-\map f x} \rd x}\)




















\(\ds \)

\(=\)







\(\ds e^{\int \map f x \rd x}\)










Hence:














\(\ds v\)

\(=\)







\(\ds \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x\)





Definition of $v$














\(\ds \)

\(=\)







\(\ds \int \dfrac 1 {e^{2 x} } e^{\int \map f x \rd x} \rd x\)





as $y_1 = e^x$














\(\ds \)

\(=\)







\(\ds \int e^{-2 x + \int \map f x \rd x} \rd x\)





as $y_1 = e^x$




and so:














\(\ds y_2\)

\(=\)







\(\ds v y_1\)





Definition of $y_2$














\(\ds \)

\(=\)







\(\ds e^x \int e^{-2 x + \int \map f x \rd x} \rd x\)










From Two Linearly Independent Solutions of Homogeneous Linear Second Order ODE generate General Solution:

$\ds y = C_1 e^x + C_2 e^x \int e^{-2 x + \int \map f x \rd x} \rd x$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.16$: Problem $10$




