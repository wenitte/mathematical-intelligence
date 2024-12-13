# 

Source: https://proofwiki.org/wiki/Group_of_Order_p%5E2_q_has_Normal_Sylow_p-Subgroup

Theorem
Let $p$ and $q$ be prime numbers such that $p \ne q$.
Let $G$ be a group of order $p^2 q$.

Then $G$ has a normal Sylow $p$-subgroup.


Proof
Let $n_p$ denote the number of Sylow $p$-subgroups in $G$.

From the Fourth Sylow Theorem:

$n_p \equiv 1 \pmod p$
From the Fifth Sylow Theorem:

$n_p \divides p^2 q$
where $\divides$ denotes divisibility.

Thus $n_p \in \set {1, q}$.

Suppose $p > q$.
Then:

$q \not \equiv 1 \pmod p$
and so $n_p \ne q$.
Hence $n_p = 1$.
From Sylow p-Subgroup is Unique iff Normal it follows that this Sylow $p$-subgroup is normal.
$\Box$

Suppose $q > p$.
Then $n_p$ could equal $q$ if $q \equiv 1 \pmod p$.
Let $n_q$ denote the number of Sylow $q$-subgroups in $G$.
From the Fourth Sylow Theorem:

$n_q \equiv 1 \pmod q$
and so $n_q$ is not a multiple of $q$.
From the Fifth Sylow Theorem:

$n_q \divides p^2 q$
It follows that:

$n_q \in \set {1, p, p^2}$
If $n_q = 1$ then it follows from Sylow p-Subgroup is Unique iff Normal that this Sylow $q$-subgroup is normal.
$\Box$

As $p \not \equiv 1 \pmod q$, it follows that $n_q \ne p$.
The final possibility to be explored is when $n_q = p^2$.
Then:














\(\ds p^2\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod q\)












\(\ds \leadsto \ \ \)





\(\ds q\)

\(\divides\)







\(\ds p^2 - 1\)














\(\ds \leadsto \ \ \)





\(\ds q\)

\(\divides\)







\(\ds \paren {p + 1} \paren {p - 1}\)





Difference of Two Squares








\(\ds \leadsto \ \ \)





\(\ds q\)

\(=\)







\(\ds p + 1\)





as $q > p$



But then $p$ and $q$ are consecutive prime numbers, and so:

$p = 2, q = 3$
This gives the specific case:

$\order G = 2^2 \times 3$
and the result follows from Normal Sylow p-Subgroups in Group of Order 12.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $12$: Applications of Sylow Theory: $(4)$ Groups of order $p^2 q$: Proposition $12.4$




