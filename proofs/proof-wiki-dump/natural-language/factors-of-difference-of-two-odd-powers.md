# 

Source: https://proofwiki.org/wiki/Factors_of_Difference_of_Two_Odd_Powers



Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Then:














\(\ds x^{2 n + 1} - y^{2 n + 1}\)

\(=\)







\(\ds \paren {x - y} \prod_{k \mathop = 1}^n \paren {x^2 - 2 x y \cos \dfrac {2 \pi k} {2 n + 1} + y^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {x - y} \paren {x^2 - 2 x y \cos \dfrac {2 \pi} {2 n + 1} + y^2} \paren {x^2 - 2 x y \cos \dfrac {4 \pi} {2 n + 1} + y^2} \dotsm \paren {x^2 - 2 x y \cos \dfrac {2 n \pi} {2 n + 1} + y^2}\)











Proof
From Factorisation of $z^n - a$:

$x^{2 n + 1} - y^{2 n + 1} = \ds \prod_{k \mathop = 0}^{2 n} \paren {x - \alpha^k y}$
where $\alpha$ is a primitive complex $2 n + 1$th roots of unity, for example:














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

The case $k = 0$ is taken care of by setting $\alpha^0 = 1$, from whence we have the factor $x - y$.

Taking the product of each of the remaining factors of $x^{2 n + 1} - y^{2 n + 1}$ in pairs:














\(\ds \paren {x - \alpha^k y} \paren {x - \alpha^{2 n - k + 1} y}\)

\(=\)







\(\ds \paren {x - \alpha^k y} \paren {x - \overline {\alpha^k} y}\)





Complex Roots of Unity occur in Conjugate Pairs














\(\ds \)

\(=\)







\(\ds x^2 - x \paren {\alpha^k + \overline {\alpha^k} } y + \alpha^k y \, \overline {\alpha^k} y\)




















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







\(\ds x^2 - x y \paren {\cos \dfrac {2 k \pi} {2 n + 1} + i \sin \dfrac {2 k \pi} {2 n + 1} + \cos \dfrac {2 k \pi} {2 n + 1} - i \sin \dfrac {2 k \pi} {2 n + 1} } + y^2\)





Definition of $\alpha$














\(\ds \)

\(=\)







\(\ds x^2 - 2 x y \cos \dfrac {2 k \pi} {2 n + 1} + y^2\)





simplification



Hence the result.
$\blacksquare$


Also see
Factors of Difference of Two Even Powers


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 2$: Special Products and Factors: $2.20$




