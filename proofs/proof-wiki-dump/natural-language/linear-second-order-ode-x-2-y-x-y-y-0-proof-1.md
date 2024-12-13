# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/x%5E2_y%27%27_%2B_x_y%27_-_y_%3D_0/Proof_1

Theorem
The second order ODE:

$(1): \quad x^2 y + x y' - y = 0$
has the general solution:

$y = C_1 x + \dfrac {C_2} x$


Proof
The particular solution:

$y_1 = x$
can be found by inspection.

Let $(1)$ be written as:

$(2): \quad y + \dfrac {y'} x - \dfrac y {x^2} = 0$
which is in the form:

$y + \map P x y' + \map Q x y = 0$
where:

$\map P x = \dfrac 1 x$
$\map Q x = \dfrac 1 {x^2}$

From Particular Solution to Homogeneous Linear Second Order ODE gives rise to Another:

$\map {y_2} x = \map v x \, \map {y_1} x$
where:

$\ds v = \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x$
is also a particular solution of $(1)$.

We have that:














\(\ds \int P \rd x\)

\(=\)







\(\ds \int \frac 1 x \rd x\)




















\(\ds \)

\(=\)







\(\ds \ln x\)














\(\ds \leadsto \ \ \)





\(\ds e^{-\int P \rd x}\)

\(=\)







\(\ds e^{-\ln x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 x\)










Hence:














\(\ds v\)

\(=\)







\(\ds \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x\)





Definition of $v$














\(\ds \)

\(=\)







\(\ds \int \dfrac 1 {x^2} \frac 1 x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \dfrac {\d x} {x^3}\)




















\(\ds \)

\(=\)







\(\ds -\dfrac 1 {2 x^2}\)










and so:














\(\ds y_2\)

\(=\)







\(\ds v y_1\)





Definition of $y_2$














\(\ds \)

\(=\)







\(\ds x \paren {-\dfrac 1 {2 x^2} }\)




















\(\ds \)

\(=\)







\(\ds -\dfrac 1 {2 x}\)










From Two Linearly Independent Solutions of Homogeneous Linear Second Order ODE generate General Solution:

$y = C_1 x + k \paren {-\dfrac 1 {2 x} }$
where $k$ is arbitrary.
Setting $C_2 = -\dfrac k 2$ yields the result:

$y = C_1 x + \dfrac {C_2} x$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.16$: The Use of a Known Solution to find Another: Example $1$




