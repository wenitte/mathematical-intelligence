# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(y_-_x%5E3)_dx_%2B_(x_%2B_y%5E3)_dy_%3D_0

Theorem
The first order ordinary differential equation:

$(1): \quad \paren {y - x^3} \rd x + \paren {x + y^3} \rd y = 0$

is an exact differential equation with solution:

$4 x y - x^4 + y^4 = C$

This can also be presented as:

$\dfrac {\d y} {\d x} + \dfrac {y - x^3} {x + y^3} = 0$


Proof
Let:

$\map M {x, y} = y - x^3$
$\map N {x, y} = x + y^3$
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







\(\ds \int \paren {y - x^3} \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds x y - \dfrac {x^4} 4 + \map g y\)









and:














\(\ds f\)

\(=\)







\(\ds \int \map N {x, y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \int \left({x + y^3}\right) \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds x y + \dfrac {y^4} 4 + \map h x\)










Thus:

$\map f {x, y} = x y - \dfrac {x^4} 4 + \dfrac {y^4} 4$
and by Solution to Exact Differential Equation, the solution to $(1)$ is:

$x y - \dfrac {x^4} 4 + \dfrac {y^4} 4 = C_1$
which can be simplified by multiplying through by $4$ and setting $C = 4 C_1$:

$4 x y - x^4 + y^4 = C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.8$: Exact Equations: Problem $3$




