# 

Source: https://proofwiki.org/wiki/Restriction_of_Serial_Relation_is_Not_Necessarily_Serial

Theorem
Let $S$ be a set.
Let $\RR \subseteq S \times S$ be a serial relation on $S$.

Let $T \subseteq S$ be a subset of $S$.
Let $\RR {\restriction_T} \subseteq T \times T$ be the restriction of $\RR$ to $T$.

Then $\RR {\restriction_T}$ is not necessarily a serial relation on $T$.


Proof
Proof by Counterexample:
Let $S = \set {a, b}$.
Let $\RR = \set {\tuple {a, b}, \tuple {b, b} }$.
$\RR$ is a serial relation, as can be seen by definition.

Now let $T = \set a$.
Then:

$\RR {\restriction_T} = \O$
So:

$\not \exists y \in T: \tuple {a, y} \in \RR {\restriction_T}$
That is, $\RR {\restriction_T}$ is not a serial relation on $T$.
$\blacksquare$


Also see
Properties of Relation Not Preserved by Restriction‎ for other similar results.




