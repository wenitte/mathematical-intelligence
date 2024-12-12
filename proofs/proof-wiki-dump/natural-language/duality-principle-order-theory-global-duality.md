# 

Source: https://proofwiki.org/wiki/Duality_Principle_(Order_Theory)/Global_Duality

This proof is about Global Duality in the context of Order Theory. For other uses, see Duality Principle.



Theorem
Let $\Sigma$ be a statement about ordered sets (whether in natural or a formal language).
Let $\Sigma^*$ be the dual statement of $\Sigma$.

The following are equivalent:

$(1): \quad \Sigma$ is true for all ordered sets
$(2): \quad \Sigma^*$ is true for all ordered sets


Proof
$(1)$ implies $(2)$
Let $\struct {S, \preceq}$ be an ordered set.
Let $\struct {S, \succeq}$ be its dual.
By assumption, $\Sigma$ is true for $\struct {S, \succeq}$.
By Local Duality, this implies $\Sigma^*$ is true for $\struct {S, \preceq}$.
Since $\struct {S, \preceq}$ was arbitrary, the result follows.
$\blacksquare$


$(2)$ implies $(1)$
From Dual of Dual Statement (Order Theory):

$\paren {\Sigma^*}^* = \Sigma$
The result thus follows from applying the other implication to $\Sigma^*$.
$\blacksquare$


Also see
Definition:Dual Statement (Order Theory)
Duality Principle (Category Theory), a more general duality principle.




