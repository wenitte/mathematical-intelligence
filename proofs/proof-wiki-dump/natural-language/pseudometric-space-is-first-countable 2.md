# 

Source: https://proofwiki.org/wiki/Pseudometric_Space_is_First-Countable

Theorem
Let $M = \struct {A, d}$ be a pseudometric space.
Then $M$ is first-countable.


Proof
Let $x \in A$.

Let:

$\BB = \set {\map {B_{1/n} } x: n \in \N_{>0} }$
where $\map {B_\epsilon} x$ denotes the open $\epsilon$-ball of $x$ in $M$.
By Surjection from Natural Numbers iff Countable, we have that $\BB$ is countable.

By the definition of a first-countable space, it suffices to show that $\BB$ is a local basis at $x$.
By Open Ball of Pseudometric Space is Open Set, every element of $\BB$ is an open neighborhood of $x$.
Let $U$ be an open neighborhood of $x$.
By the definition of an open set, there exists a strictly positive real number $\epsilon$ such that $\map {B_\epsilon} x \subseteq U$.
By the Axiom of Archimedes, there exists a natural number $n > \dfrac 1 \epsilon$.
That is, $\dfrac 1 n < \epsilon$, and so:

$\map {B_{1/n} } x \subseteq \map {B_\epsilon} x \subseteq U$
The result follows from Subset Relation is Transitive.
$\blacksquare$





