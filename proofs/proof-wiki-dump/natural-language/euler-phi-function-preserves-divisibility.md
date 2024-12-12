# 

Source: https://proofwiki.org/wiki/Euler_Phi_Function_preserves_Divisibility

Theorem
Let $n \in \Z_{>0}$ be a positive integer.
Let $\map \phi n$ denote the Euler $\phi$ function of $n$.

Then:

$d \divides n \implies \map \phi d \divides \map \phi n$
where $d \divides n$ denotes that $d$ is a divisor of $n$.


Proof
Let $d \divides n$.
We can write $n$ as $n = d p_1 p_2 p_3 \cdots p_r$, where $p_1, p_2, \ldots, p_r$ are all the primes (not necessarily distinct) which divide $\dfrac n d$.
Thus, repeatedly using Euler Phi Function of Product with Prime:














\(\ds \map \phi d\)

\(\divides\)







\(\ds \map \phi {d p_1}\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi {d p_1}\)

\(\divides\)







\(\ds \map \phi {d p_1 p_2}\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi {d p_1 p_2}\)

\(\divides\)







\(\ds \map \phi {d p_1 p_2 p_3}\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\cdots\)







\(\ds \)














\(\ds \leadsto \ \ \)





\(\ds \map \phi {d p_1 p_2 \cdots p_{r - 1} }\)

\(\divides\)







\(\ds \map \phi {d p_1 p_2 \cdots p_{r - 1} p_r}\)









As the last expression is $\map \phi n$, the result follows from Divisor Relation on Positive Integers is Partial Ordering.
$\blacksquare$





