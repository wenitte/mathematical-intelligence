# 

Source: https://proofwiki.org/wiki/Complex_Algebra/Examples/z%5E8_%2B_1

Example of Complex Algebra
$z^8 + 1 = \paren {z^2 - 2 z \cos \dfrac \pi 8 + 1} \paren {z^2 - 2 z \cos \dfrac {3 \pi} 8 + 1} \paren {z^2 - 2 z \cos \dfrac {5 \pi} 8 + 1} \paren {z^2 - 2 z \cos \dfrac {7 \pi} 8 + 1}$


Proof
From Roots of $z^8 + 1 = 0$ and the corollary to the Polynomial Factor Theorem:

$z^8 + 1 = \ds \prod_{k \mathop = 0}^7 \paren {z - \paren {\cos \dfrac {\paren {2 k + 1} \pi} 8 + i \sin \dfrac {\paren {2 k + 1} \pi} 8} }$
Hence:














\(\ds z^8 + 1\)

\(=\)







\(\ds \prod_{k \mathop = 0}^7 \paren {z - \exp \dfrac {\paren {2 k + 1} i \pi} 8}\)





Definition of Exponential Form of Complex Number














\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 0}^3 \paren {z - \exp \dfrac {\paren {2 k + 1} i \pi} 8} \paren {z - \exp \dfrac {-\paren {2 k + 1} i \pi} 8}\)





Complex Roots of Polynomial with Real Coefficients occur in Conjugate Pairs














\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 0}^3 \paren {z^2 - z \paren {\exp \dfrac {\paren {2 k + 1} i \pi} 8 + \exp \dfrac {-\paren {2 k + 1} i \pi} 8} + \exp \dfrac {\paren {2 k + 1} i \pi} 8 \exp \dfrac {-\paren {2 k + 1} i \pi} 8}\)





multiplying out














\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 0}^3 \paren {z^2 - z \paren {\exp \dfrac {\paren {2 k + 1} i \pi} 8 + \exp \dfrac {-\paren {2 k + 1} i \pi} 8} + 1}\)





simplifying














\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 0}^3 \paren {z^2 - z \paren {\cos \dfrac {\paren {2 k + 1} \pi} 8 + i \sin \dfrac {\paren {2 k + 1} \pi} 8 + \cos \dfrac {\paren {2 k + 1} \pi} 8 - i \sin \dfrac {\paren {2 k + 1} \pi} 8} + 1}\)





Definition of Exponential Form of Complex Number














\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 0}^3 \paren {z^2 - 2 z \cos \dfrac {\paren {2 k + 1} \pi} 8 + 1}\)





simplifying




Hence the result.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 3$. Roots of Unity: Exercise $8$




