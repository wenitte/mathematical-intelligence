# 

Source: https://proofwiki.org/wiki/Second_Order_ODE/y_y%27%27_%2B_(y%27)%5E2_-_2_y_y%27_%3D_0

Theorem
The second order ODE:

$y y + \paren {y'}^2 - 2 y y' = 0$
has the general solution:

$y^2 = C_2 e^{2 x} + C_1$


Proof
Using Solution of Second Order Differential Equation with Missing Independent Variable:














\(\ds y p \frac {\d p} {\d y} + p^2 - 2 y p\)

\(=\)







\(\ds 0\)





where $p = \dfrac {\d y} {\d x}$








\(\ds \leadsto \ \ \)





\(\ds \frac {\d p} {\d y} + \frac p y\)

\(=\)







\(\ds 2\)














\(\ds \leadsto \ \ \)





\(\ds p y\)

\(=\)







\(\ds y^2 + C\)





Linear First Order ODE: $y' + \dfrac y x = k x^n$: $k = 2, n = 0$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d y} {\d x}\)

\(=\)







\(\ds \frac {y^2 + C} y\)














\(\ds \leadsto \ \ \)





\(\ds \int \dfrac {y \rd y} {y^2 + C}\)

\(=\)







\(\ds \int \d x\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds \frac 1 2 \, \map \ln {y^2 + C}\)

\(=\)







\(\ds x + k\)





Primitive of Function under its Derivative



After algebra, and reassigning constants:

$y^2 = C_2 e^{2 x} + C_1$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $7$




