# 

Source: https://proofwiki.org/wiki/Group_Direct_Product_of_Cyclic_Groups



Theorem
Let $G$ and $H$ both be finite cyclic groups with orders $n = \order G$ and $m = \order H$ respectively.
Then:

The group direct product $G \times H$ is cyclic
if and only if:

$n$ and $m$ are coprime, that is:
$n \perp m$


Corollary
Let $n_1, n_2, \ldots, n_s$ be a finite sequence of integers, all greater than $1$, such that for any pair of them $n_i$ and $n_j$, $n_i \perp n_j$.
Let $G_i$ be a cyclic group of order $n_i$ for each $i: 1 \le i \le s$.
Then $G_1 \times G_2 \times \cdots \times G_s$ is cyclic of order $n_1 n_2 \ldots n_s$.


Proof
Let $G$ and $H$ be groups whose identities are $e_G$ and $e_H$ respectively.


Necessary condition
Suppose:

$(1): \quad \order G = n, G = \gen x$
$(2): \quad \order H = m, H = \gen y$
$(3): \quad m \perp n$

Then:














\(\ds \order {\tuple {x, y} }\)

\(=\)







\(\ds k\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}^k\)

\(=\)







\(\ds e_{G \times H} = \tuple {x^k, y^k}\)





Powers of Elements in Group Direct Product








\(\ds \leadsto \ \ \)





\(\ds x^k\)

\(=\)







\(\ds e_G, y^k = e_H\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(\divides\)







\(\ds k, m \divides k\)














\(\ds \leadsto \ \ \)





\(\ds \lcm \set {n, m}\)

\(\divides\)







\(\ds k\)














\(\ds \leadsto \ \ \)





\(\ds n m\)

\(\divides\)







\(\ds k\)





as $n \perp m$




But then:

$\tuple {x, y}^{n m} = e_{G \times H} = \tuple {x^{n m}, y^{n m} }$
Thus:

$k \divides n m$
So:

$\order {\tuple {x, y} } = n m \implies \gen {\tuple {x, y} } = G \times H$
$\Box$


Sufficient condition
Suppose that $G \times H$ is cyclic.
Let $\tuple {x, y}$ be a generator of $G \times H$.
By Cardinality of Cartesian Product of Finite Sets the order of $G \times H$ is:

$\order G \cdot \order H = n m$
Therefore by Order of Cyclic Group equals Order of Generator:

$\order {\tuple {x, y} } = n m$
On the other hand, by Order of Group Element in Group Direct Product we have:

$\order {\tuple {x, y} } = \lcm \set {\tuple {\order x, \order y} }$

Next we claim that $x$ generates $G$.
Let $x' \in G$.
Then:

$\tuple {x', e_H} \in G \times H$
so there exists $k \in \N$ such that:

$\tuple {x, y}^k = \tuple {x^k, y^k} = \tuple {x', e_H}$
and therefore $x^k = x'$.
Thus the powers of $x$ generate the whole group $G$.
In the same way, it is seen that $y$ generates $H$.

Therefore by Order of Cyclic Group equals Order of Generator:

$\order x = n$
$\order y = m$
Thus we have that:

$n m = \order {\tuple {x, y} } = \lcm \set {n, m}$
Moreover by Product of GCD and LCM we have that:

$\lcm \set {n, m} = \dfrac {n m} {\gcd \set {n, m} }$
These two equalities imply that:

$\gcd \set {n, m} = 1$
That is, $n$ and $m$ are coprime.
$\blacksquare$


Examples
$C_2 \times C_2$ is not Cyclic
Let $C_2$ denote the cyclic group of order $2$.
The group direct product $C_2 \times C_2$ is not a cyclic group.


$C_2 \times C_3$ is Cyclic
Let $C_2$ denote the cyclic group of order $2$.
The group direct product $C_2 \times C_3$ is a cyclic group.


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 43 \gamma$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: An Introduction to Groups: Exercise $18$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $13$: Direct products: Proposition $13.1 \ (3)$




