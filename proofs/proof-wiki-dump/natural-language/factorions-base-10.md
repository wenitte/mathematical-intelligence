# 

Source: https://proofwiki.org/wiki/Factorions_Base_10



Theorem
The following positive integers are the only factorions base $10$:

$1, 2, 145, 40 \, 585$
This sequence is A014080 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
From examples of factorials:














\(\ds 1\)

\(=\)







\(\ds 1!\)




















\(\ds 2\)

\(=\)







\(\ds 2!\)




















\(\ds 145\)

\(=\)







\(\ds 1 + 24 + 120\)




















\(\ds \)

\(=\)







\(\ds 1! + 4! + 5!\)




















\(\ds 40 \, 585\)

\(=\)







\(\ds 24 + 1 + 120 + 40 \, 320 + 120\)




















\(\ds \)

\(=\)







\(\ds 4! + 0! + 5! + 8! + 5!\)










A computer search can verify solutions under $2540160 = 9! \times 7$ in seconds.

Let $n$ be a $7$-digit number with $n > 2540160$.
Then the sum of the factorials of its digits is not more than $9! \times 7 = 2540160$.
So $n$ cannot be a factorion base $10$.

Now let $n$ be a $k$-digit number, for $k \ge 8$.
Then the sum of the factorials of its digits is not more than $9! \times k$.
But we have:














\(\ds n\)

\(\ge\)







\(\ds 10^{k - 1}\)




















\(\ds \)

\(=\)







\(\ds 10^7 \times 10^{k - 8}\)




















\(\ds \)

\(\ge\)







\(\ds 10^7 \times \paren {1 + 9 \paren {k - 8} }\)





Bernoulli's Inequality














\(\ds \)

\(>\)







\(\ds 8 \times 9! \times \paren {9 k - 71}\)





$8 \times 9! = 2903040$














\(\ds \)

\(=\)







\(\ds 9! \paren {72 k - 71 \times 8}\)




















\(\ds \)

\(>\)







\(\ds 9! \times k\)





$k \ge 8$














\(\ds \)

\(\ge\)







\(\ds \text{sum of the factorials of digits of } n\)









So there are no more factorions base $10$.
$\blacksquare$


Historical Note
The fact that $40 \, 585$ is a factorion base $10$  was discovered as late as $1964$ by Leigh Janes.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $145$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $145$




