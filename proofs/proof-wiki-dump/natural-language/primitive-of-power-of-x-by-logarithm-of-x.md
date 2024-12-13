# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Logarithm_of_x



Theorem
$\ds \int x^m \ln x \rd x = \frac {x^{m + 1} } {m + 1} \paren {\ln x - \frac 1 {m + 1} } + C$
where $m \ne -1$.


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \ln x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 x\)





Derivative of $\ln x$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds x^m\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1}\)





Primitive of Power




Then:














\(\ds \int x^m \ln x \rd x\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \ln x - \int \frac {x^{m + 1} } {m + 1} \paren {\frac 1 x} \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \ln x - \frac 1 {m + 1} \int x^m \rd x\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \ln x - \frac 1 {m + 1} \paren {\frac {x^{m + 1} } {m + 1} } + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \paren {\ln x - \frac 1 {m + 1} } + C\)





simplifying



$\blacksquare$


Example
$\ds \int_1^n x^m \ln x \rd x = \frac {n^{m + 1} } {m + 1} \paren {\ln n - \frac 1 {m + 1} } + \frac 1 {\paren {m + 1}^2}$
where $m \ne -1$.


Also see
Primitive of $\dfrac {\ln x} x$ for the case where $m = -1$.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\ln x$: $14.527$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals




