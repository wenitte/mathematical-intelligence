# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(exp_y_-_2_x_y)_y%27_%3D_y%5E2

Theorem
The first order ODE:

$(1): \quad \paren {e^y - 2 x y} y' = y^2$
has the general solution:

$x y^2 = e^y + C$


Proof
Let $(1)$ be rearranged as:

$\dfrac {\d y} {\d x} = \dfrac {y^2} {e^y - 2 x y}$
Hence:

$(2): \quad \dfrac {\d x} {\d y} + \dfrac 2 y x = \dfrac {e^y} {y^2}$

It can be seen that $(2)$ is a linear first order ODE in the form:

$\dfrac {\d x} {\d y} + \map P y x = \map Q y$
where:

$\map P y = \dfrac 2 y$
$\map Q y = \dfrac {e^y} {y^2}$
Thus:














\(\ds \int \map P y \rd y\)

\(=\)







\(\ds \int \dfrac 2 y \rd y\)




















\(\ds \)

\(=\)







\(\ds 2 \ln y\)




















\(\ds \)

\(=\)







\(\ds \ln y^2\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int P \rd y}\)

\(=\)







\(\ds y^2\)









Thus from Solution by Integrating Factor, $(2)$ can be rewritten as:

$\map {\dfrac \d {\d y} } {x y^2} = e^y$
and the general solution is:

$x y^2 = e^y + C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.10$: Problem $4 \ \text{(a)}$




