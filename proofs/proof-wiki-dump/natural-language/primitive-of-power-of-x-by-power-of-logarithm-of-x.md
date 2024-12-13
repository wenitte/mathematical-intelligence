# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Power_of_Logarithm_of_x



Theorem
$\ds \int x^m \ln^n x \rd x = \frac {x^{m + 1} \ln^n x} {m + 1} - \frac n {m + 1} \int x^m \ln^{n - 1} x \rd x + C$
where $m \ne -1$.


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \ln^n x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds n \ln^{n - 1} x \frac 1 x\)





Derivative of $\ln x$, Derivative of Power, Chain Rule for Derivatives




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














\(\ds \int x^m \ln^n x \rd x\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \ln^n x - \int \frac {x^{m + 1} } {m + 1} \paren {n \ln^{n - 1} x \frac 1 x} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} \ln^n x} {m + 1} - \frac n {m + 1} \int x^m \ln^{n - 1} x \rd x + C\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also see
Primitive of $\dfrac {\ln^n x} x$ for the case where $m = -1$.
Definite Integral from 0 to 1 of Power of x by Power of Logarithm of x


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\ln x$: $14.536$




