# 

Source: https://proofwiki.org/wiki/Factorisation_of_z%5E(2n%2B1)%2B1_in_Real_Domain

Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Then:

$\ds z^{2 n + 1} + 1 = \paren {z + 1} \prod_{k \mathop = 0}^{n - 1} \paren {z^2 - 2 z \cos \dfrac {\paren {2 k + 1} \pi} {2 n + 1} + 1}$


Proof
From Factorisation of $z^n + 1$:

$(1): \quad \ds z^{2 n + 1} + 1 = \prod_{k \mathop = 0}^{2 n} \paren {z - \exp \dfrac {\paren {2 k + 1} i \pi} {2 n + 1} }$

From Complex Roots of Polynomial with Real Coefficients occur in Conjugate Pairs, the roots of $(1)$ occur in conjugate pairs.
Hence we can express $(1)$ as:














\(\ds z^{2 n + 1} + 1\)

\(=\)







\(\ds \prod_{k \mathop = 0}^n \paren {z - \exp \dfrac {\paren {2 k + 1} i \pi} {2 n + 1} } \prod_{k \mathop = n + 1}^{2 n} \paren {z - \exp \dfrac {\paren {2 k + 1} i \pi} {2 n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {z - \exp \dfrac {\paren {2 n + 1} i \pi} {2 n + 1} } \prod_{k \mathop = 0}^{n - 1} \paren {z - \exp \dfrac {\paren {2 k + 1} i \pi} {2 n + 1} } \prod_{k \mathop = n + 1}^{2 n} \paren {z - \exp \dfrac {\paren {2 k + 1} i \pi} {2 n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {z - e^{i \pi} } \prod_{k \mathop = 0}^{n - 1} \paren {z - \exp \dfrac {\paren {2 k + 1} i \pi} {2 n + 1} } \prod_{k \mathop = n + 1}^{2 n} \paren {z - \exp \dfrac {\paren {2 k + 1} i \pi} {2 n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {z + 1} \prod_{k \mathop = 0}^{n - 1} \paren {z - \exp \dfrac {\paren {2 k + 1} i \pi} {2 n + 1} } \paren {z - \exp \dfrac {-\paren {2 k + 1} i \pi} {2 n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {z + 1} \prod_{k \mathop = 0}^{n - 1} \paren {z^2 - z \paren {\exp \dfrac {\paren {2 k + 1} i \pi} {2 n + 1} + \exp \dfrac {-\paren {2 k + 1} i \pi} {2 n + 1} } + \exp \dfrac {\paren {2 k + 1} i \pi} {2 n + 1} \exp \dfrac {-\paren {2 k + 1} i \pi} {2 n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {z + 1} \prod_{k \mathop = 0}^{n - 1} \paren {z^2 - z \paren {\exp \dfrac {\paren {2 k + 1} i \pi} {2 n + 1} + \exp \dfrac {-\paren {2 k + 1} i \pi} {2 n + 1} } + 1}\)





simplifying














\(\ds \)

\(=\)







\(\ds \paren {z + 1} \prod_{k \mathop = 0}^{n - 1} \paren {z^2 - z \paren {\cos \dfrac {\paren {2 k + 1} \pi} {2 n + 1} + i \sin \dfrac {\paren {2 k + 1} \pi} {2 n + 1} + \cos \dfrac {\paren {2 k + 1} \pi} {2 n + 1} - i \sin \dfrac {\paren {2 k + 1} \pi} {2 n + 1} } + 1}\)





Euler's Formula














\(\ds \)

\(=\)







\(\ds \paren {z + 1} \prod_{k \mathop = 0}^{n - 1} \paren {z^2 - 2 z \cos \dfrac {\paren {2 k + 1} \pi} {2 n + 1} + 1}\)





simplifying



$\blacksquare$


Also see
Factors of Sum of Two Odd Powers




