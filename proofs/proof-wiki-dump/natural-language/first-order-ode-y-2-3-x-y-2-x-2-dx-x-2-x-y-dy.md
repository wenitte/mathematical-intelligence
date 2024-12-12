# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(y%5E2_-_3_x_y_-_2_x%5E2)_dx_%3D_(x%5E2_-_x_y)_dy

Theorem
The first order ordinary differential equation:

$(1): \quad \paren {y^2 - 3 x y - 2 x^2} \rd x = \paren {x^2 - x y} \rd y$
is a homogeneous differential equation with solution:

$y^2 x^2 - 2 y x^3 + x^4 = C$


Proof
$(1)$ can also be rendered:

$\dfrac {\rd y} {\rd x} = \dfrac {y^2 - 3 x y - 2 x^2} {x^2 - x y}$

Let:

$\map M {x, y} = y^2 - 3 x y - 2 x^2$
$\map N {x, y} = x^2 - x y$

Put $t x, t y$ for $x, y$:














\(\ds \map M {t x, t y}\)

\(=\)







\(\ds \paren {t y}^2 - 3 t x t y - 2 \paren {t x}^2\)




















\(\ds \)

\(=\)







\(\ds t^2 \paren {y^2 - 3 x y - 2 x^2}\)




















\(\ds \)

\(=\)







\(\ds t^2 \, \map M {x, y}\)






















\(\ds \map N {t x, t y}\)

\(=\)







\(\ds \paren {t x}^2 - t x t y\)




















\(\ds \)

\(=\)







\(\ds t^2 \paren {x^2 - x y}\)




















\(\ds \)

\(=\)







\(\ds t^2 \, \map N {x, y}\)









Thus both $M$ and $N$ are homogeneous functions of degree $2$.
Thus, by definition, $(1)$ is a homogeneous differential equation.

By Solution to Homogeneous Differential Equation, its solution is:

$\ds \ln x = \int \frac {\d z} {\map f {1, z} - z} + C$
where:

$\map f {x, y} = \dfrac {y^2 - 3 x y - 2 x^2} {x^2 - x y}$

Hence:














\(\ds \ln x\)

\(=\)







\(\ds \int \frac {\d z} {\frac {z^2 - 3 z - 2} {1 - z} - z} + C_1\)




















\(\ds \)

\(=\)







\(\ds \int \frac {1 - z} {2 z^2 - 4 z - 2} \rd z + C_1\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 4 \int \frac {4 z - 4} {2 z^2 - 4 z - 2} \rd z + C_1\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 4 \map \ln {2 z^2 - 4 z - 2} + C_1\)





Primitive of Function under its Derivative




Substituting back for $z$ and tidying up, the result is obtained:

$y^2 x^2 - 2 y x^3 + x^4 = C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $20$




