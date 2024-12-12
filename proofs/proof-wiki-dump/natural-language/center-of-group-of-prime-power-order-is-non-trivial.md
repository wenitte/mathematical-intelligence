# 

Source: https://proofwiki.org/wiki/Center_of_Group_of_Prime_Power_Order_is_Non-Trivial

Theorem
Let $G$ be a group whose order is the power of a prime.

Then the center of $G$ is non-trivial:

$\forall G: \order G = p^r: p \in \mathbb P, r \in \N_{>0}: \map Z G \ne \set e$


Proof
Suppose $G$ is abelian.
By definition of abelian group:

$\map Z G = G$
and the result is seen to be true as $G$ is itself non-trivial.
From Prime Group is Cyclic and Cyclic Group is Abelian, this will always be the case for $r = 1$.

So, suppose $G$ is non-abelian.
Thus $\map Z G \ne G$ and therefore $G \setminus \map Z G \ne \O$.
Let $\conjclass {x_1}, \conjclass {x_2}, \ldots, \conjclass {x_m}$ be the conjugacy classes into which $G \setminus \map Z G$ is partitioned.
From Conjugacy Class of Element of Center is Singleton, all of these will have more than one element.

From the Conjugacy Class Equation:

$\ds \order {\map Z G} = \order G - \sum_{j \mathop = 1}^m \order {\conjclass {x_j} }$

From Number of Conjugates is Number of Cosets of Centralizer:

$\order {\conjclass {x_j} } \divides \order G$

Let $\map {N_G} x$ be the normalizer of $x$ in $G$.
Then:

$\forall j: 1 \le j \le m: \index G {\map {N_G} {x_j} } > 1 \implies p \divides \index G {\map {N_G} {x_j} }$

Since $p \divides \order G$, it follows that:

$p \divides \order {\map Z G}$
and the result follows.
$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.9$: Exercise $5.17$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 52$ Lemma $1$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 48.4$ Conjugacy
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $10$: The Orbit-Stabiliser Theorem: Proposition $10.20$




