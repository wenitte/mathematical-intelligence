# 

Source: https://proofwiki.org/wiki/Ordering_Induced_by_Join_Semilattice

Theorem
Let $\struct {S, \vee, \preceq}$ be a join semilattice.

By Join Semilattice is Semilattice, $\struct {S, \vee}$ is a semilattice.
By Semilattice Induces Ordering, $\struct {S, \vee}$ induces an ordering $\preceq'$ on $S$, by:

$a \preceq' b$ if and only if $a \vee b = b$
for all $a, b \in S$.

The ordering $\preceq'$ coincides with the original ordering $\preceq$.


Proof
It is to be shown that, for all $a, b \in S$:

$a \preceq b$ if and only if $b = \sup \set {a, b}$
by definition of join.
Here $\sup$ denotes supremum.

Since any upper bound $c$ of $\set {a, b}$ must satisfy:

$b \preceq c$
it suffices to verify that:

$a \preceq b$ if and only if $b$ is an upper bound for $\set {a, b}$

Since $\preceq$ is reflexive, we know that:

$b \preceq b$
and therefore said equivalence is established.

We conclude that $\preceq'$ and $\preceq$ coincide.
$\blacksquare$


This article is complete as far as it goes, but it could do with expansion.In particular: We need to start using a construct for duality. (Global) Dual is Ordering Induced by Meet SemilatticeYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




