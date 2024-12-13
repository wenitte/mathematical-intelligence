# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Logarithm_of_x_squared_plus_a_squared



Theorem
$\ds \int x^m \map \ln {x^2 + a^2} \rd x = \frac {x^{m + 1} \map \ln {x^2 + a^2} } {m + 1} - \frac 2 {m + 1} \int \frac {x^{m + 2} } {x^2 + a^2} \rd x$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \map \ln {x^2 + a^2}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {2 x} {x^2 + a^2}\)





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














\(\ds \int x^m \map \ln {x^2 + a^2} \rd x\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \map \ln {x^2 + a^2} - \int \frac {x^{m + 1} } {m + 1} \frac {2 x \rd x} {x^2 + a^2} + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} \map \ln {x^2 + a^2} } {m + 1} - \frac 2 {m + 1} \int \frac {x^{m + 2} } {x^2 + a^2} \d x\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also see
Primitive of $x^m \map \ln {x^2 - a^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\ln x$: $14.539$




