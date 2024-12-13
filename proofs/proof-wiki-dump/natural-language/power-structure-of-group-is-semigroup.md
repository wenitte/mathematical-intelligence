# 

Source: https://proofwiki.org/wiki/Power_Structure_of_Group_is_Semigroup



Theorem
Let $\struct {G, \circ}$ be a group.
Let $\struct {\powerset G, \circ_\PP}$ be the power structure of $\struct {G, \circ}$.

Then $\struct {\powerset G, \circ_\PP}$ is a semigroup.


Proof 1
We need to prove closure and associativity.


Closure
Let $\struct {G, \circ}$ be a group, and let $A, B \subseteq G$.














\(\ds \)

\(\)







\(\ds \forall a \in A, b \in B: a \circ b \in G\)




















\(\ds \)

\(\leadsto\)







\(\ds A \circ B \subseteq G\)





Definition of Subset Product














\(\ds \)

\(\leadsto\)







\(\ds A \circ B \in \powerset G\)





Definition of Power Set



Thus $\struct {\powerset G, \circ_\PP}$ is closed.
$\Box$


Associativity
It follows from Subset Product within Semigroup is Associative that $\circ_\PP$ is associative in $\struct {\powerset G, \circ_\PP}$.
$\Box$

Thus $\struct {\powerset G, \circ_\PP}$ is a semigroup.
$\blacksquare$


Proof 2
By definition a group is also a semigroup.
The result then follows from Power Structure of Semigroup is Semigroup.
$\blacksquare$





