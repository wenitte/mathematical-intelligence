# 

Source: https://proofwiki.org/wiki/Finite_Complement_Topology_is_Topology

Theorem
Let $T = \struct {S, \tau}$ be a finite complement space.

Then $\tau$ is a topology on $T$.


Proof
By definition, we have that $\O \in \tau$.
We also have that $S \in \tau$ as $\relcomp S S = \O$ which is trivially finite.
$\Box$

Let $A, B \in \tau$.
Let $H = A \cap B$.
Then:














\(\ds H\)

\(=\)







\(\ds A \cap B\)














\(\ds \leadsto \ \ \)





\(\ds \relcomp S H\)

\(=\)







\(\ds \relcomp S {A \cap B}\)




















\(\ds \)

\(=\)







\(\ds \relcomp S A \cup \relcomp S B\)





De Morgan's laws: Complement of Intersection



But as $A, B \in \tau$ it follows that $\relcomp S A$ and $\relcomp S B$ are both finite.
Hence their union is also finite.
Thus $\relcomp S H$ is finite.
So $H = A \cap B \in \tau$ as its complement is finite.
$\Box$

Let $\UU \subseteq \tau$.
From De Morgan's laws: Complement of Union:

$\ds \relcomp S {\bigcup \UU} = \bigcap_{U \mathop \in \UU} \relcomp S U$

But as:

$\forall U \in \UU: \relcomp S U \in \tau$
each of the $\relcomp S U$ is finite.
Hence so is their intersection.
So $\ds \relcomp S {\bigcup \UU}$ is finite.
So by definition:

$\ds \bigcup \UU \in \tau$
$\Box$

$\tau$ obeys all of the open set axioms, so it is a topology on $T$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $3$: Topological Spaces: $\S 2$: Topological Spaces: Example $6$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.1$: Topological Spaces: Example $3.1.7$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $18 \text { - } 19$. Finite Complement Topology




