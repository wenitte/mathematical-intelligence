# 

Source: https://proofwiki.org/wiki/First_Order_ODE/exp_x_sine_y_dx_%2B_exp_x_cos_y_dy_%3D_y_sine_x_y_dx_%2B_x_sine_x_y_dy

Theorem
The first order ordinary differential equation:

$(1): \quad e^x \sin y \rd x + e^x \cos y \rd y = y \sin x y \rd x + x \sin x y \rd y$
is an exact differential equation with solution:

$e^x \sin y + \cos x y = C$


Proof
Let $(1)$ be expressed as:

$\paren {e^x \sin y - y \sin x y} \rd x + \paren {e^x \cos y - x \sin x y} \rd y = 0$
Let:

$\map M {x, y} = e^x \sin y - y \sin x y$
$\map N {x, y} = e^x \cos y - x \sin x y$
Then:














\(\ds \dfrac {\partial M} {\partial y}\)

\(=\)







\(\ds e^x \cos y - x y \cos x y - y \sin x y\)




















\(\ds \dfrac {\partial N} {\partial x}\)

\(=\)







\(\ds e^x \cos y - x y \cos x y - y \sin x y\)










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







\(\ds \int \paren {e^x \sin y - y \sin x y} \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds e^x \sin y + \cos x y + \map g y\)









and:














\(\ds f\)

\(=\)







\(\ds \int \map N {x, y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {e^x \cos y - x \sin x y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds e^x \sin y + \cos x y + \map h x\)









Thus:

$\map f {x, y} = e^x \sin y + \cos x y$
and by Solution to Exact Differential Equation, the solution to $(1)$ is:

$e^x \sin y + \cos x y = C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $22$




