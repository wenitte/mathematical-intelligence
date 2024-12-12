# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(1_over_x%5E3_y%5E2_%2B_1_over_x)_dx_%2B_(1_over_x%5E2_y%5E3_-_1_over_y)_dy_%3D_0

Theorem
The first order ordinary differential equation:

$(1): \quad \paren {\dfrac 1 {x^3 y^2} + \dfrac 1 x} \rd x + \paren {\dfrac 1 {x^2 y^3} - \dfrac 1 y} \rd y = 0$
is an exact differential equation with solution:

$-\dfrac 1 {2 x^2 y^2} = \ln \dfrac y x + C$


Proof
Let:

$\map M {x, y} = \dfrac 1 {x^3 y^2} + \dfrac 1 x$
$\map N {x, y} = \dfrac 1 {x^2 y^3} - \dfrac 1 y$
Then:














\(\ds \dfrac {\partial M} {\partial y}\)

\(=\)







\(\ds -\dfrac 2 {x^3 y^3}\)




















\(\ds \dfrac {\partial N} {\partial x}\)

\(=\)







\(\ds -\dfrac 2 {x^3 y^3}\)










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







\(\ds \int \paren {\dfrac 1 {x^3 y^2} + \dfrac 1 x} \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 {2 x^2 y^2} + \ln x + \map g y\)









and:














\(\ds f\)

\(=\)







\(\ds \int \map N {x, y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {\dfrac 1 {x^2 y^3} - \dfrac 1 y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 {2 x^2 y^2} - \ln y + \map h x\)









Thus:

$\map f {x, y} = -\dfrac 1 {2 x^2 y^2} + \ln x - \ln y$
and by Solution to Exact Differential Equation, the solution to $(1)$ is:

$-\dfrac 1 {2 x^2 y^2} + \ln x - \ln y = C$
or:

$-\dfrac 1 {2 x^2 y^2} = \ln \dfrac y x + C$
$\blacksquare$





