# 

Source: https://proofwiki.org/wiki/Second_Order_ODE/x_y%27%27_%2B_3_y%27_%3D_0

Theorem
The second order ODE:

$(1): \quad x y + 3 y' = 0$
has the general solution:

$y = C_1 + \dfrac {C_2} {x^2}$


Proof
Note that:














\(\ds y_1\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds y'\)

\(=\)







\(\ds 0\)





Derivative of Constant








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds 0\)





Derivative of Constant



and so by inspection:

$y_1 = 1$
is a particular solution of $(1)$.

$(1)$ can be expressed as:

$(2): \quad y + \dfrac 3 x y' = 0$
which is in the form:

$y + \map P x y' + \map Q x y = 0$
where:

$\map P x = \dfrac 3 x$
$\map Q x = 0$

From Particular Solution to Homogeneous Linear Second Order ODE gives rise to Another:

$\map {y_2} x = \map v x \, \map {y_1} x$
where:

$\ds v = \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x$
is also a particular solution of $(1)$.

We have that:














\(\ds \int P \rd x\)

\(=\)







\(\ds \int \dfrac 3 x \rd x\)




















\(\ds \)

\(=\)







\(\ds 3 \ln x\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \ln x^3\)














\(\ds \leadsto \ \ \)





\(\ds e^{-\int P \rd x}\)

\(=\)







\(\ds e^{-\ln x^3}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {x^3}\)










Hence:














\(\ds v\)

\(=\)







\(\ds \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x\)





Definition of $v$














\(\ds \)

\(=\)







\(\ds \int \frac 1 {x^3} \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 {2 x^2}\)










and so:














\(\ds y_2\)

\(=\)







\(\ds v y_1\)





Definition of $y_2$














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 x^2}\)










From Two Linearly Independent Solutions of Homogeneous Linear Second Order ODE generate General Solution:

$y = C_1 + k \paren {-\frac 1 {2 x^2} }$
where $k$ is arbitrary.

Setting $C_2 = -\dfrac k 2$ yields the result:

$y = C_1 + \dfrac {C_2} {x^2}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.16$: Problem $3$




