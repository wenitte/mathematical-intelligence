# 

Source: https://proofwiki.org/wiki/Factorisation_of_x%5E(2n)-1_in_Real_Domain



Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Then:

$\ds z^{2 n} - 1 = \paren {z - 1} \paren {z + 1} \prod_{k \mathop = 1}^n \paren {z^2 - 2 \cos \dfrac {k \pi} n z + 1}$


Proof
From Power of Complex Number minus 1:

$\ds z^{2 n} - 1 = \prod_{k \mathop = 0}^{2 n - 1} \paren {z - \alpha^k}$
where:














\(\ds \alpha\)

\(=\)







\(\ds e^{2 i \pi / \paren {2 n} }\)




















\(\ds \)

\(=\)







\(\ds \cos \dfrac {2 \pi} {2 n} + i \sin \dfrac {2 \pi} {2 n}\)




















\(\ds \)

\(=\)







\(\ds \cos \dfrac \pi n + i \sin \dfrac \pi n\)










From Complex Roots of Unity occur in Conjugate Pairs:

$U_{2 n} = \set {1, \tuple {\alpha, \alpha^{2 n - 1} }, \tuple {\alpha^2, \alpha^{2 n - 2} }, \ldots, \tuple {\alpha^k, \alpha^{2 n - k} }, \ldots, \tuple {\alpha^{n - 1}, \alpha^{n + 1} }, -1}$
where $U_{2 n}$ denotes the complex $2 n$th roots of unity:

$U_{2 n} = \set {z \in \C: z^{2 n} = 1}$

The case $k = 0$ is taken care of by setting $\alpha^0 = 1$, from whence we have the factor $z - 1$.
The case $k = n$ is taken care of by setting $\alpha^k = -1$, from whence we have the factor $z + 1$.

Taking the product of each of the remaining factors of $z^{2 n} - 1$:














\(\ds \paren {z - \alpha^k} \paren {z - \alpha^{2 n - k} }\)

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







\(\ds z^2 - z \paren {\cos \dfrac {k \pi} n + i \sin \dfrac {k \pi} n + \cos \dfrac {k \pi} n - i \sin \dfrac {k \pi} n} + 1\)





Definition of $\alpha$














\(\ds \)

\(=\)







\(\ds z^2 - 2 \cos \dfrac {k \pi} n z + 1\)





simplification



Hence the result.
$\blacksquare$


Also see
Factors of Difference of Two Even Powers


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 3$. Roots of Unity: $(3.13)$




