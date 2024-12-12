# 

Source: https://proofwiki.org/wiki/Generalized_Sum_Restricted_to_Non-zero_Summands/Sufficient_Condition


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $G$ be a commutative topological semigroup with identity $0_G$.

Let $\family{g }_{i \in I}$ be an indexed family of elements of $G$.

Let $J = \set{i \in I : g_i \ne 0_G}$
Let $h \in G$.

Let the generalized sum $\ds \sum_{j \mathop \in J} g_j$ converge to $h$.

Then:

the generalized sum $\ds \sum_{i \mathop \in I} g_i$ converges to $h$.
Proof
Let $U \subseteq G$ be an open subset of $G$ such that $h \in U$.
By definition of convergent net:

$(2) \quad \exists F' \subseteq J : F' \ne \O : \forall E' \subseteq J : E' \supseteq F' \implies \ds \sum_{j \mathop \in E'} g_j \in U$
where $\ds \sum_{j \mathop \in E'} g_j$ is the summation over $E$.
We have:

$F' \subseteq J \subseteq I$.

Let $E \subseteq I$:

$E \supseteq F'$

Let:

$E' = E \cap J$
From Set Intersection Preserves Subsets and Intersection with Subset is Subset:

$E' \supseteq F'$
From $(2)$:

$\ds \sum_{j \mathop \in E'} g_j \in U$

From Set Difference Union Intersection:

$E = E' \cup E \setminus J$
From Set Difference and Intersection are Disjoint:

$E' \cap E \setminus J = \O$
Case : $E \setminus J = \O$
Let:

$E \setminus J = \O$
From Union with Empty Set:

$E = E'$
Hence:

$\ds \sum_{i \mathop \in E} g_i \in U$
$\Box$

Case : $E \setminus J \ne \O$
Let:

$E \setminus J \ne \O$
We have:














\(\ds \sum_{i \mathop \in E} g_i\)

\(=\)







\(\ds \sum_{i \mathop \in E'} g_i + \sum_{i \mathop \in E \setminus J} g_i\)





Summation over Union of Disjoint Finite Index Sets














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in E'} g_i + \sum_{i \mathop \in E \setminus J} 0_G\)





definitions of $E$ and $J$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in E'} g_i\)





Definition of identity



Hence:

$\ds \sum_{i \mathop \in E} g_i \in U$
$\Box$

In either case:

$\ds \sum_{i \mathop \in E} g_i \in U$

Since $U$ was arbitrary, it follows that  $\ds \sum_{i \mathop \in I} g_i$ converges to $h$ by definition.
$\blacksquare$





