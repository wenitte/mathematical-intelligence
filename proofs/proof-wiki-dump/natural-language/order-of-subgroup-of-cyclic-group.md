# 

Source: https://proofwiki.org/wiki/Order_of_Subgroup_of_Cyclic_Group

Theorem
Let $C_n = \gen g$ be the cyclic group of order $n$ which is generated by $g$ whose identity is $e$.
Let $a \in C_n: a = g^i$.
Let $H = \gen a$.

Then:

$\order H = \dfrac n {\gcd \set {n, i} }$
where:

$\order H$ denotes the order of $H$
$\gcd \set {n, i}$ denotes the greatest common divisor of $n$ and $i$.


Proof
The fact that $H$ is cyclic follows from Subgroup of Cyclic Group is Cyclic.
We need to show that $H$ has $\dfrac n d$ elements.
Let $\order H = k$.
By Non-Trivial Group has Non-Trivial Cyclic Subgroup:

$k = \order a$
where $\order a$ denotes the order of $a$.
That is:

$a^k = e$

We have that $a = g^i$.
So:














\(\ds a^k\)

\(=\)







\(\ds e\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {g^i}^k\)

\(=\)







\(\ds e = g^n\)














\(\ds \leadstoandfrom \ \ \)





\(\ds n\)

\(\divides\)







\(\ds i k\)





Definition of Order of Group Element



We now need to calculate the smallest $k$ such that:

$n \divides i k$
where $\divides$ denotes divisibility.
That is, the smallest $t \in \N$ such that $n t = i k$.

Let $d = \gcd \set {n, i}$.
Thus:

$t = \dfrac {k \paren {i / d} } {n / d}$
From Integers Divided by GCD are Coprime, $\dfrac n d$ and $\dfrac i d$ are coprime.

Thus from Euclid's Lemma:

$\dfrac n d \divides k$
As $a \divides b \implies a \le b$, the smallest value of $k$ such that $\dfrac k {\paren {n / d} } \in \Z$ is $\dfrac n d$.
Hence the result.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $4$: Subgroups: Proposition $4.15$



