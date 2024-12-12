# 

Source: https://proofwiki.org/wiki/Generalized_Sum_over_Union_of_Disjoint_Index_Sets


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct {G, +}$ be a commutative topological semigroup.
Let $I$ and $J$ be disjoint indexing sets.

Let $K = I \cup J$.
Let $\family{g_k}_{k \mathop \in K}$ be an indexed family of elements of $G$.
Let the generalized sums $\ds \paren{\sum_{i \mathop \in I} g_i}$ and $\ds \paren{\sum_{j \mathop \in J} g_j}$ converge.
Then:

the generalized sum $\ds \sum_{k \mathop \in K} g_k$ converges
and:

$\ds \sum_{k \mathop \in K} g_k = \paren{\sum_{i \mathop \in I} g_i} + \paren{\sum_{j \mathop \in J} g_j}$


Proof
Let $0_G$ be the identity of the semigroup $\struct {G, +}$.

Let $\family{f_k}_{k \mathop \in K}$ be an indexed family of elements of $G$ defined by:

$\forall k \in K : f_k = \begin{cases}
g_k & : k \in I \\
0_G & : k \in J 
\end{cases}$

Let $\family{h_k}_{k \mathop \in K}$ be an indexed family of elements of $G$ defined by:

$\forall k \in K : h_k = \begin{cases}
0_G & : k \in I \\
g_k & : k \in J 
\end{cases}$

From Generalized Sum Restricted to Non-zero Summands:

$\ds \sum_{k \mathop \in K} f_k = \sum_{i \mathop \in I} g_i$
and:

$\ds \sum_{k \mathop \in K} h_k = \sum_{j \mathop \in J} g_j$

From Sum Rule for Convergent Generalized Sums:

$\ds \sum_{k \mathop \in K} \paren{f_k + h_k} = \sum_{k \mathop \in K} f_k + \sum_{k \mathop \in K} h_k = \sum_{i \mathop \in I} g_i + \sum_{j \mathop \in J} g_j$

We have:










\(\ds \forall k \in K: \, \)



\(\ds f_k + h_k\)

\(=\)







\(\ds \begin{cases}
g_k + 0_G & : k \in I \\
0_G + g_k & : k \in J 
\end{cases}\)






definition of $f$ and $h$














\(\ds \)

\(=\)







\(\ds \begin{cases}
g_k & : k \in I \\
g_k & : k \in J 
\end{cases}\)






Definition of Identity Element














\(\ds \)

\(=\)







\(\ds g_k\)










Hence:

$\ds \sum_{k \mathop \in K} g_k = \paren{\sum_{i \mathop \in I} g_i} + \paren{\sum_{j \mathop \in J} g_j}$
$\blacksquare$





