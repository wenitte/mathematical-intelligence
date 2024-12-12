# 

Source: https://proofwiki.org/wiki/Goldbach%27s_Theorem



Theorem
Let $F_m$ and $F_n$ be Fermat numbers such that $m \ne n$.
Then $F_m$ and $F_n$ are coprime.


Proof 1
Aiming for a contradiction, suppose $F_m$ and $F_n$ have a common divisor $p$ which is prime.
As both $F_n$ and $F_m$ are odd, it follows that $p$ must itself be odd.
Without loss of generality, suppose that $m > n$.
Then $m = n + k$ for some $k \in \Z_{>0}$.















\(\ds F_m - 1\)

\(\equiv\)







\(\ds -1\)

\(\ds \pmod p\)



as $p \divides F_m$














\(\ds F_n - 1\)

\(\equiv\)







\(\ds -1\)

\(\ds \pmod p\)



as $p \divides F_n$








\(\ds \leadsto \ \ \)





\(\ds \paren {F_n - 1}^{2^k}\)

\(\equiv\)







\(\ds -1\)

\(\ds \pmod p\)



Fermat Number whose Index is Sum of Integers








\(\ds \leadsto \ \ \)





\(\ds \paren {-1}^{2^k}\)

\(\equiv\)







\(\ds -1\)

\(\ds \pmod p\)



Congruence of Product








\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds -1\)

\(\ds \pmod p\)



Congruence of Powers








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(\equiv\)







\(\ds 2\)

\(\ds \pmod p\)







Hence $p = 2$.
However, it has already been established that $p$ is odd.
From this contradiction it is deduced that there is no such $p$.
Hence the result.
$\blacksquare$


Proof 2
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


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.4$: The rational numbers and some finite fields: Further Exercises $9$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $257$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Fermat number (P. de Fermat, 1640)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Fermat number (P. de Fermat, 1640)

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Establish whether a proof is given, and if so, put this link on the appropriate pageIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2001: Michal Křížek, Florian Luca and Lawrence Somer: 17 Lectures on Fermat Numbers: Theorem $4.1$




