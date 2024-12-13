# 

Source: https://proofwiki.org/wiki/Rationals_are_Everywhere_Dense_in_Reals/Topology

Theorem
Let $\struct {\R, \tau_d}$ denote the real number line with the usual (Euclidean) topology.
Let $\Q$ be the set of rational numbers.

Then $\Q$ is everywhere dense in $\struct {\R, \tau_d}$.


Proof
Let $x \in \R$.
Let $U \subseteq \R$ be an open set of $\struct {\R, \tau_d}$ such that $x \in U$.

From Basis for Euclidean Topology on Real Number Line, there exists an open interval $V = \openint {x - \epsilon} {x + \epsilon} \subseteq U$ for some $\epsilon > 0$ such that $x \in V$.
Now consider the open interval $\openint x {x + \epsilon} \subseteq V$.
By Subset Relation is Transitive it follows that $\openint x {x + \epsilon} \subseteq U$.

Note that $x \notin \openint x {x + \epsilon}$.
From Between two Real Numbers exists Rational Number, there exists $y \in \Q: y \in \openint x {x + \epsilon}$.
As $x \notin \openint x {x + \epsilon}$, it must be the case that $x \ne y$.
That is, $V$ is an open set of $\struct {\R, \tau_d}$ containing $x$ which also contains an element of $\Q$ other than $x$.
As $V$ is arbitrary, it follows that every open set of $\struct {\R, \tau_d}$ containing $x$ also contains an element of $\Q$ other than $x$.
That is, $x$ is by definition a limit point of $\Q$.
As $x$ is arbitrary, it follows that all elements of $\R$ are limit points of $\Q$.
The result follows from the definition of everywhere dense.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Definition $3.7.21$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): dense set
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): dense set




