# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Logarithm_of_a_x



Theorem
$\ds \int x^n \ln a x \rd x = \dfrac {x^{n + 1} } {n + 1} \ln a x - \dfrac {x^{n + 1} } {\paren {n + 2}^2} + C$
for $n \ne -1$.


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \ln a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 x\)





Derivative of $\ln a x$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds x^n\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {x^{n + 1} } {n + 1}\)





Primitive of Power




Then:














\(\ds \int x^n \ln a x \rd x\)

\(=\)







\(\ds \frac {x^{n + 1} } {n + 1} \ln a x - \int \frac {x^{n + 1} } {n + 1} \paren {\frac 1 x} \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^{n + 1} } {n + 1} \ln a x - \frac 1 {n + 1} \int x^n \rd x\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac {x^{n + 1} } {n + 1} \ln a x - \frac 1 {n + 1} \paren {\frac {x^{n + 1} } {n + 1} } + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {x^{n + 1} } {n + 1} \paren {\ln a x - \frac 1 {n + 1} } + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac {\ln a x} x$ for $n = -1$
Primitive of $x^n \ln x$


Sources
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $110$.




