# 

Source: https://proofwiki.org/wiki/First_Order_ODE/dy_%3D_k_y_dx/Proof_2

Theorem
Let $k \in \R$ be a real number.
The first order ODE:

$\dfrac {\d y} {\d x} = k y$
has the general solution:

$y = C e^{k x}$


Proof
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





