# 

Source: https://proofwiki.org/wiki/Factorisation_of_z%5En-a

Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $a \in \C$ be a complex number.

Then:

$z^n - a = \ds \prod_{k \mathop = 0}^{n - 1} \paren {z - \alpha^k b}$
where:

$\alpha$ is a primitive complex $n$th root of unity
$b$ is any complex number such that $b^n = a$.


Proof
From $z^n - a = 0$ we have that:

$a = z^n$
Let $b = a^{1 / n}$, hence $b^n = a$, with $a, b \in \C$.
From Roots of Complex Number:














\(\ds z^{1 / n}\)

\(=\)







\(\ds \set {a^{1 / n} e^{i \paren {\theta + 2 k \pi} / n}: k \in \set {0, 1, 2, \ldots, n - 1}, \theta = \arg a}\)




















\(\ds \)

\(=\)







\(\ds \set {a^{1 / n} e^{2 i k \pi / n}: k \in \set {0, 1, 2, \ldots, n - 1} }\)





$\theta = 0$














\(\ds \)

\(=\)







\(\ds \set {b e^{2 i k \pi / n}: k \in \set {0, 1, 2, \ldots, n - 1} }\)





$b = a^{1 / n}$



and so each of $b e^{2 i k \pi / n}$ is a root of $z^n - a$.
From First Complex Root of Unity is Primitive:
For each $n \in \Z_{>0}$ there exists at least one primitive complex $n$th root of unity, $\alpha$, hence each of $b \alpha^k$ is a unique root of $z^n - a$.
From the corollary to the Polynomial Factor Theorem:
If $\zeta_1, \zeta_2, \ldots, \zeta_n \in \C$ such that all are different, and $\map P {\zeta_1} = \map P {\zeta_2} = \cdots = \map P {\zeta_n} = 0$, then:

$\ds \map P z = k \prod_{j \mathop = 1}^n \paren {z - \zeta_j}$
where $k \in \C$.
$z^n - a$ is a monic polynomial, hence $k = 1$ in the above product.
Choose $\zeta_j = b \alpha^{j - 1}$ and we have the desired result.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 3$. Roots of Unity




