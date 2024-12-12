# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Finite_Abelian_Groups



Theorem
Every finite abelian group is an internal group direct product of cyclic groups whose orders are prime powers.
The number of terms in the product and the orders of the cyclic groups are uniquely determined by the group.


Proof
Let $G$ be a finite abelian group.
By means of Abelian Group is Product of Prime-power Order Groups, we factor it uniquely into groups of prime-power order.
Then, Abelian Group of Prime-power Order is Product of Cyclic Groups applies to each of these factors.
Hence we conclude $G$ factors into prime-power order cyclic groups.
The factorisation of $G$ into prime-power order factors is already unique.
Therefore, a demonstration of the uniqueness of the secondary factorisation suffices:

Suppose $\order G = p^k$ with $p$ a prime.
Let $G$ have the following two factorisations:

$G = H_1 \times H_2 \times \cdots \times H_m = K_1 \times K_2 \times \dotsb \times K_n$
where the $H_i$'s and $K_i$'s are non-trivial cyclic subgroups with

$\order {H_1} \ge \order {H_2} \ge \dotsb \ge \order {H_m}|$
$\order {K_1} \ge \order {K_2} \ge \dotsb \ge \order {K_n}$
We proceed through complete induction on $k$.


Basis for the induction
For $k = 1$, the statement follows from Prime Group is Cyclic.


Induction Hypothesis
Now we assume the theorem is true for all abelian groups of order $p^l$, where $l < k$.


Induction Step
By Power of Elements is Subgroup, $G^p = \set {x^p: x \in G}$ is a proper subgroup of $G$.

It follows that:

$G^p = H_1^p \times \cdots \times H_{m'}^p = K_1^p \times \cdots \times K_{n'}^p$
where:

$m'$ is the largest integer $i$ such that $\order {H_i} > p$
$n'$ is the largest integer $j$ such that $\order {K_j} > p$
This $m'$ and $n'$ ensure that the direct products above do not have trivial factors.
Also, by Cauchy's Group Theorem, we have:

$\order {G^p} < \order G$
This means that we can apply the induction hypothesis.
It follows that:

$m' = n'$
and:

$\order {H_i^p} = \order {K_i^p}$
for $i = 1, 2, \ldots, m'$.

We know that $\order {H_i} = p \order {H_i^p}$, and the same for $K_i$ and $K_i^p$.
It follows that $\order {H_i} = \order {K_i}$ for all $i = 1, 2, \ldots, m'$.  

Now by construction of $m'$:

$i > m' \implies \order {H_i} = p = \order {K_i}$
It follows that we have:

$\order {H_1} \order {H_2} \dotsm \order {H_{m'} } p^{m - m'} = \order G = \order {K_1} \order {K_2} \dotsm \order {K_{n'} } p^{n - n'}$
Therefore:

$m - m' = n - n'$
and as $m' = n'$, it must follow that $m = n$.

The result follows by induction.
$\blacksquare$


Also known as
The Fundamental Theorem of Finite Abelian Groups is also known as the Abelian Group Classification Theorem.


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 62 \zeta$
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Abelian group (classification theorem)




