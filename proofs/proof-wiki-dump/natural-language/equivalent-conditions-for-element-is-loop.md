# 

Source: https://proofwiki.org/wiki/Equivalent_Conditions_for_Element_is_Loop



Theorem
Let $M = \struct{S, \mathscr I}$ be a matroid.
Let $\sigma$ denote the closure operator on $M$.
Let $\rho$ denote the rank function of $M$.
Let $\mathscr B$ denote the set of all bases of $M$.
Let $x \in S$.

The following statements are equivalent:

$(1)\quad x$ is a loop
$(2)\quad x \in \map \sigma \O$
$(3)\quad \map \rho {\set x} = 0$
$(4)\quad \set x$ is a circuit
$(5)\quad x$ is not an element of any $B \in \mathscr B$


Proof
Condition $(1)$ iff Condition $(2)$
Follows immediately from Element is Loop iff Member of Closure of Empty Set.
$\Box$ 


Condition $(1)$ iff Condition $(3)$
Follows immediately from Element is Loop iff Rank is Zero.
$\Box$ 


Condition $(1)$ iff Condition $(4)$
Follows immediately from Element is Loop iff Singleton is Circuit.
$\Box$ 


Condition $(1)$ iff Condition $(5)$
Follows immediately from the contrapositive statement of Element is Member of Base iff Not Loop.
$\blacksquare$





