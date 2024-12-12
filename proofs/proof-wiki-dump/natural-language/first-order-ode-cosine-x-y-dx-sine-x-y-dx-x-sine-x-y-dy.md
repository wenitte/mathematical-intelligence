# 

Source: https://proofwiki.org/wiki/First_Order_ODE/Cosine_(x_%2B_y)_dx_%3D_sine_(x_%2B_y)_dx_%2B_x_sine_(x_%2B_y)_dy

Theorem
The first order ordinary differential equation:

$\map \cos {x + y} \rd x = \map \sin {x + y} \rd x + x \map \sin {x + y} \rd y$
is an exact differential equation with solution:

$x \map \cos {x + y} = C$


Proof
Express it in the form:

$\paren {x \map \sin {x + y} - \map \cos {x + y} } \rd x + x \map \sin {x + y} \rd y$
Let:

$\map M {x, y} = x \map \sin {x + y} - \map \cos {x + y}$
$\map N {x, y} = x \map \sin {x + y}$
Then:














\(\ds \frac {\partial M} {\partial y}\)

\(=\)







\(\ds x \map \cos {x + y} + \map \sin {x + y}\)




















\(\ds \frac {\partial N} {\partial x}\)

\(=\)







\(\ds x \map \cos {x + y} + \map \sin {x + y}\)










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







\(\ds \int \paren {x \map \sin {x + y} - \map \cos {x + y} } \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds \map \sin {x + y} - x \map \cos {x + y} - \map \sin {x + y}\)




















\(\ds \)

\(=\)







\(\ds -x \map \cos {x + y}\)










and:














\(\ds f\)

\(=\)







\(\ds \map N {x, y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \int x \map \sin {x + y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds -x \map \cos {x + y} + \map h x\)










Thus:

$\map f {x, y} = -x \map \cos {x + y}$
and by Solution to Exact Differential Equation, the solution to $(1)$ is:

$-x \map \cos {x + y} = C_1$
or setting $C = -C_1$:

$x \map \cos {x + y} = C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $15$




