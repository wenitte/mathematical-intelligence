# 

Source: https://proofwiki.org/wiki/Infimum_of_Union_of_Bounded_Below_Sets_of_Real_Numbers

Theorem
Let $A$ and $B$ be sets of real numbers.
Let $A$ and $B$ both be bounded below.

Then:

$\map \inf {A \cup B} = \min \set {\inf A, \inf B}$
where $\inf$ denotes the infimum.


Proof
Let $A$ and $B$ both be bounded below.
By the Continuum Property, $A$ and $B$ both admit an infimum.

Let $x \in A \cup B$.
Then either $x \ge \inf A$ or $x \ge \inf B$ by definition of infimum.
Hence:

$x \ge \min \set {\inf A, \inf B}$
and so $\min \set {\inf A, \inf B}$ is certainly a lower bound of $A \cup B$.
It remains to be shown that $\min \set {\inf A, \inf B}$ is the greatest lower bound.
Aiming for a contradiction, suppose there exists $m \in \R$ such that:

$m > \min \set {\inf A, \inf B}$
and:

$\forall x \in A \cup B: x \ge m$
Without loss of generality, let $\inf A \le \inf B$.
Then:

$\min \set {\inf A, \inf B} = \sup A$
and so:

$m > \sup A$
But then by definition of infimum:

$\exists a \in A: a < m$
and so $m$ is not a lower bound of $A \cup B$.
This contradicts our assumption that $m$ is an infimum of $A \cup B$.
It follows by Proof by Contradiction that $\min \set {\inf A, \inf B}$ is the infimum of $A \cup B$.

The same argument shows, mutatis mutandis, that if $\inf A \le \inf B$, $\min \set {\inf A, \inf B}$ is the infimum of $A \cup B$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: Exercise $1.5: 3$




