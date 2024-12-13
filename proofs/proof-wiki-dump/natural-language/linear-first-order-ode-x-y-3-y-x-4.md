# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/x_y%27_-_3_y_%3D_x%5E4

Theorem
The linear first order ODE:

$(1): \quad x \dfrac {\d y} {\d x} - 3y = x^4$
has the general solution:

$y = x^4 + \dfrac C {x^3}$


Proof
Rearranging $(1)$:

$(2): \quad \dfrac {\d y} {\d x} + \paren {-\dfrac 3 x} y = x^3$

$(2)$ is a linear first order ODE in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x$
where:

$\map P x = -\dfrac 3 x$
$\map Q x = x^3$

Thus:














\(\ds \int \map P x \rd x\)

\(=\)







\(\ds \int -\frac 3 x \rd x\)




















\(\ds \)

\(=\)







\(\ds -3 \ln x\)




















\(\ds \)

\(=\)







\(\ds \ln x^{-3}\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int P \rd x}\)

\(=\)







\(\ds e^{\ln x^{-3} }\)




















\(\ds \)

\(=\)







\(\ds x^{-3}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {x^3}\)









Thus from Solution by Integrating Factor, $(1)$ can be rewritten as:

$\map {\dfrac \d {\d x} } {\dfrac y {x^3} } = 1$
and the general solution is:

$\dfrac y {x^3} = x + C$
or:

$y = x^4 + \dfrac C {x^3}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.10$: Problem $2 \ \text{(a)}$




