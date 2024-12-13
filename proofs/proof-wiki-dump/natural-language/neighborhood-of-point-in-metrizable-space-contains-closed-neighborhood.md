# 

Source: https://proofwiki.org/wiki/Neighborhood_of_Point_in_Metrizable_Space_contains_Closed_Neighborhood

Theorem
Let $T = \struct {S, \tau}$ be a metrizable topological space.
Let $x \in S$ be an arbitrary point of $T$.
Let $N$ be a neighborhood of $x$.

Then $N$ has as a subset a neighborhood $V$ of $x$ such that $V$ is closed.


Proof
Since $N$ is a neighborhood of $x$, there exists an open set $U \subseteq N$ containing $x$ by definition.
As $\struct {S, \tau}$ is metrizable, the set $U$ is open with respect to some metric space $\struct {S, d}$.
Hence:

$\exists \epsilon > 0: \map {\BB_\epsilon} x \subseteq U$
where $\map {\BB_\epsilon} x$ denotes the open $\epsilon$-ball of $x$.
Taking $\zeta = \dfrac \epsilon 2$, we have that the closed $\zeta$-ball of $x$ is contained in $\map {\BB_\epsilon} x$, and hence is a subset of $U \subseteq N$. 
This closed ball is a closed neighborhood of $x$ in $\struct {S, \tau}$, and is a subset of $N$.
Hence the result.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $3$: Topological Spaces: $\S 2$: Topological Spaces: Exercise $5$




