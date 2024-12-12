# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(y%5E2_exp_x_y_%2B_cosine_x)_dx_%2B_(exp_x_y_%2B_x_y_exp_x_y)_dy_%3D_0

Theorem
The first order ordinary differential equation:

$(1): \quad \paren {y^2 e^{x y} + \cos x} \rd x + \paren {e^{x y} + x y e^{x y} } \rd y = 0$
is an exact differential equation with solution:

$y e^{x y} + \sin x = C$


Proof
Let:

$\map M {x, y} = y^2 e^{x y} + \cos x$
$\map N {x, y} = e^{x y} + x y e^{x y}$
Then:














\(\ds \dfrac {\partial M} {\partial y}\)

\(=\)







\(\ds 2 y e^{x y} + x y^2 e^{x y}\)




















\(\ds \dfrac {\partial N} {\partial x}\)

\(=\)







\(\ds y e^{x y} + x y^2 e^{x y} + y e^{x y}\)




















\(\ds \)

\(=\)







\(\ds 2 y e^{x y} + x y^2 e^{x y}\)










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







\(\ds \int \paren {y^2 e^{x y} + \cos x} \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds y e^{x y} + \sin x + \map g y\)









and:














\(\ds f\)

\(=\)







\(\ds \int \map N {x, y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {e^{x y} + x y e^{x y} } \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{x y} } x + y e^{x y} - \frac {e^{x y} } x + \map h x\)





Primitive of $x e^{a x}$














\(\ds \)

\(=\)







\(\ds y e^{x y} + \map h x\)









Thus:

$\map f {x, y} = y e^{x y} + \sin x$
and by Solution to Exact Differential Equation, the solution to $(1)$ is:

$y e^{x y} + \sin x = C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $17$




