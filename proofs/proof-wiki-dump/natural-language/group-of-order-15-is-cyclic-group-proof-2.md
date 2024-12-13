# 

Source: https://proofwiki.org/wiki/Group_of_Order_15_is_Cyclic_Group/Proof_2

Theorem
Let $G$ be a group whose order is $15$.
Then $G$ is cyclic.


Proof
From Number of Sylow p-Subgroups in Group of Order 15:

the number of Sylow $3$-subgroups is in the set $\set {1, 4, 7, \ldots}$
the number of Sylow $5$-subgroups is in the set $\set {1, 6, 11, \ldots}$.
From the Fifth Sylow Theorem

the number of Sylow $3$-subgroups is a divisor of $15$
the number of Sylow $5$-subgroups is a divisor of $15$.
Combining the above:

there is a unique Sylow $3$-subgroup in $G$, which we will denote $P$
there is a unique Sylow $5$-subgroup in $G$, which we will denote $Q$.

Let $x \in G$ be of order $3$.
Then by Non-Trivial Group has Non-Trivial Cyclic Subgroup, $\gen x$ has $3$ elements.
Thus $\gen x$ is a Sylow $3$-subgroup and so:

$\gen x = P$
and so $x$ is one of the $2$ non-identity elements of $P$.

Similarly, let $y \in G$ be of order $5$.
Then by a similar argument:

$\gen y = Q$
and so $y$ is one of the $4$ non-identity elements of $Q$.

So $G$ has:

$1$ element of order $1$ (that is, the identity)
$2$ elements of order $3$
$4$ elements of order $5$
which leaves $8$ elements whose order is still to be determined.
From Order of Element Divides Order of Finite Group, they are all of order $1$, $3$, $5$ or $15$.
As the elements of order $1$, $3$ and $5$ have been accounted for, they must all be of order $15$.
So $G$ has $8$ distinct elements of order $15$.
Hence $G$ must be cyclic.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $11$: The Sylow Theorems: Example $11.12$




