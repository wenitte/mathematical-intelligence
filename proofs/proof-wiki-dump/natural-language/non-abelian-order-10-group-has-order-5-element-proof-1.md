# 

Source: https://proofwiki.org/wiki/Non-Abelian_Order_10_Group_has_Order_5_Element/Proof_1

Theorem
Let $G$ be a non-abelian group of order $10$.
Then $G$ has at least one element of order $5$.


Proof
By Lagrange's Theorem, all the elements of $G$ have orders $1$, $2$, $5$ or $10$.
From Identity is Only Group Element of Order 1, $9$ elements of $G$ have orders greater than $1$.
From Cyclic Group is Abelian, $G$ is not cyclic.
If $g \in G$ was of order $10$ then $g$ would generate the cyclic group $C_{10}$.
Thus $G$ has no element of order $10$.
So all elements of $G$ except the identity have orders $2$ or $5$.

Aiming for a contradiction, suppose $G$ has no element of order $5$.
Then all elements are of order $2$.
Then $G$ is a Boolean group.
Then by Boolean Group is Abelian, $G$ is abelian.
This contradicts the assertion that $G$ is non-abelian.
Hence the result by Proof by Contradiction.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 44$. Some consequences of Lagrange's Theorem: Worked Examples: $1$




