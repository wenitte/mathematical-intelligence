# 

Source: https://proofwiki.org/wiki/First_Order_ODE/x%5E2_y%27_%3D_3_(x%5E2_%2B_y%5E2)_arctan_(y_over_x)_%2B_x_y

Theorem
The first order ordinary differential equation:

$(1): \quad x^2 \dfrac {\d y} {\d x} = 3 \paren {x^2 + y^2} \arctan \dfrac y x + x y$

is a homogeneous differential equation with solution:

$y = x \tan C x^3$


Proof
Let:

$\map M {x, y} = 3 \paren {x^2 + y^2} \arctan \dfrac y x + x y$
$\map N {x, y} = x^2$

Put $t x, t y$ for $x, y$:














\(\ds \map M {t x, t y}\)

\(=\)







\(\ds 3 \paren {\paren {t x}^2 + \paren {t y}^2} \arctan \dfrac {t y} {t x} + t x t y\)




















\(\ds \)

\(=\)







\(\ds t^2 \paren {3 \paren {x^2 + y^2} \arctan \dfrac y x + x y}\)




















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

$\map f {x, y} = \dfrac {3 \paren {x^2 + y^2} \arctan \dfrac y x + x y} {x^2}$

Thus:














\(\ds \ln x\)

\(=\)







\(\ds \int \frac {\d z} {\dfrac {3 \paren {1^2 + z^2} \arctan \frac z 1 + z} {1^2} - z} + C_1\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\d z} {3 \paren {1 + z^2} \arctan z} + C_1\)










Substituting $u = \arctan z$:














\(\ds \dfrac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 {z^2 + 1}\)





Derivative of Arctangent Function








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d z} {\d u}\)

\(=\)







\(\ds z^2 + 1\)










Hence:














\(\ds \ln x\)

\(=\)







\(\ds \int \frac {\d z} {3 \paren {1 + z^2} \arctan z} + C_1\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\d u} {3 u} + C_1\)




















\(\ds \)

\(=\)







\(\ds \frac 1 3 \ln u + C_1\)





Primitive of Reciprocal








\(\ds \leadsto \ \ \)





\(\ds \ln x^3 + \ln C\)

\(=\)







\(\ds \ln u\)





putting $\ln C = - C_1$








\(\ds \leadsto \ \ \)





\(\ds C x^3\)

\(=\)







\(\ds u\)














\(\ds \leadsto \ \ \)





\(\ds C x^3\)

\(=\)







\(\ds \arctan \frac y x\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds x \tan C x^3\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.7$: Homogeneous Equations: Problem $1 \ \text{(c)}$




