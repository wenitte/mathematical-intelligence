# 

Source: https://proofwiki.org/wiki/Generalized_Sum_with_Countable_Non-zero_Summands


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $V$ be a Banach space.
Let $\norm {\, \cdot \,}$ denote the norm on $V$.

Let $\family{v }_{i \in I}$ be an indexed family of elements of $V$.

Let $J$ be a countably infinite subset of $I$ such that $\set{i \in I : v_i \ne 0} \subseteq J$.
Let $\set{j_0, j_1, j_2, \ldots}$ be a countably infinite enumeration of $J$.

Let $r \in \R_{\mathop > 0}$.

Then:

the generalized sum $\ds \sum_{i \mathop \in I} v_i$ converges absolutely to $r$
if and only if:

the series $\ds \sum_{n \mathop = 1}^\infty v_{j_n}$ converges absolutely to $r$


Corollary
Let $\set{j_0, j_1, j_2, \ldots}$ and $\set{k_0, k_1, k_2, \ldots}$ be countably infinite enumerations of $J$ and $K$ respectively.

Let $r \in \R_{\mathop > 0}$.

Then:

the series $\ds \sum_{n \mathop = 1}^\infty v_{j_n}$ converges absolutely to $r$
if and only if:

the series $\ds \sum_{n \mathop = 1}^\infty v_{k_n}$ converges absolutely to $r$


Proof
From Corollary of Generalized Sum Restricted to Non-zero Summands:

the generalized sum $\ds \sum_{i \mathop \in I} v_i$ converges absolutely to $r$
if and only if

the generalized sum $\ds \sum_{j \mathop \in J} v_j$ converges absolutely to $r$

From Absolute Net Convergence Equivalent to Absolute Convergence: 

the generalized sum $\ds \sum_{j \mathop \in J} v_j$ converges absolutely to $r$
if and only if:

the series $\ds \sum_{n \mathop = 1}^\infty v_{j_n}$ converges absolutely to $r$
$\blacksquare$





