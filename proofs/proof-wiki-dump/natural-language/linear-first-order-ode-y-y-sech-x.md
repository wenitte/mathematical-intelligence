# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/y%27_%2B_y_%3D_sech_x

Theorem
The linear first order ODE:

$(1): \quad \dfrac {\d y} {\d x} + y = \sech x$
has the general solution:

$y = e^{-x} \paren {C + \map \ln {e^{2 x} + 1} }$


Proof
$(1)$ is a linear first order ODE with constant coefficients in the form:

$\dfrac {\d y} {\d x} + p y = \map Q x$
where:

$p = 1$
$\map Q x = \sech x$

Thus:














\(\ds y\)

\(=\)







\(\ds e^{-x} \int e^x \sech \rd x + C e^{-x}\)





Solution to Linear First Order ODE with Constant Coefficients














\(\ds \)

\(=\)







\(\ds e^{-x} \int \frac {2 e^x} {e^x + e^{-x} } \rd x + C e^{-x}\)





Definition 1 of Hyperbolic Secant




It remains to evaluate the primitive.
Let:














\(\ds u\)

\(=\)







\(\ds e^x\)














\(\ds \leadsto \ \ \)





\(\ds \d u\)

\(=\)







\(\ds e^x \rd x\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \int \frac {2 e^x} {e^x + e^{-x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {2 \rd u} {u + \frac 1 u} \rd x\)




















\(\ds \)

\(=\)







\(\ds \map \ln {u^2 + 1} + C\)





Primitive of $\dfrac x {x^2 + a^2}$ for $a = 1$














\(\ds \)

\(=\)







\(\ds \map \ln {e^{2 x} + 1} + C\)





substituting back for $u$



The result follows.
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: Problems for Chapter $1$: $4$




