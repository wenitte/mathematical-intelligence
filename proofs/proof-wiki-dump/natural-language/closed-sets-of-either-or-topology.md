# 

Source: https://proofwiki.org/wiki/Closed_Sets_of_Either-Or_Topology

Theorem
Let $T = \struct {S, \tau}$ be the either-or space.

Then the closed sets of $T$ are:

$\O$
$S$
$\set {-1}$
$\set 1$
$\set {-1, 1}$
Any subset of $\closedint {-1} 1$ containing $\set 0$ as a subset.


Proof
From Open and Closed Sets in Topological Space we have that $\O$ and $S$ are closed sets trivially.

From the definition of closed set, we have:

$U$ is open in $T$ if and only if $S \setminus U$ is closed in $T$
$U$ is closed in $T$ if and only if $S \setminus U$ is open in $T$
where $S \setminus U$ denotes the relative complement of $U$ in $S$.
Now we have that:

$\openint {-1} 1$ is open in $T$ so $S \setminus \openint {-1} 1 = \set {-1, 1}$ is closed in $T$.
Both $\hointr {-1} 1 \supseteq \openint {-1} 1$ and $\hointr {-1} 1 \supseteq \openint {-1} 1$ therefore are open in $T$, so $\set {-1}$ and $\set 1$ are closed in $T$.
Apart from $S$ itself, there are no other subsets of $S = \closedint {-1} 1$ which have $\openint {-1} 1$ as a subset.

Finally, let $U \in \tau: \set 0 \nsubseteq U$.
Then by the definition of relative complement $\set 0 \subseteq S \setminus U$.
Now suppose $\set 0 \subseteq V$.
Then again by the definition of relative complement $\set 0 \nsubseteq S \setminus V$.
So $S \setminus V$ is open in $T$ and so $V$ is closed in $T$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $17$. Either-Or Topology




