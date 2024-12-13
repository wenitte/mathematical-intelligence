# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/(x%5E2_%2B_y)_dx_%3D_x_dy

Theorem
The linear first order ODE:

$(1): \quad \paren {x^2 + y} \rd x = x \rd y$
has the general solution:

$y = x^2 + C x$


Proof
Rearranging $(1)$:

$(2): \quad \dfrac {\d y} {\d x} - \dfrac y x = x$
$(2)$ is in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x$
where:

$\map P x = -\dfrac 1 x$
$\map Q x = x$

Thus:














\(\ds \int \map P x \rd x\)

\(=\)







\(\ds \int -\dfrac 1 x \rd x\)




















\(\ds \)

\(=\)







\(\ds -\ln x\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\frac 1 x}\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int P \rd x}\)

\(=\)







\(\ds \frac 1 x\)









Thus from Solution by Integrating Factor, $(1)$ can be rewritten as:

$\map {\dfrac \d {\d x} } {\dfrac y x} = 1$
and the general solution is:

$\dfrac y x = x + C$
or:

$y = x^2 + C x$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $12$




