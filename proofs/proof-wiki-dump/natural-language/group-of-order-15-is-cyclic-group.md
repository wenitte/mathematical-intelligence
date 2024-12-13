# 

Source: https://proofwiki.org/wiki/Group_of_Order_15_is_Cyclic_Group



Theorem
Let $G$ be a group whose order is $15$.
Then $G$ is cyclic.


Proof 1
We have that $15 = 3 \times 5$.
Thus:

$15$ is square-free
$5 \equiv 2 \pmod 3$
$3 \equiv 3 \pmod 5$
The conditions are fulfilled for Condition for Nu Function to be 1.
Thus $\map \nu {15} = 1$ and so all groups of order $15$ are cyclic.
$\blacksquare$


Proof 2
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


Proof 3
Aiming for a contradiction, suppose $G$ is non-abelian.

Let $n_3$ denote the number of elements of $G$ of order $3$.
From Number of Elements of Order p in Group of Order pq is Multiple of q, $n_3$ is a multiple of $5$.
From Number of Order p Elements in Group with m Order p Subgroups, $n_3$ is a multiple of $2$.
Therefore $n_3$ is a multiple of $10$.

Let $n_5$ denote the number of elements of $G$ of order $5$.
From Number of Elements of Order p in Group of Order pq is Multiple of q, $n_5$ is a multiple of $3$.
From Number of Order p Elements in Group with m Order p Subgroups, $n_5$ is a multiple of $4$.
Therefore $n_5$ is a multiple of $12$.

Together with the identity element which has order $1$, that makes $1 + 12 a + 10 b = 15$ for some positive integers $a$ and $b$.
This is impossible.
Hence by Proof by Contradiction it follows that $G$ must be abelian.

Since $15$ is a product of $2$ distinct primes, by Abelian Group of Semiprime Order is Cyclic, $G$ is cyclic.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $11$: The Sylow Theorems: Example $11.3$




