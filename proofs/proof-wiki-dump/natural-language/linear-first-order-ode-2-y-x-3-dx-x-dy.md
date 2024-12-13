# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/(2_y_-_x%5E3)_dx_%3D_x_dy

Theorem
The linear first order ODE:

$(1): \quad \paren {2 y - x^3} \rd x = x \rd y$
has the general solution:

$y = -x^3 + C x^2$


Proof
Rearranging $(1)$:

$(2): \quad \dfrac {\d y} {\d x} - \dfrac 2 x y = - x^2$
$(2)$ is in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x$
where $\map P x = -\dfrac 2 x$.
Thus:














\(\ds \int \map P x \rd x\)

\(=\)







\(\ds \int -\dfrac 2 x \rd x\)




















\(\ds \)

\(=\)







\(\ds -2 \ln x\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\frac 1 {x^2} }\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int P \rd x}\)

\(=\)







\(\ds \frac 1 {x^2}\)









Thus from Solution by Integrating Factor, $(1)$ can be rewritten as:

$\map {\dfrac \d {\d x} } {\dfrac y {x^2} } = -1$
and the general solution is:

$\dfrac y {x^2} = -x + C$
or:

$y = -x^3 + C x^2$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.10$: Problem $2 \ \text{(f)}$




