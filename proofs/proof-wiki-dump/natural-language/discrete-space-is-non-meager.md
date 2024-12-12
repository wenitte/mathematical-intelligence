# 

Source: https://proofwiki.org/wiki/Discrete_Space_is_Non-Meager

Theorem
Let $T = \struct {S, \tau}$ be a discrete topological space.
Then $T$ is non-meager.


Proof 1
Let $U \subseteq S$ such that $U \ne \O$.
From Interior Equals Closure of Subset of Discrete Space, we have:

$U^\circ = U = U^-$
where $U^\circ$ is the interior and $U^-$ the closure of $U$.

So:

$\paren {U^-}^\circ = U \ne \O$
Thus, by definition, no non-empty subset of $S$ is nowhere dense.
So $S$ can not be the union (countable or otherwise) of nowhere dense subsets.
So by definition $S$ can not be meager.
Hence the result.
$\blacksquare$


Proof 2
Let $x \in S$ be an arbitrary point of $T$.
From Set in Discrete Topology is Clopen it follows that $\set x$ is open in $T$.
The result follows from Space with Open Point is Non-Meager.
$\blacksquare$





