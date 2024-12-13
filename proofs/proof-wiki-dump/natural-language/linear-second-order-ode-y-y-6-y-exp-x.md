# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_y%27_-_6_y_%3D_exp_-x



Theorem
The second order ODE:

$(1): \quad y - y' - 6 y = e^{-x}$
has the general solution:

$y = C_1 e^{3 x} + C_2 e^{-2 x} - \dfrac {e^{-x} } 4$


Proof 1
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = -1$
$q = -6$
$\map R x = e^{-x}$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y - y' - 6 y = 0$
From Linear Second Order ODE: $y - y' - 6 y = 0$, this has the general solution:

$y_g = C_1 e^{3 x} + C_2 e^{-2 x}$

We have that:

$\map R x = e^{-x}$
and so from the Method of Undetermined Coefficients for the Exponential function:

$y_p = \dfrac {K e^{a x} } {a^2 + p a + q}$
where:

$K = 1$
$a = -1$
$p = -1$
$q = -6$

Hence:














\(\ds y_p\)

\(=\)







\(\ds \dfrac {e^{-x} } {1 + 1 - 6}\)




















\(\ds \)

\(=\)







\(\ds -\dfrac {e^{-x} } 4\)










So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^{3 x} + C_2 e^{-2 x} - \dfrac {e^{-x} } 4$
$\blacksquare$


Proof 2
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE in the form:

$y + p y' + q y = \map R x$
where:

$p = -1$
$q = -6$
$\map R x = e^{-x}$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y - y' - 6 y = 0$
From Linear Second Order ODE: $y - y' - 6 y = 0$, this has the general solution:

$y_g = C_1 e^{3 x} + C_2 e^{-2 x}$

It remains to find a particular solution $y_p$ to $(1)$.

Expressing $y_g$ in the form:

$y_g = C_1 \, \map {y_1} x + C_2 \, \map {y_2} x$
we have:














\(\ds \map {y_1} x\)

\(=\)







\(\ds e^{3 x}\)




















\(\ds \map {y_2} x\)

\(=\)







\(\ds e^{-2 x}\)














\(\ds \leadsto \ \ \)





\(\ds \map { {y_1}'} x\)

\(=\)







\(\ds 3 e^{3 x}\)





Derivative of Exponential Function














\(\ds \map { {y_2}'} x\)

\(=\)







\(\ds -2 e^{-2 x}\)





Derivative of Exponential Function




By the Method of Variation of Parameters, we have that:

$y_p = v_1 y_1 + v_2 y_2$
where:














\(\ds v_1\)

\(=\)







\(\ds \int -\frac {y_2 \, \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds v_2\)

\(=\)







\(\ds \int \frac {y_1 \, \map R x} {\map W {y_1, y_2} } \rd x\)









where $\map W {y_1, y_2}$ is the Wronskian of $y_1$ and $y_2$.

We have that:














\(\ds \map W {y_1, y_2}\)

\(=\)







\(\ds y_1 {y_2}' - y_2 {y_1}'\)





Definition of Wronskian














\(\ds \)

\(=\)







\(\ds e^{3 x} \paren {-2 e^{-2 x} } - e^{-2 x} \paren {3 e^{3 x} }\)




















\(\ds \)

\(=\)







\(\ds -2 e^x - 3 e^x\)




















\(\ds \)

\(=\)







\(\ds -5 e^x\)










Hence:














\(\ds v_1\)

\(=\)







\(\ds \int -\frac {y_2 \, \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int -\frac {e^{-2 x} \cdot e^{-x} } {-5 e^x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {e^{-4 x} } 5 \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 {20} e^{-4 x}\)





Primitive of $e^{a x}$


















\(\ds v_2\)

\(=\)







\(\ds \int \frac {y_1 \, \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {e^{3 x} \cdot e^{-x} } {-5 e^x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int -\frac {e^x} 5 \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 5 e^x\)





Primitive of $e^{a x}$




It follows that:














\(\ds y_p\)

\(=\)







\(\ds -\frac 1 {20} e^{-4 x} e^{3 x} - \frac 1 5 e^x e^{-2 x}\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 {20} e^{-x} - \frac 1 5 e^{-x}\)





simplifying














\(\ds \)

\(=\)







\(\ds -\frac 1 4 e^{-x}\)





further simplifying




So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^{3 x} + C_2 e^{-2 x} - \dfrac {e^{-x} } 4$
is the general solution to $(1)$.
$\blacksquare$


Proof 3
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





