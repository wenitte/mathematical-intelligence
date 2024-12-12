# 

Source: https://proofwiki.org/wiki/Divisibility_by_9



Theorem
A number expressed in decimal notation is divisible by $9$ if and only if the sum of its digits is divisible by $9$.

That is:

$N = \sqbrk {a_0 a_1 a_2 \ldots a_n}_{10} = a_0 + a_1 10 + a_2 10^2 + \cdots + a_n 10^n$ is divisible by $9$
if and only if:

$a_0 + a_1 + \cdots + a_n$ is divisible by $9$.


Corollary
A number expressed in decimal notation is divisible by $3$ if and only if the sum of its digits is divisible by $3$.

That is:

$N = \sqbrk {a_0 a_1 a_2 \ldots a_n}_{10} = a_0 + a_1 10 + a_2 10^2 + \cdots + a_n 10^n$ is divisible by $3$
if and only if:

$a_0 + a_1 + \ldots + a_n$ is divisible by $3$.


Proof 1
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


Proof 2
This is a special case of Congruence of Sum of Digits to Base Less 1.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Some Properties of $\Z$: Exercise $2.8$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.3$: Congruences: Exercise $9$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $9$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $9$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): divisible
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): divisible




