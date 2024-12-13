# 

Source: https://proofwiki.org/wiki/Restriction_of_Non-Reflexive_Relation_is_Not_Necessarily_Non-Reflexive

Theorem
Let $S$ be a set.
Let $\RR \subseteq S \times S$ be a non-reflexive relation on $S$.

Let $T \subseteq S$ be a subset of $S$.
Let $\RR {\restriction_T} \subseteq T \times T$ be the restriction of $\RR$ to $T$.

Then $\RR {\restriction_T}$ is not necessarily a non-reflexive relation on $T$.


Proof
Proof by Counterexample:
Let $S = \set {a, b}$.
Let $\RR = \set {\tuple {b, b} }$.
$\RR$ is a non-reflexive relation, as can be seen by definition:

$\tuple {a, a} \notin \RR$
$\tuple {b, b} \in \RR$
Now let $T = \set a$.
Then $\RR {\restriction_T} = \O$.
So:

$\forall x \in T: \tuple {x, x} \notin \RR {\restriction_T}$
That is, $\RR {\restriction_T}$ is an antireflexive relation on $T$.
That is, specifically not a non-reflexive relation.
$\blacksquare$


Also see
Properties of Relation Not Preserved by Restriction‎ for other similar results.




