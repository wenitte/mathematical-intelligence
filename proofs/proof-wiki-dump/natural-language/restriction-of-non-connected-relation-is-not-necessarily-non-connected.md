# 

Source: https://proofwiki.org/wiki/Restriction_of_Non-Connected_Relation_is_Not_Necessarily_Non-Connected

Theorem
Let $S$ be a set.
Let $\RR \subseteq S \times S$ be a non-connected relation on $S$.

Let $T \subseteq S$ be a subset of $S$.
Let $\RR {\restriction_T} \subseteq T \times T$ be the restriction of $\RR$ to $T$.

Then $\RR {\restriction_T}$ is not necessarily a non-connected relation on $T$.


Proof
Proof by Counterexample:
Let $S = \set {a, b}$.
Let $\RR = \set {\tuple {a, a}, \tuple {b, b} }$.
$\RR$ is a non-connected relation, as can be seen by definition: neither $a \mathrel \RR b$ nor $b \mathrel \RR a$.
Now let $T = \set a$.
Then $\RR {\restriction_T} = \set {\tuple {a, a} }$.
Then $\RR {\restriction_T}$ is trivially connected on $T$.
$\blacksquare$


Also see
Properties of Relation Not Preserved by Restriction‎ for other similar results.




