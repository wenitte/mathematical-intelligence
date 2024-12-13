# 

Source: https://proofwiki.org/wiki/Reflexive_Closure_of_Transitive_Antisymmetric_Relation_is_Ordering



Theorem
Let $S$ be a set.
Let $\prec$ be a transitive, antisymmetric relation on $S$.
Let $\preceq$ be the reflexive closure of $\prec$.

Then $\preceq$ is an ordering on $S$.


Proof
Reflexive
Follows from Reflexive Closure is Reflexive.
$\Box$


Transitive
Follows from Reflexive Closure of Transitive Relation is Transitive.
$\Box$


Antisymmetric
Let $a, b \in S$.
Suppose that $a \ne b$.
Then by the definition of the diagonal relation:

$\tuple {a, b} \notin \Delta_S$ and
$\tuple {b, a} \notin \Delta_S$
Since $\prec$ is antisymmetric, $\tuple {a, b}$ and $\tuple {b, a}$ are not both in $\prec$.
Thus $a \not \preceq b$ or $b \not \preceq a$.
That is, $\preceq$ is antisymmetric.
$\Box$

It has been demonstrated that $\preceq$ is reflexive, antisymmetric and transitive.
Hence by definition $\preceq$ is an ordering,
$\blacksquare$





