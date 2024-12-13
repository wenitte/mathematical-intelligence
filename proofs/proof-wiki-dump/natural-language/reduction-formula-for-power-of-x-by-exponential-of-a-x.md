# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Power_of_x_by_Exponential_of_a_x

Theorem
$\ds \int x^n e^{a x} \rd x = \frac {x^n e^{a x} } a - \dfrac n a \int x^{n - 1} e^{a x} \rd x$
for $n \in \Z_{>0}$, $a \in \R_{\ne 0}$.


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







\(\ds e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \dfrac {e^{a x} } a\)





Primitive of $e^{a x}$




Then:














\(\ds \int x^n e^{a x} \rd x\)

\(=\)







\(\ds \int u \rd v\)




















\(\ds \)

\(=\)







\(\ds \paren {x^n} \paren {\dfrac {e^{a x} } a} - \int \paren {\dfrac {e^{a x} } a} \paren {n x^{n - 1} } \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^n e^{a x} } a - \dfrac n a \int x^{n - 1} e^{a x} \rd x\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $e^{a x}$: $14.512$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $105$.
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $3$: Reduction formulae
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $3$: Reduction formulae




