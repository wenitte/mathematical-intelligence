# 

Source: https://proofwiki.org/wiki/Non-Abelian_Order_8_Group_has_Order_4_Element

Theorem
Let $G$ be a non-abelian group of order $8$.
Then $G$ has at least one element of order $4$.


Proof
Let $e \in G$ be the identity of $G$.
Let $g \in G$ be an arbitrary element of $G$ such that $g \ne e$.
From Identity is Only Group Element of Order 1, only $e$ has order $1$.
Thus from Order of Element Divides Order of Finite Group:

$\order g \in \set {2, 4, 8}$

Suppose $\order g = 8$.
Then $G$ is cyclic.
So by Cyclic Group is Abelian, $G$ would be abelian.
So $g$ cannot be of order $8$.

Suppose all elements of $G \setminus \set e$ are of order $2$.
Then by definition $G$ is a Boolean group.
By Boolean Group is Abelian, $G$ would be abelian. 
So the only option left is for at least one element of $G$ to be of order $4$.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Cosets and Lagrange's Theorem: Exercise $18$




