# 

Source: https://proofwiki.org/wiki/Ordering_on_Multiindices_is_Partial_Order



Theorem
Let $Z$ be the set of multiindices indexed by a set $J$.
The ordering on $Z$ is a partial ordering.


Proof
Let $\le$ denote the ordering on integers.
Let $\preceq$ denote the ordeing on multiindices.
Recall that if $k = \family {k_j}_{j \mathop \in J}$ and $\ell = \family {\ell_j}_{j \mathop \in J}$ are multiindices, then $k \le \ell$ if $k_j \preceq \ell_j$ for all $j \in J$.
Let $k$ and $\ell$ be as above, and let $m = \family {m_j}_{j \mathop \in J} \in Z$.
From Integers under Addition form Totally Ordered Group, the integers are totally ordered by $\le$.
Hence the ordering on the integers is reflexive, antisymmetric and transitive.


Reflexivity
By reflexivity of $\le$, we have for all $j \in J$:

$k_j \le k_j$
This shows that $\preceq$ is reflexive.
$\Box$


Antisymmetry
Suppose that $k \preceq \ell$ and $\ell \preceq k$.
Then for all $j \in J$, we have:

$k_j \le \ell_j \le k_j$
By antisymmetry of $\le$, we have $k_j = \ell_j$ for all $j$, that is, $k = \ell$.
This shows $\preceq$ to be antisymmetric.
$\Box$


Transitivity
Suppose that $k \preceq \ell$ and $ell \preceq m$.
Then for all $j \in J$, we have:

$k_j \le \ell_j$ and $\ell_j \le m_j$
By transitivity of $\le$, this shows that for all $j \in J$, $k_j \le m_j$.
Therefore $k \preceq m$, and $\preceq$ is shown to be transitive.
$\blacksquare$





