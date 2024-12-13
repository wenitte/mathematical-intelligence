# 

Source: https://proofwiki.org/wiki/Sequence_of_P-adic_Integers_has_Convergent_Subsequence/Lemma_5

Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.
Let $\sequence{x_n}$ be a sequence of $p$-adic integers.
Let $\sequence{b_n}$ be  a sequence of $p$-adic digits such that:

the canonical expansion $\ldots \, b_n \, \ldots \, b_1 b_0$ converges to $x$ in the $p$-adic integers $\Z_p$
Let $\sequence{x_{n_rj}}_{j \mathop \in \N}$ be a subsequence of $\sequence{x_n}$:

for all $j \in \N$, the canonical expansion of $x_{n_j}$ begins with the $p$-adic digits $b_j \, \ldots \, b_1 b_0$

Then:

the subsequence $\sequence{x_{n_j}}_{j \mathop \in \N}$ converges to $x \in \Z_p$


Proof
By definition of the canonical expansion $\ldots \, b_n \, \ldots \, b_1 b_0$ converges to $x$:

the sequence of partial sums $\ds \sum_{n \mathop = 0}^j b_n p^n$ converges to $x$
Let $\sequence{y_j}$ be the sequence of partial sums:

$y_j = \ds \sum_{n \mathop = m}^j b_n p^n$

From Null Sequence Test for Convergence, it is sufficient to show that:

$\sequence{x_{n_j} - y_j}$ is a null sequence

For all $j \in \N$, we have:














\(\ds x_{n_j} - y_j\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty a^{\paren j}_n p^n - \sum_{n \mathop = 0}^j b_n p^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^j \paren{a^{\paren j}_n - b_n} p^n + \sum_{n \mathop = j + 1}^\infty a^{\paren j}_n p^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^j 0 \cdot p^n + \sum_{n \mathop = j + 1}^\infty a^{\paren j}_n p^n\)









From P-adic Norm of P-adic Expansion is determined by First Nonzero Coefficient:

$\norm{x_{n_j} - y_j}_p \le \dfrac 1 {p^{j + 1} } < \dfrac 1 {p^j}$
From Sequence of Powers of Number less than One

$\ds \lim_{j \mathop \to \infty} \dfrac 1 {p^j} = 0$
From Squeeze Theorem for Real Sequences:

$\ds \lim_{j \mathop \to \infty} \norm{x_{n_j} - y_j}_p = 0$
By definition of convergence:

$\sequence{x_{n_j} - y_j}$ converges to $0$
It follows that $\sequence{x_{n_j} - y_j}$ is a null sequence by definition.
$\blacksquare$





