# 

Source: https://proofwiki.org/wiki/First_Order_ODE/dx_%3D_(y_over_(1_-_x%5E2_y%5E2))_dx_%2B_(x_over_(1_-_x%5E2_y%5E2))_dy

Theorem
The first order ordinary differential equation:

$(1): \quad \d x = \dfrac y {1 - x^2 y^2} \rd x + \dfrac x {1 - x^2 y^2} \rd y$

is an exact differential equation with solution:

$\map \ln {\dfrac {1 + x y} {1 - x y} } - 2 x = C$

This can also be presented as:

$\dfrac {\d y} {\d x} = -\dfrac {\dfrac y {1 - x^2 y^2} - 1} {\dfrac x {1 - x^2 y^2} }$


Proof
First express $(1)$ in the form:

$(2): \quad \paren {\dfrac y {1 - x^2 y^2} - 1} + \paren {\dfrac x {1 - x^2 y^2} } \dfrac {\d y} {\d x}$
Let:

$\map M {x, y} = \dfrac y {1 - x^2 y^2} - 1$
$\map N {x, y} = \dfrac x {1 - x^2 y^2}$
Then:














\(\ds \frac {\partial M} {\partial y}\)

\(=\)







\(\ds \frac 1 {1 - x^2 y^2} + \frac {2 x^2 y^2} {\paren {1 - x^2 y^2}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {1 + x^2 y^2} {\paren {1 - x^2 y^2}^2}\)




















\(\ds \frac {\partial N} {\partial x}\)

\(=\)







\(\ds \frac {1 + x^2 y^2} {\paren {1 - x^2 y^2}^2}\)





similarly




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







\(\ds \int \paren {\dfrac y {1 - x^2 y^2} - 1} \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds \int \dfrac {y \rd x} {1 - x^2 y^2} - \int \rd x + \map g y\)









Substitute $z = x y$ to obtain:

$\dfrac {\d z} {\d x} = y$
This gives:














\(\ds f\)

\(=\)







\(\ds \map M {x, y} \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln {\frac {1 + z} {1 - z} } - \int \rd x + \map g y\)














\(\ds \leadsto \ \ \)





\(\ds \map M {x, y} \rd x + \map g y\)

\(=\)







\(\ds \frac 1 2 \map \ln {\frac {1 + x y} {1 - x y} } - x + \map g y\)









and:














\(\ds f\)

\(=\)







\(\ds \int \map N {x, y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {\frac {1 + x^2 y^2} {\paren {1 - x^2 y^2}^2} } \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln {\frac {1 + x y} {1 - x y} } + \map h x\)










Thus:

$\map f {x, y} = \dfrac 1 2 \map \ln {\dfrac {1 + x y} {1 - x y} } - x$
and by Solution to Exact Differential Equation, the solution to $(1)$, after simplification, is:

$\map \ln {\dfrac {1 + x y} {1 - x y} } - 2 x = C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.8$: Exact Equations: Problem $11$




