# 

Source: https://proofwiki.org/wiki/First_Order_ODE/x_y_dy_%3D_x%5E2_dy_%2B_y%5E2_dx



Theorem
The first order ODE:

$(1): \quad x y \rd y = x^2 \rd y + y^2 \rd x$
has the general solution:

$y = x \ln y + C x$


Proof 1
Let $(1)$ be rearranged as:

$(2): \quad \dfrac {\d x} {\d y} - \dfrac x y = -\dfrac {x^2} {y^2}$

It can be seen that $(2)$ is in the form:

$\dfrac {\d x} {\d y} + \map P y x = \map Q y x^n$
where:

$\map P y = -\dfrac 1 y$
$\map Q y = -\dfrac 1 {y^2}$
$n = 2$
and so is an example of Bernoulli's equation.

By Solution to Bernoulli's Equation it has the general solution:

$(3): \quad \ds \frac {\map \mu y} {x^{n - 1} } = \paren {1 - n} \int \map Q y \map \mu y \rd y + C$
where:

$\map \mu y = e^{\paren {1 - n} \int \map P y \rd y}$

Thus $\map \mu y$ is evaluated:














\(\ds \paren {1 - n} \int \map P y \rd y\)

\(=\)







\(\ds \paren {1 - 2} \int -\dfrac 1 y \rd y\)




















\(\ds \)

\(=\)







\(\ds -\paren {-\ln y}\)




















\(\ds \)

\(=\)







\(\ds \ln y\)














\(\ds \leadsto \ \ \)





\(\ds \map \mu y\)

\(=\)







\(\ds e^{\ln y}\)




















\(\ds \)

\(=\)







\(\ds y\)










and so substituting into $(3)$:














\(\ds \frac y x\)

\(=\)







\(\ds \paren {1 - 2} \int -\dfrac 1 {y^2} y \rd y\)




















\(\ds \)

\(=\)







\(\ds \int \dfrac 1 y \rd y\)




















\(\ds \)

\(=\)







\(\ds \ln y + C\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds x \ln y + C x\)









$\blacksquare$


Proof 2
Let $(1)$ be rearranged as:

$(2): \quad y^2 \rd x = \paren {x y - x^2} \rd y$

Let:

$\map M {x, y} = y^2$
$\map N {x, y} = x y - x^2$

Put $t x, t y$ for $x, y$:














\(\ds \map M {t x, t y}\)

\(=\)







\(\ds \paren {t y}^2\)




















\(\ds \)

\(=\)







\(\ds t^2 \paren {y^2}\)




















\(\ds \)

\(=\)







\(\ds t^2 \map M {x, y}\)






















\(\ds \map N {t x, t y}\)

\(=\)







\(\ds t x t y - \paren {t x}^2\)




















\(\ds \)

\(=\)







\(\ds t^2 \paren {x y - x^2}\)




















\(\ds \)

\(=\)







\(\ds t^2 \map N {x, y}\)









Thus both $M$ and $N$ are homogeneous functions of degree $2$.
Thus, by definition, $(1)$ is a homogeneous differential equation:

$\dfrac {\d x} {\d y} = \dfrac {x^2 - x y} {y^2}$
By Solution to Homogeneous Differential Equation, its solution is:

$\ds \ln x = \int \frac {\d z} {\map f {1, z} - z} + C$
where:

$\map f {y, x} = \dfrac {x y - x^2} {y^2}$

Hence:














\(\ds \ln y\)

\(=\)







\(\ds \int \frac {\d z} {\frac {z - z^2} 1 - z} + C\)




















\(\ds \)

\(=\)







\(\ds -\int \frac {\d z} {z^2} + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 z + C\)





Primitive of Power








\(\ds \leadsto \ \ \)





\(\ds \ln y\)

\(=\)







\(\ds \frac y x + C\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds x \ln y + C x\)





multiplying through by $x$



$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $9$




