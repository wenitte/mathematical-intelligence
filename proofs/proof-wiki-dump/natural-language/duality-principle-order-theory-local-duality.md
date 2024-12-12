# 

Source: https://proofwiki.org/wiki/Duality_Principle_(Order_Theory)/Local_Duality

This proof is about Local Duality in the context of Order Theory. For other uses, see Duality Principle.



Theorem
Let $\Sigma$ be a statement about ordered sets (whether in natural or a formal language).
Let $\Sigma^*$ be the dual statement of $\Sigma$.
Let $\struct {S, \preceq}$ be an ordered set, and let $\struct {S, \succeq}$ be its dual.

Then the following are equivalent:

$(1): \quad \Sigma$ is true for $\struct {S, \preceq}$
$(2): \quad \Sigma^*$ is true for $\struct {S, \succeq}$


Proof
$(1)$ implies $(2)$
By assumption, $\Sigma$ is true for $\struct {S, \preceq}$.
By Dual of Dual Ordering, the dual statement $\Sigma^*$ applied to $\struct {S, \succeq}$ is the same as $\Sigma$ applied to $\struct {S, \preceq}$.

Hence $\Sigma^*$ is true for $\struct {S, \succeq}$.
$\Box$


$(2)$ implies $(1)$
From Dual of Dual Statement (Order Theory), $\paren {\Sigma^*}^* = \Sigma$.
From Dual of Dual Ordering, $\struct {S, \preceq}$ is the dual of $\struct {S, \succeq}$.

The result thus follows from applying the other implication to $\Sigma^*$ and $\struct {S, \succeq}$.
$\blacksquare$


Also see
Definition:Dual Statement (Order Theory)
Duality Principle (Category Theory), a more general duality principle.




