# 

Source: https://proofwiki.org/wiki/Intersection_of_Class_is_Subset_of_Intersection_of_Subclass

Theorem
Let $V$ be a basic universe.
Let $A$ and $B$ be classes of $V$:

$A \subseteq V, B \subseteq V$
such that it is not the case that $A = B = \O$.

Let $\bigcap A$ and $\bigcap B$ denote the intersection of $A$ and intersection of $B$ respectively.

Let $A$ be a subclass of $B$:

$A \subseteq B$

Then $\bigcap B$ is a subset of $\bigcap A$:

$\bigcap B \subseteq \bigcap A$


Proof
First we consider the degenerate case where $A = B = \O$.
By Intersection of Empty Class we have that:

$\bigcap \O = V$
Thus we have:

$\bigcap B = \bigcap A = V$
and neither $\bigcap B$ nor $\bigcap A$ are in fact sets.
So while in this case $\bigcap B \subseteq \bigcap A$, $\bigcap B$ is a subclass of $\bigcap A$ and not actually a subset.
$\Box$

Next we cover the case where $A = \O$ is the empty class.
It is noted that Empty Class is Subclass of All Classes, and so $A \subseteq B$.
By Intersection of Empty Class we have that:

$\bigcap A = V$
and so by definition of basic universe $\bigcap B \subseteq V$.

By Intersection of Non-Empty Class is Set, $\bigcap B$ is a set.
By definition of basic universe:

$\bigcap B \in V$
By the Axiom of Transitivity, $V$ is transitive.
Hence as $\bigcap B \in V$ it follows that:

$\bigcap B \subseteq V$
and the result holds.
$\Box$

By Intersection of Non-Empty Class is Set, both $\bigcap A$ and $\bigcap B$ are sets.
Let $x \in \bigcap B$.
Then:

$\forall y \in B: x \in y$
That is:

$y \in B \implies x \in y$
But as $A \subseteq B$, we have that:

$y \in A \implies y \in B$
and therefore:

$y \in A \implies x \in y$
That is:

$\forall y \in A: x \in y$
and so by definition of intersection:

$x \in \bigcap A$
Hence the result by definition of subset.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 5$ The union axiom: Exercise $5.2. \ \text {(b)}$




