# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Power_of_x_by_General_Exponential_of_a_x

Theorem
$\ds \int x^n b^{a x} \rd x = \frac {x^n b^{a x} } {a \ln b} - \dfrac n {a \ln b} \int x^{n - 1} b^{a x} \rd x$
for $n \in \Z_{>0}$, $a \in \R_{\ne 0}$, $b > 0$, $b \ne 1$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds x^n\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds n x^{n - 1}\)





Power Rule for Derivatives




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds b^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \dfrac {e^{a x} } {a \ln b}\)





Primitive of $b^{a x}$




Then:














\(\ds \int x^n b^{a x} \rd x\)

\(=\)







\(\ds \int u \rd v\)




















\(\ds \)

\(=\)







\(\ds \paren {x^n} \paren {\dfrac {b^{a x} } {a \ln b} } - \int \paren {\dfrac {b^{a x} } {a \ln b} } \paren {n x^{n - 1} } \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^n b^{a x} } {a \ln b} - \dfrac n {a \ln b} \int x^{n - 1} b^{a x} \rd x\)





simplifying



$\blacksquare$


Sources
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $106$.




