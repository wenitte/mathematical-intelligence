# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/y%27_-_(y_over_x)_%3D_k_x

Theorem
Let $k \in \R$ be a real number.
The linear first order ODE:

$(1): \quad \dfrac {\d y} {\d x} - \dfrac y x = k x$
has the general solution:

$\dfrac y x = k x + C$
or:

$y = k x^2 + C x$


Proof
$(1)$ is in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x$
where $\map P x = -\dfrac 1 x$.
Thus:














\(\ds \int \map P x \rd x\)

\(=\)







\(\ds \int -\frac 1 x \rd x\)




















\(\ds \)

\(=\)







\(\ds -\ln x\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int P \rd x}\)

\(=\)







\(\ds e^{-\ln x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 x\)









Thus from Solution by Integrating Factor, $(1)$ can be rewritten as:

$\map {\dfrac {\d} {\d x} } {\dfrac y x} = \dfrac 1 x k x = k$
and the general solution is:

$\dfrac y x = k x + C$
or:

$y = k x^2 + C x$
$\blacksquare$





