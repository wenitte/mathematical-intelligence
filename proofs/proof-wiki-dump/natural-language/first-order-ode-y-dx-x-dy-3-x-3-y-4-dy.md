# 

Source: https://proofwiki.org/wiki/First_Order_ODE/y_dx_%2B_x_dy_%2B_3_x%5E3_y%5E4_dy

Theorem
The first order ODE:

$(1): \quad y \rd x + x \rd y + 3 x^3 y^4 \rd y = 0$
has the general solution:

$-\dfrac 1 {2 x^2 y^2} + \dfrac {3 y^2} 2 = C$

This can also be presented in the form:

$\dfrac {\rd y} {\rd x} + \dfrac y {3 x^3 y^4 + x} = 0$


Proof
We note that $(1)$ is in the form:

$\map M {x, y} \rd x + \map N {x, y} \rd y = 0$
but that $(1)$ is not exact.
So, let:

$\map M {x, y} = y$
$\map N {x, y} = 3 x^3 y^4 + x = x \paren {3 x^2 y^4 + 1}$
Let:

$\map P {x, y} = \dfrac {\partial M} {\partial y} - \dfrac {\partial N} {\partial x}$
Thus:














\(\ds \map P {x, y}\)

\(=\)







\(\ds 1 - \paren {9 x^2 y^4 + 1}\)




















\(\ds \)

\(=\)







\(\ds -9 x^2 y^4\)










It can be observed that:














\(\ds \frac {\map P {x, y} } {\map N {x, y} y - \map M {x, y} x}\)

\(=\)







\(\ds \frac {-9 x^2 y^4} {\paren {3 x^3 y^4 + x} y - y x}\)




















\(\ds \)

\(=\)







\(\ds -\frac {-9 x^2 y^4} {3 x^3 y^5}\)




















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







\(\ds -3 \ln z\)




















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
which yields, when multiplying it throughout $(1)$:

$\dfrac 1 {x^3 y^2} \rd x + \paren {\dfrac 1 {x^2 y^3} + 3 y} \rd y = 0$
which is now exact.

By First Order ODE: $\dfrac 1 {x^3 y^2} \rd x + \paren {\dfrac 1 {x^2 y^3} + 3 y} \rd y = 0$, its solution is:

$-\dfrac 1 {2 x^2 y^2} + \dfrac {3 y^2} 2 = C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.9$: Integrating Factors: Problem $2 \ \text{(c)}$




