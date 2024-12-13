# 

Source: https://proofwiki.org/wiki/Sandwich_Principle/Corollary_2

Theorem
Let $A$ be a class.
Let $g: A \to A$ be a mapping on $A$ such that:

for all $x, y \in A$, either $\map g x \subseteq y$ or $y \subseteq x$.

Let $g$ be a progressing mapping.
Let $x \subseteq y$.
Then:

$\map g x \subseteq \map g y$


Proof
Let $x \subseteq y$.
Suppose $x = y$.
Then $\map g x \subseteq \map g y$ and the result holds.
$\Box$

Suppose that $x \ne y$.
Then $x \subset y$
It follows from Corollary 1 that:

$\map g x \subseteq y$
As $g$ is a progressing mapping on $A$:

$y \subseteq \map g y$
Hence by Subset Relation is Transitive:

$\map g x \subseteq \map g y$
$\Box$

So in either case:

$\map g x \subseteq \map g y$
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 4$ A double induction principle and its applications: Lemma $4.9 \ (3)$




