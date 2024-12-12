# 

Source: https://proofwiki.org/wiki/Goldbach%27s_Theorem/Proof_1

Theorem
Let $F_m$ and $F_n$ be Fermat numbers such that $m \ne n$.
Then $F_m$ and $F_n$ are coprime.


Proof
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


Source of Name
This entry was named for Christian Goldbach.





