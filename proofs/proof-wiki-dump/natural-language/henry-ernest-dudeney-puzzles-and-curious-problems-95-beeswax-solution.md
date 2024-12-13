# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/95_-_Beeswax/Solution



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
The key is:

 1 2 3 4 5 6 7 8 9 0
 -------------------
 A T Q B K X S W E P

and the solution to the subtraction is:

  9 1 7 9 4 7 4 7 6
- 4 0 8 8 5 7 9 2 3
-------------------
  5 0 9 0 8 9 5 5 3

So BEESWAX represents the number $4 \, 997 \, 816$.


Proof
From the thousands place we have:

"$S - S = E$"
If there was no borrow from the hundreds place we will have $E = 0$.
But the first number begins with $E$, so $E \ne 0$.
Thus there must be a borrow from the hundreds place, giving $E = 9$.

Now we look at the hundreds place.
If there was a borrow from the tens place we will have:

$10 + B - 1 - E = B = K$
which is impossible since all letters represent distinct digits.
Thus there is no borrow from the tens place, and

$10 + B - E = B + 1 = K$

In the ten-thousands place we have:

"$W + K = B$"
Since $B < K$ and there is a borrow from the thousands place, we have instead:

$W + K = 10 + B - 1 = 8 + K$
giving $W = 8$.

For the hundred-thousands place we have a borrow from the ten-thousands place.
Therefore we have:

$P + W = E - 1$
Since $W = 8$ and $E = 9$, this gives $P = 0$.

Combining the millions place and ten-millions place, we have, with no borrows:

$E + W = 10 A + S$
so we have $A = 1$ and $S = 7$.
The hundred-millions place gives:

$B + K = E = 9$
Since we have $B + 1 = K$ from earlier, we can conclude:

$B = 4, K = 5$

We have so far:

  9 1 7 9 4 7 4 7 X
- 4 0 8 8 5 7 9 T Q
-------------------
  5 0 9 0 8 9 5 5 Q

Since the remaining untaken digits are $2, 3$ and $6$, we must have:

$T = 2, Q = 3, X = 6$
and thus BEESWAX represents $4 \, 997 \, 816$.
$\blacksquare$


Addition Case
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
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $95$. -- Beeswax
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $155$. Beeswax




