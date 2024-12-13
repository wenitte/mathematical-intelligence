# 

Source: https://proofwiki.org/wiki/Roots_of_Complex_Number/Corollary



Theorem
Let $z := \polar {r, \theta}$ be a complex number expressed in polar form, such that $z \ne 0$.
Let $n \in \Z_{>0}$ be a (strictly) positive integer.

Let $w$ be one of the complex $n$th roots of $z$.

Then the $n$th roots of $z$ are given by:

$z^{1 / n} = \set {w \epsilon^k: k \in \set {1, 2, \ldots, n - 1} }$
where $\epsilon$ is a primitive $n$th root of unity.


Proof
By definition of primitive complex $n$th root of unity:

$\omega = e^{2 m i \pi k}$
for some $m \in \Z: 1 \le m < n$.
Thus:














\(\ds \paren {w \omega^k}^n\)

\(=\)







\(\ds w^n \paren {e^{2 m i \pi k / n} }^n\)




















\(\ds \)

\(=\)







\(\ds z e^{2 m i \pi k}\)




















\(\ds \)

\(=\)







\(\ds z \paren {e^{2 i \pi} }^{m k}\)




















\(\ds \)

\(=\)







\(\ds z \times 1^{m k}\)




















\(\ds \)

\(=\)







\(\ds z\)









This demonstrates that $w \omega^k$ is one of the complex $n$th roots of $z$.

All of the complex $n$th roots of unity are represented by powers of $\omega$.
Thus it follows from Roots of Complex Number that:

$z^{1 / n} = \set {w \omega^k: k \in \set {1, 2, \ldots, n - 1} }$
are the $n$ complex $n$th roots of $z$.
$\blacksquare$


Examples
Complex Cube Roots
Let $z \in \C$ be a complex number.
Let $z \ne 0$.
Let $w$ be one of the (complex) cube roots of $z$.
Then the complete set of (complex) cube roots of $z$ is:

$\set {w, w \omega, w \omega^2}$
where:

$\omega = e^{2 \pi / 3} = -\dfrac 1 2 + \dfrac {i \sqrt 3} 2$


Fourth Roots of $2 - 2 i$
The complex $4$th roots of $2 - 2 i$ are given by:

$\paren {2 - 2 i}^{1/4} = \set {b, bi, -b, -bi}$
where:

$b = \sqrt [8] 8 \paren {\cos \dfrac \pi {16} + i \sin \dfrac \pi {16} }$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 3$. Roots of Unity




