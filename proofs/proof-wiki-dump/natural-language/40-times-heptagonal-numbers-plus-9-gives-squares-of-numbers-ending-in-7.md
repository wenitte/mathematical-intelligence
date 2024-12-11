# 

Source: https://proofwiki.org/wiki/40_times_Heptagonal_Numbers_plus_9_gives_Squares_of_Numbers_ending_in_7

Theorem
Consider the heptagonal numbers:

$\ds H_n = \sum_{k \mathop = 1}^n \paren {5 k - 4}$

Let $S_n$ be the sequence defined as:

$\forall n \in \Z_{>1}: S_n = 40 \times H_n + 9$

Then $S_n$ consists of the squares of all the positive integers which end in a $7$:

$49, 289, 729, 1369, 2209, 3249, 4489, 5929, 7569, \ldots$
that is:

$7^2, 17^2, 27^2, 37^2, 47^2, 57^2, 67^2, 77^2, 87^2, 97^2, \ldots$
This sequence is A017354 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
For $n \in \Z_{>1}$, we have:














\(\ds 10 \times H_n + 9\)

\(=\)







\(\ds 40 \dfrac {n \paren {5 n - 3} } 2 + 9\)





Closed Form for Heptagonal Numbers














\(\ds \)

\(=\)







\(\ds 20 n \paren {5 n - 3} + 9\)




















\(\ds \)

\(=\)







\(\ds 100 n^2 - 60 n + 9\)




















\(\ds \)

\(=\)







\(\ds \paren {10 n - 3}^2\)




















\(\ds \)

\(=\)







\(\ds \paren {10 \paren {n - 1} + 7}^2\)









The positive integers of the form $10 \paren {n - 1} + 7$ for $n \in \Z_{>1}$ are precisely the positive integers which end in a $7$:

$7, 17, 27, 37, 47, \ldots$
$\blacksquare$





