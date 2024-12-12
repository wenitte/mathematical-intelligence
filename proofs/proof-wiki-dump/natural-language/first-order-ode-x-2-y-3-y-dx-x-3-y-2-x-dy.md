# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(x%5E2_y%5E3_%2B_y)_dx_%3D_(x%5E3_y%5E2_-_x)_dy

Theorem
The first order ODE:

$(1): \quad \paren {x^2 y^3 + y} \rd x = \paren {x^3 y^2 - x} \rd y$
has the general solution:

$-\dfrac 1 {2 x^2 y^2} = \ln \dfrac y x + C$


Proof
Let $(1)$ be expressed as:

$(2): \quad \paren {y + x^2 y^3} \rd x + \paren {x - x^3 y^2} \rd y = 0$

We note that $(2)$ is in the form:

$\map M {x, y} \rd x + \map N {x, y} \rd y = 0$
but is not exact.
So, let:

$\map M {x, y} = y + x^2 y^3$
$\map N {x, y} = x - x^3 y^2$
Let:

$\map P {x, y} = \dfrac {\partial M} {\partial y} - \dfrac {\partial N} {\partial x}$
Thus:














\(\ds \map P {x, y}\)

\(=\)







\(\ds \paren {1 + 3 x^2 y^2} - \paren {1 - 3 x^2 y^2}\)




















\(\ds \)

\(=\)







\(\ds 6 x^2 y^2\)










It can be observed that:














\(\ds \frac {\map P {x, y} } {\map N {x, y} y - \map M {x, y} x}\)

\(=\)







\(\ds \frac {6 x^2 y^2} {\paren {x y - x^3 y^3} - \paren {x y + x^3 y^3} }\)




















\(\ds \)

\(=\)







\(\ds -\frac {6 x^2 y^2} {2 x^3 y^3}\)




















\(\ds \)

\(=\)







\(\ds -\frac 3 {x y}\)









Thus $\dfrac {\map P {x, y} } {\map M {x, y} }$ is a function of $x y$.
So Integrating Factor for First Order ODE: Function of Product of Variables can be used.
Let $z = x y$.
Then:

$\map \mu {x y} = \map \mu z = e^{\int \map g z \rd z}$
Hence:














\(\ds \int \map g z \rd z\)

\(=\)







\(\ds \int -\frac 3 z \rd z\)




















\(\ds \)

\(=\)







\(\ds - 3 \ln z\)




















\(\ds \)

\(=\)







\(\ds \map \ln {z^{-3} }\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int \map g z \rd z}\)

\(=\)







\(\ds \frac 1 {z^3}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {x^3 y^3}\)









Thus an integrating factor for $(1)$ has been found:

$\mu = \dfrac 1 {x^3 y^3}$
which yields, when multiplying it throughout $(2)$:

$\paren {\dfrac 1 {x^3 y^2} + \dfrac 1 x} \rd x + \paren {\dfrac 1 {x^2 y^3} - \dfrac 1 y} \rd y = 0$
which is now exact.

By First Order ODE: $\paren {\dfrac 1 {x^3 y^2} + \dfrac 1 x} \rd x + \paren {\dfrac 1 {x^2 y^3} - \dfrac 1 y} \rd y = 0$, its general solution is:

$-\dfrac 1 {2 x^2 y^2} = \ln \dfrac y x + C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $6$




