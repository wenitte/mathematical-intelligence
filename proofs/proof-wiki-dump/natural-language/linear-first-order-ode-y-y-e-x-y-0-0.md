# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/y%27_-_y_%3D_e%5Ex/y(0)_%3D_0

Theorem
Consider the linear first order ODE:

$(1): \quad \dfrac {\d y} {\d x} - y = e^x$
subject to the initial condition:

$\map y 0 = 0$

$(1)$ has the particular solution:

$y = x e^x$


Proof
$(1)$ is a linear first order ODE in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x$
where:

$\map P x = -1$
$\map Q x = e^x$

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







\(\ds e^x e^{-x}\)














\(\ds \leadsto \ \ \)





\(\ds y e^{-x}\)

\(=\)







\(\ds \int 1 \rd x\)




















\(\ds \)

\(=\)







\(\ds x + C\)





Primitive of Constant




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds e^x \paren {x + C}\)










Substituting the initial condition into $(2)$:














\(\ds 0\)

\(=\)







\(\ds e^0 \paren {0 + C}\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds C\)









which leads to the particular solution:

$y = x e^x$
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: Problems for Chapter $1$: $2$




