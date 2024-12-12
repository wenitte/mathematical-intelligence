# 

Source: https://proofwiki.org/wiki/Canonical_P-adic_Expansion_of_Rational_is_Eventually_Periodic/Necessary_Condition


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.
Let $x$ be a rational number.

Then:

the canonical expansion of $x$ is eventually periodic.


Proof
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
$\blacksquare$





