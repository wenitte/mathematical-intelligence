# 

Source: https://proofwiki.org/wiki/First_Order_ODE/exp_y_dx_%2B_(x_exp_y_%2B_2_y)_dy_%3D_0

Theorem
The first order ordinary differential equation:

$(1): \quad e^y + \paren {x e^y + 2 y} \dfrac {\d y} {\d x} = 0$

is an exact differential equation with solution:

$x e^y + y^2 = C$

This can also be presented as:

$\dfrac {\d y} {\d x} + \dfrac {e^y} {x e^y + 2 y} = 0$


Proof
Let:

$\map M {x, y} = e^y$
$\map N {x, y} = x e^y + 2 y$
Then:














\(\ds \dfrac {\partial M} {\partial y}\)

\(=\)







\(\ds e^y\)




















\(\ds \dfrac {\partial N} {\partial x}\)

\(=\)







\(\ds e^y\)










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







\(\ds \int \map M {x, y} \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds \int e^y \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds x e^y + \map g y\)









and:














\(\ds f\)

\(=\)







\(\ds \int \map N {x, y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {x e^y + 2 y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds x e^y + y^2 + \map h x\)









Thus:

$\map f {x, y} = x e^y + y^2$
and by Solution to Exact Differential Equation, the solution to $(1)$ is:

$x e^y + y^2 = C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.8$: Exact Equations: Example $1$




