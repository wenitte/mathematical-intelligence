# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%3D_y%27/Proof_1

Theorem
The second order ODE:

$(1): \quad y = y'$
has the general solution:

$y = A_1 e^x + A_2$


Proof
The proof proceeds by using Solution of Second Order Differential Equation with Missing Dependent Variable.
Substitute $p$ for $y'$ in $(1)$:














\(\ds \dfrac {\d p} {\d x}\)

\(=\)







\(\ds p\)





where $p = \dfrac {\d y} {\d x}$








\(\ds \leadsto \ \ \)





\(\ds \int \rd x\)

\(=\)







\(\ds \int \frac {\d p} p\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \ln p + C\)





Primitive of $\dfrac 1 x$








\(\ds \leadsto \ \ \)





\(\ds p = \frac {\d y} {\d x}\)

\(=\)







\(\ds A_1 e^x\)





where $A_1 = e^C$








\(\ds \leadsto \ \ \)





\(\ds \int \rd y\)

\(=\)







\(\ds \int A_1 e^x \rd x\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds A_1 e^x + A_2\)





Primitive of Exponential Function



$\blacksquare$





