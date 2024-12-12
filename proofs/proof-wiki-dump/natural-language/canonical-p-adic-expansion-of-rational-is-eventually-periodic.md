# 

Source: https://proofwiki.org/wiki/Canonical_P-adic_Expansion_of_Rational_is_Eventually_Periodic



Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.
Let $x \in \Q_p$.

Then:

$x$ is a rational number if and only if the canonical expansion of $x$ is eventually periodic.


Proof
Necessary Condition
Let $x$ be a rational number.
Let $\ldots d_n \ldots d_2 d_1 d_0 . d_{-1} d_{-2} \ldots d_{-m}$ be the canonical expansion of $x$.
It is sufficient to show that the canonical expansion $\ldots d_n \ldots d_2 d_1 d_0$ is eventually periodic.

Let $y$ be the $p$-adic number with canonical expansion:

$\ldots d_n \ldots d_2 d_1 d_0$
We have:

$y = x - \ds \sum_{i \mathop = -m}^{-1} d_i p^i$
So:

$y$ is a rational number

By definition of $p$-adic integer:

$y$ is a $p$-adic integer

Let:

$y = \dfrac a b : a \in \Z, b \in Z_{> 0}$ are coprime
From Characterization of Rational P-adic Integer:

$p \nmid b$
From Prime not Divisor implies Coprime:

$b, p$ are coprime
 Lemma 1
$\forall n \in \N: \exists r_n \in \Z : \dfrac a b - \paren{p^{n + 1} \dfrac {r_n} b} \in \set{0, 1, \ldots, p^{n + 1} - 1}$
$\Box$

 Lemma 2
$\exists n_0 \in \N : \forall n \ge n_0 : -b \le r_n \le 0$
$\Box$

For all $n \in \N$, let:

$A_n = \dfrac a b - \paren{p^{n + 1} \dfrac {r_n} b}$
Then:

$\dfrac a b = A_n + \paren{p^{n + 1} \dfrac {r_n} b}$
From  Lemma 1, for all $n \in \N$:

$A_n \in \N$
$0 \le A_n \le p^{n+1} - 1$
 Lemma 3
$\ds \lim_{n \mathop \to \infty} A_n = \dfrac a b$
$\Box$


 Lemma 4
$\forall n \in \N: r_n = d_{n + 1} b + p r_{n + 1}$
$\Box$


 Lemma 5
$\exists \mathop m, l \in \N : \forall n \ge m: r_n = r_{n + l}$ and $d_n = d_{n + l}$
$\Box$

It follows that $\ldots d_n \ldots d_2 d_1 d_0$ is eventually periodic.
$\Box$


Sufficient Condition
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


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.6$ The $p$-adic expansion of rational numbers: Theorem $1.38$




