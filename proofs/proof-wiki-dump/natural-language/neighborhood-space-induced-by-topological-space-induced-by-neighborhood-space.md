# 

Source: https://proofwiki.org/wiki/Neighborhood_Space_induced_by_Topological_Space_induced_by_Neighborhood_Space

Theorem
Let $\struct {S, \NN}$ be a neighborhood space.
Let $\struct {S, \tau}$ be the topological space induced by $\NN$ on $S$.
Let $\struct {S, \NN'}$ be the neighborhood space induced by $\tau$ on $S$.

Then $\NN = \NN'$.


Proof
Let $x \in S$.

Let $\NN_x$ be the set of all neighborhoods of $x$.
Let $N \in \NN_x$ be a neighborhood of $x$.
From Subset in Neighborhood Space is Neighborhood iff it contains Open Set, $N$ is the superset of some open set $U$ in $\struct {S, \NN}$.

By Neighborhood Space is Topological Space we have that $U$ is an open set of $\struct {S, \tau}$.
Thus, by definition, $N$ is a neighborhood of $x$ in the context of the topological space $\struct {S, \tau}$.
Thus by definition of the neighborhood space induced by $\tau$ on $S$, it follows that:

$N \in \NN'_x$
where $\NN'_x$ is the set of all neighborhoods of $x$ in $\struct {S, \NN'}$.
Thus $\NN_x \subseteq \NN'_x$.
$\Box$

Now suppose that $N \in \NN'_x$.
Then, by definition of neighborhood, $N$ is the superset of some open set $U$ in $\struct {S, \tau}$ such that $x \in U$.
Since $U \in \tau$ it follows that $U$ is an open setin $\struct {S, \NN}$.
So by Subset in Neighborhood Space is Neighborhood iff it contains Open Set, $N$ is a neighborhood of $x$ in $\struct {S, \NN}$.
That is:

$N \in \NN_x$
Thus it follows that $\NN_x \subseteq \NN'_x$
$\Box$

It follows by definition of set equality that $\NN_x = \NN'_x$.
As $x$ is arbitrary, it applies to all $x \in S$.
Hence the result.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $3$: Topological Spaces: $\S 3$: Neighborhoods and Neighborhood Spaces




