# 

Source: https://proofwiki.org/wiki/Factorisation_of_x%5E(2n%2B1)-1_in_Real_Domain



Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Then:

$\ds z^{2 n + 1} - 1 = \paren {z - 1} \prod_{k \mathop = 1}^n \paren {z^2 - 2 z \cos \dfrac {2 \pi k} {2 n + 1} + 1}$


Proof
From Power of Complex Number minus 1:

$\ds z^{2 n + 1} - 1 = \prod_{k \mathop = 0}^{2 n} \paren {z - \alpha^k}$
where:














\(\ds \alpha\)

\(=\)







\(\ds e^{2 i \pi / \paren {2 n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \cos \dfrac {2 \pi} {2 n + 1} + i \sin \dfrac {2 \pi} {2 n + 1}\)










From Complex Roots of Unity occur in Conjugate Pairs:

$U_{2 n + 1} = \set {1, \tuple {\alpha, \alpha^{2 n} }, \tuple {\alpha^2, \alpha^{2 n - 1} }, \ldots, \tuple {\alpha^k, \alpha^{2 n - k + 1} }, \ldots, \tuple {\alpha^n, \alpha^{n + 1} } }$
where $U_{2 n + 1}$ denotes the complex $2 n + 1$th roots of unity:

$U_{2 n + 1} = \set {z \in \C: z^{2 n + 1} = 1}$

The case $n = 0$ is taken care of by setting $\alpha^0 = 1$, from whence we have the factor $z - 1$.

Taking the product of each of the remaining factors of $z^{2 n + 1} - 1$ in pairs:














\(\ds \paren {z - \alpha^k} \paren {z - \alpha^{2 n - k + 1} }\)

\(=\)







\(\ds \paren {z - \alpha^k} \paren {z - \overline {\alpha^k} }\)





Complex Roots of Unity occur in Conjugate Pairs














\(\ds \)

\(=\)







\(\ds z^2 - z \paren {\alpha^k + \overline {\alpha^k} } + \alpha^k \overline {\alpha^k}\)




















\(\ds \)

\(=\)







\(\ds z^2 - z \paren {\alpha^k + \overline {\alpha^k} } + \cmod {\alpha^k}^2\)





Modulus in Terms of Conjugate














\(\ds \)

\(=\)







\(\ds z^2 - z \paren {\alpha^k + \overline {\alpha^k} } + 1\)





Modulus of Complex Root of Unity equals 1














\(\ds \)

\(=\)







\(\ds z^2 - z \paren {\cos \dfrac {2 k \pi} {2 n + 1} + i \sin \dfrac {2 k \pi} {2 n + 1} + \cos \dfrac {2 k \pi} {2 n + 1} - i \sin \dfrac {2 k \pi} {2 n + 1} } + 1\)





Definition of $\alpha$














\(\ds \)

\(=\)







\(\ds z^2 - 2 z \cos \dfrac {2 k \pi} {2 n + 1} + 1\)





simplification



Hence the result.
$\blacksquare$


Also see
Factors of Difference of Two Odd Powers


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 3$. Roots of Unity: $(3.13)$




