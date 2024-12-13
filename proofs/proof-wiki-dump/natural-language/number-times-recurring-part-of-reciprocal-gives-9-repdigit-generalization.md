# 

Source: https://proofwiki.org/wiki/Number_times_Recurring_Part_of_Reciprocal_gives_9-Repdigit/Generalization



Theorem
Let a (strictly) positive integer $n$ be such that the decimal expansion of its reciprocal has a recurring part of period $d$ and no non-recurring part.
Let $m$ be the integer formed from the $d$ digits of the recurring part.
Let $M$ be an arbitrary integer.
Then:

$M \equiv \sqbrk {mmm \dots m} \pmod {10^c}$
for some positive integer $c$, if and only if:

$M \times n \equiv -1 \pmod {10^c}$

In other words, the last $c$ digits of $M$ coincide with that of $\sqbrk {mmm \dots m}$ if and only if the last $c$ digits of $M \times n$ are all $9$s.


Proof
$\sqbrk {mmm \dots m}$ can be expressed as:

$\ds \sum_{k \mathop = 0}^{K - 1} m 10^{k d}$
for some sufficiently large $K > \dfrac c d$.

Sufficient Condition
Suppose:

$M \equiv \sqbrk {mmm \dots m} \pmod {10^c}$
We have:














\(\ds M \times n\)

\(\equiv\)







\(\ds \sqbrk {mmm \dots m} \times n\)

\(\ds \pmod {10^c}\)



Congruence of Product














\(\ds \)

\(\equiv\)







\(\ds n \sum_{k \mathop = 0}^{K - 1} m 10^{k d}\)

\(\ds \pmod {10^c}\)


















\(\ds \)

\(\equiv\)







\(\ds \paren {10^d - 1} \sum_{k \mathop = 0}^{K - 1} 10^{k d}\)

\(\ds \pmod {10^c}\)



Number times Recurring Part of Reciprocal gives 9-Repdigit














\(\ds \)

\(\equiv\)







\(\ds \paren {10^d - 1} \times \frac {10^{K d} - 1} {10^d - 1}\)

\(\ds \pmod {10^c}\)



Sum of Geometric Sequence














\(\ds \)

\(\equiv\)







\(\ds 10^{K d} - 1\)

\(\ds \pmod {10^c}\)


















\(\ds \)

\(\equiv\)







\(\ds -1\)

\(\ds \pmod {10^c}\)



$10^c \divides 10^{K d}$ as $K > \dfrac c d$














\(\ds \)

\(\equiv\)







\(\ds 10^c - 1\)

\(\ds \pmod {10^c}\)







which is the $c$-digit repdigit number consisting of $9$s.
Therefore the last $c$ digits of $M \times n$ are all $9$'s.
$\Box$

Necessary Condition
It is observed that all implications but the first one:

$M \equiv \sqbrk {mmm \dots m} \pmod {10^c} \implies M \times n \equiv \sqbrk {mmm \dots m} \times n \pmod {10^c}$
trivially reverses.
By Common Factor Cancelling in Congruence/Corollary 2, the converse of the above is true if $n$ and $10^c$ are coprime.
We have:














\(\ds \gcd \set {m n, 10}\)

\(=\)







\(\ds \gcd \set {10^d - 1, 10}\)





Number times Recurring Part of Reciprocal gives 9-Repdigit














\(\ds \)

\(=\)







\(\ds \gcd \set {-1, 10}\)





GCD with Remainder














\(\ds \)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds m n\)

\(\perp\)







\(\ds 10\)





Definition of Coprime Integers








\(\ds \leadsto \ \ \)





\(\ds m n\)

\(\perp\)







\(\ds 10^c\)





Powers of Coprime Numbers are Coprime








\(\ds \leadsto \ \ \)





\(\ds n\)

\(\perp\)







\(\ds 10\)





Divisor of One of Coprime Numbers is Coprime to Other



Hence the result.
$\blacksquare$


Example
$\dfrac 1 {27} = 0 \cdotp \dot 0 3 \dot 7$
The last $4$ digits of $17 \, 037$ coincides with that of $037 \, 037$.
We have:

$17 \, 037 \times 27 = 459 \, 999$
It is observed that the last $4$ digits of $459 \, 999$ are all $9$'s.





