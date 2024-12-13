# 

Source: https://proofwiki.org/wiki/Divisibility_by_5

Theorem
An integer $N$ expressed in decimal notation is divisible by $5$ if and only if the units digit of $N$ is divisible by $5$.

That is:

$N = \sqbrk {a_n \ldots a_2 a_1 a_0}_{10} = a_0 + a_1 10 + a_2 10^2 + \cdots + a_n 10^n$ is divisible by $5$
if and only if:

$a_0$ is divisible by $5$.


Proof
Let $N$ be divisible by $5$.
Then:














\(\ds N\)

\(\equiv\)







\(\ds 0 \pmod 5\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \sum_{k \mathop = 0}^n a_k 10^k\)

\(\equiv\)







\(\ds 0 \pmod 5\)














\(\ds \leadstoandfrom \ \ \)





\(\ds a_0 + 10 \sum_{k \mathop = 1}^n a_k 10^{k - 1}\)

\(\equiv\)







\(\ds 0 \pmod 5\)














\(\ds \leadstoandfrom \ \ \)





\(\ds a_0\)

\(\equiv\)







\(\ds 0 \pmod 5\)





as $10 \equiv 0 \pmod 5$



$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): divisible
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): divisible



