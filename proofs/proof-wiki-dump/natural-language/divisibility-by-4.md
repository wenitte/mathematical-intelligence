# 

Source: https://proofwiki.org/wiki/Divisibility_by_4

Theorem
An integer $N$ expressed in decimal notation is divisible by $4$ if and only if the $2$ least significant digits of $N$ form a $2$-digit integer divisible by $4$.

That is:

$N = \sqbrk {a_n \ldots a_2 a_1 a_0}_{10} = a_0 + a_1 10 + a_2 10^2 + \cdots + a_n 10^n$ is divisible by $4$
if and only if:

$10 a_1 + a_0$ is divisible by $4$.


Proof
Let $N$ be divisible by $4$.
Then:














\(\ds N\)

\(\equiv\)







\(\ds 0 \pmod 4\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \sum_{k \mathop = 0}^n a_k 10^k\)

\(\equiv\)







\(\ds 0 \pmod 4\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 10 a_1 + a_0 + 10^2 \sum_{k \mathop = 2}^n a_k 10^{k - 2}\)

\(\equiv\)







\(\ds 0 \pmod 4\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 10 a_1 + a_0\)

\(\equiv\)







\(\ds 0 \pmod 4\)





as $10^2 \equiv 0 \pmod 4$



$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $4$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $4$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): divisible
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): divisible




