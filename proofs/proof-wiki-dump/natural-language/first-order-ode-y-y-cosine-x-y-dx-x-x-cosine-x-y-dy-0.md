# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(y_%2B_y_cosine_x_y)_dx_%2B_(x_%2B_x_cosine_x_y)_dy_%3D_0

Theorem
The first order ordinary differential equation:

$(1): \quad \paren {y + y \cos x y} \rd x + \paren {x + x \cos x y} \rd y = 0$

is an exact differential equation with solution:

$x y + \sin x y = C$

This can also be presented as:

$\dfrac {\d y} {\d x} + \dfrac {y + y \cos x y} {x + x \cos x y} = 0$


Proof
Let:

$\map M {x, y} = y + y \cos x y$
$\map N {x, y} = x + x \cos x y$
Then:














\(\ds \dfrac {\partial M} {\partial y}\)

\(=\)







\(\ds 1 + \cos x y  - x \sin x y\)




















\(\ds \dfrac {\partial N} {\partial x}\)

\(=\)







\(\ds 1 + \cos x y  - x \sin x y\)










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







\(\ds \int \paren {y + y \cos x y} \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds x y + \sin x y + \map g y\)









and:














\(\ds f\)

\(=\)







\(\ds \int \map N {x, y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {x + x \cos x y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds x y + \sin x y + \map h x\)










Thus:

$\map f {x, y} = x y + \sin x y$
and by Solution to Exact Differential Equation, the solution to $(1)$ is:

$x y + \sin x y = C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.8$: Exact Equations: Problem $5$




