# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(y_over_x%5E2)_dx_%2B_(y_-_1_over_x)_dy_%3D_0

Theorem
The first order ordinary differential equation:

$(1): \quad \dfrac y {x^2} \rd x + \paren {y - \dfrac 1 x} \rd y = 0$
is an exact differential equation with solution:

$\dfrac {y^2} 2 - \dfrac y x = C$


Proof
Let $M$ and $N$ be defined as:

$\map M {x, y} = \dfrac y {x^2}$
$\map N {x, y} = y - \dfrac 1 x$

Then:














\(\ds \frac {\partial M} {\partial y}\)

\(=\)







\(\ds \frac 1 {x^2}\)




















\(\ds \dfrac {\partial N} {\partial x}\)

\(=\)







\(\ds \dfrac 1 {x^2}\)










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







\(\ds \int \dfrac y {x^2} \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds - \frac y x + \map g y\)









and:














\(\ds f\)

\(=\)







\(\ds \int \map N {x, y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {y - \dfrac 1 x} \r d y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \frac {y^2} 2 - \frac y x + \map h x\)









Thus:

$\map f {x, y} = \dfrac {y^2} 2 - \dfrac y x$

By Solution to Exact Differential Equation, the solution to $(1)$ is:

$\dfrac {y^2} 2 - \dfrac y x = C$
$\blacksquare$





