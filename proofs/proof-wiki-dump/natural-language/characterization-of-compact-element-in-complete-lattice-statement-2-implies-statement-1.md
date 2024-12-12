# 

Source: https://proofwiki.org/wiki/Characterization_of_Compact_Element_in_Complete_Lattice/Statement_2_implies_Statement_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $L = \struct{S, \preceq}$ be a complete lattice.
Let $a \in S$ satisfy:

$\forall I \subseteq S : I$ is an ideal $: a \preceq \sup I \implies a \in I$

Then:

$a$ is a compact element


Proof
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





