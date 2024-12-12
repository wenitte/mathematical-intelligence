# 

Source: https://proofwiki.org/wiki/Canonical_P-adic_Expansion_of_Rational_is_Eventually_Periodic/Sufficient_Condition



Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.
Let $x \in \Q_p$.
Let the canonical expansion of $x$ be eventually periodic.

Then:

$x$ be a rational number


Proof
Let the canonical expansion of $x$ be eventually periodic.


Lemma 6
$\exists r \in \Q, n \in \Z, y \in \Z_p$:
$(1) \quad x = r + p^n y$
$(2) \quad$ the canonical expansion of $y$ is periodic.
$\Box$

To show that $x$ is a rational number it is sufficient to show that $y$ is a rational number.

Let:

$\dots d_{k - 1} \ldots d_1 d_0 d_{k - 1} \ldots d_1 d_0 d_{k - 1} \ldots d_1 d_0$
be the periodic canonical expansion of $y$.
By definition of a canonical expansion:

$y = d_0 + d_1 p + \cdots + d_{k - 1} p^{k - 1} + d_0 p^k + d_1 p^{k + 1} + \cdots + d_{k - 1} p^{2 k - 1} + d_0 p^{2 k} + \cdots$

Let $a = d_0 + d_1 p + \cdots + d_{k - 1} p^{k - 1}$.
Then:

$y = a \paren {1 + p^k + p^{2 k} + \cdots}$


Lemma 7
$1 + p^k + p^{2 k} + p^{3 k} + \cdots = \dfrac 1 {1 - p^k}$
$\Box$

Then:

$y = \dfrac a {1 - p^k}$
Hence:

$y$ is a rational number

It follows that $x$ is a rational number.
$\blacksquare$





