# 

Source: https://proofwiki.org/wiki/Characterization_of_Compact_Element_in_Complete_Lattice


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $L = \struct{S, \preceq}$ be a complete lattice.
Let $a \in S$.

The following statements are equivalent::

$(1)\quad a$ is a compact element
$(2)\quad \forall I \subseteq S : I$ is an ideal $: a \preceq \sup I \implies a \in I$
$(3)\quad \forall A \subseteq S : a \preceq \sup A \implies \exists F \subseteq A : F$ is finite $: a \preceq \sup F$


Proof
Recall, $a$ is a compact element if and only if:

for every directed subset $D$ of $S$ such that $a \preceq \sup D$
$\exists d \in D: a \preceq d$
Statement (1) implies Statement (3)
Let $a$ be a compact element.

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
$\Box$

Statement (3) implies Statement (2)
Let $a$ satisfy:

$\forall A \subseteq S : a \preceq \sup A \implies \exists F \subseteq A : F$ is finite $: a \preceq \sup F$

Let:

$I \subseteq S : I$ is an ideal $: a \preceq \sup I$
We have by hypothesis:

$\exists F \subseteq I : F$ is finite $: a \preceq \sup F$
By Join Semilattice Ideal Axiom $\paren{\text {JSI} 2 }$: Subsemilattice of Join Semilattice:

$\sup F \in I$
By Join Semilattice Ideal Axiom $\paren{\text {JSI} 1 }$: Lower Section of Join Semilattice:

$a \in I$

Since $I$ was arbitrary:

$\forall I \subseteq S : I$ is an ideal $: a \preceq \sup I \implies a \in I$
$\Box$

Statement (2) implies Statement (1)
Let $a$ satisfy:

$\forall I \subseteq S : I$ is an ideal $: a \preceq \sup I \implies a \in I$

Let $D$ be a directed subset of $S$:

$a \preceq \sup D$
Let $I = {b \in S : \exists d \in D : b \preceq d}$.

$I$ is an Ideal of $S$
We will show that $I$ satisfies the join semilattice ideal axioms.

$I$ is a Lower Section
Let $x \in I$.
Let $y \preceq x$.

By definition of $I$:

$\exists d \in D : x \preceq d$
By Ordering Axiom $(2)$: Transitivity:

$y \preceq d$
Hence:

$y \in I$
It follows that $I$ is a lower section of $S$.
$\Box$

$I$ is a Join Subsemilattice
Let $x, y \in I$.
By definition of $I$:

$\exists d_1, d_2 \in D : x \preceq d, y \preceq e$
By definition of a directed subset:

$\exists d \in D : d_1, d_2 \preceq d$
By Ordering Axiom $(2)$: Transitivity:

$x, y \preceq d$
By definition of join:

$x \vee y \preceq d$
Hence:

$x \vee y \in I$
$\Box$

This proves $I$ satisfies the join semilattice ideal axioms.
It follows that $I$ is an ideal by definition.
$\Box$


Supremum of $I$ Equals Supremum of $D$
We show that $\sup I = \sup D$.

Let $x \in I$.
By definition of $I$:

$\exists d \in D: x \preceq d$
By definition of supremum:

$x \preceq \sup D$

Since $x$ was arbitrary, it follows that:

$\sup D$ is an upper bound for $I$
By definition of supremum:

$\sup I \preceq \sup D$

Note that for all $d \in D$:

$d \in I$
Hence:

$\sup I$ is an upper bound for $D$
By definition of supremum:

$\sup D \preceq \sup I$

From Ordering Axiom $(3)$: Antisymmetry:

$\sup I = \sup D$
$\Box$

We have by hypothesis:

$a \in I$
By definition of $I$:

$\exists d \in D : a \preceq d$

Since $D$ was arbitrary:

for every directed subset $D$ of $S$ such that $a \preceq \sup D$
$\exists d \in D: a \preceq d$
Hence $a$ is a compact element by definition.
$\blacksquare$

Sources
1982: Peter T. Johnstone: Stone Spaces: Chapter $\text {II}$: Introduction to Locales, $\S3.1$ Lemma




