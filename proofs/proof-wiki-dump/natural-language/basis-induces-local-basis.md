# 

Source: https://proofwiki.org/wiki/Basis_induces_Local_Basis

Theorem
Let $\struct {S, \tau}$ be a topological space.
Let $\BB$ be an analytic basis for $\tau$.
Let $x \in S$, and denote with $\BB_x$ the set $\set {B \in \BB: x \in B}$.

Then $\BB_x$ is a local basis at $x$.


Proof
Let $x \in U$, with $U$ an open set of $\tau$.
Since $\BB$ is an analytic basis for $\tau$, we have:

$U = \ds\bigcup \AA$
for some $\AA \subseteq \BB$.
Since $x \in \ds \bigcup \AA$, there is a $B \in \AA$ such that $x \in B$, by definition of set union.
Hence, by definition of $\BB_x$, $B \in \BB_x$.
From Set is Subset of Union: General Result, we also have:

$B \subseteq U$

Hence $\BB_x$ is a local basis at $x$.
$\blacksquare$


Also see
Union of Local Bases is Basis




