# 

Source: https://proofwiki.org/wiki/Greatest_Element_is_Upper_Bound



Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $T \subseteq S$.
Let $T$ have a greatest element $M \in T$.

Then $M$ is an upper bound of $T$.

It follows by definition that $T$ is bounded above.


Proof
Let $M \in T$ be a greatest element of $T$.
By definition:

$\forall y \in T: y \preceq M$
But as $T \subseteq S$, it follows that $M \in S$.
Hence:

$\exists M \in S: \forall y \in T: y \preceq M$
Thus $T$ is bounded above by the upper bound $M$.
$\blacksquare$


Also see
Smallest Element is Lower Bound


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: $\S 2.7$: Maximum and Minimum




