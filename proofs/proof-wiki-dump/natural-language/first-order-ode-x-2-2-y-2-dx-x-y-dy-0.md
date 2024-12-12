# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(x%5E2_-_2_y%5E2)_dx_%2B_x_y_dy_%3D_0

Theorem
The first order ordinary differential equation:

$(1): \quad \paren {x^2 - 2 y^2} \rd x + x y \rd y = 0$

is a homogeneous differential equation with solution:

$y^2 = x^2 + C x^4$


Proof
$(1)$ can also be rendered:

$\dfrac {\d y} {\d x} = -\dfrac {x^2 - 2 y^2} {x y}$

Let:

$\map M {x, y} = x^2 - 2 y^2$
$\map N {x, y} = x y$

Put $t x, t y$ for $x, y$:














\(\ds \map M {t x, t y}\)

\(=\)







\(\ds \paren {t x}^2 - 2 \paren {t y}^2\)




















\(\ds \)

\(=\)







\(\ds t^2 \paren {x^2 - 2 y^2}\)




















\(\ds \)

\(=\)







\(\ds t^2 \, \map M {x, y}\)






















\(\ds \map N {t x, t y}\)

\(=\)







\(\ds t x t y\)




















\(\ds \)

\(=\)







\(\ds t^2 \paren {x y}\)




















\(\ds \)

\(=\)







\(\ds t^2 \, \map N {x, y}\)









Thus both $M$ and $N$ are homogeneous functions of degree $2$.
Thus, by definition, $(1)$ is a homogeneous differential equation.

By Solution to Homogeneous Differential Equation, its solution is:

$\ds \ln x = \int \frac {\d z} {\map f {1, z} - z} + C$
where:

$\map f {x, y} = -\dfrac {x^2 - 2 y^2} {x y}$

Hence:














\(\ds \ln x\)

\(=\)







\(\ds \int \frac {\d z} {-\frac {1 - 2 z^2} {z} - z} + C_1\)




















\(\ds \)

\(=\)







\(\ds \int \frac {z \rd z} {z^2 - 1} + C_1\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \, \map \ln {z^2 - 1} + C_1\)





Primitive of $\dfrac x {x^2 - a^2}$








\(\ds \leadsto \ \ \)





\(\ds \map \ln {z^2 - 1}\)

\(=\)







\(\ds \map \ln {x^2} + \ln C\)














\(\ds \leadsto \ \ \)





\(\ds z^2 - 1\)

\(=\)







\(\ds C x^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {y^2} {x^2} - 1\)

\(=\)







\(\ds C x^2\)














\(\ds \leadsto \ \ \)





\(\ds y^2\)

\(=\)







\(\ds x^2 + C x^4\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.7$: Homogeneous Equations: Problem $1 \ \text{(a)}$




