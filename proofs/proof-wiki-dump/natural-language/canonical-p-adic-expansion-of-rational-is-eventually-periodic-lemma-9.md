# 

Source: https://proofwiki.org/wiki/Canonical_P-adic_Expansion_of_Rational_is_Eventually_Periodic/Lemma_9

Theorem
Let $p$ be a prime number.
Let $a \in \Z, b \in Z_{> 0}$

Then:

$\ds \lim_{n \mathop \to \infty} \dfrac {a - \paren{p^{n+1} - 1} b } {p^{n+1}} = -b$


Proof
From Sequence of Reciprocals is Null Sequence:

$\ds \lim_{n \mathop \to \infty} \dfrac 1 n = 0$
From Combined Sum Rule for Real Sequences:

$\ds \lim_{n \mathop \to \infty} \dfrac {n - 1} n = \lim_{n \mathop \to \infty} 1 - \dfrac 1 n  = 1$
From Limit of Subsequence equals Limit of Real Sequence:

$\ds \lim_{n \mathop \to \infty} \dfrac {p^{n + 1} - 1} {p^{n + 1} } = 1$


Lemma 8
In the real numbers $\R$:

$\ds \lim_{n \mathop \to \infty} \dfrac a {p^{n+1}} = 0$
$\Box$

From Combined Sum Rule for Real Sequences:

$\ds \lim_{n \mathop \to \infty} \dfrac a {p^{n + 1} } - b \paren {\dfrac {p^{n + 1} - 1} {p^{n + 1} } } = -b$

The result follows.
$\blacksquare$





