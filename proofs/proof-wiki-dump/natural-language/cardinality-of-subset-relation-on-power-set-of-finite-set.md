# 

Source: https://proofwiki.org/wiki/Cardinality_of_Subset_Relation_on_Power_Set_of_Finite_Set

Theorem
Let $S$ be a set such that:

$\card S = n$
where $\card S$ denotes the cardinality of $S$.
From Subset Relation on Power Set is Partial Ordering we have that $\struct {\powerset S, \subseteq}$ is an ordered set.

The cardinality of $\subseteq$ as a relation is $3^n$.


Proof
Let $X \in \powerset S$.
Since $X \subseteq S$, it follows that:

$X' \subseteq X \implies X' \in \powerset S$
because the Subset Relation is Transitive.

From Cardinality of Power Set of Finite Set, it follows that for any $X \in \powerset S$:

$\set {X' \in \powerset S: X' \subseteq X}$
has $2^{\card X}$ elements.

Therefore, the cardinality of $\subseteq$ is given by:

$\ds \sum_{X \mathop \subseteq S} 2^{\card X}$
Let us split the sum over $\card X$:

$\ds \sum_{X \mathop \subseteq S} 2^{\card X} = \sum_{k \mathop = 0}^n \sum_{\substack {X \mathop \subseteq S \\ \card X \mathop = n}} 2^{\card X}$
It now follows from Cardinality of Set of Subsets that:

$\ds \card \subseteq = \sum_{k \mathop = 0}^n \binom n k 2^k$

From the Binomial Theorem:

$\ds \sum_{k \mathop = 0}^n \binom n k 2^k = \paren {1 + 2}^n$
Hence:

$\card \subseteq = 3^n$
$\blacksquare$


Sources
1963: George F. Simmons: Introduction to Topology and Modern Analysis ... (previous): $\S 1$: Sets and Set Inclusion




