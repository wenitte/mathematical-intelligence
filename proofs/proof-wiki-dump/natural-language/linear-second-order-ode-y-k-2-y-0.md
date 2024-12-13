# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_k%5E2_y_%3D_0



Theorem
The second order ODE:

$(1): \quad y - k^2 y = 0$
has the general solution:

$y = C_1 e^{k x} + C_2 e^{-k x}$


Proof 1
Using Solution of Second Order Differential Equation with Missing Independent Variable, $(1)$ can be expressed as:














\(\ds p \frac {\d p} {\d y}\)

\(=\)







\(\ds k^2 y\)





where $p = \dfrac {\d y} {\d x}$








\(\ds \leadsto \ \ \)





\(\ds p^2\)

\(=\)







\(\ds k^2 y^2 + k^2 \alpha\)





First Order ODE: $y \rd y = k x \rd x$








\(\ds \leadsto \ \ \)





\(\ds p = \dfrac {\d y} {\d x}\)

\(=\)







\(\ds \pm k \sqrt {y^2 + k^2 \alpha}\)














\(\ds \leadsto \ \ \)





\(\ds \int \dfrac {\d y} {\sqrt {y^2 + \alpha} }\)

\(=\)







\(\ds \int \pm k \rd x\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds \map \ln {y + \sqrt{y^2 + \alpha} }\)

\(=\)







\(\ds \pm k x + \beta\)





Primitive of $\dfrac 1 {\sqrt {x^2 + k} }$








\(\ds \leadsto \ \ \)





\(\ds y + \sqrt {y^2 + \alpha}\)

\(=\)







\(\ds e^{\pm k x + \beta}\)




















\(\ds \)

\(=\)







\(\ds C e^{\pm k x}\)





where $C = e^\beta$








\(\ds \leadsto \ \ \)





\(\ds y^2 + \alpha\)

\(=\)







\(\ds \paren {C e^{\pm k x} - y}^2\)




















\(\ds \)

\(=\)







\(\ds C^2 e^{\pm 2 k x} - 2 C e^{\pm k x} + y^2\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \frac {C^2 e^{\pm 2 k x} - \alpha} {2 C e^{\pm k x} }\)





Quadratic Formula














\(\ds \)

\(=\)







\(\ds \frac {C e^{\pm k x} - \frac \alpha C e^{\mp k x} } 2\)





Quadratic Formula



Setting $C_1 = \dfrac C 2$ and $C_2 = - \dfrac \alpha {2 C}$:

$y = C_1 e^{\pm k x} + C_2 e^{\mp k x}$
which is the same thing as:

$y = C_1 e^{k x} + C_2 e^{-k x}$
by allowing for the constants to be interchanged.
$\blacksquare$


Proof 2
It can be seen that $(1)$ is a constant coefficient homogeneous linear second order ODE.
Its auxiliary equation is:

$(2): \quad m^2 - k^2 = 0$
From Solution to Quadratic Equation with Real Coefficients, the roots of $(2)$ are:

$m_1 = k$
$m_2 = -k$

These are real and unequal.
So from Solution of Constant Coefficient Homogeneous LSOODE, the general solution of $(1)$ is:

$y = C_1 e^{k x} + C_2 e^{-k x}$
$\blacksquare$


Also see
Linear Second Order ODE: $y + k^2 y = 0$




