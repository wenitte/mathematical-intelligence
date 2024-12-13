# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/273_-_City_Luncheons/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $273$
City Luncheons
The clerks attached to the firm of Pilkins and Popinjay arranged that three of them would lunch together every day at a particular table
so long as they could avoid the same three men sitting down twice together.
The same number of clerks of Messrs. Radson, Robson, and Ross decided to do precisely the same, only with four men at a time instead of three.
On working it out they found that Radson's staff could keep it up exactly three times as many days as their neighbours.
What is the least number of men there could have been in each staff?


Solution
There are $15$ members of staff at each firm.


Proof
Let $n$ be the number of staff at both Pilkins and Popinjay and Radson, Robson, and Ross.
The number of ways to seat $3$ people together out of $n$ is the binomial coefficient $\dbinom n 3 = \dfrac {n \paren {n - 1} \paren {n - 2} } {3 \times 2 \times 1}$.
The number of ways to seat $4$ people together out of $r$ is the binomial coefficient $\dbinom n 4 = \dfrac {n \paren {n - 1} \paren {n - 2} \paren {n - 3} } {4 \times 3 \times 2 \times 1}$.

Hence we want to find $n$ such that:

$3 \dfrac {n \paren {n - 1} \paren {n - 2} } {3 \times 2 \times 1} = \dfrac {n \paren {n - 1} \paren {n - 2} \paren {n - 3} } {4 \times 3 \times 2 \times 1}$
This simplifies down to:

$12 = n - 3$
from which the answer is that $n = 15$.

We see that:

$\dbinom {15} 3 = \dfrac {15 \times 14 \times 13} {3 \times 2 \times 1} = 5 \times 7 \times 13 = 455$
and:

$\dbinom {15} 4 = \dfrac {15 \times 14 \times 13 \times 12} {4 \times 3 \times 2 \times 1} = 5 \times 7 \times 13 \times 3 = 1365 = 455 \times 3$
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $273$. -- City Luncheons
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $457$. City Luncheons




