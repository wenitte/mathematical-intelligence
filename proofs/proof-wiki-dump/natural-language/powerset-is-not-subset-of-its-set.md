# 

Source: https://proofwiki.org/wiki/Powerset_is_not_Subset_of_its_Set



Theorem
Let $A$ be a set.
Then:

$\powerset A \not \subseteq A$


Proof 1
Aiming for a contradiction, suppose that $\powerset A \subseteq A$, and define:

$C = \set {x \in \powerset A : x \notin x}$
We have that $C \subseteq \powerset A$, as it contains only the $x \in \powerset A$ meeting the condition $x \notin x$.
Since $\powerset A \subseteq A$, we have:

$C \subseteq A$
and thus

$C \in \powerset A$

We can derive a similar contradiction to Russell's Paradox.
If $C \in C$, then it must meet $C$'s condition that $C \notin C$.
If $C \notin C$, then it meets $C$'s condition for $C \in C$.
$\blacksquare$


Proof 2
Aiming for a contradiction, suppose that $\powerset A \subseteq A$.
Let $I: \powerset A \to A$ be the identity mapping.
$I$ is an injection by Identity Mapping is Injection.
But by No Injection from Power Set to Set, this is a contradiction.
$\blacksquare$


Proof 3
Aiming for a contradiction, suppose that $\powerset A \subseteq A$.
Since $A \in \powerset A$, this implies:

$A \in A$
But this contradicts Set is Not Element of Itself.
$\blacksquare$


Also see
No Injection from Power Set to Set




