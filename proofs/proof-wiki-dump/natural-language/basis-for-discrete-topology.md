# 

Source: https://proofwiki.org/wiki/Basis_for_Discrete_Topology

Theorem
Let $S$ be a set.
Let $\tau$ be the discrete topology on $S$.
Let $\BB$ be the set of all singleton subsets of $S$:

$\BB := \set {\set x: x \in S}$.
Then $\BB$ is a basis for $T$.


Proof
Let $T = \struct {S, \tau}$ be the discrete space on $S$. 
Let $U \in \tau$.
Then:

$\ds U = \bigcup_{x \mathop \in U} \set x$
Hence:

$\forall x \in U: \exists \set x \in \BB: \set x \subseteq U$
Thus $U$ is the union of elements of $\BB$.
Hence by definition $\BB$ is a basis for $T$.
$\blacksquare$





