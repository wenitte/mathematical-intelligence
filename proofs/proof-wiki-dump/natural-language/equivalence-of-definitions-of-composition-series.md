# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Composition_Series



Theorem
The following definitions of the concept of Composition Series are equivalent:

Definition $1$
A composition series for $G$ is a normal series for $G$ which has no proper refinement.

Definition $2$
A composition series for $G$ is a sequence of normal subgroups of $G$:

$\set e = G_0 \lhd G_1 \lhd \cdots \lhd G_n = G$
where:

$G_{i - 1} \lhd G_i$ denotes that $G_{i - 1}$ is a proper normal subgroup of $G_i$
such that:

for all $i \in \set {1, 2, \ldots, n}$, $G_{i - 1}$ is a proper maximal normal subgroup of $G_i$.


Proof
Definition $(1)$ implies Definition $(2)$
Let $\GG$ be a composition series by definition $1$:
Thus a fortiori $\GG$ is a normal series for $G$:

$\GG = \sequence {G_k}_{0 \mathop \le k \mathop \le n}$
such that:

$\set e = G_0 \lhd G_1 \lhd \cdots \lhd G_n = G$
where $A \lhd B$ denotes that $A$ is a proper normal subgroup of $B$.
By definition, $\GG$ is a normal series for $G$ which has no proper refinement.

Aiming for a contradiction, suppose that there exists some $i \in \set {0, 1, \ldots, n}$ such that $G_{i - 1}$ is not a proper maximal normal subgroup of $G_i$.
Then there exists $H \subseteq G$ such that:

$G_{i - 1} \lhd H \lhd G_i$
Hence:

$\set e = G_0 \lhd G_1 \lhd \cdots \lhd G_{i - 1} \lhd H \lhd G_i \lhd \cdots \lhd G_n = G$
But this is by definition a proper refinement of $\GG$.
This contradicts our assertion that $\GG$ has no proper refinement.
Hence it must be the case that no such $i$ exists.

It follows that $\GG$ is a sequence of normal subgroups of $G$ such that:

for all $i \in \set {1, 2, \ldots, n}$, $G_{i - 1}$ is a proper maximal normal subgroup of $G_i$.
Thus $\GG$ is a composition series by definition $2$.
$\Box$


Definition $(2)$ implies Definition $(1)$
Let $\GG$ be a composition series by definition $2$.
Then, by definition, $\GG$ is a sequence of normal subgroups of $G$ such that:

for all $i \in \set {1, 2, \ldots, n}$, $G_{i - 1}$ is a proper maximal normal subgroup of $G_i$.

Aiming for a contradiction, suppose $\GG$ has a proper refinement.
Then there exists some $i \in \set {0, 1, \ldots, n}$ such that $H \subseteq G: G_{i - 1} \subseteq H \subseteq G_i$ such that $G_{i - 1} \lhd H \lhd G_i$.
Hence $G_{i - 1}$ is not a maximal normal subgroup of $G_i$.
This contradicts our assertion that $G_{i - 1}$ is a proper maximal normal subgroup of $G_i$.
Hence it must be the case that no such $i$ exists.

It follows that $\GG$ has no proper refinement.
Thus $\GG$ is a composition series by definition $1$.
$\blacksquare$





