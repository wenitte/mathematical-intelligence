# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(y_-_1_over_x)_dx_%2B_(x_-_y)_dy_%3D_0

Theorem
The first order ODE:

$(1): \quad \paren {y - \dfrac 1 x} \rd x + \paren {x - y} \rd y = 0$
is an exact differential equation with solution:

$x y - \ln x - \dfrac {y^2} 2 + C$


Proof
Let $M$ and $N$ be defined as:

$\map M {x, y} = y - \dfrac 1 x$
$\map N {x, y} = x - y$
Then:














\(\ds \frac {\partial M} {\partial y}\)

\(=\)







\(\ds 1\)




















\(\ds \dfrac {\partial N} {\partial x}\)

\(=\)







\(\ds 1\)










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







\(\ds \int \paren {y - \dfrac 1 x} \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds x y - \ln x + \map g y\)









and:














\(\ds f\)

\(=\)







\(\ds \int \map N {x, y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {x - y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds x y - \dfrac {y^2} 2 + \map h x\)









Thus:

$\map f {x, y} = x y - \ln x - \dfrac {y^2} 2$
and by Solution to Exact Differential Equation, the solution to $(1)$ is:

$x y - \ln x - \dfrac {y^2} 2 + C$
$\blacksquare$





