# 

Source: https://proofwiki.org/wiki/Even_Perfect_Number_except_6_is_Congruent_to_1_Modulo_9

Theorem
Let $n$ be an even perfect number, but not $6$.
Then:

$n \equiv 1 \pmod 9$


Proof
From Theorem of Even Perfect Numbers:

$n = 2^{p - 1} \paren {2^p - 1} = \dfrac {2^p \paren {2^p - 1} } 2$
where $p$ is prime.

From Odd Power of 2 is Congruent to 2 Modulo 3:

$2^p \equiv 2 \pmod 3$
for odd $p$.

Thus:














\(\ds n\)

\(=\)







\(\ds \dfrac {\paren {3 k + 2} \paren {3 k + 1} } 2\)





for some $k \in \Z_{>0}$














\(\ds \)

\(=\)







\(\ds \frac {9 k^2 + 9 k + 2} 2\)




















\(\ds \)

\(=\)







\(\ds 9 \frac {k \paren {k + 1} } 2 + 1\)




















\(\ds \)

\(=\)







\(\ds 9 T_k + 1\)





Closed Form for Triangular Numbers



So $n$ is $1$ more than $9$ times the $k$th triangular number for some $k$.
That is:

$n \equiv 1 \pmod 9$

When $n = 6$ the situation is different.
We have:














\(\ds n\)

\(=\)







\(\ds \dfrac {2^2 \paren {2^2 - 1} } 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {3 k + 1} \paren {3 k} } 2\)





where $k = 1$














\(\ds \)

\(\equiv\)







\(\ds 0 \pmod 3\)









and so the result does not hold.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $28$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $28$




