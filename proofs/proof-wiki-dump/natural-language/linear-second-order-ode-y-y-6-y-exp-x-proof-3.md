# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_y%27_-_6_y_%3D_exp_-x/Proof_3

Theorem
The second order ODE:

$(1): \quad y - y' - 6 y = e^{-x}$
has the general solution:

$y = C_1 e^{3 x} + C_2 e^{-2 x} - \dfrac {e^{-x} } 4$


Proof
Taking Laplace transforms: 

$\laptrans {y - y' - 6 y} = \laptrans {e^{-x} }$
We have: 














\(\ds \laptrans {y - y' - 6 y}\)

\(=\)







\(\ds \laptrans {y} - \laptrans {y'} - 6 \laptrans y\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds s^2 \laptrans y - s \map y 0 - \map {y'} 0 - \paren {s \laptrans y - \map y 0} - 6 \laptrans y\)




















\(\ds \)

\(=\)







\(\ds \paren {s^2 - s - 6} \laptrans y - \paren {s \map y 0 + \map {y'} 0 - \map y 0}\)









We also have: 














\(\ds \laptrans {e^{-x} }\)

\(=\)







\(\ds \frac 1 {s - \paren {-1} }\)





Laplace Transform of Exponential














\(\ds \)

\(=\)







\(\ds \frac 1 {s + 1}\)









So:

$\paren {s^2 - s - 6} \laptrans y = s \map y 0 + \paren {\map {y'} 0 - \map y 0} + \dfrac 1 {s + 1}$
Giving: 














\(\ds \laptrans y\)

\(=\)







\(\ds \map y 0 \paren {\frac s {s^2 - s - 6} } + \paren {\map {y'} 0 - \map y 0} \paren {\frac 1 {s^2 - s - 6} } + \frac 1 {\paren {s + 1} \paren {s^2 - s - 6} }\)




















\(\ds \)

\(=\)







\(\ds \map y 0 \paren {\frac s {\paren {s - 3} \paren {s + 2} } } + \paren {\map {y'} 0 - \map y 0} \paren {\frac 1 {\paren {s - 3} \paren {s + 2} } } + \frac 1 {\paren {s + 1} \paren {s - 3} \paren {s + 2} }\)





factorising














\(\ds \)

\(=\)







\(\ds \frac {\map y 0} 5 \paren {\frac 2 {s + 2} + \frac 3 {s - 3} } + \frac {\map {y'} 0 - \map y 0} 5 \paren {\frac 1 {s - 3} - \frac 1 {s + 2} } + \frac 1 {20} \paren {\frac 1 {s - 3} + \frac 4 {s + 2} - \frac 5 {s + 1} }\)





partial fraction expansion














\(\ds \)

\(=\)







\(\ds \paren {\frac {2 \map y 0 - \map {y'} 0 + \map y 0 + 1} 5} \frac 1 {s + 2} + \paren {\frac {3 \map y 0 + \map {y'} 0 - \map y 0} 5 + \frac 1 {20} } \frac 1 {s - 3} - \frac 1 {4 \paren {s + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {3 \map y 0 - \map {y'} 0 + 1} 5} \frac 1 {s + 2} + \paren {\frac {8 \map y 0 + 4 \map {y'} 0 + 1} {20} } \frac 1 {s - 3} - \frac 1 {4 \paren {s + 1} }\)









So: 














\(\ds y\)

\(=\)







\(\ds \invlaptrans {\paren {\frac {3 \map y 0 - \map {y'} 0 + 1} 5} \frac 1 {s + 2} + \paren {\frac {8 \map y 0 + 4 \map {y'} 0 + 1} {20} } \frac 1 {s - 3} - \frac 1 {4 \paren {s + 1} }  }\)





Definition of Inverse Laplace Transform














\(\ds \)

\(=\)







\(\ds \paren {\frac {3 \map y 0 - \map {y'} 0 + 1} 5} \invlaptrans {\frac 1 {s + 2} } + \paren {\frac {8 \map y 0 + 4 \map {y'} 0 + 1} {20} } \invlaptrans {\frac 1 {s - 3} } - \frac 1 4 \invlaptrans {\frac 1 {s + 1} }\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds \paren {\frac {3 \map y 0 - \map {y'} 0 + 1} 5} \invlaptrans {\laptrans {e^{-2 x} } } + \paren {\frac {8 \map y 0 + 4 \map {y'} 0 + 1} {20} } \invlaptrans {\laptrans {e^{3 x} } } - \frac 1 4 \invlaptrans {\laptrans {e^{-x} } }\)





Laplace Transform of Exponential














\(\ds \)

\(=\)







\(\ds \paren {\frac {3 \map y 0 - \map {y'} 0 + 1} 5} e^{-2 x} + \paren {\frac {8 \map y 0 + 4 \map {y'} 0 + 1} {20} } e^{3 x} - \frac 1 4 e^{-x}\)





Definition of Inverse Laplace Transform



Setting: 

$C_1 = \dfrac {8 \map y 0 + 4 \map {y'} 0 + 1} {20}$
$C_2 = \dfrac {3 \map y 0 - \map {y'} 0 + 1} 5$
gives the result.
$\blacksquare$





