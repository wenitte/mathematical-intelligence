# 

Source: https://proofwiki.org/wiki/Bernoulli%27s_Equation/x_y%5E2_y%27_%2B_y%5E3_%3D_x_cosine_x

Theorem
The first order ODE:

$(1): \quad x y^2 y' + y^3 = x \cos x$
has the general solution:

$y^3 = 3 \sin x + \dfrac {9 \cos x} x - \dfrac {18 \sin x} {x^2} - \dfrac {18 \cos x} {x^3} + \dfrac C {x^3}$


Proof
Let $(1)$ be rearranged as:

$(2): \quad \dfrac {\d y} {\d x} + \dfrac 1 x y = \dfrac {\cos x} {y^2}$

It can be seen that $(2)$ is in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x y^n$
where:

$\map P x = \dfrac 1 x$
$\map Q x = \cos x$
$n = -2$
and so is an example of Bernoulli's equation.

By Solution to Bernoulli's Equation it has the general solution:

$\ds (3): \quad \frac {\map \mu x} {y^{n - 1} } = \paren {1 - n} \int \map Q x \, \map \mu x \rd x + C$
where:

$\map \mu x = e^{\paren {1 - n} \int \map P x \rd x}$

Thus $\map \mu x$ is evaluated:














\(\ds \paren {1 - n} \int \map P x \rd x\)

\(=\)







\(\ds \paren {1 - \paren {-2} } \int \dfrac 1 x \rd x\)




















\(\ds \)

\(=\)







\(\ds 3 \ln x\)




















\(\ds \)

\(=\)







\(\ds \ln x^3\)














\(\ds \leadsto \ \ \)





\(\ds \map \mu x\)

\(=\)







\(\ds e^{\ln x^3}\)




















\(\ds \)

\(=\)







\(\ds x^3\)










and so substituting into $(3)$:














\(\ds x^3 \frac 1 {y^{-3} }\)

\(=\)







\(\ds \paren {1 - \paren {-2} } \int x^3 \cos x \rd x\)




















\(\ds \)

\(=\)







\(\ds 3 \int x^3 \cos x \rd x\)














\(\ds \leadsto \ \ \)





\(\ds x^3 y^3\)

\(=\)







\(\ds 3 \paren {\paren {3 x^2 - 6} \cos x + \paren {x^3 - 6 x} \sin x} + C\)





Primitive of $x^3 \cos a x$




Hence the general solution to $(1)$ is:

$y^3 = 3 \sin x + \dfrac {9 \cos x} x - \dfrac {18 \sin x} {x^2} - \dfrac {18 \cos x} {x^3} + \dfrac C {x^3}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.10$: Problem $3 \ \text{(b)}$




