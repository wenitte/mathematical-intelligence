# 

Source: https://proofwiki.org/wiki/Properties_of_Relation_Not_Preserved_by_Restriction



Theorem
If a relation is:

serial,
non-reflexive,
non-symmetric,
non-transitive or
non-connected
it is impossible to state without further information whether or not any restriction of that relation has the same properties.


Proof
Restriction of Serial Relation is Not Necessarily Serial
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


Restriction of Non-Reflexive Relation is Not Necessarily Non-Reflexive
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


Restriction of Non-Symmetric Relation is Not Necessarily Non-Symmetric
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


Restriction of Non-Transitive Relation is Not Necessarily Non-Transitive
Proof by Counterexample:
Let $S = \set {a, b}$.
Let $\RR = \set {\tuple {a, b}, \tuple {b, a}, \tuple {b, b} }$.
$\RR$ is a non-transitive relation, as can be seen by definition.
Now let $T = \set b$.
Then:

$\RR {\restriction_T} = \set {\tuple {b, b} }$
So:

$\forall x, y \in T: \tuple {x, y} \in \RR {\restriction_T} \land \tuple {y, z} \in \RR {\restriction_T} \implies \tuple {y, z} \in \RR {\restriction_T}$
as can be seen by setting $x = y = z = b$.
So $\RR {\restriction_T}$ is a transitive relation on $T$.
That is, $\RR {\restriction_T}$ is not a non-transitive relation on $T$.
$\blacksquare$


Restriction of Non-Connected Relation is Not Necessarily Non-Connected
Proof by Counterexample:
Let $S = \set {a, b}$.
Let $\RR = \set {\tuple {a, a}, \tuple {b, b} }$.
$\RR$ is a non-connected relation, as can be seen by definition: neither $a \mathrel \RR b$ nor $b \mathrel \RR a$.
Now let $T = \set a$.
Then $\RR {\restriction_T} = \set {\tuple {a, a} }$.
Then $\RR {\restriction_T}$ is trivially connected on $T$.
$\blacksquare$


Also see
Properties of Restriction of Relation for properties which are preserved by restriction.




