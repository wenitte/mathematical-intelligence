# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Root_of_a_x_%2B_b/Proof_1

Theorem
$\ds \int \paren {\sqrt {a x + b} }^m \rd x = \frac {2 \paren {\sqrt {a x + b} }^{m + 2} } {a \paren {m + 2} } + C$
for $m \ne -2$.


Proof
Let $u = \sqrt {a x + b}$.
Then:














\(\ds \int \paren {\sqrt {a x + b} }^m \rd x\)

\(=\)







\(\ds \frac 2 a \int u \cdot u^m \rd x\)





Primitive of Function of $\sqrt {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac 2 a \int u^{m + 1} \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 2 a \frac {u^{m + 2} } {m + 2} + C\)





Primitive of Power valid for $m + 2 \ne 0$, that is, $m \ne -2$














\(\ds \)

\(=\)







\(\ds \frac {2 \paren {\sqrt {a x + b} }^{m + 2} } {a \paren {m + 2} } + C\)





substituting for $u$



$\blacksquare$





