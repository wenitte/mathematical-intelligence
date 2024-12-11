# 

Source: https://proofwiki.org/wiki/Abelian_Group_of_Semiprime_Order_is_Cyclic

Theorem
Let $p$ and $q$ be distinct prime numbers.
Let $G$ be an abelian group such that:

$\order G = p q$
where $\order G$ denotes the order of $G$.

Then $G$ is cyclic.


Proof
By Order of Element Divides Order of Finite Group, the order of elements of $G$ are all in $\set {1, p, q, p q}$.
We have that Identity is Only Group Element of Order 1.

Suppose $G$ were to contain more than $p - 1$ elements of order $p$.
Then by Order of Finite Abelian Group with $p+$ Order $p$ Elements is Divisible by $p^2$:

$p^2 \divides \order G$
where $\divides$ denotes divisibility.
As $p^2 \nmid p q$ it follows that $G$ contains no more than $p - 1$ elements of order $p$.

Similarly it follows that $G$ contains no more than $q - 1$ elements of order $q$.

These, along with $e$, account for $\paren {p - 1} + \paren {q - 1} + 1 = p + q - 1$ elements.
Thus the number of elements of order $p q$ is:

$p q - \paren {p + q - 1} = \paren {p - 1} \paren {q - 1}$
which is strictly positive.
The result follows from Group whose Order equals Order of Element is Cyclic.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Cosets and Lagrange's Theorem: Exercise $20$




