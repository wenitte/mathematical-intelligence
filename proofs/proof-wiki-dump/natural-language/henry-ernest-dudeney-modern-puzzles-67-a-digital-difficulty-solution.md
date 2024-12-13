# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/67_-_A_Digital_Difficulty/Solution



Modern Puzzles by Henry Ernest Dudeney: $67$
A Digital Difficulty
Arrange the $10$ digits, $1 \ 2 \ 3 \ 4 \ 5 \ 6 \ 7 \ 8 \ 9 \ 0$, in such order that they shall form a number
that may be divided by every number from $2$ to $18$ without in any case a remainder.


Solution
There are $4$ solutions:

$2 \, 438 \, 195 \, 760$
$3 \, 785 \, 942 \, 160$
$4 \, 753 \, 869 \, 120$
$4 \, 876 \, 391 \, 520$


Proof
Let $N$ be such a number.
The sum of all the digits of $N$ is $45$.
Hence all numbers made with all the digits of $N$ is divisible by $3$ and $9$.
By making the final digit $0$, $N$ will also be divisible by both $2$ and $5$, hence also $6$, $10$, $15$ and $18$.
Making the last but one digit even makes $N$ divisible by $4$, and therefore also $12$.

It remains to consider $7$, $11$, $13$, $16$ and $17$, from which $8$ and $14$ will follow.
By Divisibility by 11, either the digits in the odd positions must add to $17$ and those in the even positions must add to $28$ or vice versa.
Leaving the $0$ off the end of $N$ does not affect its divisibility by $7$, $11$ or $13$.
So, let $M$ be $N$ without the $0$ on the end.
By Divisibility Test for 7, 11 and 13, the numbers formed from $M$ of the first three and last three digits must add up to the number formed by the middle three digits.
It remains to try them out.
Note that the third case is actually $474$ and $1386$ and $912$, with the $1$ carried forward and added to the last $4$ of $474$.
$\blacksquare$


Also see
Pandigital Numbers Divisible by All Integers up to 18


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $67$. -- A Digital Difficulty
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $118$. A Digital Difficulty




