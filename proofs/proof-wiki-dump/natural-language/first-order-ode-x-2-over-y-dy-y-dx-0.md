# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(x_%2B_(2_over_y))_dy_%2B_y_dx_%3D_0

Theorem
The first order ordinary differential equation:

$(1): \quad \paren {x + \dfrac 2 y} \rd y + y \rd x = 0$

is an exact differential equation with solution:

$x y + 2 \ln y = C$

This can also be presented as:

$\dfrac {\d y} {\d x} + \dfrac y {x + \dfrac 2 y} = 0$


Proof
Let:

$\map M {x, y} = y$
$\map N {x, y} = x + \dfrac 2 y$
Then:














\(\ds \dfrac {\partial M} {\partial y}\)

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







\(\ds \int y \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds x y + \map g y\)









and:














\(\ds f\)

\(=\)







\(\ds \map N {x, y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {x + \dfrac 2 y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds x y + 2 \ln y + \map h x\)









Thus:

$\map f {x, y} = x y + 2 \ln y$
and by Solution to Exact Differential Equation, the solution to $(1)$ is:

$x y + 2 \ln y = C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.8$: Exact Equations: Problem $1$




