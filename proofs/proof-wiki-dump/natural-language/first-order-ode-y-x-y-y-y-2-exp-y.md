# 

Source: https://proofwiki.org/wiki/First_Order_ODE/y_-_x_y%27_%3D_y%27_y%5E2_exp_y

Theorem
The first order ODE:

$(1): \quad y - x y' = y' y^2 e^y$
has the general solution:

$x y^2 = e^y + C$


Proof
Let $(1)$ be rearranged as:

$\dfrac {\d y} {\d x} = \dfrac y {y^2 e^y + x}$
Hence:

$(2): \quad \dfrac {\d x} {\d y} - \dfrac 1 y x = y e^y$

It can be seen that $(2)$ is a linear first order ODE in the form:

$\dfrac {\d x} {\d y} + \map P y x = \map Q y$
where:

$\map P y = -\dfrac 1 y$
$\map Q y = y e^y$
Thus:














\(\ds \int \map P y \rd y\)

\(=\)







\(\ds \int -\dfrac 1 y \rd y\)




















\(\ds \)

\(=\)







\(\ds -\ln y\)




















\(\ds \)

\(=\)







\(\ds \ln y^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int P \rd y}\)

\(=\)







\(\ds \dfrac 1 y\)









Thus from Solution by Integrating Factor, $(2)$ can be rewritten as:

$\map {\dfrac {\d} {\d y} } {\dfrac x y} = e^y$
and the general solution is:

$\dfrac x y = e^y + C$
or:

$x = y e^y + C y$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.10$: Problem $4 \ \text{(b)}$




