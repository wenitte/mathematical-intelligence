# 

Source: https://proofwiki.org/wiki/Collection_of_Sets_Equivalent_to_Set_Containing_Empty_Set_is_Proper_Class

Theorem
Let $S = \set \O$ be the singleton whose element is the empty set.
Let $C$ be the collection of all sets which are equivalent to $S$.
$C$ is a proper class.


Proof
By definition of cardinality, $C$ is the collection of all singletons:

$\set {x: \exists y: x = \set y}$
Define a class mapping $f: C \to V$, where $V$ is the universal class, such that $\map f {\set x} = x$.
This is a mapping on the domain $C$, as all elements of $C$ are singletons.
Take an arbitrary $y \in V$.
Then by definition of $C$:

$\set y \in C$
and by definition of $f$: 

$\map f {\set y} = y$
Thus:

$\exists x \in A: \map f x = y$
and $f$ is a surjection.
From Universal Class is Proper, $V$ is proper.
It follows from Surjection from Class to Proper Class that $C$ is proper.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $3$: Cardinality: Exercise $2$




