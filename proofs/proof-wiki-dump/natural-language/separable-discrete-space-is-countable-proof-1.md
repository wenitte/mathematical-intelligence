# 

Source: https://proofwiki.org/wiki/Separable_Discrete_Space_is_Countable/Proof_1

Theorem
Let $T = \struct {S, \tau}$ be a discrete topological space.
Let $T$ be separable.

Then $S$ is countable.


Proof
Let $T$ be separable.
By Space is Separable iff Density not greater than Aleph Zero:

$\map d T \le \aleph_0$
where:

$\map d T$ denotes the density of $T$
$\aleph$ denotes the aleph mapping.

By definition of density:

$\exists A \subseteq S: A$ is everywhere dense and $\map d T = \card A$
where $\card A$ denotes the cardinality of $A$.

By definition of everywhere dense set:

$A^- = S$
where $A^-$ denotes the closure of $A$.

By Set in Discrete Topology is Clopen:

$A$ is closed
Then by Set is Closed iff Equals Topological Closure:

$A^- = A$

Thus by Countable iff Cardinality not greater than Aleph Zero:

$S$ is countable.
$\blacksquare$


Sources
Mizar article TOPGEN_4:11




