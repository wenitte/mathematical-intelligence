# 

Source: https://proofwiki.org/wiki/Sequence_of_P-adic_Integers_has_Convergent_Subsequence/Lemma_3


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.
Let $\sequence{x_n}$ be a sequence of $p$-adic integers.

Then:

there exists a sequence $\sequence{b_n}$ of $p$-adic digits:
for all $j \in \N$, there exists infinitely many $n \in \N$ such that the canonical expansion of $x_n$ begins with the $p$-adic digits $b_j \, \ldots \, b_1 b_0$


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

The proof proceeds using the second principle of recursive definition.

Let $T$ be the set of $p$-adic digits.

From lemma 1 , there exists $b_0 \in {0, 1, \ldots , p-1}$ such that:

there exists infinitely many $n \in \N$ such that the canonical expansion of $x_n$ begins with the $p$-adic digits $b_0$

For each $j \in \N$, let $\map {P_j} {\sequence{b_0, b_1, \ldots, b_j} }$ be the propositional function:

there exists infinitely many $n \in \N$ such that the canonical expansion of $x_n$ begins with the $p$-adic digits $b_j \, \ldots \, b_1 b_0$

For any non-empty subset $S$ of $\N$, let $\min S$ denote the smallest element of $S$.
From the Well-Ordering Principle, for any non-empty subset $S$ of $\N$, $\min S$ always exists.

For each $j \in \N$, let $g_j : T^{j+1} \to T$ be defined by:

$\map {g_j} {\sequence{b_0, b_1, \ldots, b_j} } = \begin{cases}
\min \set{b \in T: \map {P_{j+1}} {\sequence{b_0, b_1, \ldots, b_j, b} } } & : \map {P_j} {\sequence{b_0, b_1, \ldots, b_j} } \\
0 & : \lnot \map {P_j} {\sequence{b_0, b_1, \ldots, b_j} } 
\end{cases}$
From lemma 2, for each $j \in \N$:

$g_j$ is well-defined
By definition of $g_j$:

$\mathop \forall j \in \N: \map {P_j} {\sequence{b_0, b_1, \ldots, b_j} } \text{ is true } \implies \map {P_{j+1}} {\sequence{b_0, b_1, \ldots, b_j, \map {g_j} {\sequence{b_0, b_1, \ldots, b_j} } } } \text{ is true }$

From second principle of recursive definition:

there exists exactly one mapping $b: \N \to T$ such that:
$\forall j \in \N: b_j = \begin{cases}
\sequence{ b_0 } & : j = 0 \\
\map {g_j} {\sequence{b_0, \ldots, b_n} } & : j = n + 1
\end{cases}$

We have:

$(1) \quad \map {P_0} {\sequence{b_0} }$ is true
$(2) \quad \mathop \forall j \in \N: \map {P_j} {\sequence{b_0, b_1, \ldots, b_j} } \text{ is true } \implies \map {P_{j+1}} {\sequence{b_0, b_1, \ldots, b_j, b_{j+1} } } \text{ is true }$
From Principle of Mathematical Induction:

$\forall j \in \N: \map {P_j} {\sequence{b_0, b_1, \ldots, b_j} } \text{ is true }$

Hence:

there exists a sequence $\sequence{b_n}$ of $p$-adic digits:
for all $j \in \N$, there exists infinitely many $n \in \N$ such that the canonical expansion of $x_n$ begins with the $p$-adic digits $b_j \, \ldots \, b_1 b_0$
$\blacksquare$





