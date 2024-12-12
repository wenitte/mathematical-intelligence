# 

Source: https://proofwiki.org/wiki/Geometric_Sequence_with_Coprime_Extremes_is_in_Lowest_Terms/Proof_1



Theorem
Let $G_n = \sequence {a_0, a_1, \ldots, a_n}$ be a geometric sequence of integers.
Let:

$a_0 \perp a_n$
where $\perp$ denotes coprimality.

Then $G_n$ is in its lowest terms.


Proof
Let $G_n = \sequence {a_0, a_1, \ldots, a_n}$ be natural numbers in geometric sequence such that $a_0 \perp a_n$.
Aiming for a contradiction, suppose there were to exist another set of natural numbers in geometric sequence:

$G\,'_n = \sequence {b_0, b_1, \cdots, b_n}$
with the same common ratio where:

$\forall k \in \N_{\le n}: a_k > b_k$
From Proposition $14$ of Book $\text{VII} $: Proportion of Numbers is Transitive:

$a_0 : a_n = b_0 : b_n$
But by hypothesis:

$a_0 \perp a_n$
and so from:

Proposition $21$: Coprime Numbers form Fraction in Lowest Terms
and:

Proposition $20$: Ratios of Fractions in Lowest Terms
it follows that:

$a_0 \divides b_0$
However, this contradicts the assumption that $b_0 < a_0$.
Therefore $a_0, a_1, \cdots, a_n$ are the least of those with the same common ratio.
$\blacksquare$


Historical Note
This proof is Proposition $1$ of Book $\text{VIII}$ of Euclid's The Elements. It is the converse of Proposition $3$: Geometric Sequence in Lowest Terms has Coprime Extremes. 


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VIII}$. Propositions




