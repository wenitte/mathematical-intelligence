# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(exp_x_-_3_x%5E2_y%5E2)_y%27_%2B_y_exp_x_%3D_2_x_y%5E3

Theorem
The first order ordinary differential equation:

$(1): \quad \paren {e^x - 3 x^2 y^2} y' + y e^x = 2 x y^3$
is an exact differential equation with solution:

$y e^x - x^2 y^3 = C$


Proof
Let $(1)$ be expressed as:

$\paren {y e^x - 2 x y^3} \rd x + \paren {e^x - 3 x^2 y^2} \rd y = 0$

Let:

$\map M {x, y} = y e^x - 2 x y^3$
$\map N {x, y} = e^x - 3 x^2 y^2$
Then:














\(\ds \dfrac {\partial M} {\partial y}\)

\(=\)







\(\ds e^x - 6 x y^2\)




















\(\ds \dfrac {\partial N} {\partial x}\)

\(=\)







\(\ds e^x - 6 x y^2\)










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







\(\ds \int \paren {y e^x - 2 x y^3} \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds y e^x - x^2 y^3 + \map g y\)









and:














\(\ds f\)

\(=\)







\(\ds \int \map N {x, y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {e^x - 3 x^2 y^2} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds y e^x + x^2 y^3 + \map h x\)









Thus:

$\map f {x, y} = y e^x + x^2 y^3$
and by Solution to Exact Differential Equation, the solution to $(1)$ is:

$y e^x + x^2 y^3 = C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $10$




