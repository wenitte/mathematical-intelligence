# 

Source: https://proofwiki.org/wiki/Sequence_of_P-adic_Integers_has_Convergent_Subsequence/Lemma_4


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.
Let $\sequence{x_n}$ be a sequence of $p$-adic integers.
Let $\sequence{b_n}$ be  a sequence of $p$-adic digits such that:

for all $j \in \N$, there exists infinitely many $n \in \N$ such that the canonical expansion of $x_n$ begins with the $p$-adic digits $b_j \, \ldots \, b_1 b_0$

Then:

there exists a subsequence $\sequence{x_{n_j}}_{j \mathop \in \N}$ of $\sequence{x_n}$:
for all $j \in \N$, the canonical expansion of $x_{n_j}$ begins with the $p$-adic digits $b_j \, \ldots \, b_1 b_0$


Proof
The proof proceeds using the principle of recursive definition.
For any non-empty subset $S$ of $\N$, let $\min S$ denote the smallest element of $S$.
From the Well-Ordering Principle, for any non-empty subset $S$ of $\N$, $\min S$ always exists.

Let $T = \N \times \N$.

Let $n_0 = \min \set{n \in \N : \text{ the canonical expansion  of } x_n \text{ begins with the } p \text{-adic digits } b_0}$
By hypothesis and Well-Ordering Principle:

$n_0$ exists
By definition of smallest element:

the canonical expansion of $x_{n_0}$ begins with the $p$-adic digit $b_0$
Let $a = \tuple{0, n_0} \in T$.

Let $h: T \to \N$ be the mapping defined by:

$\map h {j, k} = \min \set{n > k : \text{ the canonical expansion  of } x_n \text{ begins with the } p \text{-adic digits } b_{j+1}, b_j, \ldots, b_0}$
By hypothesis and Well-Ordering Principle:

$h$ is well-defined
By definition of smallest element:

the canonical expansion of $x_{\map h {j, k} }$ begins with the $p$-adic digit $b_{j+1} b_j \ldots b_1 b_0$

Let $g: T \to T$  be the mapping defined by:

$\map g {j, k} = \tuple {j+1, \map h {j, k} }$
From principle of recursive definition:

there exists exactly one mapping $f: \N \to T$ such that:
$\forall j \in \N: \map f j = \begin{cases}
a & : j = 0 \\
\map g {\map f n} & : j = n + 1
\end{cases}$
That is:

there exists exactly one mapping $f: \N \to T$ such that:
$\forall j \in \N: \map f j = \begin{cases}
\tuple{0, n_0} & : j = 0 \\
\tuple {j, \map h {n, \map  f n} } & : j = n + 1
\end{cases}$

$\blacksquare$





