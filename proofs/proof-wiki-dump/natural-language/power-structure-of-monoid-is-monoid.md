# 

Source: https://proofwiki.org/wiki/Power_Structure_of_Monoid_is_Monoid

Theorem
Let $\struct {G, \circ}$ be a monoid with identity $e$.
Let $\struct {\powerset G, \circ_\PP}$ be the power structure of $\struct {G, \circ}$.

Then $\struct {\powerset G, \circ_\PP}$ is a monoid with identity $\set e$.


Proof
By definition of a monoid, $\struct {G, \circ}$ is a semigroup.
By Power Structure of Semigroup is Semigroup, $\struct {\powerset G, \circ_\PP}$ is a semigroup.
By Subset Product by Identity Singleton, $\set e$ is an identity for $\struct {\powerset G, \circ_\PP}$.
Thus $\struct {\powerset G, \circ_\PP}$ is a monoid with identity $\set e$.
$\blacksquare$





