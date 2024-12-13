# 

Source: https://proofwiki.org/wiki/Legendre%27s_Differential_Equation/(1_-_x%5E2)_y%27%27_-_2_x_y%27_%2B_2_y_%3D_0

Theorem
The special case of Legendre's differential equation:

$(1): \quad \paren {1 - x^2} y - 2 x y' + 2 y = 0$
has the general solution:

$y = C_1 x + C_2 \paren {\dfrac x 2 \, \map \ln {\dfrac {1 + x} {1 - x} } - 1}$


Proof
Note that:














\(\ds y_1\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds {y_1}'\)

\(=\)







\(\ds 1\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds {y_1}\)

\(=\)







\(\ds 0\)





Derivative of Constant



and so by inspection:

$y_1 = x$
is a particular solution of $(1)$.

$(1)$ can be expressed as:

$(2): \quad y - \dfrac {2 x} {1 - x^2} y' + \dfrac 2 {1 - x^2} y = 0$
which is in the form:

$y + \map P x y' + \map Q x y = 0$
where:

$\map P x = - \dfrac {2 x} {1 - x^2}$
$\map Q x = \dfrac 2 {1 - x^2}$

From Particular Solution to Homogeneous Linear Second Order ODE gives rise to Another:

$\map {y_2} x = \map v x \, \map {y_1} x$
where:

$\ds v = \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x$
is also a particular solution of $(1)$.

We have that:














\(\ds \int P \rd x\)

\(=\)







\(\ds \int \paren {-\dfrac {2 x} {1 - x^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \map \ln {1 - x^2}\)





Primitive of Function under its Derivative








\(\ds \leadsto \ \ \)





\(\ds e^{-\int P \rd x}\)

\(=\)







\(\ds e^{-\map \ln {1 - x^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {1 - x^2}\)










Hence:














\(\ds v\)

\(=\)







\(\ds \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x\)





Definition of $v$














\(\ds \)

\(=\)







\(\ds \int \dfrac 1 {x^2} \frac 1 {1 - x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \dfrac 1 {x^2 \paren {1 - x^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 x + \frac 1 2 \map \ln {\frac {1 + x} {1 - x} }\)





Primitive of $\dfrac 1 {x^2 \paren {a^2 - x^2} }$




and so:














\(\ds y_2\)

\(=\)







\(\ds v y_1\)





Definition of $y_2$














\(\ds \)

\(=\)







\(\ds \paren {-\frac 1 x + \frac 1 2 \map \ln {\frac {1 + x} {1 - x} } } x\)




















\(\ds \)

\(=\)







\(\ds -1 + \frac x 2 \map \ln {\frac {1 + x} {1 - x} }\)










From Two Linearly Independent Solutions of Homogeneous Linear Second Order ODE generate General Solution:

$y = C_1 x + C_2 \paren {\dfrac x 2 \, \map \ln {\dfrac {1 + x} {1 - x} } - 1}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.16$: Problem $5$




