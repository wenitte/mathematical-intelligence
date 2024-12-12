# 

Source: https://proofwiki.org/wiki/First_Order_ODE/y%27_ln_(x_-_y)_%3D_1_%2B_ln_(x_-_y)

Theorem
The first order ordinary differential equation:

$(1): \quad \dfrac {\d y} {\d x} \map \ln {x - y} \d x = 1 + \map \ln {x - y}$
is an exact differential equation with solution:

$\paren {x - y} \map \ln {x - y} = C - y$


Proof
Let $(1)$ be expressed as:

$\paren {1 + \map \ln {x - y} } \rd x - \map \ln {x - y} \rd y = 0$

Let:

$\map M {x, y} = 1 + \map \ln {x - y}$
$\map N {x, y} = -\map \ln {x - y}$
Then:














\(\ds \dfrac {\partial M} {\partial y}\)

\(=\)







\(\ds -\frac 1 {x - y}\)




















\(\ds \dfrac {\partial N} {\partial x}\)

\(=\)







\(\ds -\frac 1 {x - y}\)










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







\(\ds \int \left({1 + \map \ln {x - y} }\right) \rd x + \map g y\)




















\(\ds \)

\(=\)







\(\ds x + \paren {x - y} \map \ln {x - y} - \paren {x - y} + \map g y\)





Primitive of $\ln x$



and:














\(\ds f\)

\(=\)







\(\ds \int \map N {x, y} \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \int \left({-\map \ln {x - y} }\right) \rd y + \map h x\)




















\(\ds \)

\(=\)







\(\ds \paren {x - y} \map \ln {x - y} - \paren {x - y} + \map h x\)





Primitive of $\ln x$




Thus:














\(\ds \map f {x, y}\)

\(=\)







\(\ds x + \paren {x - y} \map \ln {x - y} - \paren {x - y}\)




















\(\ds \)

\(=\)







\(\ds \paren {x - y} \map \ln {x - y} + y\)









and by Solution to Exact Differential Equation, the solution to $(1)$ is:














\(\ds \paren {x - y} \map \ln {x - y} + y\)

\(=\)







\(\ds C\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x - y} \map \ln {x - y}\)

\(=\)







\(\ds C - y\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $18$




