# 

Source: https://proofwiki.org/wiki/Infinite_Set_in_Compact_Space_has_Omega-Accumulation_Point

Theorem
Let $\struct {X, \tau}$ be a compact topological space.
Let $A \subseteq X$ be infinite.

Then $A$ has an $\omega$-accumulation point in $X$.


Proof
Aiming for a contradiction, suppose $A$ has no $\omega$-accumulation points in $X$.
Then for any $x \in X$, there exists some open set $U_x$ such that $U_x$ only contains a finite number of points in $A$.
The collection of all such open sets $\CC = \set {U_x: x \in X}$ is an open cover for $X$.
Since $X$ is compact, $\CC$ has a finite subcover $\CC'$.
$\CC'$ contains a finite number of sets in $\CC$, and each of those sets contain a finite number of points in $A$.
Therefore $\bigcup \CC'$ contains a finite number of points in $A$.
However by definition of a subcover, $A \subseteq X \subseteq \bigcup \CC'$.
Thus $\bigcup \CC'$ contains all points in $A$, of which there are infinite.
This is a contradiction.
Therefore $A$ must have an $\omega$-accumulation point in $X$.
$\blacksquare$





