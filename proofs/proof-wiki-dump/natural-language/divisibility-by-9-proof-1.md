# 

Source: https://proofwiki.org/wiki/Divisibility_by_9/Proof_1

Theorem
A number expressed in decimal notation is divisible by $9$ if and only if the sum of its digits is divisible by $9$.

That is:

$N = \sqbrk {a_0 a_1 a_2 \ldots a_n}_{10} = a_0 + a_1 10 + a_2 10^2 + \cdots + a_n 10^n$ is divisible by $9$
if and only if:

$a_0 + a_1 + \cdots + a_n$ is divisible by $9$.


Proof
Let $N$ be divisible by $9$.
Then:














\(\ds N\)

\(\equiv\)







\(\ds 0 \pmod 9\)














\(\ds \leadstoandfrom \ \ \)





\(\ds a_0 + a_1 10 + a_2 10^2 + \cdots + a_n 10^n\)

\(\equiv\)







\(\ds 0 \pmod 9\)














\(\ds \leadstoandfrom \ \ \)





\(\ds a_0 + a_1 1 + a_2 1^2 + \cdots + a_n 1^n\)

\(\equiv\)







\(\ds 0 \pmod 9\)





as $10 \equiv 1 \pmod 9$








\(\ds \leadstoandfrom \ \ \)





\(\ds a_0 + a_1 + \cdots + a_n\)

\(\equiv\)







\(\ds 0 \pmod 9\)









$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 2.6$. Algebra of congruences: Example $41$




