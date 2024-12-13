# 

Source: https://proofwiki.org/wiki/Infimum_of_Subset_of_Bounded_Below_Set_of_Real_Numbers

Theorem
Let $A$ and $B$ be sets of real numbers such that $A \subseteq B$.
Let $B$ be bounded below.

Then:

$\inf A \ge \inf B$
where $\inf$ denotes the infimum.


Proof
Let $B$ be bounded below.
By the Continuum Property, $B$ admits an infimum.
By Subset of Bounded Below Set is Bounded Below, $A$ is also bounded below.
Hence also by the Continuum Property, $A$ also admits a infimum.
Aiming for a contradiction, suppose $\inf A < \inf B$.
Then:

$\exists y \in A: y < \inf B$
Thus by definition of infimum, $y \notin B$.
That is:

$A \nsubseteq B$
which contradicts our initial assumption that $A \subseteq B$.
Hence the result by Proof by Contradiction.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: Exercise $1.5: 3$




