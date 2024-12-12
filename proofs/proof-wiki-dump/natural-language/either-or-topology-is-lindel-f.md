# 

Source: https://proofwiki.org/wiki/Either-Or_Topology_is_Lindel%C3%B6f

Theorem
Let $T = \struct {S, \tau}$ be the either-or space.

Then $T$ is a Lindelöf space.


Proof 1
We have:

Either-Or Topology is Compact
Compact Space is Lindelöf
Hence the result.
$\blacksquare$


Proof 2
Any open cover $\CC$ of $T$ must contain an open set of $T$ which contains $0$.
So $\openint {-1} 1$ will always be covered by one set in $\CC$, leaving just $-1$ and $1$ possibly needing to be included in at most two other sets.
So $\CC$ has a subcover containing at most three sets.
Hence $T$ is a Lindelöf space by definition.
$\blacksquare$





