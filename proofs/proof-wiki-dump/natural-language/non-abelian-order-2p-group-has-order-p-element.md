# 

Source: https://proofwiki.org/wiki/Non-Abelian_Order_2p_Group_has_Order_p_Element

Theorem
Let $p$ be an odd prime.
Let $G$ be a non-abelian group of order $2 p$.

Then $G$ has at least one element of order $p$.


Proof
By Lagrange's Theorem, all the elements of $G$ have orders $1$, $2$, $p$ or $2p$.
From Identity is Only Group Element of Order 1, $2 p - 1$ elements of $G$ have orders greater than $1$.
From Cyclic Group is Abelian, $G$ is not the cyclic group $2 p$.
If $g \in G$ was of order $2 p$ then $g$ would generate the cyclic group $C_{2 p}$.
Thus $G$ has no element of order $2 p$.
So all elements of $G$ except the identity have orders $2$ or $p$.

Aiming for a contradiction, suppose $G$ has no element of order $p$.
Then all elements are of order $2$.
Then $G$ is a Boolean group.
Then by Boolean Group is Abelian, $G$ is abelian.
This contradicts the assertion that $G$ is non-abelian.
Hence the result by Proof by Contradiction.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $23$




