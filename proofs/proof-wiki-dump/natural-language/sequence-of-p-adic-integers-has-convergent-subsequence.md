# 

Source: https://proofwiki.org/wiki/Sequence_of_P-adic_Integers_has_Convergent_Subsequence



Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.
Let $\sequence{x_n}$ be a sequence of $p$-adic integers.

Then:

there exists a convergent subsequence $\sequence {x_{n_r} }_{r \mathop \in \N}$ of $\sequence{x_n}$


Proof 1
Lemma 1
there exists a $p$-adic digit $b_0$ such that:

there exists infinitely many $n \in \N$ such that the canonical expansion of $x_n$ begins with the $p$-adic digit $b_0$
$\Box$


Lemma 2
Let $\sequence{b_0, b_1, \ldots, b_j}$ be a finite sequence of $p$-adic digits such that:

there exists infinitely many $n \in \N$ such that the canonical expansion of $x_n$ begins with the $p$-adic digits $b_j \, \ldots \, b_1 b_0$

Then there exists a $p$-adic digit $b_{j + 1}$ such that:

there exists infinitely many $n \in \N$ such that the canonical expansion of $x_n$ begins with the $p$-adic digits $b_{j+1}b_j \, \ldots \, b_1 b_0$
$\Box$


Lemma 3
there exists a sequence $\sequence{b_n}$ of $p$-adic digits:
for all $j \in \N$, there exists infinitely many $n \in \N$ such that the canonical expansion of $x_n$ begins with the $p$-adic digits $b_j \, \ldots \, b_1 b_0$
$\Box$


Lemma 4
there exists a subsequence $\sequence{x_{n_j}}_{j \mathop \in \N}$ of $\sequence{x_n}$:
for all $j \in \N$, the canonical expansion of $x_{n_j}$ begins with the $p$-adic digits $b_j \, \ldots \, b_1 b_0$
$\Box$

From P-adic Expansion Converges to P-adic Number:

$\ds \sum_{n \mathop = 0}^\infty b_n p^n$ converges to some $x \in \Q_p$
By definition of $p$-adic integer:

$x \in \Z_p$


Lemma 5
the subsequence $\sequence{x_{n_j}}_{j \mathop \in \N}$ converges to $x \in \Z_p$
$\blacksquare$


Proof 2
From P-adic Integers are Compact Subspace:

$\Z_p$ is a compact subspace in the metric space induced by $\norm{\,\cdot\,}_p$
From Compact Subspace of Metric Space is Sequentially Compact in Itself:

$\Z_p$ is sequentially compact in itself
By definition of sequentially compact in itself:

every sequence in $\Z_p$ has a subsequence which converges in the topology to a point in $\Z_p$
From Equivalence of Definitions of Convergence in Normed Division Rings:

every sequence in $\Z_p$ has a subsequence which converges in the norm to a point in $\Z_p$
$\blacksquare$





