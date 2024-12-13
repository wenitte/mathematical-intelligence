# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_4_y_%3D_8_x%5E2_-_4_x

Theorem
The second order ODE:

$(1): \quad y + 4 y = 8 x^2 - 4 x$
has the general solution:

$y = C_1 \sin 2 x + C_2 \cos 2 x - 1 - x + 2 x^2$


Proof 1
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = 0$
$q = 4$
$\map R x = 8 x^2 - 4 x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$(2): \quad y + 4 y = 0$
From Linear Second Order ODE: $y + 4 y = 0$, this has the general solution:

$y_g = C_1 \sin 2 x + C_2 \cos 2 x$

From the Method of Undetermined Coefficients for Polynomials:

$y_p = A_0 + A_1 x + A_2 x^2$
where $A$ and $B$ are to be determined.

Hence:














\(\ds y_p\)

\(=\)







\(\ds A_0 + A_1 x + A_2 x^2\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds A_1 + 2 A_2 x\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds {y_p}\)

\(=\)







\(\ds 2 A_2\)





Power Rule for Derivatives




Substituting into $(1)$:














\(\ds 2 A_2 + 4 \paren {A_0 + A_1 x + A_2 x^2}\)

\(=\)







\(\ds 8 x^2 - 4 x\)














\(\ds \leadsto \ \ \)





\(\ds 2 A_2 + 4 A_0\)

\(=\)







\(\ds 0\)





equating coefficients














\(\ds 4 A_1\)

\(=\)







\(\ds -4\)




















\(\ds 4 A_2\)

\(=\)







\(\ds 8\)














\(\ds \leadsto \ \ \)





\(\ds A_1\)

\(=\)







\(\ds -1\)




















\(\ds A_2\)

\(=\)







\(\ds 2\)




















\(\ds A_0\)

\(=\)







\(\ds -1\)










So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 \sin 2 x + C_2 \cos 2 x - 1 - x + 2 x^2$
is the general solution to $(1)$.
$\blacksquare$


Proof 2
Taking Laplace transforms: 

$\laptrans {y + 4 y} = \laptrans {8 x^2 - 4 x}$
We have: 














\(\ds \laptrans {y + 4 y}\)

\(=\)







\(\ds \laptrans {y} + 4 \laptrans y\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds s^2 \laptrans y - s \map y 0 - \map {y'} 0\)





Laplace Transform of Second Derivative



We also have: 














\(\ds \laptrans {8 x^2 - 4 x}\)

\(=\)







\(\ds 8 \laptrans {x^2} - 4 \laptrans x\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds \frac {8 \cdot 2!} {s^3} - \frac {4} {s^2}\)





Laplace Transform of Power














\(\ds \)

\(=\)







\(\ds \frac {16 - 4 s} {s^3}\)









So:

$\paren {s^2 + 4} \laptrans y = s \map y 0 + \map {y'} 0 + \dfrac {16 - 4 s} {s^3}$
Giving: 














\(\ds \laptrans y\)

\(=\)







\(\ds \map y 0 \frac s {s^2 + 4} + \map {y'} 0 \frac 1 {s^2 + 4} + \frac {16 - 4 s} {s^3 \paren {s^2 + 4} }\)




















\(\ds \)

\(=\)







\(\ds \map y 0 \frac s {s^2 + 4} + \map {y'} 0 \frac 1 {s^2 + 4} + \frac 4 {s^3} + \frac {s + 1} {s^2 + 4} - \frac 1 {s^2} - \frac 1 s\)





partial fraction expansion














\(\ds \)

\(=\)







\(\ds \paren {\map y 0 + 1} \frac s {s^2 + 4} + \paren {\map {y'} 0 + 1} \frac 1 {s^2 + 4} + \frac 4 {s^3} - \frac 1 {s^2} - \frac 1 s\)









So:














\(\ds y\)

\(=\)







\(\ds \invlaptrans {\paren {\map y 0 + 1} \frac s {s^2 + 4} + \paren {\map {y'} 0 + 1} \frac 1 {s^2 + 4} + \frac 4 {s^3} - \frac 1 {s^2} - \frac 1 s}\)





Definition of Inverse Laplace Transform














\(\ds \)

\(=\)







\(\ds \paren {\map y 0 + 1} \invlaptrans {\frac s {s^2 + 2^2} } + \frac {\paren {\map {y'} 0 + 1} } 2 \invlaptrans {\frac 2 {s^2 + 2^2} } + 2 \invlaptrans {\frac {2!} {s^3} } - \invlaptrans {\frac {1!} {s^2} } - \invlaptrans {\frac {0!} s}\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds \paren {\map y 0 + 1} \invlaptrans {\laptrans {\cos 2 x} } + \frac {\paren {\map {y'} 0 + 1} } 2 \invlaptrans {\laptrans {\sin 2 x} } + 2 \invlaptrans {\laptrans {x^2} } - \invlaptrans {\laptrans x} - \invlaptrans {\laptrans 1}\)





Laplace Transform of Cosine, Laplace Transform of Sine, Laplace Transform of Power














\(\ds \)

\(=\)







\(\ds \paren {\map y 0 + 1} \cos 2 x + \paren {\frac {\paren {\map {y'} 0 + 1} } 2 } \sin 2 x - 1 - x + 2 x^2\)





Definition of Inverse Laplace Transform



Setting $C_1 = \dfrac {\paren {\map {y'} 0 + 1} } 2$ and $C_2 = \map y 0 + 1$ gives the result.
$\blacksquare$





