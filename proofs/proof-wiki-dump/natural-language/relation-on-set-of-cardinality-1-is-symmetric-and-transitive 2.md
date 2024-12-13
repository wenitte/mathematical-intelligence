# 

Source: https://proofwiki.org/wiki/Relation_on_Set_of_Cardinality_1_is_Symmetric_and_Transitive

Theorem
Let $S$ be a set whose cardinality is equal to $1$:

$\card S = 1$
Let $\odot \subseteq S \times S$ be a relation on $S$.

Then $\odot$ is both symmetric and transitive.


Proof
Without loss of generality, let $S = \set a$.
There are $2$ relations on $S$:

$(1): \quad \odot := \O$, which is the null relation on $S$.
From Null Relation is Antireflexive, Symmetric and Transitive, $\odot$ is antireflexive, symmetric and transitive.
Thus in this case $\odot$ is both symmetric and transitive.

$(2): \quad \odot := \set {\tuple {a, a} }$, which is the trivial relation on $S$.
From Trivial Relation is Equivalence, $\odot$ is reflexive, symmetric and transitive.
Thus in this case also, $\odot$ is both symmetric and transitive.
$\blacksquare$





