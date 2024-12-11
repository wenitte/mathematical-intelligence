# 

Source: https://proofwiki.org/wiki/Abelian_Group_is_Simple_iff_Prime



Theorem
Let $G$ be a non-trivial abelian group.
Then $G$ is simple if and only if $G$ is a prime group.


Proof
First we note that the trivial group is (trivially) simple, but not prime because $1$ is not prime.
Hence the specification of $G$ as being non-trivial.


Necessary Condition
Let $G$ be a simple non-trivial abelian group.
Aiming for a contradiction, suppose $G$ is an infinite group.
Then by Infinite Group has Infinite Number of Subgroups $G$ has an infinite number of distinct subgroups.
But then by Subgroup of Abelian Group is Normal, $G$ cannot be simple.
So by contradiction $G$ must be finite.

Let $n$ be the order of $G$.
By definition of simple, $G$ has no non-trivial proper normal subgroups.
From Subgroup of Abelian Group is Normal, it follows that $G$ can have no non-trivial proper subgroups at all.
From Cauchy's Group Theorem, if $p$ is a prime number which is a divisor of $n$, then $G$ has a subgroup of order $p$.
It follows that if $G$ is simple, there can be no prime number less than $n$ which is a divisor of $n$.
It follows that $n$ is prime.
$\Box$


Sufficient Condition
Suppose $G$ is a prime group.
By Prime Group is Simple, it follows that $G$ is simple.
Because $G$ is prime, its order is greater than $1$.
Thus $G$ is non-trivial.
$\blacksquare$


Sources
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $1$: Introduction to Finite Group Theory: $1.11$
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): simple group




