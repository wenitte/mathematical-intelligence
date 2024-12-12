# 

Source: https://proofwiki.org/wiki/Class_Union_Exists_and_is_Unique

Theorem
Let $V$ be a basic universe.
Let $A \subseteq V$ be a class.
Let $\bigcup A$ denote the union of $A$.
Then $\bigcup A$ is guaranteed to exist and is unique.


Proof
By the Axiom of Specification the union of $A$ can be created:

$\bigcup A := \set {x: \exists y: x \in y \land y \in A}$
Hence $\bigcup A$ exists.

Let $B$ and $C$ both be unions of $A$.
From the definition of union:

$\forall A$:
$x \in B \iff \exists y \in A: x \in y$
$x \in C \iff \exists y \in A: x \in y$
From Biconditional is Commutative and Biconditional is Transitive:

$x \in B \iff x \in C$
By the Axiom of Extension:

$B = C$
Hence the union of $A$ is unique.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 5$ The union axiom




