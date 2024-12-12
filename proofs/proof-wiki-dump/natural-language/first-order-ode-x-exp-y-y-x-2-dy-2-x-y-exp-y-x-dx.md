# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(x_exp_y_%2B_y_-_x%5E2)_dy_%3D_(2_x_y_-_exp_y_-_x)_dx

Theorem
The first order ordinary differential equation:

$(1): \quad \paren {x e^y + y - x^2} \rd y = \paren {2 x y - e^y - x} \rd x$
is an exact differential equation with solution:

$2 x e^y + x^2 + y^2 - 2 x^2 y = C$


Proof
Let $(1)$ be expressed in the form:

$\paren {e^y + x - 2 x y} \rd x + \paren {x e^y + y - x^2} rd y = 0$

Let:

$\map M {x, y} = e^y + x - 2 x y$
$\map N {x, y} = x e^y + y - x^2$
Then:














\(\ds \dfrac {\partial M} {\partial y}\)

\(=\)







\(\ds e^y - 2 x\)




















\(\ds \dfrac {\partial N} {\partial x}\)

\(=\)







\(\ds e^y - 2 x\)










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







\(\ds \int \paren {e^y + x - 2 x y} \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds x e^y + \frac {x^2} 2 - x^2 y + \map g y\)









and:














\(\ds f\)

\(=\)







\(\ds \int \map N {x, y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {x e^y + y - x^2} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds x e^y + \frac {y^2} 2 - x^2 y + \map h x\)









Thus:

$\map f {x, y} = x e^y + \dfrac {x^2 + y^2} 2 - x^2 y$
and by Solution to Exact Differential Equation, the solution to $(1)$ is:

$2 x e^y + x^2 + y^2 - 2 x^2 y = C$
after multiplying by $2$ to clear the fraction.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $24$




