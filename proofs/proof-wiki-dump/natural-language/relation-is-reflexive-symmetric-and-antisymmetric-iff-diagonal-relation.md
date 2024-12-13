# 

Source: https://proofwiki.org/wiki/Relation_is_Reflexive_Symmetric_and_Antisymmetric_iff_Diagonal_Relation



Theorem
Let $S$ be a set.
Let $\RR \subseteq S \times S$ be a relation in $S$.

Then:

$\RR$ is reflexive, symmetric and antisymmetric
if and only if:

$\RR$ is the diagonal relation $\Delta_S$.


Proof
Necessary Condition
Let $\RR$ is reflexive, symmetric and antisymmetric.
By definition of reflexive:

$\Delta_S \subseteq \RR$
From Relation is Symmetric and Antisymmetric iff Coreflexive:

$\RR \subseteq \Delta_S$
By definition of set equality:

$\RR = \Delta_S$
$\blacksquare$


Sufficient Condition
Let $\RR = \Delta_S$.
From Relation is Reflexive and Coreflexive iff Diagonal:

$\RR$ is reflexive
and

$\RR$ is coreflexive.
From Relation is Symmetric and Antisymmetric iff Coreflexive it follows that $\RR$ is both symmetric and antisymmetric.
Hence the result.
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $4$: The Predicate Calculus $2$: $5$ Properties of Relations: Exercise $5$




