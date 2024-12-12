# 

Source: https://proofwiki.org/wiki/Characterization_of_Compact_Element_in_Complete_Lattice/Statement_1_implies_Statement_3


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $L = \struct{S, \preceq}$ be a complete lattice.
Let $a \in S$ be a compact element

Then:

$\forall A \subseteq S : a \preceq \sup A \implies \exists F \subseteq A : F$ is finite $: a \preceq \sup F$


Proof
Recall, $a$ is a compact element if and only if:

for every directed subset $D$ of $S$ such that $a \preceq \sup D$
$\exists d \in D: a \preceq d$

Let $A \subseteq S : a \preceq \sup A$.

Let $D = \leftset{b \in A : \exists F \subseteq A : F}$ is finite $\rightset{: b = \sup F}$

$D$ is a Directed Subset
We show that $D$ is a directed subset.

Let $x, y \in D$.
By definition of $D$:

$\exists F, G \subseteq A: F, G$ are finite $: x = \sup F, y = \sup G$

Let $H = F \cup G$.
From Union of Finite Sets is Finite:

$H$ is finite of $A$
Hence:

$z = \sup H \in D$.

Furthermore:

$z = \sup \set{x, y}$
By definition of supremum:

$x, y \preceq z$

Since $x,y$ were arbitrary, then $D$ is a directed subset by definition.
$\Box$

Supremum of $D$ Equals Supremum of $A$
We show that $\sup D = \sup A$.

Let $x \in D$.
By definition of $D$:

$\exists F \subseteq A: F$ is finite $: x = \sup F$
From Supremum of Subset:

$\sup F \preceq \sup A$

Since $x$ was arbitrary, it follows that:

$\sup A$ is an upper bound for $D$
By definition of supremum:

$\sup D \preceq \sup A$

Note that for all $b \in A$:

$b = \sup \set b \in D$
Hence:

$\sup D$ is an upper bound for $A$
By definition of supremum:

$\sup A \preceq \sup D$

From Ordering Axiom $(3)$: Antisymmetry:

$\sup A = \sup D$
$\Box$

By definition of compact element:

$\exists d \in D : a \preceq d$
By definition of $D$:

$\exists F \subseteq A : \sup F = d$
Hence:

$\exists F \subseteq A : F$ is finite $: a \preceq \sup F$

Since $A$ was arbitrary:

$\forall A \subseteq S : a \preceq \sup A \implies \exists F \subseteq A : F$ is finite $: a \preceq \sup F$
$\blacksquare$





