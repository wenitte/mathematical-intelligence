# 

Source: https://proofwiki.org/wiki/First_Sylow_Theorem/Proof_1



Theorem
Let $p$ be a prime number.
Let $G$ be a group such that:

$\order G = k p^n$
where:

$\order G$ denotes the order of $G$
$p$ is not a divisor of $k$.

Then $G$ has at least one Sylow $p$-subgroup.


Proof
Let $\order G = k p^n$ such that $p \nmid k$.
Let $\mathbb S = \set {S \subseteq G: \order S = p^n}$, that is, the set of all of subsets of $G$ which have exactly $p^n$ elements.
Let $N = \order {\mathbb S}$.

Now $N$ is the number of ways $p^n$ elements can be chosen from a set containing $p^n k$ elements.
From Cardinality of Set of Subsets, this is given by:

$N = \dbinom {p^n k} {p^n} = \dfrac {\paren {p^n k} \paren {p^n k - 1} \cdots \paren {p^n k - i} \cdots \paren {p^n k - p^n + 1} } {\paren {p^n} \paren {p^n - 1} \cdots \paren {p^n - i} \cdots \paren 1}$

From Binomial Coefficient involving Power of Prime:

$\dbinom {p^n k} {p^n} \equiv k \pmod p$
Thus:

$N \equiv k \pmod p$

Now let $G$ act on $\mathbb S$ by the rule:

$\forall S \in \mathbb S: g * S = g S = \set {x \in G: x = g s: s \in S}$
That is, $g * S$ is the left coset of $S$ by $g$.
From Group Action on Sets with k Elements, this is a group action.

Now, let $\mathbb S$ have $r$ orbits under this action.
From Set of Orbits forms Partition, the orbits partition $\mathbb S$.
Let these orbits be represented by $\set {S_1, S_2, \ldots, S_r}$, so that:














\(\ds \mathbb S\)

\(=\)







\(\ds \Orb {S_1} \cup \Orb {S_2} \cup \ldots \cup \Orb {S_r}\)




















\(\ds \size {\mathbb S}\)

\(=\)







\(\ds \size {\Orb {S_1} } + \card {\Orb {S_2} } + \ldots + \size {\Orb {S_r} }\)










If each orbit had length divisible by $p$, then $p \divides N$.
But this can not be the case, because, as we have seen:

$N \equiv k \pmod p$
So at least one orbit has length which is not divisible by $p$.
Let $S \in \set {S_1, S_2, \ldots, S_r}$ be such that $\size {\Orb S)} = m: p \nmid m$.
Let $s \in S$.
It follows from Group Action on Prime Power Order Subset that:

$\Stab S s = S$
and so:

$\size {\Stab S} = \size S = p^n$
From Stabilizer is Subgroup:

$\Stab S \le G$
Thus $\Stab S$ is the subgroup of $G$ with $p^n$ elements of which we wanted to prove the existence.
$\blacksquare$


Source of Name
This entry was named for Peter Ludwig Mejdell Sylow.


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $11$: The Sylow Theorems: Theorem $11.4$




