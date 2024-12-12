# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Bounded_Lattice


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
The following definitions of the concept of Bounded Lattice are equivalent:

Definition 1
Let $\struct {S, \preceq}$ be an ordered set.
Let $S$ admit all finite suprema and finite infima.
Let $\vee$ and $\wedge$ be the join and meet operations on $S$, respectively.

Then the ordered structure $\struct {S, \vee, \wedge, \preceq}$ is a bounded lattice.

Definition 2
Let $\struct {S, \vee, \wedge, \preceq}$ be a lattice.
Let $\vee$ and $\wedge$ have identity elements $\bot$ and $\top$ respectively.

Then $\struct {S, \vee, \wedge, \preceq}$ is a bounded lattice.

Definition 3
Let $\struct {S, \wedge, \vee, \preceq}$ be a lattice.
Let $S$ be bounded in $\struct {S, \preceq}$.

Then $\struct {S, \wedge, \vee, \preceq}$ is a bounded lattice.


Proof
Definition 1 if and only if Definition 2
From Supremum of Empty Set is Smallest Element, we have that:

$\bot := \sup \O$
satisfies $\bot \preceq a$ for all $a \in S$.

From Join Semilattice has Smallest Element iff has Identity:

$\bot$ is an identity element for $\vee$, and conversely.

That $\inf \O$ is an identity element for $\wedge$, and conversely, follows by the Duality Principle.
Hence the result. 
$\Box$


Definition 1 if and only if Definition 3
Let $x \in S$.

From Supremum of Empty Set is Smallest Element:

$x = \sup \O$ if and only if $x$ is the smallest element of $\struct{S, \preceq}$

From Ordered Set has Lower Bound iff has Smallest Element:

$x$ is the smallest element of $\struct{S, \preceq}$ if and only if $x$ is a lower bound of $S$ in $\struct{S, \preceq}$

That $\inf \O$ is an upper bound for $S$, and conversely, follows by the Duality Principle.

Hence the result. 
$\blacksquare$


Also see
Definition:Bounded Lattice




