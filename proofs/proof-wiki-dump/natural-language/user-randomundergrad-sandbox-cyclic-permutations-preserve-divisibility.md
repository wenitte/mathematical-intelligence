# 

Source: https://proofwiki.org/wiki/User:RandomUndergrad/Sandbox/Cyclic_Permutations_Preserve_Divisibility

Theorem
Let $b > 1$ be an integer. 
Suppose $d$ is a strictly positive integer where $d \divides b^k - 1$ for some strictly positive integer $k$.
Let $n$ be a $K$-Digit multiple of $d$ when expressed in base $b$, where $K$ is a multiple of $k$.
Let $m$ be an integer formed by cyclically permuting the digits of $n$.

Then $m$ is divisible by $d$.


Proof
Let $b > 1$ be an integer. 
Suppose $d$ is a strictly positive integer where $d \divides b^k - 1$ for some strictly positive integer $k$.
Let $n$ be a $K$-Digit multiple of $d$ when expressed in base $b$, where $K$ is a multiple of $k$.

It suffices to show that the divisibility is preserved when digits of $n$ is shifted by 1 digit to the left,
i.e. $n = [n_1 n_2 \dots n_K]_b \mapsto [n_2 n_3 \dots n_K n_1]_b$, 
since this permutation generates the group of cyclic permutations on digits of $n$.

So we can let $m = [n_2 n_3 \dots n_K n_1]_b$.














\(\ds m\)

\(=\)







\(\ds [n_2 n_3 \dots n_K n_1]_b\)




















\(\ds \)

\(=\)







\(\ds [n_1 n_2 \dots n_K 0]_b - n_1 b^K + n_1\)




















\(\ds \)

\(=\)







\(\ds b \times [n_1 n_2 \dots n_K]_b - n_1 \paren {b^K - 1}\)




















\(\ds \)

\(=\)







\(\ds b n - n_1 \paren {b^K - 1}\)




















\(\ds \)

\(\equiv\)







\(\ds 0 \pmod d\)





Since both $n$ and $b^k - 1$ are multiples of $d$, and $b^K - 1$ is a multiple of $b^k - 1$.



So $m$ is also divisible by $d$.
$\blacksquare$


Examples
Numbers whose Cyclic Permutations of 3-Digit Multiples are Multiples, Cyclic Permutations of 5-Digit Multiples of 41 and Cyclic Permutation of 3-Digit Multiple of 37 are special cases of the theorem above since
$10^5 - 1 = 99999 = 3^2 \times 41 \times 271$ and $10^3 - 1 = 999 = 27 \times 37$.
Here we take $b = 10, d = 41, k = K = 5$ and $b = 10, d = 37, k = K = 3$.
Since $10^{13} - 1 = 9 \, 999 \, 999 \, 999 \, 999 = 3^2 \times 53 \times79 \times 265371653$,
the divisibility of both $53$ and $79$ are preserved under cyclic permutations for $13 k$-digit integers.




