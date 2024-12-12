# 

Source: https://proofwiki.org/wiki/Bernoulli%27s_Equation/y%27_-_(1_over_x_%2B_2_x%5E4)_y_%3D_x%5E3_y%5E2

Theorem
The first order ODE:

$(1): \quad y' - \paren {\dfrac 1 x + 2 x^4} y = x^3 y^2$
has the general solution:

$y = \dfrac {2 x} {C \map \exp {-\dfrac {2 x^5} 5} - 1}$


Proof
It can be seen that $(1)$ is in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x y^n$
where:

$\map P x = -\paren {\dfrac 1 x + 2 x^4}$
$\map Q x = x^3$
$n = 2$
and so is an example of Bernoulli's equation.

By Solution to Bernoulli's Equation it has the general solution:

$(3): \quad \ds \frac {\map \mu x} {y^{n - 1} } = \paren {1 - n} \int \map Q x \, \map \mu x \rd x + C$
where:

$\map \mu x = e^{\paren {1 - n} \int \map P x \rd x}$

Thus $\map \mu x$ is evaluated:














\(\ds \paren {1 - n} \int \map P x \rd x\)

\(=\)







\(\ds \paren {1 - 2} \int -\paren {\dfrac 1 x + 2 x^4} \rd x\)




















\(\ds \)

\(=\)







\(\ds \ln x + \dfrac {2 x^5} 5\)




















\(\ds \)

\(=\)







\(\ds \map \ln {x \exp \dfrac {2 x^5} 5}\)














\(\ds \leadsto \ \ \)





\(\ds \map \mu x\)

\(=\)







\(\ds e^{\map \ln {x \exp \frac {2 x^5} 5} }\)




















\(\ds \)

\(=\)







\(\ds x \exp \dfrac {2 x^5} 5\)










and so substituting into $(3)$:














\(\ds \frac x y \exp \dfrac {2 x^5} 5\)

\(=\)







\(\ds \paren {1 - 2} \int x^3 x \exp \dfrac {2 x^5} 5 \rd x\)




















\(\ds \)

\(=\)







\(\ds -\int x^4 \exp \dfrac {2 x^5} 5 \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac {\exp \dfrac {2 x^5} 5} 2 + \frac C 2\)





by using the substitution $w = x^5$








\(\ds \leadsto \ \ \)





\(\ds \frac x y\)

\(=\)







\(\ds \frac C 2 \map \exp {-\dfrac {2 x^5} 5} - \frac 1 2\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 y\)

\(=\)







\(\ds \frac C {2 x} \map \exp {-\dfrac {2 x^5} 5} - \frac 1 {2 x}\)




















\(\ds \)

\(=\)







\(\ds \frac {C \map \exp {-\dfrac {2 x^5} 5} - 1} {2 x}\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \frac {2 x} {C \map \exp {-\dfrac {2 x^5} 5} - 1}\)










Hence the general solution to $(1)$ is:

$y = \dfrac {2 x} {C \map \exp {-\dfrac {2 x^5} 5} - 1}$
$\blacksquare$





