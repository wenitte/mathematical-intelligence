# 

Source: https://proofwiki.org/wiki/Bernoulli%27s_Equation/x%5E2_dy_%3D_(2_x_y_%2B_y%5E2)_dx

Theorem
The first order ODE:

$(1): \quad x^2 \rd y = \paren {2 x y + y^2} \rd x$
has the general solution:

$y = -\dfrac {x^2} {x + C}$


Proof
Rearranging $(1)$:

$(2): \quad \dfrac {\d y} {\d x} - \dfrac 2 x y = \dfrac {y^2} {x^2}$
It can be seen that $(2)$ is in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x y^n$
where:

$\map P x = -\dfrac 2 x$
$\map Q x = \dfrac 1 {x^2}$
$n = 2$
and so is an example of Bernoulli's equation.

By Solution to Bernoulli's Equation it has the general solution:

$(3): \quad \ds \frac {\map \mu x} {y^{n - 1} } = \paren {1 - n} \int \map Q x \map \mu x \rd x + C$
where:

$\map \mu x = e^{\paren {1 - n} \int \map P x \rd x}$

Thus $\map \mu x$ is evaluated:














\(\ds \paren {1 - n} \int \map P x \rd x\)

\(=\)







\(\ds \paren {1 - 2} \int -\dfrac 2 x \rd x\)




















\(\ds \)

\(=\)







\(\ds 2 \ln x\)




















\(\ds \)

\(=\)







\(\ds \ln x^2\)














\(\ds \leadsto \ \ \)





\(\ds \map \mu x\)

\(=\)







\(\ds e^{\ln x^2}\)




















\(\ds \)

\(=\)







\(\ds x^2\)










and so substituting into $(3)$:














\(\ds x^2 \frac 1 y\)

\(=\)







\(\ds \paren {1 - 2} \int \dfrac 1 {x^2} x^2 \rd x\)




















\(\ds \)

\(=\)







\(\ds -\int \rd x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {x^2} y\)

\(=\)







\(\ds -x + C\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds -\frac {x^2} {x + C}\)









$\blacksquare$





