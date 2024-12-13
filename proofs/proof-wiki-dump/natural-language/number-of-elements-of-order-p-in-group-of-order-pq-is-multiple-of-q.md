# 

Source: https://proofwiki.org/wiki/Number_of_Elements_of_Order_p_in_Group_of_Order_pq_is_Multiple_of_q

Theorem
Let $p$ and $q$ be distinct prime numbers.
Let $G$ be a non-abelian group of order $p q$.

Then the number of elements of $G$ of order $p$ is a multiple of $q$.


Proof
Let $x$ be an element of $G$ of order $p$.
From Center of Non-Abelian Group of Order pq is Trivial:

$p \notin \map Z G$
where $\map Z G$ denotes the center of $G$.
As $x \notin \map Z G$:

$\map C x \subsetneq G$
where $\map C x$ is the centralizer of $x$.
From Order of Element divides Order of Centralizer:

$p \divides \order {\map C x}$
Then from Lagrange's Theorem, it follows directly that:

$\order {\map C x} = p$
By Number of Conjugates is Number of Cosets of Centralizer:

$\card {\conjclass x} = \index G {\map {C_G} x}$
where $\conjclass x$ denotes the conjugacy class of $x$.
It follows that:

$\card {\conjclass x} = q$
and so the element of $G$ of order $p$ come in sets whose cardinality is a divisor of $q$.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $19 \ \text {(ii)}$




