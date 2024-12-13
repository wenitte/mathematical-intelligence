# 

Source: https://proofwiki.org/wiki/Partition_Topology_is_not_T0

Theorem
Let $S$ be a set and let $\PP$ be a partition on $S$ which is not the (trivial) partition of singletons.
Let $T = \struct {S, \tau}$ be the partition space whose basis is $\PP$.
Then $T$ is not a $T_0$ (Kolmogorov) space.


Proof
As $\PP$ is not the partition of singletons, there exists some $H \in \PP$ such that $a, b \in H: a \ne b$.
Any union of sets from $\PP$ which includes $H$ will therefore contain both $a$ and $b$.
Therefore, any element of $\tau$ containing $a$ will also contain $b$, and similarly, any element of $\tau$ containing $b$ will also contain $a$.
So there is no open set in $T$ containing $a$ and not $b$, or $b$ and not $a$.
Hence the result, by definition of $T_0$ (Kolmogorov) space.
$\blacksquare$

Note the reason for the exception in the statement as given.
If $\PP$ is the partition of singletons:

$\PP = \set {\set x: x \in S}$
then $T$ as constructed is the discrete topology on $S$.
From Discrete Space satisfies all Separation Properties, in that case $T$ does satisfy the $T_0$ property.


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $5$. Partition Topology: $2$




