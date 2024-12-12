# 

Source: https://proofwiki.org/wiki/Fourth_Power_is_Sum_of_2_Triangular_Numbers



Theorem
Let $n \in \Z$ be an integer.
Then:

$\exists a, b \in \Z_{\ge 0}: n^4 = T_a + T_b$
where $T_a$ and $T_b$ are triangular numbers.

That is, the $4$th power of an integer equals the sum of two triangular numbers.


Proof 1
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


Proof 2













\(\ds T_{n^2 - n - 1} + T_{n^2 + n - 1}\)

\(=\)







\(\ds \frac {\paren {n^2 - n - 1} \paren {n^2 - n} } 2 + \frac {\paren {n^2 + n - 1} \paren {n^2 + n} } 2\)





Closed Form for Triangular Numbers














\(\ds \)

\(=\)







\(\ds \frac {n \paren {n^2 - n - 1} \paren {n - 1} } 2 + \frac {n \paren {n^2 + n - 1} \paren {n + 1} } 2\)





factoring














\(\ds \)

\(=\)







\(\ds \frac {n \paren {n^3 - n^2 - n - n^2 + n + 1} } 2 + \frac {n \paren {n^3 + n^2 - n + n^2 + n - 1} } 2\)





multiplying out the numerators














\(\ds \)

\(=\)







\(\ds \frac {n \paren {\paren {n^3 - 2 n^2 + 1} + \paren {n^3 + 2 n^2 - 1} } } 2\)





simplifying














\(\ds \)

\(=\)







\(\ds n^4\)





simplifying



$\blacksquare$


Examples
$T_{41} + T_{55}$
$7^4 = T_{41} + T_{55}$


Historical Note
David Wells states in Curious and Interesting Numbers, 2nd ed. ($1997$) that this result was deduced by M.N. Khatri, but fails to give details.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $15$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $15$




