# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(1_-_x_y)_y%27_%3D_y%5E2

Theorem
The first order ODE:

$(1): \quad \paren {1 - x y} y' = y^2$
has the general solution:

$x y = \ln y + C$


Proof
Let $(1)$ be rearranged as:














\(\ds \frac {\d x} {\d y}\)

\(=\)







\(\ds \frac {1 - x y} {y^2}\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d y} + \frac x y\)

\(=\)







\(\ds \frac 1 {y^2}\)










It can be seen that $(2)$ is a linear first order ODE in the form:

$\dfrac {\d x} {\d y} + \map P y x = \map Q y$
where:

$\map P y = \dfrac 1 y$
$\map Q y = \dfrac 1 {y^2}$
Thus:














\(\ds \int \map P y \rd y\)

\(=\)







\(\ds \int \dfrac 1 y \rd y\)




















\(\ds \)

\(=\)







\(\ds \ln y\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int P \rd y}\)

\(=\)







\(\ds y\)









Thus from Solution by Integrating Factor, $(2)$ can be rewritten as:














\(\ds \map {\dfrac \d {\d y} } {x y}\)

\(=\)







\(\ds \dfrac 1 y\)














\(\ds \leadsto \ \ \)





\(\ds x y\)

\(=\)







\(\ds \int \frac {\d y} y\)




















\(\ds \)

\(=\)







\(\ds \ln y + C\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $2$




