# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/x%5E2_y%27%27_%2B_x_y%27_-_4_y_%3D_0

Theorem
The second order ODE:

$(1): \quad x^2 y + x y' - 4 y = 0$
has the general solution:

$y = C_1 x^2 + \dfrac {C_2} {x^2}$


Proof 1
Note that:














\(\ds y_1\)

\(=\)







\(\ds x^2\)














\(\ds \leadsto \ \ \)





\(\ds y'\)

\(=\)







\(\ds 2 x\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds 2\)





Power Rule for Derivatives



and so by inspection:

$y_1 = x^2$
is a particular solution of $(1)$.

$(1)$ can be expressed as:

$(2): \quad y + \dfrac 1 x y' - \dfrac 4 {x^2} y = 0$
which is in the form:

$y + \map P x y' + \map Q x y = 0$
where:

$\map P x = \dfrac 1 x$
$\map Q x = -\dfrac 4 {x^2}$

From Particular Solution to Homogeneous Linear Second Order ODE gives rise to Another:

$\map {y_2} x = \map v x \, \map {y_1} x$
where:

$\ds v = \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x$
is also a particular solution of $(1)$.

We have that:














\(\ds \int P \rd x\)

\(=\)







\(\ds \int \dfrac 1 x \rd x\)




















\(\ds \)

\(=\)







\(\ds \ln x\)





Primitive of Reciprocal








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







\(\ds \int \dfrac 1 {x^4} \frac 1 x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \dfrac 1 {x^5} \rd x\)




















\(\ds \)

\(=\)







\(\ds - \frac 1 {4 x^4}\)










and so:














\(\ds y_2\)

\(=\)







\(\ds v y_1\)





Definition of $y_2$














\(\ds \)

\(=\)







\(\ds -\frac 1 {4 x^4} x^2\)










From Two Linearly Independent Solutions of Homogeneous Linear Second Order ODE generate General Solution:

$y = C_1 x^2 + k \paren {-\dfrac 1 {4 x^2} }$
where $k$ is arbitrary.

Setting $C_2 = - \dfrac k 4$ yields the result:

$y = C_1 x^2 + \dfrac {C_2} {x^2}$
$\blacksquare$


Proof 2
It can be seen that $(1)$ is an instance of the Cauchy-Euler Equation:

$x^2 y + p x y' + q y = 0$
where:

$p = 1$
$q = -4$

By Conversion of Cauchy-Euler Equation to Constant Coefficient Linear ODE, this can be expressed as:

$\dfrac {\d^2 y} {\d t^2} + \paren {p - 1} \dfrac {\d y} {\d t^2} + q y = 0$
by making the substitution:

$x = e^t$

Hence it can be expressed as:

$(2): \quad \dfrac {\d^2 y} {\d t^2} - 4 y = 0$

From Linear Second Order ODE: $y - 4 y = 0$, this has the general solution:














\(\ds y\)

\(=\)







\(\ds C_1 e^{2 t} + C_2 e^{-2 t}\)




















\(\ds \)

\(=\)







\(\ds C_1 x^2 + C_2 x^{-2}\)





substituting $x = e^t$














\(\ds \)

\(=\)







\(\ds C_1 x^2 + \frac {C_2} {x^2}\)









$\blacksquare$





