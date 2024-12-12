# 

Source: https://proofwiki.org/wiki/Class_under_Progressing_Mapping_such_that_Elements_are_Sandwiched_is_Nest

Theorem
Let $A$ be a class.
Let $g: A \to A$ be a progressing mapping on $A$ such that:

$\forall x, y \in A: \map g x \subseteq y \lor y \subseteq x$

Then $A$ is a nest:

$\forall x, y \in A: x \subseteq y \lor y \subseteq x$


Proof
By definition of progressing mapping:

$\forall x \in A: x \subseteq \map g x$
Thus by Subset Relation is Transitive:

$\map g x \subseteq y \implies x \subseteq y$
and it follows that:

$\forall x, y \in A: x \subseteq y \lor y \subseteq x$
Hence the result by definition of nest.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 4$ A double induction principle and its applications: Lemma $4.9$




