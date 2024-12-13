# 

Source: https://proofwiki.org/wiki/Maximum_Period_of_Reciprocal_of_Prime

Theorem
Let $p$ be a prime number such that $p$ is not a divisor of $10$.
The maximum period of recurrence of the reciprocal of $p$ when expressed in decimal notation is $p - 1$.


Proof
When $p \divides 10$, $\dfrac 1 p$ expressed in decimal notation is a terminating fraction:














\(\ds \dfrac 1 2\)

\(=\)







\(\ds 0 \cdotp 5\)




















\(\ds \dfrac 1 5\)

\(=\)







\(\ds 0 \cdotp 2\)










So let $p$ be such that $p \nmid 10$.

From Period of Reciprocal of Prime, the period of recurrence is the order of $10$ modulo $p$.
That is, it is the smallest integer $d$ such that:

$10^d \equiv 1 \pmod p$

From Fermat's Little Theorem:

$10^{p - 1} \equiv 1 \pmod p$
Hence the maximum period of recurrence occurs when the order of $10$ modulo $p$ is $p - 1$.
$\blacksquare$


Also see
$7$ is Long Period Prime: demonstrating that the maximum period of recurrence occurs for at least one prime number




