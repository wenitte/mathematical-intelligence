# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Primitive_of_Product_of_Power_with_Exponential

Theorem
Let $n \in \Z_{> 0}$ be a (strictly) positive integer.
Let:

$I_n := \ds \int x^n e^x \rd x$
Then:

$I_n = x^n e^x - n I_{n - 1}$
is a reduction formula for $\ds \int x^n e^x \rd x$.


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







\(\ds e^x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds e^x\)





Derivative of Exponential Function




Then:














\(\ds I_n\)

\(=\)







\(\ds \int x^n e^x \rd x\)





by definition














\(\ds \)

\(=\)







\(\ds x^n e^x - \int n x^{n - 1} e^x \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x^n e^x - n I_{n - 1}\)









$\blacksquare$


Sources
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals: Reduction Formulae




