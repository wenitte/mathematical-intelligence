# 

Source: https://proofwiki.org/wiki/Euclid%27s_Lemma_for_Prime_Divisors/General_Result/Proof_3



Lemma
Let $p$ be a prime number.
Let $\ds n = \prod_{i \mathop = 1}^r a_i$.

Then if $p$ divides $n$, it follows that $p$ divides $a_i$ for some $i$ such that $1 \le i \le r$.

That is:

$p \divides a_1 a_2 \ldots a_n \implies p \divides a_1 \lor p \divides a_2 \lor \cdots \lor p \divides a_n$


Proof
Let $p \divides n$.
Aiming for a contradiction, suppose:

$\forall i \in \set {1, 2, \ldots, r}: p \nmid a_i$
By Prime not Divisor implies Coprime:

$\forall i \in \set {1, 2, \ldots, r}: p \perp a_i$
By Integer Coprime to all Factors is Coprime to Whole:

$p \perp n$
By definition of coprime:

$p \nmid n$
The result follows by Proof by Contradiction.
$\blacksquare$


Source of Name
This entry was named for Euclid.


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.2$: Divisibility and factorization in $\mathbf Z$: Proposition $3 \ \text{(ii)}$




