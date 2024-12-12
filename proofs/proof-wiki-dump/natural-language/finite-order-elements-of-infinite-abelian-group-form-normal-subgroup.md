# 

Source: https://proofwiki.org/wiki/Finite_Order_Elements_of_Infinite_Abelian_Group_form_Normal_Subgroup



Theorem
Let $G$ be an infinite  abelian group.
Let $H \subseteq G$ be the subset of $G$ defined as:

$H := \set {x \in G: x \text { is of finite order in } G}$

Then $H$ forms a normal subgroup of $G$.


Corollary
All the elements of the quotient group $G / H$ are of infinite order except the identity.


Proof
Let $e$ be the identity element of $G$.
From Identity is Only Group Element of Order 1, $\order e = 1$ and so $H \ne \O$.

Let $a \in H$.
Then by Order of Group Element equals Order of Inverse:

$\order a = \order {a^{-1} }$
and so $a \in H$.

Let $a, b \in H$.
From Order of Product of Abelian Group Elements Divides LCM of Orders of Elements:

$\order {a b} \divides \lcm \set {\order a, \order b}$
where:

$\order a$ denotes the order of $a$
$\divides$ denotes divisibility
$\lcm$ denotes the lowest common multiple.
Thus $a b$ is also of finite order.
Thus by definition:

$a b \in H$

By the Two-Step Subgroup Test it follows that $H$ is a subgroup of $G$.

By Subgroup of Abelian Group is Normal, $H$ is normal in $G$.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $14$




