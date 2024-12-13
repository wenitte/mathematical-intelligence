# 

Source: https://proofwiki.org/wiki/Restriction_of_Antireflexive_Relation_is_Antireflexive

Theorem
Let $S$ be a set.
Let $\RR \subseteq S \times S$ be an antireflexive relation on $S$.

Let $T \subseteq S$ be a subset of $S$.
Let $\RR {\restriction_T} \subseteq T \times T$ be the restriction of $\RR$ to $T$.

Then $\RR {\restriction_T}$ is an antireflexive relation on $T$.


Proof
Suppose $\RR$ is antireflexive on $S$.
Then:

$\forall x \in S: \tuple {x, x} \notin \RR$
So:

$\forall x \in T: \tuple {x, x} \notin \RR \restriction_T$
Thus $\RR {\restriction_T}$ is antireflexive on $T$.
$\blacksquare$


Also see
Properties of Restriction of Relation‎ for other similar properties of the restriction of a relation.




