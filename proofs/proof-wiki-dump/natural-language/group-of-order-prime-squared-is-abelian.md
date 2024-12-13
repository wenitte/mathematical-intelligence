# 

Source: https://proofwiki.org/wiki/Group_of_Order_Prime_Squared_is_Abelian

Theorem
A group whose order is the square of a prime is abelian.


Proof
Let $G$ be a group of order $p^2$, where $p$ is prime.
Let $\map Z G$ be the center of $G$.
By Center of Group is Subgroup, $\map Z G$ is a subgroup of $G$.
By Lagrange's Theorem:

$\order {\map Z G} \divides \order G$
It follows that $\order {\map Z G} = 1, p$ or $p^2$.
By Center of Group of Prime Power Order is Non-Trivial:

$\order {\map Z G} \ne 1$

Suppose $\order {\map Z G} = p$.
Then:














\(\ds \order {\map Z G}\)

\(=\)







\(\ds \index G {\map Z G}\)





Definition of Index of Subgroup














\(\ds \)

\(=\)







\(\ds \order G / \order {\map Z G}\)





Lagrange's Theorem














\(\ds \)

\(=\)







\(\ds p^2 / p\)




















\(\ds \)

\(=\)







\(\ds p\)









So $G / \map Z G$ is non-trivial, and of prime order.
From Prime Group is Cyclic, $G / \map Z G$ is a cyclic group.
But by Quotient of Group by Center Cyclic implies Abelian, that cannot be the case.
Therefore $\order {\map Z G} = p^2$ and therefore $\map Z G = G$.
Therefore $G$ is abelian.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 51 \beta$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 51.2$ The quotient group $G / Z$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $10$: The Orbit-Stabiliser Theorem: Corollary $10.22$




