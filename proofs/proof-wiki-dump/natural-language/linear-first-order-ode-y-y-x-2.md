# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/y%27_-_y_%3D_x%5E2

Theorem
The linear first order ODE:

$(1): \quad \dfrac {\d y} {\d x} - y = x^2$
has the general solution:

$y = C e^x - \paren {x^2 + 2 x + 2}$


Proof
$(1)$ is a linear first order ODE in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x$
where:

$\map P x = -1$
$\map Q x = x^2$

Thus:














\(\ds \int \map P x \rd x\)

\(=\)







\(\ds -\int \rd x\)




















\(\ds \)

\(=\)







\(\ds -x\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int P \rd x}\)

\(=\)







\(\ds e^{-x}\)










Thus from Solution by Integrating Factor, $(1)$ can be rewritten as:














\(\ds \map {\dfrac {\d} {\d x} } {y e^{-x} }\)

\(=\)







\(\ds x^2 e^{-x}\)














\(\ds \leadsto \ \ \)





\(\ds y e^{-x}\)

\(=\)







\(\ds \int x^2 e^{-x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{-x} } {-1} \paren {x^2 - \frac {2 x} {-1} + \frac 2 {\paren {-1}^2} } + C\)





Primitive of $x^2 e^{a x}$ for $a = -1$














\(\ds \)

\(=\)







\(\ds -e^{-x} \paren {x^2 + 2 x + 2} + C\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds C e^x - \paren {x^2 + 2 x + 2}\)









$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: Problems for Chapter $1$: $1$




