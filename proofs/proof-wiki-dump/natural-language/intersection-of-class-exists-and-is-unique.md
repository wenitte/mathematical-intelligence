# 

Source: https://proofwiki.org/wiki/Intersection_of_Class_Exists_and_is_Unique

Theorem
Let $V$ be a basic universe.
Let $A \subseteq V$ be a class.
Let $\bigcap A$ denote the intersection of $A$.
Then $\bigcap A$ is guaranteed to exist and is unique.


Proof
By the Axiom of Specification we can create the subclass of $V$:

$\bigcap A = \set {x \in V: \forall y \in A: x \in y}$
Hence $\bigcap A$ exists.
Suppose $\QQ \subseteq V$ such that $\QQ$ and $\bigcap A$ are both the intersection of $A$.
Then:

$\QQ = \set {x \in V: \forall y \in A: x \in y}$
Thus:

$x \in \QQ \implies x \in \bigcap A$
and:

$x \in \bigcap A \implies x \in \QQ$
Hence by the Axiom of Extension:

$\QQ = \bigcap A$
and uniqueness has been demonstrated.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 5$ The union axiom




