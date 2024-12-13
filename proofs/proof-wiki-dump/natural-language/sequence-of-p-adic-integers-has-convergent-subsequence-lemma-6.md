# 

Source: https://proofwiki.org/wiki/Sequence_of_P-adic_Integers_has_Convergent_Subsequence/Lemma_6


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.
Let $\sequence{x_n}$ be a sequence of $p$-adic integers.
Let $\sequence{b_0, b_1, \ldots, b_j}$ be a finite sequence of $p$-adic digits, possibly empty, such that:

there exists infinitely many $n \in \N$ such that the canonical expansion of $x_n$ begins with the $p$-adic digits $b_j \, \ldots \, b_1 b_0$

Then there exists a subsequence $\sequence{y_n}$ of $\sequence{x_n}$:

for all $n \in \N$, the canonical expansion of $y_n$ begins with the $p$-adic digits $b_j \, \ldots \, b_1 b_0$


Proof
For any non-empty subset $S$ of $\N$, let $\min S$ denote the smallest element of $S$.
From the Well-Ordering Principle, for any non-empty subset $S$ of $\N$, $\min S$ always exists.

Let $g:\N \to \N$ be the mapping defined by:

$\map g n = \min \set{n > j : \text{ the canonical expansion of } x_n \text{ begins with the } p \text{-adic digits } b_j \, \ldots \, b_1 b_0}$
Let:

$n_0 = \min \set{n \in \N : \text{ the canonical expansion of } x_n \text{ begins with the } p \text{-adic digits } b_j \, \ldots \, b_1 b_0}$
From Well-Ordering Principle:

$g$ and $n_0$ are well-defined

From Principle of Recursive Definition:

there exists exactly one mapping $r: \N \to \N$ such that:
$\forall m \in \N: \map r m = \begin{cases}
a & : m = 0 \\
\map g {\map r n} & : m = n + 1
\end{cases}$

It is noted that:











\(\ds \forall n \in \N: \, \)



\(\ds \map r {n + 1}\)

\(=\)







\(\ds \map g {\map r n }\)





definition of $r$














\(\ds \)

\(>\)







\(\ds \map r n\)





definition of $g$



Hence $r$ is a strictly increasing sequence in $\N$.

For all $n \in \N$, let $m_n = \map r n$.
Then $\sequence{x_{m_n}}$ is a subsequence of $\sequence{x_n}$ by definition.
Let $\sequence{y_n} = \sequence{x_{m_n}}$ and the result follows
$\blacksquare$





