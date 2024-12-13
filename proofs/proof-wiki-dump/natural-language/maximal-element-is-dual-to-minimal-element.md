# 

Source: https://proofwiki.org/wiki/Maximal_Element_is_Dual_to_Minimal_Element

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $T \subseteq S$, and $a \in T$.

The following are dual statements:

$a$ is a maximal element of $T$
$a$ is a minimal element of $T$


Proof
By definition, $a$ is a maximal element of $T$ if and only if:

$\forall t \in T: a \preceq t$ implies $a = t$
The dual of this statement is:

$\forall t \in T: t \preceq a$ implies $a = t$
by Dual Pairs (Order Theory).

By definition, this means $a$ is a minimal element of $T$.

The converse follows from Dual of Dual Statement (Order Theory).
$\blacksquare$


Also see
Duality Principle (Order Theory)




