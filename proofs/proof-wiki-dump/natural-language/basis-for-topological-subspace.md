# 

Source: https://proofwiki.org/wiki/Basis_for_Topological_Subspace

Theorem
Let $T = \struct {A, \tau}$ be a topological space.
Let $\O \subseteq H \subseteq A$ and so let $T_H = \struct {H, \tau_H}$ be a subspace of $T$.
Let $\BB$ be a (synthetic) basis for $T$.
Let $\BB_H$ be defined as:

$\BB_H = \set {U \cap H: U \in \BB}$

Then $\BB_H$ is a (synthetic) basis for $H$.


Proof
$\BB \subseteq \powerset A$ is a synthetic basis for $T$ if and only if:

$(\text B 1): \quad$ $A$ is a union of sets from $\BB$
$(\text B 2): \quad$ If $B_1, B_2 \in B$, then $B_1 \cap B_2$ is a union of sets from $\BB$.

Let $A = \mathbb S$ be a union of sets from $\BB$.
Then:

$\ds A = \bigcup_{S \mathop \in \mathbb S} S$
for some $\mathbb S \subseteq \BB$.
Hence:














\(\ds H\)

\(=\)







\(\ds A \cap H\)





Intersection with Subset is Subset‎














\(\ds \)

\(=\)







\(\ds \paren {\bigcup_{S \mathop \in \mathbb S} S} \cap H\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{S \mathop \in \mathbb S} \paren {S \cap H}\)





Intersection Distributes over Union



But if $S \in \BB$, then $S \cap H \in \BB_H$
So $H$ is a union of sets from $\BB_H$.

In the same way we investigate $U_1$ and $U_2$.
Let $U_1, U_2 \in \BB_H$.
Then $U_1 = B_1 \cap H, U_2 = B_2 \cap H$ for some $B_1, B_2 \in \BB$.
Then $U_1 \cap U_2 = B_1 \cap H \cap B_2 \cap H = \paren {B_1 \cap B_2} \cap H$.

As $\BB$ is a (synthetic) basis for $A$, we have that:

$\ds B_1 \cap B_2 = \bigcup_{S \mathop \in \mathbb S} S$
for some $\mathbb S \subseteq \BB$.
Hence:














\(\ds U_1 \cap U_2\)

\(=\)







\(\ds \paren {B_1 \cap B_2} \cap H\)




















\(\ds \)

\(=\)







\(\ds \paren {\bigcup_{S \mathop \in \mathbb S} S} \cap H\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{S \mathop \in \mathbb S} \paren {S \cap H}\)





Intersection Distributes over Union



But if $S \in \BB$, then $S \cap H \in \BB_H$.
So $U_1 \cap U_2$ is a union of sets from $\BB_H$.
So $\BB_H$ fulfils the conditions to be a synthetic basis for $H$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 12$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction




