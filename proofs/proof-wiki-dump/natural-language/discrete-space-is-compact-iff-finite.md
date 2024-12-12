# 

Source: https://proofwiki.org/wiki/Discrete_Space_is_Compact_iff_Finite



Theorem
Let $T = \struct {S, \tau}$ be a topological space where $\tau$ is the discrete topology on $S$.

Then $T$ is compact if and only if $S$ is a finite set, thereby making $\tau$ the finite discrete topology on $S$.


Proof
Necessary Condition
Let $T$ be a compact discrete space.
Aiming for a contradiction, suppose $T$ is infinite.
Let $\CC$ be the cover for $S$ defined as:

$\CC = \set {\set x: x \in S}$
As $S$ is an infinite set then so is $\CC$.
Let $\CC'$ be a proper subset of $\CC$.
Then:

$\exists y \in S: \set y \notin \CC'$
and so $\CC'$ is not a cover for $S$.
So by definition $\CC'$ is not a subcover of $\CC$.
So $\CC$ can have no finite subcover.
Hence by definition $T$ can not be compact.
By Proof by Contradiction it follows that if $T$ is compact then $S$ must be finite.
$\Box$


Sufficient Condition
Let $T$ be a finite discrete space.
Then from Finite Topological Space is Compact it follows that $T$ is a compact space.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $5$: Compact spaces: Exercise $5.10: 2$




