# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/(x_-_1)_y%27%27_-_y%27_%2B_y_%3D_0

Theorem
The second order ODE:

$(1): \quad \paren {x - 1} y - x y' + y = 0$
has the general solution:

$y = C_1 x + C_2 e^x$


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

$(2): \quad y - \dfrac x {x - 1} y' + \dfrac 1 {x - 1} y = 0$
which is in the form:

$y + \map P x y' + \map Q x y = 0$
where:

$\map P x = -\dfrac x {x - 1}$

From Particular Solution to Homogeneous Linear Second Order ODE gives rise to Another:

$\map {y_2} x = \map v x \, \map {y_1} x$
where:

$\ds v = \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x$
is also a particular solution of $(1)$.

We have that:














\(\ds \int P \rd x\)

\(=\)







\(\ds \int \paren {-\dfrac x {x - 1} } \rd x\)




















\(\ds \)

\(=\)







\(\ds -x - \map \ln {x - 1}\)





Primitive of $\dfrac x {a x + b}$








\(\ds \leadsto \ \ \)





\(\ds e^{-\int P \rd x}\)

\(=\)







\(\ds e^{x + \map \ln {x - 1} }\)




















\(\ds \)

\(=\)







\(\ds e^x \paren {x - 1}\)










Hence:














\(\ds v\)

\(=\)







\(\ds \int \dfrac 1 { {y_1}^2} e^{- \int P \rd x} \rd x\)





Definition of $v$














\(\ds \)

\(=\)







\(\ds \int \dfrac 1 {x^2} e^x \paren {x - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {\dfrac {e^x} x - \dfrac {e^x} {x^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \dfrac {e^x} x \rd x - \int \dfrac {e^x} {x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \dfrac {e^x} x \rd x + \frac {e^x} x - \int \frac {e^x} x \rd x\)





Primitive of $\dfrac {e^{a x} } {x^n}$














\(\ds \)

\(=\)







\(\ds \frac {e^x} x\)










and so:














\(\ds y_2\)

\(=\)







\(\ds v y_1\)





Definition of $y_2$














\(\ds \)

\(=\)







\(\ds \paren {\frac {e^x} x} x\)




















\(\ds \)

\(=\)







\(\ds e^x\)










From Two Linearly Independent Solutions of Homogeneous Linear Second Order ODE generate General Solution:

$y = C_1 x + C_2 e^x$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.16$: Problem $7 \ \text{(a)}$




