# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/y%27_%2B_(y_over_x)_%3D_k_x%5En

Theorem
Let $k, n \in \R$ be real numbers.
The linear first order ODE:

$(1): \quad \dfrac {\d y} {\d x} + \dfrac y x = k x^n$
has the general solution:

$y = \begin{cases}
\dfrac {k x^{n + 1} } {n + 2} + \dfrac C x & : n \ne -2 \\
& \\
\dfrac {k \ln x} x + \dfrac C x & : n = -2
\end{cases}$


Proof
$(1)$ is in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x$
where:

$\map P x = \dfrac 1 x$
$\map Q x = k x^n$
Thus:














\(\ds \int \map P x \rd x\)

\(=\)







\(\ds \int \frac 1 x \rd x\)




















\(\ds \)

\(=\)







\(\ds \ln x\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int P \rd x}\)

\(=\)







\(\ds e^{\ln x}\)




















\(\ds \)

\(=\)







\(\ds x\)









Thus from Solution by Integrating Factor, $(1)$ can be rewritten as:

$\map {\dfrac \d {\d x} } {x y} = k x^{n + 1}$
When $n + 1 \ne -1$, Primitive of Power is used to obtain:

$x y = \dfrac {k x^{n + 2} } {n + 2} + C$
or:

$y = \dfrac {k x^{n + 1} } {n + 2} + \dfrac C x$

When $n + 1 = -1$, we have:

$\map {\dfrac \d {\d x} } {x y} = \dfrac k x$
and Primitive of Reciprocal is used, yielding:

$x y = k \ln x + C$
or:

$y = \dfrac {k \ln x} x + \dfrac C x$
$\blacksquare$





