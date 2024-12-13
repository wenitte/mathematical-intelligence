# 

Source: https://proofwiki.org/wiki/Mapping_is_Bounded_on_Union_iff_Bounded_on_Each_Component/Real-Valued_Function



Theorem
Let $f$ be a real-valued function.

Then:

$f$ is bounded on the union of a finite number of sets within the domain of $f$
if and only if:

$f$ is bounded on each of the sets.


Proof
Let $S_i$, $i \in \set {1, \ldots, n}$, $n \in \N_{>0}$, denote sets within the domain of $f$.
Define $S = \ds \bigcup_{i \mathop = 1}^n S_i$.


Necessary Condition
Let $f$ be bounded on each of the sets $S_i$.
We need to prove that $f$ is bounded on $S$.

Let $b_i$ be a bound for $f$ on $S_i$, $i \in \set {1, \ldots, n}$.
Let $b = \map \max {b_1, \ldots, b_n}$ where $\max$ is the |maximum operation.
We note that $b \ge b_i$ for every $i$ in $\set {1, \ldots, n}$.
Now, by definition of bound, a number greater than or equal to a bound is also a bound.
Therefore, since $b_i$ is a bound for $f$ on $S_i$ and $b \ge b_i$, $b$ is a bound for $f$ on $S_i$ for every $i$.
Since $b$ is a bound for $f$ on every set $S_i$, $b$ is a bound for $f$ on the union of the sets $S_i$.
In other words, $f$ is bounded on $S$.
$\Box$


Sufficient Condition
Let $f$ be bounded on $S$.
We need to prove that $f$ is bounded on each of the sets $S_i$, $i \in \set {1, \ldots, n}$.

Since $f$ is bounded on $S$, there is a bound $K$ that satisfies $K \ge \size {\map f s}$ for every element $s$ in $S$.
Pick a set $S_i$.
Because $K \ge \size {\map f s}$ is true of every element $s$ of $S$, this is also true of every element of $S_i$  as $S_i$ is a subset of $S$.
Consequently, $K$ is a bound for $f$ on $S_i$.
Since $i$ is arbitrary, we conclude that $f$ is bounded on $S_i$ for every $i$ in $\set {1, \ldots, n}$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $5$: Compact spaces: $5.1$: Motivation: Step $2$




