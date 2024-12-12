# 

Source: https://proofwiki.org/wiki/Factorial_as_Product_of_Consecutive_Factorials



Theorem
The only factorials which are the product of consecutive factorials are:














\(\ds 0!\)

\(=\)







\(\ds 0! \times 1!\)




















\(\ds 1!\)

\(=\)







\(\ds 0! \times 1!\)




















\(\ds 2!\)

\(=\)







\(\ds 1! \times 2!\)




















\(\ds \)

\(=\)







\(\ds 0! \times 1! \times 2!\)




















\(\ds 10!\)

\(=\)







\(\ds 6! \times 7!\)











Proof
Suppose $m, n \in \N$ and $m > n$.
Write $\map F {n, m} = n! \paren {n + 1}! \cdots m!$.

Suppose we have $\map F {n, m} > r!$ for some $r \in \N$.
Suppose further that there is a prime $p$ where $m < p \le r$.
We claim that $\map F {n, m}$ cannot be a factorial of any number.

Aiming for a contradiction, suppose $\map F {n, m} = s!$ for some $s \in \N$.
Since $s! > r!$, we must have $r! \divides s!$.
Since $p \le r$, we must have $p \divides r!$.
Thus we have $p \divides s!$.

However, since $n, n + 1, \dots, m < p$, we must have $p \nmid k!$ for each $n \le k \le m$.
Thus $p \nmid \map F {n, m} = s!$, which is a contradiction.
Hence $\map F {n, m}$ cannot be a factorial of some number.

We have the following lemmata:

Lemma 1
Let $n \in \N$.
Then $\paren {2 n - 1}! \, \paren {2 n}! > \paren {3 n - 1}!$ for all $n > 1$.
$\Box$


Lemma 2
Let $n \in \N$.
Then $\paren {2 n - 2}! \, \paren {2 n - 1}! > \paren {3 n - 1}!$ for all $n \ge 7$.
$\Box$

We also have:

$\forall n \in \N: n > 1 \implies \exists p: 2 n < p < 3 n$

This needs considerable tedious hard slog to complete it.In particular: The result above is shown by M. El Bachraoui in their paper Primes in the Interval [2n, 3n]. I do not have the time to comprehend their proof yetTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Case $1$: $m$ is an even number larger than $2$
Write $m = 2 k$, where $k > 1$.
Then:














\(\ds \map F {n, m}\)

\(\ge\)







\(\ds \paren {m - 1}! \, m!\)




















\(\ds \)

\(=\)







\(\ds \paren {2 k - 1}! \, \paren {2 k}!\)




















\(\ds \)

\(>\)







\(\ds \paren {3 k - 1}!\)





Lemma 1



There is a prime $p$ where $m = 2 k < p \le 3 k - 1$.
Therefore $\map F {n, m}$ is not a factorial of some number.


Case $2$: $m$ is an odd number larger than $11$
Write $m = 2 k - 1$, where $k \ge 7$.
Then:














\(\ds \map F {n, m}\)

\(\ge\)







\(\ds \paren {m - 1}! \, m!\)




















\(\ds \)

\(=\)







\(\ds \paren {2 k - 2}! \, \paren {2 k - 1}!\)




















\(\ds \)

\(>\)







\(\ds \paren {3 k - 1}!\)





Lemma 2



There is a prime $p$ where $m = 2 k - 1 < 2 k < p \le 3 k - 1$.
Therefore $\map F {n, m}$ is not a factorial of some number.


Case $3$: Particular values of $m$
The cases above leaves us with $m = 1, 2, 3, 5, 7, 9, 11$ to check.
We have:














\(\ds 10! \times 11!\)

\(>\)







\(\ds 13!\)





and $13$ is a prime














\(\ds 8! \times 9!\)

\(>\)







\(\ds 11!\)





and $11$ is a prime














\(\ds 6! \times 7!\)

\(=\)







\(\ds 10!\)




















\(\ds 5! \times 6! \times 7!\)

\(>\)







\(\ds 11!\)





and $11$ is a prime














\(\ds 4! \times 5!\)

\(=\)







\(\ds 2880\)





is not a factorial of some number














\(\ds 3! \times 4! \times 5!\)

\(>\)







\(\ds 7!\)





and $7$ is a prime














\(\ds \map F {n, 3}\)

\(=\)







\(\ds 12\)





is not a factorial of some number














\(\ds \map F {n, 2}\)

\(=\)







\(\ds 2!\)




















\(\ds \map F {0, 1}\)

\(=\)







\(\ds 1!\)




















\(\ds \)

\(=\)







\(\ds 0!\)









Thus there are no more.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $3,628,800$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $3,628,800$




