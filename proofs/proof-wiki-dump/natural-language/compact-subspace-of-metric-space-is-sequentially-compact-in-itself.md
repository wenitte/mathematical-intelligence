# 

Source: https://proofwiki.org/wiki/Compact_Subspace_of_Metric_Space_is_Sequentially_Compact_in_Itself



Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $C \subseteq M$ be a subspace of $M$ such that $C$ is compact.

Then $C$ is sequentially compact in itself.


Proof
Let $C \subseteq M$ be compact.
Let $\sequence {x_n}$ be a sequence in $C$.
Let $S$ be the range of $\sequence {x_n}$.
Thus $S \subseteq C$ and $S$ may be either finite or infinite.


Finite Range
Let $S$ be finite.
Then at least one $x \in S$ must be repeated infinitely often in $\sequence {x_n}$.


This article needs to be linked to other articles.In particular: Infinite Pigeonhole PrincipleYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Its occurrences form a subsequence converging to $x$.
$\Box$


Infinite Range
Let $S$ be infinite.
From Subsequence of Sequence in Metric Space with Limit, it is enough to show that $S$ has a limit point in $C$.

Aiming for a contradiction, suppose $S$ has no limit point in $C$.
Then for each $x \in C$, there exists $\epsilon \in \R_{>0}$ such that the open $\epsilon$-ball $\map {B_\epsilon} x$ contains no $y \in S: y \ne x$.
That is:

$\map {B_\epsilon} x \cap S = \set x$
or

$\map {B_\epsilon} x \cap S = \O$
Because $C$ is compact, the open cover $\BB := \set {\map {B_\epsilon} x: x \in C}$ has a finite subcover.
But each $\map {B_\epsilon} x \in \BB$ contains at most one point of $S$.
Therefore the union of any finite subset of $\BB$ contains only finitely many points of $S$.
So no finite subset of $\BB$ covers $S$, let alone $C$.

Thus $S$ must have a limit point in $C$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $7.2$: Sequential compactness: Proposition $7.2.6$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): compact




