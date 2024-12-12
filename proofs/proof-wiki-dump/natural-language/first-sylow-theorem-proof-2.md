# 

Source: https://proofwiki.org/wiki/First_Sylow_Theorem/Proof_2



Theorem
Let $p$ be a prime number.
Let $G$ be a group such that:

$\order G = k p^n$
where:

$\order G$ denotes the order of $G$
$p$ is not a divisor of $k$.

Then $G$ has at least one Sylow $p$-subgroup.


Proof
Let $\Bbb S = \set {S \subseteq G: \order S = p^n}$, that is, the set of all of subsets of $G$ which have exactly $p^n$ elements.
Now let $G$ act on $\Bbb S$ by the rule:

$\forall S \in \Bbb S: g * S = g S = \set {x \in G: x = g s: s \in S}$
From Set of Orbits forms Partition, the orbits partition $\mathbb S$.
Let these orbits be represented by $\set {S_1, S_2, \ldots, S_n}$, so that:

$(1): \quad \size {\mathbb S} = \size {\Orb {S_1} } + \card {\Orb {S_2} } + \ldots + \size {\Orb {S_r} }$
Thus each $\Orb {S_i}$ is the orbit under $*$ of some $S_i$ whose order is $p^n$.
By the Orbit-Stabilizer Theorem:

$(2): \quad \order {\Orb {S_i} } = \dfrac {\order G} {\order {\Stab {S_i} } }$ for all $i \in \set {1, 2, \ldots, n}$
where $\Stab {S_i}$ is the stabilizer of $S_i$ under $*$.

Let $s \in S_i$ and $x \in \Stab {S_i}$.
Then $s x \in S_i$ because $S_i x = S_i$.
Let $s$ be fixed while $x$ runs over $\Stab {S_i}$.
Then:

$\forall s \in S_i: s \Stab {S_i} \subseteq S_i$
Therefore $S_i$ is the union of all the left cosets $s \Stab {S_i}$.
These left cosets may not all be distinct.
Let $r_i$ be the number of distinct left cosets of $s \Stab {S_i}$.
Then:

$\card {S_i} = r_i \card {\Stab {S_i} }$
because:

distinct left cosets are disjoint
all have the same cardinality $\card {\Stab {S_i} }$.
Thus:

$(3): \quad \card {\Stab {S_i} } \divides \card {S_i} = p^n$

Because the only divisors of $p^n$ are smaller powers of $p$:

$\card {\Stab {S_i} } = p^{n_i}$
for some $n_i \le n$, for $i = 1, 2, \ldots, r$.
We can write:

$g = \order G = k p^n$
where $p$ does not divide $k$.

From $(2)$ and $(3)$:

$\card {S_i} = k p^{d_i}$
where $d_i = n - n_i$ for $i = 1, 2, \ldots, r$.
From Cardinality of Set of Subsets:

$\card {\Bbb S} = \dbinom {k p^n} {p_n}$
We have from Binomial Coefficient involving Power of Prime that:

$\dbinom {k p^n} {p_n} \equiv k \pmod p$
But $p$ does not divide $k$.
Hence $p$ does not divide $\card {\Bbb S}$.
Hence by $(1)$ and $(4)$:

$p \nmid k \paren {p^{d_1} + p^{d_2} + \cdots p^{d_r} }$
If $d_i > 0$ for all $i = 1, 2, \ldots, r$, then $p$ would divide this integer.
So there must be some $i$ such that $d_i = 0$.
Then, for this $i$:

$n_i = n$
That is:

$\card {\Stab {S_i} } = p^n$
Thus $\Stab {S_i}$ is the subgroup of $G$ of order $p_n$ that was asserted.
$\blacksquare$


Source of Name
This entry was named for Peter Ludwig Mejdell Sylow.


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.5$. Orbits: Example $121$




