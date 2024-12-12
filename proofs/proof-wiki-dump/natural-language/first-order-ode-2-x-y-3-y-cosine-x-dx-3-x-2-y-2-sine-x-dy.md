# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(2_x_y%5E3_%2B_y_cosine_x)_dx_%2B_(3_x%5E2_y%5E2_%2B_sine_x)_dy

Theorem
The first order ordinary differential equation:

$(1): \quad \paren {2 x y^3 + y \cos x} \d x + \paren {3 x^2 y^2 + \sin x} \d y = 0$

is an exact differential equation with solution:

$x^2 y^3 + y \sin x = C$

This can also be presented as:

$\dfrac {\d y} {\d x} = -\dfrac {2 x y^3 + y \cos x} {3 x^2 y^2 + \sin x}$


Proof
Let:

$\map M {x, y} = 2 x y^3 + y \cos x$
$\map N {x, y} = 3 x^2 y^2 + \sin x$
Then:














\(\ds \frac {\partial M} {\partial y}\)

\(=\)







\(\ds 2 x \cdot 3 y^2 + \cos x\)




















\(\ds \)

\(=\)







\(\ds 6 x y^2 + \cos x\)




















\(\ds \frac {\partial N} {\partial x}\)

\(=\)







\(\ds 3 x^2 \cdot 2 y^2 + \cos x\)




















\(\ds \)

\(=\)







\(\ds 6 x y^2 + \cos x\)










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







\(\ds \int \paren {2 x y^3 + y \cos x} \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds x^2 y^3 + y \sin x + \map g y\)










and:














\(\ds f\)

\(=\)







\(\ds \int \map N {x, y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {3 x^2 y^2 + \sin x} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds x^2 y^3 + y \sin x + \map h x\)










Thus:

$\map f {x, y} = x^2 y^3 + y \sin x$
and by Solution to Exact Differential Equation, the solution to $(1)$ is:

$x^2 y^3 + y \sin x = C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.8$: Exact Equations: Problem $10$




