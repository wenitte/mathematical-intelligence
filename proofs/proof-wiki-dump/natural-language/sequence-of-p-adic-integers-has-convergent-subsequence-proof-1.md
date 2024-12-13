# 

Source: https://proofwiki.org/wiki/Sequence_of_P-adic_Integers_has_Convergent_Subsequence/Proof_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.
Let $\sequence{x_n}$ be a sequence of $p$-adic integers.

Then:

there exists a convergent subsequence $\sequence {x_{n_r} }_{r \mathop \in \N}$ of $\sequence{x_n}$


Proof
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


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.4$ The field of $p$-adic numbers $\Q_p$: Theorem $1.34$




