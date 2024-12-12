# 

Source: https://proofwiki.org/wiki/Finite_Topological_Space_is_Compact



Theorem
Let $T = \struct {S, \tau}$ be a topological space where $S$ is a finite set.

Then $T$ is compact.


Proof by selecting finite subcover
Let $\VV$ be an open cover of $T$.
For each $x \in S$, define $\VV_x$ to be $\left\{{V \in \VV : x \in V}\right\}$

Since $S$ is finite, and since by definition of a cover, each $x\in S$ is contained in at least one $V$ in $\VV$, we have that $\set {\VV_x : x \in S}$ is a finite collection of nonempty sets.
From Principle of Finite Choice, there is a choice function which selects one $V_x$ from $\VV_x$ for each $x \in S$.  By definition of $\VV_x$, such a $V_x$ contains $x$.

Since there were only finitely many $\VV_x$, this provides finitely many open sets $V_x \in \VV$ such that $\ds S \subseteq \bigcup_{x \mathop \in S} V_x$.

Thus $\set {\VV_x : x \in S}$ is a finite subcover of $\VV$.
The result follows by definition of compact.
$\blacksquare$


Proof by finiteness of the topology
From Power Set of Finite Set is Finite, the power set of $S$ is finite.
Since the topology $\tau$ is by definition a set of subsets of $S$, it follows that $\tau$ is finite as well.
Let $\VV$ be an open cover of $S$.
By definition $\VV \subseteq \tau$ and so is also a finite set.
From Set is Subset of Itself, $\VV \subseteq \VV$.
Thus by definition $\VV$ is a finite subcover of $\VV$.
The result follows by definition of compact.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $5$: Compact spaces: $5.2$: Definition of compactness
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $5$: Compact spaces: Exercise $5.10: 1$




