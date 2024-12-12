# 

Source: https://proofwiki.org/wiki/First_Order_ODE/x_dy_%3D_(y_%2B_y%5E3)_dx

Theorem
The first order ODE:

$(1): \quad x \dfrac {\d y} {\d x} = y + y^3$
has the general solution:

$y = \dfrac x {\sqrt {C^2 - x^2} }$


Proof













\(\ds x \dfrac {\d y} {\d x}\)

\(=\)







\(\ds y + y^3\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d y} {y \paren {1 + y^2} }\)

\(=\)







\(\ds \int \frac {\d x} x\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds \frac 1 2 \, \map \ln {\frac {y^2} {y^2 + 1} }\)

\(=\)







\(\ds \ln x + \ln k\)





Primitive of $\dfrac 1 {x \paren {x^2 + a^2} }$














\(\ds \)

\(=\)







\(\ds \map \ln {k x}\)














\(\ds \leadsto \ \ \)





\(\ds \map \ln {\frac {y^2} {y^2 + 1} }\)

\(=\)







\(\ds \map \ln {k^2 x^2}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {y^2} {y^2 + 1}\)

\(=\)







\(\ds k^2 x^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {y^2 + 1} {y^2}\)

\(=\)







\(\ds \frac 1 {k^2 x^2}\)














\(\ds \leadsto \ \ \)





\(\ds 1 + \frac 1 {y^2}\)

\(=\)







\(\ds \frac 1 {k^2 x^2}\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 {y^2}\)

\(=\)







\(\ds \frac 1 {k^2 x^2} - 1\)




















\(\ds \)

\(=\)







\(\ds \frac {1 - k^2 x^2} {k^2 x^2}\)














\(\ds \leadsto \ \ \)





\(\ds y^2\)

\(=\)







\(\ds \frac {k^2 x^2} {1 - k^2 x^2}\)














\(\ds \leadsto \ \ \)





\(\ds y^2\)

\(=\)







\(\ds \frac {x^2} {\frac 1 {k^2} - x^2}\)














\(\ds \leadsto \ \ \)





\(\ds y^2\)

\(=\)







\(\ds \frac {x^2} {C^2 - x^2}\)





letting $C = \dfrac 1 k$








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \frac x {\sqrt {C^2 - x^2} }\)









$\blacksquare$





