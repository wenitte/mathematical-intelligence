# 

Source: https://proofwiki.org/wiki/Lagrange%27s_Theorem_(Group_Theory)

  This article was Featured Proof between 5 October 2008 and 12 October 2008.

This proof is about Lagrange's Theorem in the context of Group Theory. For other uses, see Lagrange's Theorem.



Theorem
Let $G$ be a finite group.
Let $H$ be a subgroup of $G$.

Then:

$\order H$ divides $\order G$
where $\order G$ and $\order H$ are the order of $G$ and $H$ respectively.

In fact:

$\index G H = \dfrac {\order G} {\order H}$
where $\index G H$ is the index of $H$ in $G$.

When $G$ is an infinite group, we can still interpret this theorem sensibly:

A subgroup of finite index in an infinite group is itself an infinite group.
A finite subgroup of an infinite group has infinite index.


Proof 1
Let $G$ be finite.
Consider the mapping $\phi: G \to G / H^l$, defined as:

$\phi: G \to G / H^l: \map \phi x = x H^l$
where $G / H^l$ is the left coset space of $G$ modulo $H$.
For every $y H \in G / H^l$, there exists a corresponding $y \in G$, so $\phi$ is a surjection.
From Cardinality of Codomain of Surjection it follows that $G / H^l$ is finite.
From Cosets are Equivalent, $G / H^l$ has the same number of elements as $H$.
We have that the $G / H^l$ is a partition of $G$.
It follows from Number of Elements in Partition that $\index G H = \dfrac {\order G} {\order H}$
$\blacksquare$


Proof 2
Let $G$ be a group.
Let $H$ be a subgroup of $G$.
From Cosets are Equivalent, a left coset $y H$ has the same number of elements as $H$, namely $\order H$.
Since left cosets are identical or disjoint, each element of $G$ belongs to exactly one left coset.
From the definition of index of subgroup, there are $\index G H$ left cosets, and therefore:

$\order G = \index G H \order H$

Let $G$ be of finite order.
All three numbers are finite, and the result follows.

Now let $G$ be of infinite order.
If $\index G H = n$ is finite, then $\order G = n \order H$ and so $H$ is of infinite order.
If $H$ is of finite order such that $\order H = n$, then $\order G = \index G H \times n$ and so $\index G H$ is infinite.
$\blacksquare$


Proof 3
Follows directly from the Orbit-Stabilizer Theorem applied to Group Action on Coset Space.
$\blacksquare$


Examples
Intersection of Subgroups of Order $25$ and $36$
Let $G$ be a group.
Let $H$ and $K$ be subgroups of $G$ such that:

$\order H = 25$
$\order K = 36$
where $\order {\, \cdot \,}$ denotes the order of the subgroup.
Then:

$\order {H \cap K} = 1$


Order of Group with Subgroups of Order $25$ and $36$
Let $G$ be a group.
Let $H$ and $K$ be subgroups of $G$ such that:

$\order H = 25$
$\order K = 36$
where $\order {\, \cdot \,}$ denotes the order of the subgroup.
Then:

$900 \divides \order G$
where $\divides$ denotes divisibility.


Order of Union of Subgroups of Order $16$
Let $G$ be a group whose identity is $e$.

Let $H$ and $K$ be subgroups of $G$ such that:

$\order H = \order K = 16$
$H \ne K$
where $\order {\, \cdot \,}$ denotes the order of the subgroup.

Then:

$24 \le \order {H \cup K} \le 31$


Also see
Group does not Necessarily have Subgroup of Order of Divisor of its Order, where it is shown that the converse is not true in general.


Source of Name
This entry was named for Joseph Louis Lagrange.


Historical Note
Lagrange's theorem was actually proved by Camille Jordan.
Lagrange's proof merely showed that a subgroup of the symmetric group $S_n$ has an order which is a divisor of $n!$.


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Problem $\text {GG}$
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 5$: Groups $\text{I}$: Subgroups
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Lagrange's theorem: 2.
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Lagrange's theorem: 2.

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2014: Mahim Ranjan Adhikari and Avishek Adhikari: Basic Modern Algebra with Applications: $\S 2$: Some Basic Facts, Proof and Converse of Lagrange's Theorem.




