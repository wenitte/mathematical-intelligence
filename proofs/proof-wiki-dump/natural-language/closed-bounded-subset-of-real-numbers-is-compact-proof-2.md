# 

Source: https://proofwiki.org/wiki/Closed_Bounded_Subset_of_Real_Numbers_is_Compact/Proof_2

Theorem
Let $\R$ be the real number line considered as an Euclidean space.
Let $S \subseteq \R$ be a closed and bounded subspace of $\R$.

Then $S$ is compact in $\R$.


Proof
Let $S$ be closed and bounded.
As $S$ is bounded, there exist some $a, b \in \R$ such that:

$S \subseteq \openint a b$
where $\openint a b$ is the open interval between $a$ and $b$.
It follows that $S \subseteq \closedint a b$.

Consider the set:

$U = \relcomp \R S \cap \openint {a - 1} {b + 1}$
By inspection it can be seen that:

$U = \openint {a - 1} a \cup \openint b {b + 1}$
By Union of Open Sets of Metric Space is Open, it follows that $U$ is open in $\R$.

Let $\CC$ be an open cover for $S$.
Then we can construct the open cover $\CC' = \CC \cup \set U$ for $\closedint a b$.
Let $\FF' \subseteq \CC'$ be a finite subcover of $\CC'$ for $\closedint a b$.
Then $\FF = \FF' \setminus \set U$ is the desired finite subcover for $S$.
Hence it is sufficient to prove that any open cover for $\closedint a b$, has a finite subcover.

So, suppose $S = \closedint a b$ and create the set $T \subseteq \closedint a b$ as follows:
Let $a \le x \le b$.
Then $x \in T$ if and only if $\closedint a x$ has a finite subcover of $\CC$.
We have that $a \in T$ and that $b$ is an upper bound for $T$.
Let $l = \map \sup T$ be the supremum of $T$.
Let $L \in \CC$ such that $l \in L$.
Since $L$ is open:

$\exists \epsilon \in \R_{>0}: \openint {l - \epsilon} {l + \epsilon} \subseteq L$
Since $l = \map \sup T$ there exists $t \in T$ such that $t > l - \epsilon$.
We have that $\FF$ is a finite subset of $\CC$ such that $\ds \closedint a t \subseteq \bigcup \FF$.
Then $\FF \cup \set L$ is a finite subset of $\CC$ whose union contains $\closedint a {l + \delta}$ for every $\delta \in \openint 0 \epsilon$.
Since $l$ is an upper bound for $T$, it follows that $l + \delta \notin T$.
Thus $l + \delta > b$ for all $\delta > 0$.
That is, $l \ge b$.
But by definition, $l \le b$.
So $l = b$ and so $\CC$ has a finite subcover for $\closedint a b$.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{III}$: Metric Spaces: Compactness




