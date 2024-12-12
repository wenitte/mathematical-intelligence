# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_on_Power_Set_induced_by_Intersection_with_Subset/Cardinality_of_Set_of_Equivalence_Classes

Theorem
Let $A, T$ be sets such that $A \subseteq T$.
Let $S = \powerset T$ denote the power set of $T$.

Let $\alpha$ denote the relation defined on $S$ by:

$\forall X, Y \in S: X \mathrel \alpha Y \iff X \cap A = Y \cap A$
We have that $\alpha$ is an equivalence relation.

Let $A$ be finite with $\card A = n$, where $\card {\, \cdot \,}$ denotes cardinality.
The cardinality of the set of $\alpha$-equivalence classes is given by:

$\card {\set {\eqclass X \alpha: X \in S} } = 2^n$


Proof
That $\alpha$ is an equivalence relation is proved in Equivalence Relation on Power Set induced by Intersection with Subset.

Let $U \subseteq A$.
Then $U$ is in its own $\alpha$-equivalence class.
Now suppose $U' \subseteq A$ such that $U \ne U'$.
From Intersection with Subset is Subset:

$U \cap A = U$
and:

$U' \cap A = U'$
So:

$U \ne U' \implies \eqclass U \alpha \ne \eqclass {U'} \alpha$
and so there are as many $\alpha$-equivalence classes as there are subsets of $A$.
That is:

$\card {\set {\eqclass X \alpha: X \in S} } = \powerset A$
The result follows from Cardinality of Power Set of Finite Set.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: Equivalence Relations and Equivalence Classes: Exercise $2 \ \text {(iii)}$




