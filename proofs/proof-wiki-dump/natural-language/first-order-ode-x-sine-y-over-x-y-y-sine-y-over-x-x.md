# 

Source: https://proofwiki.org/wiki/First_Order_ODE/x_sine_(y_over_x)_y%27_%3D_y_sine_(y_over_x)_%2B_x

Theorem
The first order ordinary differential equation:

$(1): \quad x \sin \dfrac y x \dfrac {\d y} {\d x} = y \sin \dfrac y x + x$

is a homogeneous differential equation with solution:

$\cos \dfrac y x + \ln C x = 0$


Proof
Let:

$\map M {x, y} = y \sin \dfrac y x + x$
$\map N {x, y} = x \sin \dfrac y x$

Put $t x, t y$ for $x, y$:














\(\ds \map M {t x, t y}\)

\(=\)







\(\ds t y \sin \dfrac t y t x + t x\)




















\(\ds \)

\(=\)







\(\ds t \paren {y \sin \dfrac y x + x}\)




















\(\ds \)

\(=\)







\(\ds t \, \map M {x, y}\)






















\(\ds \map N {t x, t y}\)

\(=\)







\(\ds t x \sin \dfrac {t y} {t x}\)




















\(\ds \)

\(=\)







\(\ds t \paren {x \sin \dfrac y x}\)




















\(\ds \)

\(=\)







\(\ds t \, \map N {x, y}\)










Thus both $M$ and $N$ are homogeneous functions of degree $1$.
Thus, by definition, $(1)$ is a homogeneous differential equation.

By Solution to Homogeneous Differential Equation, its solution is:

$\ds \ln x = \int \frac {\d z} {\map f {1, z} - z} + C$
where:

$\map f {x, y} = \dfrac {y \sin \dfrac y x + x} {x \sin \dfrac y x}$

Thus:














\(\ds \ln x\)

\(=\)







\(\ds \int \frac {\d z} {\dfrac {z \sin z + 1} {\sin z} - z} + C_1\)




















\(\ds \)

\(=\)







\(\ds \int \sin z \rd z + C_1\)




















\(\ds \)

\(=\)







\(\ds -\cos z + C_1\)





Primitive of $\sin z$








\(\ds \leadsto \ \ \)





\(\ds \ln x + \ln C\)

\(=\)







\(\ds -\cos z\)





putting $\ln C = - C_1$








\(\ds \leadsto \ \ \)





\(\ds \cos \frac y x + \ln C x = 0\)

\(=\)







\(\ds 0\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.7$: Homogeneous Equations: Problem $1 \ \text{(d)}$




