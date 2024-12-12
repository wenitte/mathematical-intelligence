# 

Source: https://proofwiki.org/wiki/First_Order_ODE/dy_%3D_k_y_dx



Theorem
Let $k \in \R$ be a real number.
The first order ODE:

$\dfrac {\d y} {\d x} = k y$
has the general solution:

$y = C e^{k x}$


Proof 1













\(\ds \dfrac {\d y} {\d x}\)

\(=\)







\(\ds k y\)














\(\ds \leadsto \ \ \)





\(\ds \int \dfrac {\d y} y\)

\(=\)







\(\ds \int k \rd x\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds \ln y\)

\(=\)







\(\ds k x + C'\)





Primitive of Reciprocal, Primitive of Constant








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds e^{k x + C'}\)




















\(\ds \)

\(=\)







\(\ds e^{k x} e^{C'}\)




















\(\ds \)

\(=\)







\(\ds C e^{k x}\)





putting $C = e^{C'}$



$\blacksquare$


Proof 2
Write the differential equation as: 

$y' - k y = 0$
Taking Laplace transforms:

$\laptrans {y' - k y} = \laptrans 0$
From Laplace Transform of Constant Mapping, we have: 

$\laptrans 0 = 0$
We also have: 














\(\ds \laptrans {y' - k y}\)

\(=\)







\(\ds \laptrans {y'} - k \laptrans y\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds s \laptrans y - \map y 0 - k \laptrans y\)





Laplace Transform of Derivative



So:

$\paren {s - k} \laptrans y = \map y 0$
Giving: 

$\laptrans y = \dfrac {\map y 0} {s - k}$
So:














\(\ds y\)

\(=\)







\(\ds \invlaptrans {\frac {\map y 0} {s - k} }\)





Definition of Inverse Laplace Transform














\(\ds \)

\(=\)







\(\ds \map y 0 \invlaptrans {\laptrans {e^{k x} } }\)





Linear Combination of Laplace Transforms, Laplace Transform of Exponential














\(\ds \)

\(=\)







\(\ds \map y 0 e^{k x}\)





Definition of Inverse Laplace Transform



Setting $C = \map y 0$ gives the result.
$\blacksquare$


Proof 3













\(\ds \dfrac {\d y} {\d x}\)

\(=\)







\(\ds k y\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d y} {\d x} - k y\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds e^{-k x} \paren {\dfrac {\d y} {\d x} - k y}\)

\(=\)







\(\ds 0\)





Solution to Linear First Order Ordinary Differential Equation: $e^{\int -k \rd x} = e^{-k x}$








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \d {\d x} } {y e^{-k x} }\)

\(=\)







\(\ds 0\)





Solution to Linear First Order Ordinary Differential Equation continued








\(\ds \leadsto \ \ \)





\(\ds y e^{-k x}\)

\(=\)







\(\ds C\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds C e^{k x}\)









$\blacksquare$


Also represented as
This first order ODE can also be represented as:

$\dfrac {\d y} {\d x} + k y = 0$
from which the general solution is:

$y = C e^{-k x}$


Also see
Decay Equation


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 1$. The first order equation: $\S 1.1$ Introduction: $(5)$
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $1$: The Nature of Differential Equations: $\S 1$: Introduction: $(4)$




