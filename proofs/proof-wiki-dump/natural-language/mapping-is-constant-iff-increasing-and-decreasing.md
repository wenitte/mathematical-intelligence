# 

Source: https://proofwiki.org/wiki/Mapping_is_Constant_iff_Increasing_and_Decreasing



Theorem
Let $\left({S, \preceq_1}\right)$ and $\left({T, \preceq_2}\right)$ be ordered sets.
Let $\phi: \left({S, \preceq_1}\right) \to \left({T, \preceq_2}\right)$ be a mapping.

Then $\phi$ is a constant mapping if and only if $\phi$ is both increasing and decreasing.


Proof
Necessary Condition
Suppose $\phi$ is a constant mapping.
Then:

$\forall x, y \in S: \phi \left({x}\right) = \phi \left({y}\right)$

So:

$\forall x, y \in S: \phi \left({x}\right) \mathop{\preceq_2} \phi \left({y}\right)$
$\forall x, y \in S: \phi \left({y}\right) \mathop{\preceq_2} \phi \left({x}\right)$
and so $\phi$ is both increasing and decreasing.
$\Box$


Sufficient Condition
Suppose $\phi$ is both increasing and decreasing.
Let $x, y \in S$.
Then:

$\phi \left({x}\right) \mathop{\preceq_2} \phi \left({y}\right)$
$\phi \left({y}\right) \mathop{\preceq_2} \phi \left({x}\right)$
As $\preceq$ is an ordering, by definition $\preceq$ is antisymmetric.
This means thtat:

$\phi \left({y}\right) = \phi \left({x}\right)$
As this holds for any $x, y \in S$ it follows for all $x, y \in S$ by Universal Generalisation.
Thus:

$\forall x, y \in S: \phi \left({x}\right) = \phi \left({y}\right)$
and so $\phi$ is a constant mapping.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 12.1$




