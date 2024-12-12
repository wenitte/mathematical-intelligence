# 

Source: https://proofwiki.org/wiki/First_Order_ODE/1_over_x%5E3_y%5E2_dx_%2B_(1_over_x%5E2_y%5E3_%2B_3_y)_dy_%3D_0

Theorem
The first order ODE:

$(1): \quad \dfrac 1 {x^3 y^2} \rd x + \paren {\dfrac 1 {x^2 y^3} + 3 y} \rd y = 0$
is an exact differential equation with solution:

$-\dfrac 1 {2 x^2 y^2} + \dfrac {3 y^2} 2 = C$


Proof
Let $M$ and $N$ be defined as:

$\map M {x, y} = \dfrac 1 {x^3 y^2}$
$\map N {x, y} = \dfrac 1 {x^2 y^3} + 3 y$

Then:














\(\ds \frac {\partial M} {\partial y}\)

\(=\)







\(\ds -\frac 1 {x^3 y^2}\)




















\(\ds \dfrac {\partial N} {\partial x}\)

\(=\)







\(\ds -\frac 1 {x^3 y^2}\)










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







\(\ds \int \map M {x, y} \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds \int \frac 1 {x^3 y^2} \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 {2 x^2 y^2} + \map g y\)









and:














\(\ds f\)

\(=\)







\(\ds \int \map N {x, y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {\frac 1 {x^2 y^3} + 3 y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 {2 x^2 y^2} + 3 \dfrac {y^2} 2 + \map h x\)









Thus:

$\map f {x, y} = -\dfrac 2 {x^2 y^2} + \dfrac {3 y^2} 2$
and by Solution to Exact Differential Equation, the solution to $(1)$ is:

$-\dfrac 1 {2 x^2 y^2} + \dfrac {3 y^2} 2 = C$
$\blacksquare$





