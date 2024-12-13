# 

Source: https://proofwiki.org/wiki/Power_Set_Exists_and_is_Unique

Theorem
Let $V$ be a basic universe.
Let $x \in V$ be a set.
Let $\powerset x$ denote the power set of $x$.
Then $\powerset x$ is guaranteed to exist and is unique.


Proof
By the Axiom of Specification an arbitrary subclass of $x$ can be created.
Hence we can create the class of all such subclasses.
Hence $\powerset x$ exists.

Let $\powerset x$, $\map \QQ x$ both be power sets of $x$.
From definition of power sets:

$\forall T$:
$T \in \powerset x \iff T \subseteq x$
$T \in \map \QQ x \iff T \subseteq x$
From Biconditional is Commutative and Biconditional is Transitive:

$T \in \powerset x \iff T \in \map \QQ x$
By the Axiom of Extension:

$\powerset x = \map \QQ x$
Hence the power set is unique.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 6$ The power axiom




