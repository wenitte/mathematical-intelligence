# 

Source: https://proofwiki.org/wiki/Lower_Closure_is_Lower_Section

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $T$ be a subset of $S$.
Let $L$ be the lower closure of $T$.

Then $L$ is a lower section.


Proof
Let $a \in L$.
Let $b \in S$ with $b \preceq a$.
By the definition of lower closure, there is a $t \in T$ such that $a \preceq t$.
By transitivity, $b \preceq t$.
Thus, again by the definition of lower closure, $b \in L$.
Since this holds for all such $a$ and $b$, $L$ is a lower section.
$\blacksquare$


Also see
Upper Closure is Upper Section




