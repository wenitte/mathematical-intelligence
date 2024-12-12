# 

Source: https://proofwiki.org/wiki/Fourth_Sylow_Theorem/Proof_1

Theorem
The number of Sylow $p$-subgroups of a finite group is congruent to $1 \pmod p$.


Proof
Let $G$ be a finite group such that $\order G = k p^n$ where $p \nmid k$ and $n > 0$.
Let $r$ be the number of Sylow $p$-subgroups of $G$.

We want to show that $r \equiv 1 \pmod p$.

Let $\mathbb S = \set {S \subseteq G: \card S = p^n}$, that is, the set of all of subsets of $G$ which have exactly $p^n$ elements.
From the reasoning in the First Sylow Theorem, we have:

$\size {\mathbb S} = \dbinom {p^n k} {p^n}$

Let $G$ act on $\mathbb S$ by the group action defined in Group Action on Sets with k Elements::

$\forall S \in \mathbb S: g \wedge S = g S = \set {x \in G: x = g s: s \in S}$
From Orbits of Group Action on Sets with Power of Prime Size:

there are exactly as many Sylow $p$-subgroups as there are orbits whose length is not divisible by $p$.
Also by Orbits of Group Action on Sets with Power of Prime Size:

all the terms in the Partition Equation are divisible by $k$, perhaps also divisible by $p$.

We can write the Partition Equation as:

$\size {\mathbb S} = \size {\Orb {S_1} } + \size {\Orb {S_2} } + \cdots + \size {\Orb {S_r} } + \size {\Orb {S_{r + 1} } } + \cdots + \size {\Orb {S_s} }$
where the first $r$ terms are the orbits containing the Sylow $p$-subgroups:

$\Stab {S_i}$
For each of these:

$\order G = \size {\Orb {S_i} } \times \size {\Stab {S_i} } = p^n \size {\Orb {S_i} }$
Thus:

$\size {\Orb {S_i} } = k$
for $1 \le i \le r$.
Each of the rest of the orbits are divisible by both $p$ and $k$, as we have seen.
So:

$\size {\mathbb S} = k r + m p k$
where:

the first term corresponds to the $r$ orbits containing the Sylow $p$-subgroups
the second term corresponds to all the rest of the orbits
$m$ is some unspecified integer.
That is, there exists some integer $m$ such that:

$\size {\mathbb S} = \dbinom {p^n k} {p^n} = k r + m p k$
Now this of course applies to the special case of the cyclic group $C_{p^n k}$.
In this case, there is exactly one subgroup for each divisor of $p^n k$.
In particular, there is exactly one subgroup of order $p^n$.
Hence, in this case:

$r = 1$

So we have an integer $m'$ such that $\dbinom {p^n k} {p^n} = k + m' p k$.
We can now equate these expressions:














\(\ds k r + m p k\)

\(=\)







\(\ds k + m' p k\)














\(\ds \leadsto \ \ \)





\(\ds r + m p\)

\(=\)







\(\ds 1 + m' p\)





dividing by $k$








\(\ds \leadsto \ \ \)





\(\ds r - 1\)

\(=\)







\(\ds p \paren {m' - m}\)














\(\ds \leadsto \ \ \)





\(\ds r - 1\)

\(\equiv\)







\(\ds 0 \pmod p\)














\(\ds \leadsto \ \ \)





\(\ds r\)

\(\equiv\)







\(\ds 1 \pmod p\)










and the proof is complete.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $11$: The Sylow Theorems: Theorem $11.6$




