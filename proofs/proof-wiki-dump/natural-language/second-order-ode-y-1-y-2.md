# 

Source: https://proofwiki.org/wiki/Second_Order_ODE/y%27%27_%3D_1_%2B_(y%27)%5E2



Theorem
The second order ODE:

$(1): \quad y = 1 + \paren {y'}^2$
has the general solution:

$y = \map {\ln \sec} {x + C_1} + C_2$


Proof 1
Using Solution of Second Order Differential Equation with Missing Independent Variable, $(1)$ can be expressed as:














\(\ds p \frac {\d p} {\d y}\)

\(=\)







\(\ds p^2 + 1\)





where $p = \dfrac {\d y} {\d x}$








\(\ds \leadsto \ \ \)





\(\ds \int \rd y\)

\(=\)







\(\ds \int \frac {p \rd p} {p^2 + 1}\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \frac 1 2 \, \map \ln {p^2 + 1} + k\)





Primitive of $\dfrac x {x^2 + a^2}$








\(\ds \leadsto \ \ \)





\(\ds p = \frac {\d y} {\d x}\)

\(=\)







\(\ds \sqrt {A_1^2 e^{2 y} - 1}\)





where $A_1^2 = e^{2 k}$




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \int \rd x\)

\(=\)







\(\ds \int \frac {\d y} {\sqrt {A_1^2 e^{2 y} - 1} }\)





Solution to Separable Differential Equation




Making the subtitution $u = A_1 e^y$:

$\d u = A_1 e^y \rd y = u \rd y$

Thus $(2)$ transforms into:














\(\ds \int \rd x\)

\(=\)







\(\ds \int \frac {\d u} {u \sqrt {u^2 - 1} }\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \arcsec u + A_2\)





Primitive of $\dfrac 1 {x \sqrt {x^2 - a^2} }$














\(\ds \)

\(=\)







\(\ds \map \arcsec {A_1 e^y} + A_2\)














\(\ds \leadsto \ \ \)





\(\ds \map \sec {x - A_2}\)

\(=\)







\(\ds A_1 e^y\)














\(\ds \leadsto \ \ \)





\(\ds \map {\ln \sec} {x - A_2}\)

\(=\)







\(\ds \ln A_1 + \ln e^y\)




















\(\ds \)

\(=\)







\(\ds \ln A_1 + y\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \map {\ln \sec} {x - A_2} - \ln A_1\)




















\(\ds \)

\(=\)







\(\ds \map {\ln \sec} {x + C_1} + C_2\)





setting $C_1 = -A_2$ and $C_2 = -\ln A_1$



$\blacksquare$


Proof 2
The proof proceeds by using Solution of Second Order Differential Equation with Missing Dependent Variable.
Substitute $p$ for $y'$ in $(1)$:














\(\ds \dfrac {\d p} {\d x}\)

\(=\)







\(\ds p^2 + 1\)





where $p = \dfrac {\d y} {\d x}$








\(\ds \leadsto \ \ \)





\(\ds \int \rd x\)

\(=\)







\(\ds \int \frac {\d p} {p^2 + 1}\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \arctan p + A_1\)





Primitive of $\dfrac 1 {x^2 + a^2}$








\(\ds \leadsto \ \ \)





\(\ds p = \frac {\d y} {\d x}\)

\(=\)







\(\ds \map \tan {x - A_1}\)














\(\ds \leadsto \ \ \)





\(\ds \int \rd y\)

\(=\)







\(\ds \int \map \tan {x - A_1} \rd x\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \map {\ln \sec} {x - A_1} + A_2\)





Primitive of $\tan a x$














\(\ds \)

\(=\)







\(\ds \map {\ln \sec} {x + C_1} + C_2\)





rearranging constants



$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.11$: Problem $3$




