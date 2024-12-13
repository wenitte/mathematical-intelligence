# 

Source: https://proofwiki.org/wiki/Group_of_Order_15_is_Cyclic_Group/Proof_3

Theorem
Let $G$ be a group whose order is $15$.
Then $G$ is cyclic.


Proof
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
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $20$




