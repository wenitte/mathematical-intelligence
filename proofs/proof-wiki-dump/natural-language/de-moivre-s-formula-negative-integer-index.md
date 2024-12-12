# 

Source: https://proofwiki.org/wiki/De_Moivre%27s_Formula/Negative_Integer_Index

Theorem
Let $z \in \C$ be a complex number expressed in complex form:

$z = r \paren {\cos x + i \sin x}$
Then:

$\forall n \in \Z_{\le 0}: \paren {r \paren {\cos x + i \sin x} }^n = r^n \paren {\map \cos {n x} + i \map \sin {n x} }$


Proof
Let $n = 0$.
Then:














\(\ds r^0 \paren {\map \cos {0 x} + i \map \sin {0 x} }\)

\(=\)







\(\ds 1 \times \paren {\cos 0 + i \sin 0}\)





Definition of Zeroth Power














\(\ds \)

\(=\)







\(\ds 1 \paren {1 + i 0}\)





Cosine of Zero is One and Sine of Zero is Zero














\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds \paren {r \paren {\cos x + i \sin x} }^0\)





Definition of Zeroth Power




Now let $n \in \Z_{<0}$.
Let $n = -m$ where $m > 0$.

Thus:














\(\ds \paren {r \paren {\cos x + i \sin x} }^{-m}\)

\(=\)







\(\ds \frac 1 {\paren {r \paren {\cos x + i \sin x} }^m}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {r^m \paren {\map \cos {m x} + i \map \sin {m x} } }\)





De Moivre's Formula: Positive Integer Index














\(\ds \)

\(=\)







\(\ds r^{-m} \paren {\map \cos {-m x} + i \map \sin {-m x} }\)





Definition of Complex Division














\(\ds \)

\(=\)







\(\ds r^n \paren {\map \cos {n x} + i \map \sin {n x} }\)





as $n = -m$



$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 2$. Geometrical Representations
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: De Moivre's Theorem: $94 \ \text{(a)}$




