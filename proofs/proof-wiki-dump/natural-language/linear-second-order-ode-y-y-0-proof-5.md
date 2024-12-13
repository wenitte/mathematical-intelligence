# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_y_%3D_0/Proof_5

Theorem
The second order ODE:

$(1): \quad y + y = 0$
has the general solution:

$y = C_1 \sin x + C_2 \cos x$


Proof
Taking Laplace transforms, we have: 

$\laptrans {y + y} = \laptrans 0$
From Laplace Transform of Constant Mapping, we have: 

$\laptrans 0 = 0$
We also have: 














\(\ds \laptrans {y + y}\)

\(=\)







\(\ds \laptrans {y} + \laptrans y\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds s^2 \laptrans y - s \map y 0 - \map {y'} 0 + \laptrans y\)





Laplace Transform of Second Derivative



So: 

$\paren {s^2 + 1} \laptrans y = s \map y 0 + \map {y'} 0$
Giving: 

$\laptrans y = \map y 0 \dfrac s {s^2 + 1} + \map {y'} 0 \dfrac 1 {s^2 + 1}$
So: 














\(\ds y\)

\(=\)







\(\ds \invlaptrans {\map y 0 \frac s {s^2 + 1} + \map {y'} 0 \frac 1 {s^2 + 1} }\)





Definition of Inverse Laplace Transform














\(\ds \)

\(=\)







\(\ds \map y 0 \invlaptrans {\frac s {s^2 + 1} } + \map {y'} 0 \invlaptrans {\frac 1 {s^2 + 1} }\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds \map y 0 \invlaptrans {\laptrans {\cos x} } + \map {y'} 0 \invlaptrans {\laptrans {\sin x} }\)





Laplace Transform of Cosine, Laplace Transform of Sine














\(\ds \)

\(=\)







\(\ds \map y 0 \cos x + \map {y'} 0 \sin x\)





Definition of Inverse Laplace Transform



Setting $C_1 = \map {y'} 0$ and $C_2 = \map y 0$ gives the result.
$\blacksquare$





