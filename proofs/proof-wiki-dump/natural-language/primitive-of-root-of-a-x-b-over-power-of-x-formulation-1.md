# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_a_x_%2B_b_over_Power_of_x/Formulation_1

Theorem
$\ds \int \frac {\sqrt {a x + b} } {x^m} \rd x = -\frac {\sqrt {a x + b} } {\paren {m - 1} x^{m - 1} } + \frac a {2 \paren {m - 1} } \int \frac {\d x} {x^{m - 1} \sqrt {a x + b} }$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \sqrt {a x + b}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac a {2 \sqrt {a x + b} }\)





Power Rule for Derivatives etc.














\(\ds v\)

\(=\)







\(\ds \frac {-1} {\paren {m - 1} x^{m - 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \frac 1 {x^m}\)





Power Rule for Derivatives




From Integration by Parts:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
from which:














\(\ds \int \frac {\sqrt {a x + b} } {x^m} \rd x\)

\(=\)







\(\ds \int \sqrt {a x + b} \frac 1 {x^m} \rd x\)




















\(\ds \)

\(=\)







\(\ds \sqrt {a x + b} \frac {-1} {\paren {m - 1} x^{m - 1} } - \int \frac {-1} {\paren {m - 1} x^{m - 1} } \frac a {2 \sqrt {a x + b} } \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac {\sqrt {a x + b} } {\paren {m - 1} x^{m - 1} } + \frac a {2 \paren {m - 1} } \int \frac {\d x} {x^{m - 1} \sqrt {a x + b} }\)





Primitive of Constant Multiple of Function



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$: $14.97$




