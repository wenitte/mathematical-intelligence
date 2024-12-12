# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(sine_x_sine_y_-_x_e%5Ey)_dy_%3D_(e%5Ey_%2B_cosine_x_cosine_y)_dx

Theorem
The first order ordinary differential equation:

$(1): \quad \paren {\sin x \sin y - x e^y} \rd y = \paren {e^y + \cos x \cos y} \rd x$

is an exact differential equation with solution:

$\sin x \cos y + x e^y = C$

This can also be presented as:

$\dfrac {\d y} {\d x} = \dfrac {e^y + \cos x \cos y} {\sin x \sin y - x e^y}$


Proof
First express $(1)$ in the form:

$(2): \quad -\paren {e^y + \cos x \cos y} + \paren {\sin x \sin y - x e^y} \dfrac {\d y} {\d x}$
Let:

$\map M {x, y} = -\paren {e^y + \cos x \cos y}$
$\map N {x, y} = \sin x \sin y - x e^y$
Then:














\(\ds \dfrac {\partial M} {\partial y}\)

\(=\)







\(\ds -e^y + \cos x \sin y\)




















\(\ds \dfrac {\partial N} {\partial x}\)

\(=\)







\(\ds -e^y + \cos x \sin y\)










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







\(\ds -\int \paren {e^y + \cos x \cos y} \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds -x e^y - \sin x \cos y + \map g y\)









and:














\(\ds f\)

\(=\)







\(\ds \int \map N {x, y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {\sin x \sin y - x e^y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds -\sin x \cos y - x e^y + \map h x\)










Thus:

$\map f {x, y} = -\sin x \cos y - x e^y$
and by Solution to Exact Differential Equation, the solution to $(1)$, after simplification, is:

$\sin x \cos y + x e^y = C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.8$: Exact Equations: Problem $7$




