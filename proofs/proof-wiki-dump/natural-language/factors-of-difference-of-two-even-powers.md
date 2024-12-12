# 

Source: https://proofwiki.org/wiki/Factors_of_Difference_of_Two_Even_Powers



Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Then:

$\ds x^{2 n} - y^{2 n} = \paren {x - y} \paren {x + y} \prod_{k \mathop = 1}^{n - 1} \paren {x^2 - 2 x y \cos \dfrac {k \pi} n + y^2}$


Proof
From Factorisation of $z^n - a$:

$\ds z^{2 n} - y^{2 n} = \prod_{k \mathop = 0}^{2 n - 1} \paren {x - \alpha^k y}$
where $\alpha$ is a primitive complex $2 n$th roots of unity, for example:














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

The case $k = 0$ is taken care of by setting $\alpha^0 = 1$, from whence we have the factor $x - y$.
The case $k = n$ is taken care of by setting $\alpha^k = -1$, from whence we have the factor $x + y$.

Taking the product of each of the remaining factors of $x^{2 n} - y^{2 n}$ in pairs:














\(\ds \paren {x - \alpha^k y} \paren {x - \alpha^{2 n - k} y}\)

\(=\)







\(\ds \paren {x - \alpha^k y} \paren {x - \overline {\alpha^k} y}\)





Complex Roots of Unity occur in Conjugate Pairs














\(\ds \)

\(=\)







\(\ds x^2 - x y \paren {\alpha^k + \overline {\alpha^k} } + \alpha^k y \overline {\alpha^k} y\)




















\(\ds \)

\(=\)







\(\ds x^2 - x y \paren {\alpha^k + \overline {\alpha^k} } + \cmod {\alpha^k}^2 y^2\)





Modulus in Terms of Conjugate














\(\ds \)

\(=\)







\(\ds x^2 - x y \paren {\alpha^k + \overline {\alpha^k} } + y^2\)





Modulus of Complex Root of Unity equals 1














\(\ds \)

\(=\)







\(\ds x^2 - x y \paren {\cos \dfrac {k \pi} n + i \sin \dfrac {k \pi} n + \cos \dfrac {k \pi} n - i \sin \dfrac {k \pi} n} + y^2\)





Definition of $\alpha$














\(\ds \)

\(=\)







\(\ds x^2 - 2 x y \cos \dfrac {k \pi} n + y^2\)





simplification



Hence the result.
$\blacksquare$


Also see
Factors of Difference of Two Odd Powers


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 2$: Special Products and Factors: $2.22$




