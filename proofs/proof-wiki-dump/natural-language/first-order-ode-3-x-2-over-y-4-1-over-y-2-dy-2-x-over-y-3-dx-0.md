# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(3_x%5E2_over_y%5E4_-_1_over_y%5E2)_dy_-_2_x_over_y%5E3_dx_%3D_0

Theorem
The first order ODE:

$(1): \quad \paren {\dfrac {3 x^2} {y^4} - \dfrac 1 {y^2} } \rd y - \dfrac {2 x} {y^3} \rd x = 0$
is an exact differential equation with general solution:

$\dfrac 1 y - \dfrac {x^2} {y^3} = C$


Proof
Let $M$ and $N$ be defined as:

$\map M {x, y} = -\dfrac {2 x} {y^3}$
$\map N {x, y} = \dfrac {3 x^2} {y^4} - \dfrac 1 {y^2}$

Then:














\(\ds \frac {\partial M} {\partial y}\)

\(=\)







\(\ds \frac {6 x} {2 y^4}\)




















\(\ds \dfrac {\partial N} {\partial x}\)

\(=\)







\(\ds \dfrac {6 x} {y^4}\)










Thus $\dfrac {\partial M} {\partial y} = \dfrac {\partial N} {\partial x}$ and $(1)$ is seen by definition to be exact.

By Solution to Exact Differential Equation, the solution to $(1)$ is:

$\map f {x, y} = C$
where:














\(\ds \dfrac {\partial f} {\partial x}\)

\(=\)







\(\ds \map M {x, y}\)




















\(\ds \dfrac {\partial f} {\partial y}\)

\(=\)







\(\ds \map N {x, y}\)










Hence:














\(\ds f\)

\(=\)







\(\ds \map M {x, y} \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds \int - \dfrac {2 x} {y^3} \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds -\dfrac {x^2} {y^3} + \map g y\)









and:














\(\ds f\)

\(=\)







\(\ds \int \map N {x, y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {\dfrac {3 x^2} {y^4} - \dfrac 1 {y^2} } \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds -\dfrac {x^2} {y^3} + \dfrac 1 y + \map h x\)









Thus:

$\map f {x, y} = \dfrac 1 y - \dfrac {x^2} {y^3}$
and by Solution to Exact Differential Equation, the general solution to $(1)$ is:

$\dfrac 1 y - \dfrac {x^2} {y^3} = C$
$\blacksquare$





