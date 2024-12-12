# 

Source: https://proofwiki.org/wiki/Bernoulli%27s_Equation/2_x_y_dx_%2B_(x%5E2_%2B_2_y)_dy_%3D_0

Theorem
The first order ODE:

$(1): \quad 2 x y \rd x + \paren {x^2 + 2 y} \rd y = 0$
has the solution:

$y \paren {x^2 + y} = C$


Proof













\(\ds 2 x y \rd x + \paren {x^2 + 2 y} \rd y\)

\(=\)







\(\ds 0\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d x} {\d y} + \frac 1 {2 y} x\)

\(=\)







\(\ds -\frac 1 x\)










It can be seen that $(2)$ is in the form:

$\dfrac {\d x} {\d y} + \map P y x = \map Q y x^n$
where:

$\map P y = \dfrac 1 {2 y}$
$\map Q y = -1$
$n = -1$
and so is an example of Bernoulli's equation.

By Solution to Bernoulli's Equation it has the general solution:

$(3): \quad \ds \frac {\map \mu y} {x^{n - 1} } = \paren {1 - n} \int \map Q y \, \map \mu y \rd y + C$
where:

$\map \mu y = e^{\paren {1 - n} \int \map P y \rd y}$
Thus $\map \mu x$ is evaluated:














\(\ds \paren {1 - n} \int \map P y \rd y\)

\(=\)







\(\ds \paren {1 - \paren {-1} } \int \dfrac 1 {2 y} \rd y\)




















\(\ds \)

\(=\)







\(\ds 2 \frac 1 2 \ln y\)




















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














\(\ds \frac y {x^{\paren {-1} - 1} }\)

\(=\)







\(\ds \paren {1 - \paren {-1} } \int \paren {-1} y \rd y\)




















\(\ds \)

\(=\)







\(\ds -2 \int y \rd y\)














\(\ds \leadsto \ \ \)





\(\ds y x^2\)

\(=\)







\(\ds -2 \frac {y^2} 2 + C\)














\(\ds \leadsto \ \ \)





\(\ds y \paren {x^2 + y}\)

\(=\)







\(\ds C\)









$\blacksquare$





