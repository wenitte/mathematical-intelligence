# 

Source: https://proofwiki.org/wiki/Divisibility_by_Power_of_2

Theorem
Let $r \in \Z_{\ge 1}$ be a strictly positive integer.
An integer $N$ expressed in decimal notation is divisible by $2^r$ if and only if the last $r$ digits of $N$ form an integer divisible by $2^r$.

That is:

$N = [a_n \ldots a_2 a_1 a_0]_{10} = a_0 + a_1 10 + a_2 10^2 + \cdots + a_n 10^n$ is divisible by $2^r$
if and only if:

$a_0 + a_1 10 + a_2 10^2 + \cdots + a_r 10^r$ is divisible by $2^r$.


Proof
First note that:

$10^r = 2^r 5^r$
and so:

$2^r \divides 10^r$
where $\divides$ denotes divisibility.
Thus:

$\forall s \in \Z: s \ge r: 2^r \divides 10^s$
but:

$\forall s \in \Z: s < r: 2^r \nmid 10^s$

Thus let $N$ be divisible by $2^r$.
Then:














\(\ds N\)

\(\equiv\)







\(\ds 0 \pmod {2^r}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \sum_{k \mathop = 0}^n a_k 10^k\)

\(\equiv\)







\(\ds 0 \pmod {2^r}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \sum_{k \mathop = 0}^r a_k 10^r + \sum_{k \mathop = r + 1}^n a_k 10^k\)

\(\equiv\)







\(\ds 0 \pmod {2^r}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \sum_{k \mathop = 0}^r a_k 10^r + 10^r \sum_{k \mathop = r + 1}^n a_k 10^{k - r}\)

\(\equiv\)







\(\ds 0 \pmod {2^r}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \sum_{k \mathop = 0}^r a_k 10^r\)

\(\equiv\)







\(\ds 0 \pmod {2^r}\)





as $10^r \equiv 0 \pmod {2^r}$



Hence the result.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $2$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $2$




