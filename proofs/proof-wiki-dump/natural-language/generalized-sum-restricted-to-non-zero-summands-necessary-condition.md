# 

Source: https://proofwiki.org/wiki/Generalized_Sum_Restricted_to_Non-zero_Summands/Necessary_Condition


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $G$ be a commutative topological semigroup with identity $0_G$.

Let $\family{g }_{i \in I}$ be an indexed family of elements of $G$.

Let $J = \set{i \in I : g_i \ne 0_G}$
Let $h \in G$.

Let the generalized sum $\ds \sum_{i \mathop \in I} g_i$ converge to $h$.

Then:

the generalized sum $\ds \sum_{j \mathop \in J} g_j$ converges to $h$


Proof
Let $U \subseteq G$ be an open subset of $G$ such that $h \in U$.
By definition of convergent net:

$(1) \quad \exists F \subseteq I : F \ne \O : \forall E \subseteq I : E \supseteq F \implies \ds \sum_{i \mathop \in E} g_i \in U$
where $\ds \sum_{i \mathop \in E} g_i$ is the summation over $E$.

Let:

$F'= F \cap J$
From Set Difference and Intersection form Partition:

$F = F' \cup F \setminus J$

Let $E' \subseteq J$:

$E' \supseteq F'$
We have:

$E' \cap F \setminus J = \O$

Let:

$E = E' \cup F \setminus J$
From Set Union Preserves Subsets:

$E \supseteq F$
From $(1)$:

$\ds \sum_{i \mathop \in E} g_i \in U$


Case : $F \setminus J = \O$
Let:

$F \setminus J = \O$
From Union with Empty Set:

$E = E'$
Hence:

$\ds \sum_{i \mathop \in E'} g_i \in U$
$\Box$

Case : $F \setminus J \ne \O$
Let:

$F \setminus J \ne \O$
We have:














\(\ds \sum_{i \mathop \in E} g_i\)

\(=\)







\(\ds \sum_{i \mathop \in E'} g_i + \sum_{i \mathop \in F \setminus J} g_i\)





Summation over Union of Disjoint Finite Index Sets














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in E'} g_i + \sum_{i \mathop \in F \setminus J} 0_G\)





definitions of $F$ and $J$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in E'} g_i\)





Definition of identity



Hence:

$\ds \sum_{i \mathop \in E'} g_i \in U$
$\Box$

In either case:

$\ds \sum_{i \mathop \in E'} g_i \in U$

Since $U$ was arbitrary, it follows that  $\ds \sum_{j \mathop \in J} g_j$ converges to $h$ by definition.
$\blacksquare$





