# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Equivalence_Relation



Theorem
Let $\RR$ be a relation on a set $S$.

The following definitions of the concept of Equivalence Relation are equivalent:

Definition 1
Let $\RR$ be:

$(1): \quad$ reflexive
$(2): \quad$ symmetric
$(3): \quad$ transitive
Then $\RR$ is an equivalence relation on $S$.

Definition 2
$\RR$ is an equivalence relation if and only if:

$\Delta_S \cup \RR^{-1} \cup \RR \circ \RR \subseteq \RR$
where:

$\Delta_S$ denotes the diagonal relation on $S$
$\RR^{-1}$ denotes the inverse relation
$\circ$ denotes composition of relations


Proof
Definition 1 implies Definition 2
Let $\RR$ be an equivalence relation by definition 1.
By definition, $\RR$ is reflexive, symmetric and transitive.

From Relation Contains Diagonal Relation iff Reflexive:

$\Delta_S \subseteq \RR$

From Relation equals Inverse iff Symmetric:

$\RR^{-1} = \RR$
and so by definition of set equality:

$\RR^{-1} \subseteq \RR$

From Relation contains Composite with Self iff Transitive:

$\RR \circ \RR \subseteq \RR$

From Union is Smallest Superset:

$\Delta_S \cup \RR^{-1} \cup \RR \circ \RR \subseteq \RR$
Thus $\RR$ is an equivalence relation by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $\RR$ be an equivalence relation by definition 2.
That is:

$\Delta_S \cup \RR^{-1} \cup \RR \circ \RR \subseteq \RR$
By Union is Smallest Superset:

$(1): \quad \Delta_S \subseteq \RR$
$(2): \quad \RR^{-1} \subseteq \RR$
$(3): \quad \RR \circ \RR \subseteq \RR$

From Relation Contains Diagonal Relation iff Reflexive, $(1)$ gives directly that $\RR$ is reflexive.

From Inverse Relation Equal iff Subset, $(2)$ gives that $\RR^{-1} = \RR$.
So from Relation equals Inverse iff Symmetric $\RR$ is symmetric.

From Relation contains Composite with Self iff Transitive, $(3)$ gives that $\RR$ is transitive.

So $\RR$ has been shown to be reflexive, symmetric and transitive.
Thus $\RR$ is an equivalence relation by definition 1.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Problem $\text{AA}$: Relations




