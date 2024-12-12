# 

Source: https://proofwiki.org/wiki/Euclid%27s_Lemma_for_Irreducible_Elements



Lemma
Let $\struct {D, +, \times}$ be a Euclidean domain whose unity is $1$.
Let $p$ be an irreducible element of $D$.

Let $a, b \in D$ such that:

$p \divides a \times b$
where $\divides$ means is a divisor of.
Then $p \divides a$ or $p \divides b$.


General Result
Let $p$ be an irreducible element of $D$.
Let $n \in D$ such that:

$\ds n = \prod_{i \mathop = 1}^r a_i$
where $a_i \in D$ for all $i: 1 \le i \le r$.
If $p$ divides $n$, then $p$ divides $a_i$ for some $i$.

That is:

$p \divides a_1 a_2 \ldots a_n \implies p \divides a_1 \lor p \divides a_2 \lor \cdots \lor p \divides a_n$


Proof
Let $p \divides a \times b$.

Suppose $p \nmid a$.
Then from the definition of irreducible:

$p \perp a$
Thus from Euclid's Lemma for Euclidean Domains:

$p \divides b$
Similarly, if $p \nmid b$:

$p \divides a$
So:

$p \divides a b \implies p \divides a$
or:

$p \divides b$
as we needed to show.
$\blacksquare$


Source of Name
This entry was named for Euclid.


Also see
Euclid's Lemma for Prime Divisors, for the usual statement of this result, which is this lemma as applied specifically to the integers.


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 29$. Irreducible elements: Theorem $56 \ \text{(i)}$




