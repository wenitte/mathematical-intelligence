# 

Source: https://proofwiki.org/wiki/Center_of_Non-Abelian_Group_of_Order_pq_is_Trivial

Theorem
Let $p$ and $q$ be distinct prime numbers.
Let $G$ be a non-abelian group of order $p q$ whose identity is $e$.

Then the center of $G$ is trivial:

$\map Z G = \set e$


Proof
From Center of Group is Normal Subgroup, $\map Z G$ is a normal subgroup of $G$.
By Lagrange's Theorem, the order of $\map Z G$ is either $1$, $p$, $q$ or $p q$.
Because $G$ is not abelian, $G \ne \map Z G$.
Hence $\order {\map Z G} \ne p q$.
From Quotient of Group by Center Cyclic implies Abelian:

$G / \map Z G$ cannot be a cyclic group which is non-trivial.
Then we have:

$\map C x \subset G$
where $\map C x$ is the centralizer of $x$.
Hence by Prime Group is Cyclic, $G / \map Z G$ cannot be cyclic of order $p$ or $q$.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $19 \ \text {(i)}$




