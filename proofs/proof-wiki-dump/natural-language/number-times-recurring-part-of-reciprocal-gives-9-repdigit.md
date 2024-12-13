# 

Source: https://proofwiki.org/wiki/Number_times_Recurring_Part_of_Reciprocal_gives_9-Repdigit


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
Let a (strictly) positive integer $n$ be such that the decimal expansion of its reciprocal has a recurring part of period $d$ and no non-recurring part.
Let $m$ be the integer formed from the $d$ digits of the recurring part.
Then $m \times n$ is a $d$-digit repdigit number consisting of $9$s.


Generalization
Let $M$ be an arbitrary integer.
Then:

$M \equiv \sqbrk {mmm \dots m} \pmod {10^c}$
for some positive integer $c$, if and only if:

$M \times n \equiv -1 \pmod {10^c}$

In other words, the last $c$ digits of $M$ coincide with that of $\sqbrk {mmm \dots m}$ if and only if the last $c$ digits of $M \times n$ are all $9$s.


Proof
Let $x = \dfrac 1 n = \sqbrk {0. mmmm \dots}$.
Then:

$10^d x = \sqbrk {m.mmmm \dots}$
Therefore:














\(\ds 10^d x - x\)

\(=\)







\(\ds \sqbrk {m.mmmm \dots} - \sqbrk {0. mmmm \dots}\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 n \paren {10^d - 1}\)

\(=\)







\(\ds m\)














\(\ds \leadsto \ \ \)





\(\ds m n\)

\(=\)







\(\ds 10^d - 1\)









which is the $d$-digit repdigit number consisting of $9$s.
$\blacksquare$


Examples
Example: $37$













\(\ds \dfrac 1 {37}\)

\(=\)







\(\ds 0 \cdotp \dot 0 2 \dot 7\)




















\(\ds 27 \times 37\)

\(=\)







\(\ds 10^3 - 1\)











Example: $41$













\(\ds \dfrac 1 {41}\)

\(=\)







\(\ds 0 \cdotp \dot 0 243 \dot 9\)




















\(\ds 2439 \times 41\)

\(=\)







\(\ds 10^5 - 1\)











Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $142,857$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $142,857$




