# 

Source: https://proofwiki.org/wiki/Class_is_Transitive_iff_Union_is_Subclass



Theorem
A class $A$ is transitive if and only if:

$\bigcup A \subseteq A$


Proof
Necessary Condition
Let $A$ be transitive.
Let $x \in \bigcup A$.
Then by definition:

$\exists y \in A: x \in y$
By definition of transitive class:

$x \in y \land y \in A \implies x \in A$
and so:

$x \in A$
Hence the result by definition of subclass.
$\Box$


Sufficient Condition
Let $\bigcup A \subseteq A$.

Let $x \in \bigcup A$.
Then by definition:

$\exists y \in A: x \in y$
By definition of subclass:

$x \in A$
Thus we have that:

$x \in y \land y \in A \implies x \in A$
It follows by definition that $A$ is a transitive class.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 10$ Some useful facts about transitivity: Theorem $10.1$




