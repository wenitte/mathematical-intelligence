# 

Source: https://proofwiki.org/wiki/Bernoulli%27s_Equation/y%5E2_dx_%3D_(x%5E3_-_x_y)_dy

Theorem
The first order ODE:

$(1): \quad y^2 \rd x = \paren {x^3 - x y} \rd y$
has the general solution:

$3 y = 2 x^2 + C x^2 y^2$


Proof
Dividing $(1)$ by $y^2$ and rearranging:

$(2): \quad \dfrac {\d x} {\d y} + \dfrac x y = \dfrac {x^3} {y^2}$

It can be seen that $(2)$ is in the form:

$\dfrac {\d x} {\d y} + \map P y x = \map Q y x^n$
where:

$\map P y = \dfrac 1 y$
$\map Q y = \dfrac 1 {y^2}$
$n = 3$
and so is an example of Bernoulli's equation.

By Solution to Bernoulli's Equation it has the general solution:

$(3): \quad \ds \frac {\map \mu y} {x^{n - 1} } = \paren {1 - n} \int \map Q y \, \map \mu y \rd y + C$
where:

$\map \mu y = e^{\paren {1 - n} \int \map P y \rd y}$

Thus $\map \mu y$ is evaluated:














\(\ds \paren {1 - n} \int \map P y \rd y\)

\(=\)







\(\ds \paren {1 - 3} \int \dfrac 1 y \rd y\)




















\(\ds \)

\(=\)







\(\ds -2 \ln y\)




















\(\ds \)

\(=\)







\(\ds \map \ln {y^{-2} }\)














\(\ds \leadsto \ \ \)





\(\ds \map \mu y\)

\(=\)







\(\ds e^{\map \ln {y^{-2} } }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {y^2}\)










and so substituting into $(3)$:














\(\ds \frac 1 {y^2} \frac 1 {x^2}\)

\(=\)







\(\ds \paren {1 - 3} \int \frac 1 {y^2} \frac 1 {y^2} \rd y\)




















\(\ds \)

\(=\)







\(\ds -2 \int \dfrac {\d y} {y^4}\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 {y^2 x^2}\)

\(=\)







\(\ds -\dfrac 2 {-3} \dfrac 1 {y^3} + C\)














\(\ds \leadsto \ \ \)





\(\ds 3 y\)

\(=\)







\(\ds 2 x^2 + C x^2 y^2\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $5$




