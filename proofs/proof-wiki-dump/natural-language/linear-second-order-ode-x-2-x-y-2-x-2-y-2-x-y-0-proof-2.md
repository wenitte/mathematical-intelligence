# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/(x%5E2_%2B_x)_y%27%27_%2B_(2_-_x%5E2)_y%27_-_(2_%2B_x)_y_%3D_0/Proof_2

Theorem
The second order ODE:

$(1): \quad \paren {x^2 + x} y + \paren {2 - x^2} y' - \paren {2 + x} y = 0$
has the general solution:

$y = C_1 e^x + \dfrac {C_2} x$


Proof
Note that:

$\paren {x^2 + x} + \paren {2 - x^2} - \paren {2 + x} = 0$
so $\map {y_1} x$ such that $y_1 = {y_1}' = {y_1}$ satisfies $(1)$.
Hence:

$y_1 = e^x$
is a particular solution of $(1)$.

$(1)$ can be expressed as:

$(2): \quad y + \dfrac {2 - x^2} {x^2 + x} y' - \dfrac {2 + x} {x^2 + x} y = 0$
which is in the form:

$y + \map P x y' + \map Q x y = 0$
where:

$\map P x = \dfrac {2 - x^2} {x^2 + x}$
$\map Q x = \dfrac {2 + x} {x^2 + x}$

From Particular Solution to Homogeneous Linear Second Order ODE gives rise to Another:

$\map {y_2} x = \map v x \, \map {y_1} x$
where:

$\ds v = \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x$
is also a particular solution of $(1)$.

We have that:














\(\ds \int P \rd x\)

\(=\)







\(\ds \int \paren {\dfrac {2 - x^2} {x^2 + x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \dfrac 2 {x \paren {x + 1} } \rd x - \int \paren {\dfrac x {x + 1} } \rd x\)




















\(\ds \)

\(=\)







\(\ds 2 \, \map \ln {\frac x {x + 1} } - \int \paren {\dfrac x {x + 1} } \rd x\)





Primitive of $\dfrac 1 {x \paren {a x + b} }$














\(\ds \)

\(=\)







\(\ds 2 \, \map \ln {\frac x {x + 1} } - x + \map \ln {x + 1}\)





Primitive of $\dfrac x {a x + b}$














\(\ds \)

\(=\)







\(\ds \map \ln {\frac {x^2} {x + 1} } - x\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\frac {e^{-x} x^2} {x + 1} }\)




















\(\ds \)

\(=\)







\(\ds -\map \ln {\frac {e^x \paren {x + 1} } {x^2} }\)














\(\ds \leadsto \ \ \)





\(\ds e^{-\int P \rd x}\)

\(=\)







\(\ds e^{\map \ln {\frac {e^x \paren {x + 1} } {x^2} } }\)




















\(\ds \)

\(=\)







\(\ds \frac {e^x \paren {x + 1} } {x^2}\)










Hence:














\(\ds v\)

\(=\)







\(\ds \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x\)





Definition of $v$














\(\ds \)

\(=\)







\(\ds \int e^{-2 x} \paren {\frac {e^x \paren {x + 1} } {x^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {e^{-x} \paren {x + 1} } {x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {e^{-x} } x \rd x + \int \frac {e^{-x} } {x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {e^{-x} } x \rd x + \frac {-e^{-x} } x - \int \frac {e^{-x} } x \rd x\)





Primitive of $\dfrac {e^{a x} } {x^n}$














\(\ds \)

\(=\)







\(\ds -\frac {e^{-x} } x\)










and so:














\(\ds y_2\)

\(=\)







\(\ds v y_1\)





Definition of $y_2$














\(\ds \)

\(=\)







\(\ds \paren {-\frac {e^{-x} } x} e^x\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 x\)










From Two Linearly Independent Solutions of Homogeneous Linear Second Order ODE generate General Solution:

$y = C_1 e^x + \dfrac {C_2} x$
$\blacksquare$





