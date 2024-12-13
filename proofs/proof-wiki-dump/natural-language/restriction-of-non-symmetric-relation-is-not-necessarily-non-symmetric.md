# 

Source: https://proofwiki.org/wiki/Restriction_of_Non-Symmetric_Relation_is_Not_Necessarily_Non-Symmetric

Theorem
Let $S$ be a set.
Let $\RR \subseteq S \times S$ be a non-symmetric relation on $S$.

Let $T \subseteq S$ be a subset of $S$.
Let $\RR {\restriction_T} \ \subseteq T \times T$ be the restriction of $\RR$ to $T$.

Then $\RR {\restriction_T}$ is not necessarily a non-symmetric relation on $T$.


Proof
Proof by Counterexample:
Let $S = \set {a, b}$.
Let $\RR = \set {\tuple {a, b}, \tuple {b, b} }$.
$\RR$ is a non-symmetric relation, as can be seen by definition.
Now let $T = \set b$.
Then $\RR {\restriction_T} \ = \set {\tuple {b, b} }$.
So:

$\forall x, y \in T: \tuple {x, y} \in \RR {\restriction_T} \implies \tuple {y, x} \in \RR {\restriction_T}$
as can be seen by setting $x = y = b$.
So $\RR {\restriction_T}$ is a symmetric relation on $T$.
That is, $\RR {\restriction_T}$ is not a non-symmetric relation on $T$.
$\blacksquare$


Also see
Properties of Relation Not Preserved by Restriction‎ for other similar results.




