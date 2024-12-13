# 

Source: https://proofwiki.org/wiki/Real_Function_is_Continuous_at_Isolated_Point

Theorem
Let $A \subseteq \R$ be any subset of the real numbers.
Let $f: A \to \R$ be a real function.
Let $x \in A$ be an isolated point of $A$.

Then $f$ is continuous at $x$.


Proof
By definition of isolation point:

$\exists \delta \in \R_{> 0}: \openint {x - \delta} {x + \delta} \cap A = \set x$

Pick any $\epsilon > 0$.
We have that for any $z \in \openint {x - \delta} {x + \delta} \cap A = \set x$:

$\size {\map f z - \map f x} = \size {\map f x - \map f x} = 0 < \epsilon$.

This satisfies the condition of continuity at $x$,
and the limit in this case is trivially equal to $\map f x$.
$\blacksquare$





