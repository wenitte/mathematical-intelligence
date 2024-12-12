# 

Source: https://proofwiki.org/wiki/First_Order_ODE/x_y_dy_%3D_x%5E2_dy_%2B_y%5E2_dx/Proof_1

Theorem
The first order ODE:

$(1): \quad x y \rd y = x^2 \rd y + y^2 \rd x$
has the general solution:

$y = x \ln y + C x$


Proof
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





