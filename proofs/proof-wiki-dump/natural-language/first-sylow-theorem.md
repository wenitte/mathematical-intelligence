# 

Source: https://proofwiki.org/wiki/First_Sylow_Theorem

  This article was Featured Proof between 23 November 2008 and 1 December 2008.




Theorem
Let $p$ be a prime number.
Let $G$ be a group such that:

$\order G = k p^n$
where:

$\order G$ denotes the order of $G$
$p$ is not a divisor of $k$.

Then $G$ has at least one Sylow $p$-subgroup.


Corollary
Let $p$ be a prime number.
Let $G$ be a group.
Let:

$p^n \divides \order G$
where:

$\order G$ denotes the order of $G$
$n$ is a positive integer.

Then $G$ has at least one subgroup of order $p$.


Proof 1
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


Proof 2
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


Examples
Alternating Group on $4$ Letters
The Alternating Group on 4 Letters $A_4$ is of order $12 = 2^2 \times 3$.
Thus the First Sylow Theorem tells us that $A_4$ has:

at least one subgroup of order $4$
at least one subgroup of order $2$
at least one subgroup of order $3$
These it has.
But it has no subgroup of order $6$, although $6 \divides 12$.


Also see
Sylow Theorems


Note
By Orbits of Group Action on Sets with Power of Prime Size, it was clear that $k \divides \size {\Orb S}$.
However here, since it is established that $\size {\Stab S} = p^n$, and by Orbit-Stabilizer Theorem, we also have $k = \size {\Orb S}$.


Source of Name
This entry was named for Peter Ludwig Mejdell Sylow.


Historical Note
When cracking open the structure of a group, it is a useful plan to start with investigating the prime subgroups.
The Sylow Theorems are a set of results which provide us with just the sort of information we need.
Ludwig Sylow was a Norwegian mathematician who established some important facts on this subject.
He published what are now referred to as the Sylow Theorems in $1872$.
The name is pronounced something like Soolof.

There is no standard numbering for the Sylow Theorems.
Different authors use different labellings.
Therefore, the nomenclature as defined on $\mathsf{Pr} \infty \mathsf{fWiki}$ is to a greater or lesser extent arbitrary.


First Sylow Theorem
Sylow's original work in $1872$ demonstrated the existence of what is now known as a Sylow $p$-subgroup.
The corollary, that there exists a subgroup of order $p^n$ for all $p^n \divides \order G$, was deduced later, but is frequently itself referred to as the First Sylow Theorem.

The proof using the Orbit-Stabilizer Theorem is based on one published by Helmut Wielandt in $1959$.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $25$. Cyclic Groups and Lagrange's Theorem: Exercise $25.18$




