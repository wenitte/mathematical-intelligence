# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(3_x%5E2_-_y%5E2)_dy_-_2_x_y_dx_%3D_0

Theorem
The first order ODE:

$(1): \quad \paren {3 x^2 - y^2} \rd y - 2 x y \rd x = 0$
has the general solution:

$\dfrac 1 y - \dfrac {x^2} {y^3} = C$

This can also be presented in the form:

$\dfrac {\d y} {\d x} = \dfrac {2 x y} {3 x^2 - y^2}$


Proof
We note that $(1)$ is in the form:

$\map M {x, y} \rd x + \map N {x, y} \rd y = 0$
but that $(1)$ is not exact.
So, let:

$\map M {x, y} = -2 x y$
$\map N {x, y} = 3 x^2 - y^2$
Let:

$\map P {x, y} = \dfrac {\partial M} {\partial y} - \dfrac {\partial N} {\partial x}$
Thus:














\(\ds \map P {x, y}\)

\(=\)







\(\ds -2 x - 6 x\)




















\(\ds \)

\(=\)







\(\ds -8 x\)










It can be observed that:














\(\ds \frac {\map P {x, y} } {\map M {x, y} }\)

\(=\)







\(\ds \frac {-8 x} {-2 x y}\)




















\(\ds \)

\(=\)







\(\ds \frac 4 y\)









Thus $\dfrac {\map P {x, y}} {\map M {x, y} }$ is a function of $y$ only.
So Integrating Factor for First Order ODE: Function of One Variable can be used:

$\map \mu y = e^{\int -\map h y \rd y}$
Hence:














\(\ds \int -\map h y \rd y\)

\(=\)







\(\ds \int -\paren {4 / y} \rd y\)




















\(\ds \)

\(=\)







\(\ds - 4 \ln y\)




















\(\ds \)

\(=\)







\(\ds \map \ln {y^{-4} }\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int -\map h y \rd y}\)

\(=\)







\(\ds \frac 1 {y^4}\)









Thus an integrating factor for $(1)$ has been found:

$\mu = \dfrac 1 {y^4}$
which yields, when multiplying it throughout $(1)$:

$\paren {\dfrac {3 x^2} {y^4} - \dfrac 1 {y^2} } \rd y - \dfrac {2 x} {y^3} \rd x = 0$
which is now exact.

By First Order ODE: $\paren {\dfrac {3 x^2} {y^4} - \dfrac 1 {y^2} } \rd y - \dfrac {2 x} {y^3} \rd x = 0$, its solution is:

$\dfrac 1 y - \dfrac {x^2} {y^3} = C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.9$: Integrating Factors: Problem $2 \ \text{(a)}$




