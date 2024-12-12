# 

Source: https://proofwiki.org/wiki/Finite_Generalized_Sum_Converges_to_Summation


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $G$ be a commutative topological semigroup with identity $0_G$.

Let $\set{i_0, i_1, \ldots, i_n}$ be a finite enumeration of a finite set $I$. 

Let $\family{g_i}_{i \in I}$ be an indexed family of elements of $G$.

Then:

the generalized sum $\ds \sum_{i \mathop \in I} g_i$
converges to:

the summation over finite index $\ds \sum_{i \mathop \in I} g_i$
Proof
Let $\FF$ be the set of finite subsets of $I$.

Let $h = \ds \sum_{i \mathop \in I} g_i$ be the summation over finite index $I$.
Let $U$ be an open subset of $G$ such that $h \in U$.

From Set is Subset of Itself:

$I \in \FF$
Let: 

$J \in \FF : I \subseteq J$

Let $h'= \ds \sum_{j \mathop \in J} g_j$ be the summation over finite index $J$.

By definition of $\FF$:

$J \subseteq I$
By definition of set equality:

$I = J$
Hence:

$h'= h \in U$

Since $U$ was arbitrary, by definition of convergance:

the generalized sum $\ds \sum_{i \mathop \in I} g_i$
converges to:

the summation over finite index $\ds \sum_{i \mathop \in I} g_i$
$\blacksquare$





