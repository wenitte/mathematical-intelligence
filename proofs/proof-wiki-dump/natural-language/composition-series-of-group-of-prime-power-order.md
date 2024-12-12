# 

Source: https://proofwiki.org/wiki/Composition_Series_of_Group_of_Prime_Power_Order



Theorem
Let $G$ be a group whose identity is $e$, and whose order is a prime power:

$\order G = p^n, p \in \mathbb P, n \ge 1$

Then $G$ has a composition series:

$\set e = G_0 \subset G_1 \subset \ldots \subset G_n = G$
such that $\order {G_k} = p^k$, $G_k \lhd G_{k + 1}$ and $G_{k + 1} / G_k$ is cyclic and of order $p$.


Proof
To be proved by induction on $n$.
Let $P_n$ be the proposition for $\order G = p^n$.


Basis for the Induction
$P_1$ is trivially true because:

$\set e = G_0 \subset G_1 = G$
From Prime Group is Cyclic, a group whose order is prime is cyclic.


Induction Hypothesis
Suppose $P_k$ is true for all groups of order $p^k$ for all $k < n$.
We need to show that this implies $P_{k + 1}$ is true.


Induction Step
Let $G$ be a group of order $p^n$.
By Prime Power Group has Non-Trivial Proper Normal Subgroup, $G$ has a proper non-trivial normal subgroup.
There will be a finite number of these, so we are free to pick one of maximal order.
We call this $H$, such that $\order H = p^t, t < n$.
We need to show that $t = n - 1$.

Suppose $t < n - 1$.
Then $G / H$ is a group of order $p^{n - t} \ge p^2$.
Again by Prime Power Group has Non-Trivial Proper Normal Subgroup, $G / H$ has a proper non-trivial normal subgroup, which we will call $N$.
Let $H' = \set {g \in G: g H \in N}$.
We now show that $H \lhd G$.

Let $g, g' \in H'$.
Then $g H, g' H \in N$.
Since $N < G / H$:

$\paren {g H} \paren {g' H} = g g' H \in N$
and so $g g' \in N$.

If $g \in H$, then $g H \in N$.
Since $N < G / H$:

$\paren {g H}^{-1} = g^{-1} H \in N$
and so $g^{-1} \in H'$.
Next:














\(\ds \paren {H'}^a\)

\(=\)







\(\ds \set {g \in G: a g a^{-1} \in H'}\)




















\(\ds \)

\(=\)







\(\ds \set {g \in G: a g a^{-1} H \in N}\)




















\(\ds \)

\(=\)







\(\ds \set {g \in G: \paren {a H} \paren {g H} \paren {a H}^{-1} \in N}\)




















\(\ds \)

\(=\)







\(\ds \set {g \in G: \paren {g H} \in N^{a H} }\)





Definition of Conjugate of Group Subset














\(\ds \)

\(=\)







\(\ds \set {g \in G: \paren {g H} \in N}\)





as $N$ is normal














\(\ds \)

\(=\)







\(\ds H'\)










So clearly $H' / H = N$, therefore:

$\dfrac {\order {H'} } {\order H} = \index {H'} N = \order N \ge p$

So:

$\order {H'} \ge p \order H$
contradicting the maximality of $\order H$.
It follows that $t = n - 1$.

Finally, we set $G_{n - 1} = H$ and use induction to show that $P_{n - 1}$ holds.
Since $G / H = G / G_{n - 1}$ is a group of order $p$, then it is automatically cyclic.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 52$




