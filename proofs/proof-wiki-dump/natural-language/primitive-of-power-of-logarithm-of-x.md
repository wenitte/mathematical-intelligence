# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Logarithm_of_x

Theorem
$\ds \int \ln^n x \rd x = x \ln^n x - n \int \ln^{n - 1} x \rd x + C$


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







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds x\)





Primitive of Constant




Then:














\(\ds \int \ln^n x \rd x\)

\(=\)







\(\ds x \ln^n x - \int x \paren {n \ln^{n - 1} x \frac 1 x} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \ln^n x - n \int \ln^{n - 1} x \rd x + C\)





Primitive of Constant Multiple of Function



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\ln x$: $14.535$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $3$: Reduction formulae
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $3$: Reduction formulae
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals: Reduction Formulae




