# 

Source: https://proofwiki.org/wiki/Lagrange%27s_Theorem_(Group_Theory)/Proof_2



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


Proof
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


Source of Name
This entry was named for Joseph Louis Lagrange.


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.4$. Lagrange's theorem
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 40$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 43.1$ Lagrange's theorem
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $0$: Some Conventions and some Basic Facts
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions: Theorem $1$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $5$: Cosets and Lagrange's Theorem: Theorem $5.9$




