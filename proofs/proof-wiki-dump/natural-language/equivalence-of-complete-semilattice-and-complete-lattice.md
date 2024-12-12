# 

Source: https://proofwiki.org/wiki/Equivalence_of_Complete_Semilattice_and_Complete_Lattice


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct {S, \preceq}$ be an ordered set.

The following statements are equivalent::

$(\text 1) \quad \struct {S, \preceq}$ is a complete join semilattice
$(\text 2) \quad \struct {S, \preceq}$ is a complete meet semilattice
$(\text 3) \quad \struct {S, \preceq}$ is a complete lattice


Proof
Statement $(\text 1)$ implies Statement $(\text 2)$
Let $\struct {S, \preceq}$ be a complete join semilattice.

Let $A \subseteq S$.
Let $T = \leftset{s \in S : s}$ is a lower bound for $\rightset{A}$

By definition of complete join semilattice:

$\sup T$ exists in $\struct {S, \preceq}$
Let $a = \sup T$.

We have:

$\forall s \in A : s$ is an upper bound for $T$
By definition of supremum:

$\forall s \in A: a \preceq s$
By definition of lower bound:

$a$ is a lower bound for $A$

Since $a$ is the supremum of all lower bounds of $A$:

$a = \inf A$

Since $A$ was arbitrary:

$\forall A \subseteq S : \inf A \in S$
Hence $\struct {S, \preceq}$ is a complete meet semilattice by definition.
$\Box$

Statement $(\text 2)$ implies Statement $(\text 3)$
We have:

Statement $(\text 2)$ implies Statement $(\text 1)$
is the dual statement of:

Statement $(\text 1)$ implies Statement $(\text 2)$
by Dual Pairs (Order Theory).

We have:

Statement $(\text 1)$ implies Statement $(\text 2)$
So: 

Statement $(\text 2)$ implies Statement $(\text 1)$
follows from the Duality Principle.

The result now follows directly from:

Definition:Complete Meet Semilattice
Definition:Complete Join Semilattice
Definition:Complete Lattice
$\Box$

Statement $(\text 3)$ implies Statement $(\text 1)$
The result follows immediately from:

Definition:Complete Lattice
Definition:Complete Join Semilattice
$\blacksquare$

Sources
1982: Peter T. Johnstone: Stone Spaces: Chapter $\text I$: Preliminaries, $\S4.3$ Proposition




