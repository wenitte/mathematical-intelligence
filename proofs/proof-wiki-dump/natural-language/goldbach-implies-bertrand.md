# 

Source: https://proofwiki.org/wiki/Goldbach_implies_Bertrand

Theorem
Bertrand's Postulate is a logical consequence of the truth of the Goldbach Conjecture:

Bertrand's Postulate: $\forall n \in \N: n > 1:$ between $n$ and $2n$ lies a prime number $p$:
$n < p < 2n$
(Strong) Goldbach Conjecture: Every even number greater than $2$ can be written as a sum of two prime numbers.


Proof
Assume the truth of the Goldbach Conjecture.
Since $n > 1$, we have that $2 n$ is an even integer greater than $2$.
From  the Goldbach Conjecture, $2n = p_1 + p_2$ for some prime numbers $p_1$ and $p_2$.

We have that $p_1, p_2 < n \implies p_1 + p_2 < 2n$.
Therefore, at least one of $p_1, p_2 \ge n$.
That is, $n \le p_i < 2n$.
If $n$ is not a prime, the strict inequality holds.

On the other hand, suppose $n$ is prime.

$(1): \quad$ Consider the case $n = 2$.
For $2 < 3 < 2 \times 2$ (and $3 \in \Bbb P$) Bertrand's Postulate holds with $p=3$. 


$(2): \quad$ Otherwise $n > 2$, and so $n$ is an odd prime.
Then $n + 1$ is composite, because of being even.
So $2 \left({n + 1}\right) = p'_1 + p'_2$, where $p'_1$ or $p'_2$ must be greater than $n + 1$.
That is, either $p'_1 > n$ or $p'_2 > n$.
Without loss of generality, suppose $p'_2 > n$.
Then, $n < p'_2 < 2n + 2$.
But $p'_2 \ne 2n + 1$, or else $p'_1 = 1$.
Also $p'_2 \ne 2n$ since $2n$ is composite.
So $n < p'_2 < 2n$.
So, if the Goldbach Conjecture were to be true, it would logically imply the truth of Bertrand's Postulate.
$\blacksquare$


Sources
June-July 2005: Henry J. Ricardo: Goldbach's Conjecture Implies Bertrand's Postulate (Amer. Math. Monthly Vol. 112: p. 492)




