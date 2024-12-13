# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_a_x_%2B_b_over_x/Proof_2

Theorem
$\ds \int \frac {\sqrt {a x + b} } x \rd x = 2 \sqrt {a x + b} + b \int \frac {\d x} {x \sqrt{a x + b} }$


Proof
Let:














\(\ds v\)

\(=\)







\(\ds \sqrt x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \frac 1 {2 \sqrt x}\)





Power Rule for Derivatives














\(\ds u\)

\(=\)







\(\ds \frac {2 \sqrt {a x + b} } {\sqrt x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {\frac {\sqrt x \cdot 2 a} {2 \sqrt{a x + b} } - \frac {2 \sqrt {a x + b} } {2 \sqrt x} } x\)





Quotient Rule for Derivatives etc.














\(\ds \)

\(=\)







\(\ds \frac {-b} {x^{3/2} \sqrt {a x + b} }\)





simplifying




From Integration by Parts:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \, \frac {\d u} {\d x} \rd x$
from which:














\(\ds \int \frac {\sqrt {a x + b} } x \rd x\)

\(=\)







\(\ds \int \frac {2 \sqrt {a x + b} }{\sqrt x} \frac 1 {2 \sqrt x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \sqrt {a x + b} } {\sqrt x} \sqrt x - \int {\sqrt x} \frac {-b} {x^{3/2} \sqrt {a x + b} } \rd x\)




















\(\ds \)

\(=\)







\(\ds 2 \sqrt {a x + b} + b \int \frac {\d x} {x \sqrt {a x + b} }\)





simplification



$\blacksquare$





