# 

Source: https://proofwiki.org/wiki/First_Order_ODE/y_dx_%2B_(x%5E2_y_-_x)_dy_%3D_0/Proof_1

Theorem
The first order ODE:

$(1): \quad y \rd x + \paren {x^2 y - x} \rd y = 0$
has the general solution:

$\dfrac {y^2} 2 - \dfrac y x = C$

This can also be presented in the form:

$\dfrac {\d y} {\d x} + \dfrac y {x^2 y - x}$


Proof
We note that $(1)$ is in the form:

$\map M {x, y} \d x + \map N {x, y} \d y = 0$
but that $(1)$ is not exact.
So, let:

$\map M {x, y} = y$
$\map N {x, y} = x^2 y - x$
Let:

$\map P {x, y} = \dfrac {\partial M} {\partial y} - \dfrac {\partial N} {\partial x}$
Thus:














\(\ds \map P {x, y}\)

\(=\)







\(\ds 1 - \paren {2 x y - 1}\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {1 - x y}\)










It can be observed that:














\(\ds \frac {\map P {x, y} } {\map N {x, y} }\)

\(=\)







\(\ds \frac {2 \paren {1 - x y} } {x^2 y - x}\)




















\(\ds \)

\(=\)







\(\ds \frac {-2 \paren {x y - 1} } {x \paren {x y - 1} }\)




















\(\ds \)

\(=\)







\(\ds -\frac 2 x\)









Thus $\dfrac {\map P {x, y} } {\map N {x, y} }$ is a function of $x$ only.
So Integrating Factor for First Order ODE: Function of One Variable can be used:

$\map \mu x = e^{\int \map g x \rd x}$
Hence:














\(\ds \int \map g x \rd x\)

\(=\)







\(\ds \int - \paren {2 / x} \rd x\)




















\(\ds \)

\(=\)







\(\ds - 2 \ln x\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int \map g x \rd x}\)

\(=\)







\(\ds \frac 1 {x^2}\)









Thus an integrating factor for $(1)$ has been found:

$\mu = \dfrac 1 {x^2}$
which yields, when multiplying it throughout $(1)$:

$\dfrac y {x^2} \rd x + \paren {y - \dfrac 1 x} \rd y = 0$
which is now exact.

By First Order ODE: $\dfrac y {x^2} \rd x + \paren {y - \dfrac 1 x} \rd y = 0$, its solution is:

$\dfrac {y^2} 2 - \dfrac y x = C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.9$: Integrating Factors: Example $1$




