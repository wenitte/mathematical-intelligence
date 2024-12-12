# 

Source: https://proofwiki.org/wiki/Bernoulli%27s_Equation/x_y%27_%2B_y_%3D_x%5E4_y%5E3

Theorem
The first order ODE:

$(1): \quad x y' + y = x^4 y^3$
has the general solution:

$\dfrac 1 {y^2} = - x^4 + C x^2$


Proof
Let $(1)$ be rearranged as:

$(2): \quad \dfrac {\d y} {\d x} + \dfrac 1 x y = x^3 y^3$

It can be seen that $(2)$ is in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x y^n$
where:

$\map P x = \dfrac 1 x$
$\map Q x = x^3$
$n = 3$
and so is an example of Bernoulli's equation.

By Solution to Bernoulli's Equation it has the general solution:

$(3): \quad \ds \frac {\map \mu x} {y^{n - 1} } = \paren {1 - n} \int \map Q x \map \mu x \rd x + C$
where:

$\map \mu x = e^{\paren {1 - n} \int \map P x \rd x}$

Thus $\map \mu x$ is evaluated:














\(\ds \paren {1 - n} \int \map P x \rd x\)

\(=\)







\(\ds \paren {1 - 3} \int \dfrac 1 x \rd x\)




















\(\ds \)

\(=\)







\(\ds -2 \ln x\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\frac 1 {x^2} }\)














\(\ds \leadsto \ \ \)





\(\ds \map \mu x\)

\(=\)







\(\ds e^{\map \ln {\frac 1 {x^2} } }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {x^2}\)










and so substituting into $(3)$:














\(\ds \frac 1 {x^2} \frac 1 {y^2}\)

\(=\)







\(\ds \paren {1 - 3} \int x^3 \frac 1 {x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds -2 \int x \rd x\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 {x^2 y^2}\)

\(=\)







\(\ds -2 \dfrac {x^2} 2 + C\)










Hence the general solution to $(1)$ is:

$\dfrac 1 {y^2} = - x^4 + C x^2$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.10$: Problem $3 \ \text{(a)}$




