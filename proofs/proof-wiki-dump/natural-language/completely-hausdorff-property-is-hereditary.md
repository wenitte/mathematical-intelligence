# 

Source: https://proofwiki.org/wiki/Completely_Hausdorff_Property_is_Hereditary

Theorem
Let $T = \struct {S, \tau}$ be a topological space which is a $T_{2 \frac 1 2}$ (completely Hausdorff) space.
Let $T_H = \struct {H, \tau_H}$, where $\O \subset H \subseteq S$, be a subspace of $T$.

Then $T_H$ is a $T_{2 \frac 1 2}$ (completely Hausdorff) space.


Proof
Let $T = \struct {S, \tau}$ be a $T_{2 \frac 1 2}$ (completely Hausdorff) space.
Then:

$\forall x, y \in S, x \ne y: \exists U, V \in \tau: x \in U, y \in V: U^- \cap V^- = \O$
That is, for any two distinct elements $x, y \in S$ there exist open sets $U, V \in \tau$ containing $x$ and $y$ respectively whose closures are disjoint.

We have that the set $\tau_H$ is defined as:

$\tau_H := \set {U \cap H: U \in \tau}$

Let $x, y \in H$ such that $x \ne y$.
Then as $x, y \in S$ we have that:

$\exists U, V \in \tau: x \in U, y \in V, U^- \cap V^- = \O$
As $x, y \in H$ we have that:

$x \in U \cap H, y \in V \cap H: \paren {U^- \cap H} \cap \paren {V^- \cap H} = \O$
From corollary $1$ to Closure of Subset in Subspace we have that:

$\paren {U \cap H}^- \subseteq U^- \cap H$
$\paren {V \cap H}^- \subseteq V^- \cap H$
where $\paren {U \cap H}^-$ and $\paren {V \cap H}^-$ are the closures in $H$ of the respective sets.

So:

$x \in U \cap H, y \in V \cap H: \paren {U \cap H}^- \cap \paren {V \cap H}^- = \O$
and so the $T_{2 \frac 1 2}$ (completely Hausdorff) axiom is satisfied in $H$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms: Functions, Products, and Subspaces




