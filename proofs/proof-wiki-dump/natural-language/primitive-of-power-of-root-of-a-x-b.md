# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Root_of_a_x_%2B_b



Theorem
$\ds \int \paren {\sqrt {a x + b} }^m \rd x = \frac {2 \paren {\sqrt {a x + b} }^{m + 2} } {a \paren {m + 2} } + C$
for $m \ne -2$.


Proof 1
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


Proof 2
Let $u = a x + b$.
Then:














\(\ds \int \paren {\sqrt {a x + b} }^m \rd x\)

\(=\)







\(\ds \frac 1 a \int \paren {\sqrt u}^m \rd u\)





Primitive of Function of $a x + b$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int u^{m / 2} \rd u\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 a \frac {u^{m / 2 + 1} } {m / 2 + 1} + C\)





Primitive of Power valid for $m / 2 + 1 \ne 0$, that is, $m \ne -2$














\(\ds \)

\(=\)







\(\ds \frac 1 a \frac {u^{\paren {m + 2} / 2} } {\paren {m + 2} / 2} + C\)




















\(\ds \)

\(=\)







\(\ds \frac 2 a \frac {\paren {\sqrt u}^{m + 2} } {\paren {m + 2} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \paren {\sqrt {a x + b} }^{m + 2} } {a \paren {m + 2} } + C\)





substituting for $u$



$\blacksquare$


Also presented as
This result is also seen presented in the form:

$\ds \int \paren {\sqrt {a x + b} }^n \rd x = \frac 2 a \frac {\paren {\sqrt {a x + b} }^{n + 2} } {n + 2} + C$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$: $14.99$




