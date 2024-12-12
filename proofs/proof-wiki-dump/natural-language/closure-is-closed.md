# 

Source: https://proofwiki.org/wiki/Closure_is_Closed



Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $\cl: S \to S$ be a closure operator.
Let $x \in S$.

Then $\map \cl x$ is a closed element of $S$ with respect to $\cl$.


Power Set
When the ordering in question is the subset relation on a power set, the result can be expressed as follows:

Let $S$ be a set.
Let $\powerset S$ be the power set of $S$.
Let $\cl: \powerset S \to \powerset S$ be a closure operator.
Let $T \subseteq S$.
Then $\map \cl T$ is a closed set with respect to $\cl$.


Proof
By the definition of closure operator, $\cl$ is idempotent.
Therefore:

$\map \cl {\map \cl x} = \map \cl x$
It follows by definition that $\map \cl x$ is a closed element.
$\blacksquare$


Also see
Topological Closure is Closed




