# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(x_y_-_1)_dx_%2B_(x%5E2_-_x_y)_dy_%3D_0

Theorem
The first order ODE:

$(1): \quad \paren {x y - 1} \rd x + \paren {x^2 - x y} \rd y = 0$
has the general solution:

$x y - \ln x - \dfrac {y^2} 2 + C$

This can also be presented in the form:

$\dfrac {\d y} {\d x} + \dfrac {x y - 1} {x^2 - x y} = 0$


Proof
We note that $(1)$ is in the form:

$\map M {x, y} \rd x + \map N {x, y} \rd y = 0$
but that $(1)$ is not exact.
So, let:

$\map M {x, y} = x y - 1$
$\map N {x, y} = x^2 - x y = x \paren {x - y}$
Let:

$\map P {x, y} = \dfrac {\partial M} {\partial y} - \dfrac {\partial N} {\partial x}$
Thus:














\(\ds \map P {x, y}\)

\(=\)







\(\ds x - \paren {2 x - y}\)




















\(\ds \)

\(=\)







\(\ds -\paren {x - y}\)










It can be observed that:














\(\ds \frac {\map P {x, y} } {\map N {x, y} }\)

\(=\)







\(\ds \frac {-\paren {x - y} } {x \paren {x - y} }\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 x\)









Thus $\dfrac {\map P {x, y} } {\map N {x, y}}$ is a function of $x$ only.
So Integrating Factor for First Order ODE: Function of One Variable can be used:

$\map \mu y = e^{\int \map g x \rd x}$
Hence:














\(\ds \int \map g x \rd x\)

\(=\)







\(\ds \int -\paren {1 / x} \rd x\)




















\(\ds \)

\(=\)







\(\ds -\ln x\)




















\(\ds \)

\(=\)







\(\ds \map \ln {x^{-1} }\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int \map g x \rd x}\)

\(=\)







\(\ds \frac 1 x\)









Thus an integrating factor for $(1)$ has been found:

$\mu = \dfrac 1 x$
which yields, when multiplying it throughout $(1)$:

$\paren {y - \dfrac 1 x} \rd x + \paren {x - y} \rd y = 0$
which is now exact.

By First Order ODE: $\paren {y - \dfrac 1 x} \rd x + \paren {x - y} \rd y = 0$, its solution is:

$x y - \ln x - \dfrac {y^2} 2 + C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.9$: Integrating Factors: Problem $2 \ \text{(b)}$




