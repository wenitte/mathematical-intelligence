# 

Source: https://proofwiki.org/wiki/Fourth_Power_is_Sum_of_2_Triangular_Numbers/Proof_1

Theorem
Let $n \in \Z$ be an integer.
Then:

$\exists a, b \in \Z_{\ge 0}: n^4 = T_a + T_b$
where $T_a$ and $T_b$ are triangular numbers.

That is, the $4$th power of an integer equals the sum of two triangular numbers.


Proof
Note first that:

$\forall n \in \Z: \paren {-n}^4 = n^4$
Hence it is sufficient to consider the case where $n \ge 0$.
For $n = 0$:

$0^4 = 0 = 0 + 0 = T_0 + T_0$
Let $n > 0$.
Then:

$n^2 - 1 \ge 0$
and:

$n^2 \ge 0$
Hence:














\(\ds T_{n^2 - 1} + T_{n^2}\)

\(=\)







\(\ds \frac {\paren {n^2 - 1} \paren {\paren {n^2 - 1} + 1} } 2 + \frac {\paren {n^2} \paren {n^2 + 1} } 2\)





Closed Form for Triangular Numbers














\(\ds \)

\(=\)







\(\ds \frac {n^2 \paren {n^2 - 1} } 2 + \frac {n^2 \paren {n^2 + 1} } 2\)




















\(\ds \)

\(=\)







\(\ds \frac {n^2 \paren {2 n^2} } 2\)




















\(\ds \)

\(=\)







\(\ds n^4\)









$\blacksquare$





