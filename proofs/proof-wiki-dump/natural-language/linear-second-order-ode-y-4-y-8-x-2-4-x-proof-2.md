# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_4_y_%3D_8_x%5E2_-_4_x/Proof_2

Theorem
The second order ODE:

$(1): \quad y + 4 y = 8 x^2 - 4 x$
has the general solution:

$y = C_1 \sin 2 x + C_2 \cos 2 x - 1 - x + 2 x^2$


Proof
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





