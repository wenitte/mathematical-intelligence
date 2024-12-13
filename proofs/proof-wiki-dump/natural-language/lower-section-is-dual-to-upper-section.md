# 

Source: https://proofwiki.org/wiki/Lower_Section_is_Dual_to_Upper_Section

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $T \subseteq S$.

The following are dual statements:

$T$ is a lower section in $S$
$T$ is an upper section in $S$


Proof
By definition, $T$ is a lower section in $S$ if and only if:

$\forall t \in T: \forall s \in S: s \preceq t \implies s \in T$
The dual of this statement is:

$\forall t \in T: \forall s \in S: t \preceq s \implies s \in T$
by Dual Pairs (Order Theory).
 
By definition, this means $T$ is an upper section in $S$.

The converse follows from Dual of Dual Statement (Order Theory).
$\blacksquare$


Also see
Duality Principle (Order Theory)




