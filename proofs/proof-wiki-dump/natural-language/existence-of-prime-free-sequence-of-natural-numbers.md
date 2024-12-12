# 

Source: https://proofwiki.org/wiki/Existence_of_Prime-Free_Sequence_of_Natural_Numbers

Theorem
Let $n$ be a natural number.
Then there exists a sequence of consecutive natural numbers of length $n$ which are all composite.


Proof
Consider the number:

$N := \paren {n + 1}!$
where $!$ denotes the factorial.
Let $i \in I$ where:

$I = \set {i \in \N: 2 \le i \le n + 1}$
We have that $\size I = n$.
Then for all $i \in I$:














\(\ds i\)

\(\divides\)







\(\ds N\)





where $\divides$ denotes divisibility








\(\ds \leadsto \ \ \)





\(\ds i\)

\(\divides\)







\(\ds N + i\)









and so $N + i$ is composite.
That is:

$N + 2, N + 3, \ldots, N + n, N + n + 1$
are all composite.
$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.16$: The Sequence of Primes: Footnote $1$




