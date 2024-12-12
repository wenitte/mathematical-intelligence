# 

Source: https://proofwiki.org/wiki/Characterization_of_T3_Space


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct{S, \tau}$ be a topological space. 

The following statements are equivalent:

$(1) \quad T$ is a $T_3$ space
$(2) \quad \forall F \subseteq S : S \setminus F \in \tau, y \in S \setminus F : \exists V \in \tau : y \in V, V^- \cap F = \O$
$(3) \quad \forall U \in \tau, y \in U : \exists V \in \tau : y \in V, V^- \subseteq U$
where $V^-$ denotes the closure of $V$ in $T$

Proof
Statement $(1)$ implies Statement $(2)$
Let $T$ be a $T_3$ space.

Let $F \subseteq S : S \setminus F \in \tau$.
Let $y \in S \setminus F$.

By definition of $T_3$ space:

$\exists V, W \in \tau : y \in V, F \subseteq W : V \cap W = \O$
From Subset of Set Difference iff Disjoint Set:

$V \subseteq S \setminus W$
By definition of closed set:

$S \setminus W$ is closed in $T$
From Closure of Subset of Closed Set of Topological Space is Subset:

$V^- \subseteq S \setminus W$
From Set Difference with Subset is Superset of Set Difference:

$S \setminus W \subseteq S \setminus F$
From Subset Relation is Transitive:

$V^- \subseteq S \setminus F$
From Subset of Set Difference iff Disjoint Set:

$V^- \cap F = \O$

The result follows.
$\Box$

Statement $(2)$ implies Statement $(3)$
Let $T$ satisfy:

$\forall F \subseteq S : S \setminus F \in \tau, y \in S \setminus F : \exists V \in \tau : y \in V, V^- \cap F = \O$

Let $U \in \tau$.
Let $y \in U$.
Let $F = S \setminus U$.

From Set Difference with Set Difference:

$S \setminus F = U$
Hence:

$S \setminus F \in \tau$
and

$y \in S \setminus F$

From $(2)$:

$\exists V \in \tau : y \in V, V^- \cap F = \O$
Hence:

$V^- \cap S \setminus U = \O$
From Subset of Set Difference iff Disjoint Set:

$V^- \subseteq U$

Since $U$ and $y$ were arbitrary, we have shown:

$\forall U \in \tau, y \in U : \exists V \in \tau : y \in V, V^- \subseteq U$
$\Box$

Statement $(3)$ implies Statement $(1)$
Let $T$ satisfy:

$\forall U \in S, y \in U : \exists V \in \tau : y \in V, V^- \subseteq U$

Let $U \in \tau$.
Let $y \in U$.

From $(3)$:

$\exists V \in \tau : y \in V, V^- \subseteq U$

Let $N = V^-$.
By definition of closure:

$V \subseteq N$
From Topological Closure is Closed:

$S \ N \in \tau$
Hence:

$\exists N \subseteq S : S \setminus N \in \tau : \exists V \in \tau : y \in V \subseteq N \subseteq U$

Since $U$ and $y$ were arbitrary, we have shown:

$\forall U \in \tau, y \in U : \exists N \subseteq S : S \setminus N \in \tau : \exists V \in \tau : y \in V \subseteq N \subseteq U$
By definition, $T$ is a $T_3$ space
$\blacksquare$





