# 

Source: https://proofwiki.org/wiki/First_Order_ODE/-1_over_y_sine_x_over_y_dx_%2B_x_over_y%5E2_sine_x_over_y_dy

Theorem
The first order ordinary differential equation:

$(1): \quad -\dfrac 1 y \sin \dfrac x y \rd x + \dfrac x {y^2} \sin \dfrac x y \rd y = 0$

is an exact differential equation with solution:

$\dfrac x y = C$

This can also be presented as:

$\dfrac {\d y} {\d x} = \dfrac {\dfrac 1 y \sin \dfrac x y} {\dfrac x {y^2} \sin \dfrac x y}$


Proof
Let:

$\map M {x, y} = -\dfrac 1 y \sin \dfrac x y$
$\map N {x, y} = \dfrac x {y^2} \sin \dfrac x y$
Then:














\(\ds \frac {\partial M} {\partial y}\)

\(=\)







\(\ds \frac 1 {y^2} \sin \frac x y + \paren {-\frac 1 y} \paren {-\frac 1 {y^2} } x \cos \frac x y\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {y^2} \sin \frac x y + \frac x {y^3} \cos \frac x y\)




















\(\ds \frac {\partial N} {\partial x}\)

\(=\)







\(\ds \frac 1 {y^2} \sin \frac x y + \frac x {y^2} \frac 1 y \cos \frac x y\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {y^2} \sin \frac x y + \frac x {y^3} \cos \frac x y\)










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







\(\ds \int \paren {-\dfrac 1 y \sin \dfrac x y} \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds -\dfrac 1 y y \cos \dfrac x y + \map g y\)




















\(\ds \)

\(=\)







\(\ds -\cos \dfrac x y + \map g y\)










and:














\(\ds f\)

\(=\)







\(\ds \int \map N {x, y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {\dfrac x {y^2} \sin \dfrac x y} \rd y + \map h x\)










Set $z = \dfrac x y$:














\(\ds z\)

\(=\)







\(\ds \frac x y\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds -\frac x {y^2}\)










Thus by Integration by Substitution:














\(\ds \int \frac x {y^2} \sin \frac x y \rd y\)

\(=\)







\(\ds \int \frac x {y^2} \frac {-y^2} x \sin z \rd z\)




















\(\ds \)

\(=\)







\(\ds -\int \sin z \rd z\)




















\(\ds \)

\(=\)







\(\ds \cos z\)




















\(\ds \)

\(=\)







\(\ds \cos \frac x y\)










Thus:

$\map f {x, y} = -\cos \dfrac x y$
and by Solution to Exact Differential Equation, the solution to $(1)$, after simplification, is:














\(\ds \cos \dfrac x y\)

\(=\)







\(\ds C_1\)














\(\ds \leadsto \ \ \)





\(\ds \map \arccos {\cos \dfrac x y}\)

\(=\)







\(\ds \arccos C_1\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac x y\)

\(=\)







\(\ds C\)





where $C = \arccos C_1$



$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.8$: Exact Equations: Problem $8$




