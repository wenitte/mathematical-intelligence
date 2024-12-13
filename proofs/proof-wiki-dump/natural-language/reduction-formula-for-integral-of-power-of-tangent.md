# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Integral_of_Power_of_Tangent



Theorem
For all $n \in \Z_{> 1}$:
Let:

$I_n := \ds \int \tan^n x \rd x$
Then:

$I_n = \dfrac {\tan^{n - 1} x} {n - 1} - I_{n - 2}$
is a reduction formula for $\ds \int \tan^n x \rd x$.


Proof













\(\ds I_n\)

\(=\)







\(\ds \int \tan^n x \rd x\)





by definition














\(\ds \)

\(=\)







\(\ds \int \tan^{n - 2} x \tan^2 x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \tan^{n - 2} x \paren {\sec^2 x - 1} \rd x\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \int \tan^{n - 2} x \sec^2 x \rd x - \int \tan^{n - 2} x \rd x\)





Linear Combination of Primitives




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \int \tan^{n - 2} x \sec^2 x \rd x - I_{n - 2}\)





by definition




Let:














\(\ds t\)

\(=\)







\(\ds \tan x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d t} {\d x}\)

\(=\)







\(\ds \sec^2 x\)





Derivative of Tangent Function




Then:














\(\ds \int \tan^{n - 2} x \sec^2 x \rd x\)

\(=\)







\(\ds \int t^{n - 2} \rd t\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {t^{n - 1} } {n - 1}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {\tan^{n - 1} x} {n - 1}\)





substituting back $t \to \map \tan x$








\(\ds \leadsto \ \ \)





\(\ds I_n\)

\(=\)







\(\ds \frac {\tan^{n - 1} x} {n - 1} - I_{n - 2}\)





substituting for $\ds \int \tan^{n - 2} x \sec^2 x \rd x$ in $(1)$




Hence the result.
$\blacksquare$


Also see
Reduction Formula for Integral of Power of Sine
Reduction Formula for Integral of Power of Cosine


Sources
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals: Reduction Formulae




