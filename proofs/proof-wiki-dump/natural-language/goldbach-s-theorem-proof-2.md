# 

Source: https://proofwiki.org/wiki/Goldbach%27s_Theorem/Proof_2

Theorem
Let $F_m$ and $F_n$ be Fermat numbers such that $m \ne n$.
Then $F_m$ and $F_n$ are coprime.


Proof
Let $F_m$ and $F_n$ be Fermat numbers such that $m < n$.
Let $d = \gcd \set {F_m, F_n}$.

From the corollary to Product of Sequence of Fermat Numbers plus 2:

$F_m \divides F_n - 2$

But then:














\(\ds d\)

\(\divides\)







\(\ds F_n\)





Definition of Common Divisor of Integers












\(\, \ds \land \, \)

\(\ds d\)

\(\divides\)







\(\ds F_m\)





(where $\divides$ denotes divisibility)








\(\ds \leadsto \ \ \)





\(\ds d\)

\(\divides\)







\(\ds F_n - 2\)





as $F_m \divides F_n - 2$








\(\ds \leadsto \ \ \)





\(\ds d\)

\(\divides\)







\(\ds F_n - \paren {F_n - 2}\)














\(\ds \leadsto \ \ \)





\(\ds d\)

\(\divides\)







\(\ds 2\)









But all Fermat numbers are odd, so:

$d \ne 2$
It follows that $d = 1$.
The result follows by definition of coprime.
$\blacksquare$


Source of Name
This entry was named for Christian Goldbach.





