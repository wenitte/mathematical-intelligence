# 

Source: https://proofwiki.org/wiki/Canonical_P-adic_Expansion_of_Rational_is_Eventually_Periodic/Lemma_2


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $p$ be a prime number.
Let $a \in \Z, b \in Z_{> 0}$
Let:

$\forall n \in \N: \exists r_n \in \Z : \dfrac a b - \paren{p^{n + 1} \dfrac {r_n} b} \in \set{0, 1, \ldots, p^{n + 1} - 1}$

Then:

$\exists n_0 \in \N : \forall n \ge n_0 : -b \le r_n \le 0$


Proof
Lemma 11
$\forall n \in \N : \dfrac {a - \paren {p^{n + 1} - 1} b } {p^{n + 1} } \le r_n \le \dfrac a {p^{n + 1} }$
$\Box$

Lemma 8
In the real numbers $\R$:

$\ds \lim_{n \mathop \to \infty} \dfrac a {p^{n+1}} = 0$
$\Box$
By definition of convergence:

$\exists n_1 \in \N: \forall n \ge n_1 : - \dfrac 1 2 < \dfrac a {p^{n+1}} < \dfrac 1 2$
Lemma 9
In the real numbers $\R$:

$\ds \lim_{n \mathop \to \infty} \dfrac {a - \paren{p^{n+1} - 1} b } {p^{n+1}} = -b$
$\Box$
By definition of convergence:

$\exists n_2 \in \N: \forall n \ge n_2 : -b - \dfrac 1 2 < \dfrac {a - \paren{p^{n+1} - 1} b } {p^{n+1}} < -b + \dfrac 1 2$

Let:

$n_0 = \max \set{n_1, n_2}$
Then:

$\forall n \ge n_0 : -b - \dfrac 1 2 < \dfrac {a - \paren{p^{n+1} - 1} b } {p^{n+1}} \le r_n \le \dfrac a {p^{n+1}} < \dfrac 1 2$
By hypothesis:

$b \in \Z$ and $\forall n \in \N: r_n \in \Z$
Hence:

$\forall n \ge n_0 : -b \le r_n \le 0$
$\blacksquare$





