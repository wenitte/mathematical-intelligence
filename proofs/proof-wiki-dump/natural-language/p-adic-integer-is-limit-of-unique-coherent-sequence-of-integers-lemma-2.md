# 

Source: https://proofwiki.org/wiki/P-adic_Integer_is_Limit_of_Unique_Coherent_Sequence_of_Integers/Lemma_2

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\Z_p$ be the $p$-adic integers.
Let $x \in \Z_p$.
Let $\sequence {\alpha_n}$ be a sequence of integers:

$\norm {x -\alpha_n}_p \le p^{-\paren {n + 1} }$

Then:

$\ds \lim_{n \mathop \to \infty} \alpha_n = x$


Proof
From Sequence of Powers of Number less than One:

$\ds \lim_{n \mathop \to \infty} p^{-n} = 0$
From Multiple Rule for Real Sequences:

$\ds \lim_{n \mathop \to \infty} p^{-\paren {n + 1} } = 0$
By the Squeeze Theorem for Real Sequences :

$\ds \lim_{n \mathop \to \infty} \norm {x - \alpha_n}_p = 0$.
Hence the limit of $\sequence {\alpha_n}$ is by definition:

$\ds \lim_{n \mathop \to \infty} \alpha_n = x$
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.3$ Exploring $\Q_p$, Lemma $3.3.4 \ \text {(ii)}$




