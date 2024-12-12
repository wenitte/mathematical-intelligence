# 

Source: https://proofwiki.org/wiki/Divisibility_by_8

Theorem
An integer $N$ expressed in decimal notation is divisible by $8$ if and only if the $3$ least significant digits of $N$ form a $3$-digit integer divisible by $8$.

That is:

$N = \sqbrk {a_n \ldots a_2 a_1 a_0}_{10} = a_0 + a_1 10 + a_2 10^2 + \cdots + a_n 10^n$ is divisible by $8$
if and only if:

$100 a_2 + 10 a_1 + a_0$ is divisible by $8$.


Proof
Let $N$ be divisible by $8$.
Then:














\(\ds N\)

\(\equiv\)







\(\ds 0 \pmod 8\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \sum_{k \mathop = 0}^n a_k 10^k\)

\(\equiv\)







\(\ds 0 \pmod 8\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 100 a_2 + 10 a_1 + a_0 + 10^3 \sum_{k \mathop = 3}^n a_k 10^{k - 3}\)

\(\equiv\)







\(\ds 0 \pmod 8\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 100 a_2 + 10 a_1 + a_0\)

\(\equiv\)







\(\ds 0 \pmod 8\)





as $10^3 \equiv 0 \pmod 8$



$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $8$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $8$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): divisible
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): divisible




