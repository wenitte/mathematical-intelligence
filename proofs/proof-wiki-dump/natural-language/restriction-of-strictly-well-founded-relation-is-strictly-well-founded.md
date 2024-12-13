# 

Source: https://proofwiki.org/wiki/Restriction_of_Strictly_Well-Founded_Relation_is_Strictly_Well-Founded

Theorem
Let $\struct {S, \RR}$ be a relational structure.
Let $\RR \subseteq S \times S$ be a strictly well-founded relation on $S$.

Let $T \subseteq S$ be a subset of $S$.
Let $\RR {\restriction_T} \subseteq T \times T$ be the restriction of $\RR$ to $T$.

Then $\RR {\restriction_T}$ is a strictly well-founded relation on $T$.


Proof
By definition of strictly well-founded relation, every non-empty subset of $S$ has a minimal element.
By Subset Relation is Transitive, every subset of $T$ is also a subset of $S$.
Therefore every non-empty subset of $T$ has a minimal element.

Thus by definition, $\RR$ is a strictly well-founded relation on $T$.
$\blacksquare$


Also see
Definition:Strictly Well-Founded Relation
Axiom of Foundation




