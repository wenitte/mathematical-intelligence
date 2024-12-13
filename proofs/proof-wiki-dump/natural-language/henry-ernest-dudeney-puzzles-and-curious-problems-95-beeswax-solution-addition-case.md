# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/95_-_Beeswax/Solution/Addition_Case

Puzzles and Curious Problems by Henry Ernest Dudeney: $95$
Beeswax
The word BEESWAX represents a number in a criminal's secret code,
but the police had no clue until they discovered among his papers the following sum:
 E A S E B S B S X
 B P W W K S E T Q
------------------
 K P E P W E K K Q

The detectives assumed that it was an addition sum, and utterly failed to solve it.
Then one man hit on the brilliant idea that perhaps it was a case of subtraction.
This proved to be correct, and by substituting a different figure for each letter, so that it worked out correctly,
they obtained the secret code.
What number does BEESWAX represent?


Solution
There is indeed no solution for the addition case, as claimed:

The detectives assumed that it was an addition sum, and utterly failed to solve it.:

If this were an addition, we have immediately from the units place:

$X = 0$
Now in the ten-millions place, if there is no carry from the millions place, we would have:

$A + P = P$
which gives a repeated $A = 0$.
Hence there is such a carry, and $A = 9$, giving a carry to the hundred-millions place.

The hundreds place and the hundred-millions place have the identical sum:

"$E + B = K$"
So there must be a carry from the tens place and no carry to the thousands place.

From the thousands place we have:

$S + S \equiv E \pmod {10}$
so $E$ is even.
We have from the millions place:

"$S + W = E$"
so this place must have received a carry from the hundred-thousands place, and $W + 1 = S$.
As we now have:

$S + W + 1 = 10 + E$
there must be a carry from the thousands place to the ten-thousands place.

So far we have:

  E 9 S E B S B S 0
  B P W W K S E T Q
+ 1 1 1 ? 1 0 1 0 -  <-- carries
-------------------
  K P E P W E K K Q

Notice that we have:

$S + T = 10 + K$
$B + E + 1 = K$
which gives the inequality:

$4 = 1 + 2 + 1 \le K \le 7 + 8 - 10 = 5$
However, if $K = 5$, $B + E = 4$.
As $B, E \ne 0$ and $E$ is even, we would end up with:

$B = E = 2$
which is impossible.
Hence $K = 4, B = 1, E = 2$.
From the thousands place:

$S + S = 12$
so $S = 6$.
From the ten-thousands place:

$W = B + K + 1 = 6 = S$
which repeats a digit.
So we have shown that there are no solutions to the addition case without repeating digits.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Arithmetical and Algebraical Problems: Digital Puzzles: $95$. -- Beeswax
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Arithmetical and Algebraical Problems: Cryptarithm Puzzles: $155$. Beeswax




