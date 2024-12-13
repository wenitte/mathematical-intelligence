# 

Source: https://proofwiki.org/wiki/Order_of_Automorphism_Group



Theorem
Let $G$ be a finite group whose order is greater than $2$.
Let $\Aut G$ be the automorphism group of $G$.

Then the order of $\Aut G$ is greater than $1$.


Proof
There are $3$ cases, and for each case we find an automorphism that is not the identity automorphism.

Case $1$: $G$ is non-Abelian
There exists some elements $g, h \in G$ such that $g h \ne h g$.
Then the inner automorphism:

$x \mapsto g x g^{-1}$
gives an automorphism that is not the identity automorphism, since:

$g h g^{-1} \ne h$
Hence $\order {\Aut G} > 1$.
$\Box$


Case $2$: $G$ has an element with order greater than $2$
Suppose $g \in G$ has order $k$, where $k > 2$.
Then $g \ne g^{-1}$.
Thus the inverse automorphism:

$x \mapsto x^{-1}$
is not the identity automorphism.
Hence $\order {\Aut G} > 1$.
$\Box$


Case $3$: $G$ is Abelian and has no element with order greater than $2$
By Fundamental Theorem of Finite Abelian Groups, write:

$G = C_{a_1} \times \dots \times C_{a_k}$
where $C_{a_i}$ are cyclic groups of prime power order.
Since all elements of $G$ has order not more than $2$, $a_i = 2$ for all $i$, that is:

$G = C_2^k$
As $\order G = 2^k > 2$:

$k > 1$
Writing each element of $G$ as $\tuple {g_1, \dots, g_k}$ where $g_i = 0$ or $1$, the swapping automorphism:

$\tuple {g_1, g_2, \dots, g_k} \mapsto \tuple {g_2, g_1, \dots, g_k}$
is an automorphism that is not the identity automorphism. 
Hence $\order {\Aut G} > 1$.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 64 \gamma$




