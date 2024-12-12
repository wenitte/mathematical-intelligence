# 

Source: https://proofwiki.org/wiki/First_Order_ODE/x%5E2_y%27_-_3_x_y_-_2_y%5E2_%3D_0

Theorem
The first order ordinary differential equation:

$(1): \quad x^2 \dfrac {\d y} {\d x} - 3 x y - 2 y^2 = 0$

is a homogeneous differential equation with solution:

$y = C x^2 \paren {x + y}$


Proof
Let:

$\map M {x, y} = 3 x y + 2 y^2$
$\map N {x, y} = x^2$

Put $t x, t y$ for $x, y$:














\(\ds \map M {t x, t y}\)

\(=\)







\(\ds 3 t x t y + 2 \paren {t y}^2\)




















\(\ds \)

\(=\)







\(\ds t^2 \paren {3 x y + 2 y^2}\)




















\(\ds \)

\(=\)







\(\ds t^2 \, \map M {x, y}\)






















\(\ds \map N {t x, t y}\)

\(=\)







\(\ds \paren {t x}^2\)




















\(\ds \)

\(=\)







\(\ds t^2 \paren {x^2}\)




















\(\ds \)

\(=\)







\(\ds t^2 \, \map N {x, y}\)










Thus both $M$ and $N$ are homogeneous functions of degree $2$.
Thus, by definition, $(1)$ is a homogeneous differential equation.

By Solution to Homogeneous Differential Equation, its solution is:

$\ds \ln x = \int \frac {\d z} {\map f {1, z} - z} + C$
where:

$\map f {x, y} = \dfrac {3 x y + 2 y^2} {x^2}$















\(\ds \ln x\)

\(=\)







\(\ds \int \frac {\d z} {\dfrac {3 z + 2 z^2} {1^2} - z} + C_1\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\d z} {2 z \paren {1 + z} } + C_1\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \ln \frac z {z + 1} + \ln C_2\)





Primitive of $\dfrac 1 {x \paren {a x + b} }$








\(\ds \leadsto \ \ \)





\(\ds \ln x^2\)

\(=\)







\(\ds \ln \frac z {z + 1} + \ln C_3\)




















\(\ds \)

\(=\)







\(\ds \ln \frac {C_3 z} {z + 1}\)














\(\ds \leadsto \ \ \)





\(\ds x^2\)

\(=\)







\(\ds \frac {C_3 y / x} {y / x + 1}\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds C x^2 \paren {x + y}\)





where $C := \dfrac 1 {C_3}$



$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.7$: Homogeneous Equations: Problem $1 \ \text{(b)}$




