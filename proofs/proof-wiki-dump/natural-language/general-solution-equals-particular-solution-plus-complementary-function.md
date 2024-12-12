# 

Source: https://proofwiki.org/wiki/General_Solution_equals_Particular_Solution_plus_Complementary_Function



Theorem
Consider the linear first order ODE with constant coefficients:

$(1): \quad \dfrac {\d y} {\d x} + a y = \map Q x$
The general solution to $(1)$ consists of:

the particular solution to $(1)$ for which the constant of integration is $0$
plus:

the complementary function to $(1)$.


Proof
From Solution to Linear First Order ODE with Constant Coefficients, $(1)$ has the general solution:

$\ds y = e^{-a x} \int e^{a x} \map Q x \rd x + C e^{-a x}$

Setting $C = 0$ we get:

$\ds y = e^{-a x} \int e^{a x} \map Q x \rd x$
which is a particular solution to $(1)$

By definition, the complementary function to $(1)$ is the general solution to the reduced equation:

$\dfrac {\d y} {\d x} + a y = 0$
From First Order ODE: $\dfrac {\d y} {\d x} = k y$, that general solution of $(1)$ is:

$y = C e^{-a x}$
Hence the result.
$\blacksquare$


Warning
I am beginning to wonder whether the author of the source work from which this result is taken really understands the material he is presenting.


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 1$. The first order equation: $\S 1.3$ The form of the general solution




