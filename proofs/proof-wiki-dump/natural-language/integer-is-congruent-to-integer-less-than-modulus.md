# 

Source: https://proofwiki.org/wiki/Integer_is_Congruent_to_Integer_less_than_Modulus



Theorem
Let $m \in \Z$.
Then each integer is congruent (modulo $m$) to precisely one of the integers $0, 1, \ldots, m - 1$.


Proof
Proof of Existence
Let $a \in \Z$.
Then from the Division Theorem: $\exists r \in \set {0, 1, \ldots, m - 1}: a \equiv r \pmod m$.


Proof of Uniqueness
Suppose that:

$\exists r_1, r_2 \in \set {0, 1, \ldots, m - 1}: a \equiv r_1 \pmod m \land a \equiv r_2 \pmod m$
Then:

$\exists r_1, r_2 \in \Z: a = q_1 m + r_1 = q_2 m + r_2$

This contradicts the uniqueness clause in the Division Theorem.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 6$: Examples of Finite Groups: $\text{(iii)}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 14.2 \ \text{(ii)}$: Congruence modulo $m$ ($m \in \N$)




