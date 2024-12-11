# 

Source: https://proofwiki.org/wiki/479_is_not_Expressible_as_Sum_of_Fewer_than_19_Fourth_Powers

Theorem
$479$ cannot be expressed as the sum of fewer than $19$ fourth powers:

$479 = 13 \times 1^4 + 3 \times 2^4 + 2 \times 3^4 + 4^4$
or:

$479 = 10 \times 1^4 + 4 \times 2^4 + 5 \times 3^4$


Proof
First note that $5^4 = 625 > 479$.
Then note that $2 \times 4^4 = 512 > 479$.
Hence any expression of $479$ as fourth powers uses no $n^4$ for $n \ge 5$, and uses not more than $1$ instance of $4^4$.
For the remainder, using $2^4$ uses fewer fourth powers than $16$ instances of $1^4$ does.

Now we have:














\(\ds 479\)

\(=\)







\(\ds 4^4 + 2 \times 3^4 + 3 \times 2^4 + 13 \times 1^4\)




















\(\ds \)

\(=\)







\(\ds 4^4 + 1 \times 3^4 + 8 \times 2^4 + 14 \times 1^4\)




















\(\ds \)

\(=\)







\(\ds 4^4 + 0 \times 3^4 + 13 \times 2^4 + 15 \times 1^4\)




















\(\ds \)

\(=\)







\(\ds 5 \times 3^4 + 4 \times 2^4 + 10 \times 1^4\)




















\(\ds \)

\(=\)







\(\ds 4 \times 3^4 + 9 \times 2^4 + 11 \times 1^4\)




















\(\ds \)

\(=\)







\(\ds 3 \times 3^4 + 14 \times 2^4 + 12 \times 1^4\)




















\(\ds \)

\(=\)







\(\ds 2 \times 3^4 + 19 \times 2^4 + 13 \times 1^4\)




















\(\ds \)

\(=\)







\(\ds 1 \times 3^4 + 24 \times 2^4 + 14 \times 1^4\)




















\(\ds \)

\(=\)







\(\ds 0 \times 3^4 + 29 \times 2^4 + 15 \times 1^4\)









and it can be seen that the first and the fourth uses the least number of fourth powers, at $19$.
$\blacksquare$


Also see
Hilbert-Waring Theorem
Numbers not Expressible as Sum of Fewer than 19 Fourth Powers




