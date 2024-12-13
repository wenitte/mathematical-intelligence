# 

Source: https://proofwiki.org/wiki/Order_Topology_on_Convex_Subset_is_Subspace_Topology

Theorem
Let $\struct {S, \preceq,\tau}$ be a linearly ordered space.
Let $A \subseteq S$ be a convex set in $S$.
Let $\upsilon$ be the order topology on $A$.
Let $\tau'$ be the $\tau$-relative subspace topology on $A$.

Then $\upsilon = \tau'$.


Proof

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Reword so as to be less wordy. Add pictures so as to be easier to visualize.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
By the definition of the order topology, the sets of open rays in $\struct {S, \preceq}$ and $\struct {A, \preceq}$ form sub-bases for $\tau$ and $\upsilon$, respectively.
By Sub-Basis for Topological Subspace, we need only show that the set of open rays in $\struct {S, \preceq}$ induces a subbase for $\upsilon$.
Specifically, we will show that each open ray in $A$ is the intersection of $A$ with an open ray in $S$, and we will show that the intersection of any open ray in $S$ with $A$ is either an open ray in $A$, the empty set, or $A$.
By Dual Pairs (Order Theory), strict upper closure is dual to strict lower closure, so by the duality principle we need show this only for the upward-pointing rays.
For each $p \in S$, let $p^{\succ S}$ be the strict upper closure of $p$ in $S$.
For each $p \in A$, let $p^{\succ A}$ be the strict upper closure of $p$ in $A$.
Let $p \in A$.
Then by Strict Upper Closure in Restricted Ordering:

$p^{\succ A} = A \cap p^{\succ S}$

Let $q \in S$.
If $q \in A$, then $A \cap q^{\succ S} = q^{\succ A}$, so $A \cap q^{\succ S}$ is an open ray in $A$.
Suppose instead that $q \notin A$.
If $A \cap q^{\succ S} = \O$, the proof is complete.

Otherwise, $A \cap q^{\succ S}$ must have some element $x$.
Aiming for a contradiction, suppose there is a $y \in A \setminus \paren {A \cap q^{\succ S} } = A \cap q^{\preceq S}$.
Then since $q \notin A$, it follows that $y \prec q$.
Thus $y \prec q \prec x$, $y, x \in A$, and $q \notin A$, contradicting the fact that $A$ is convex.

Thus $A \cap q^{\succ S} = A$.
$\blacksquare$





