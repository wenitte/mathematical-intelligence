# 

Source: https://proofwiki.org/wiki/Josephus_Problem/Japanese_Inheritance_Variant



Classic Problem
A father has $30$ children, $15$ by his first and $15$ by his second marriages.
He decides he has too many children to share out his inheritance between all of them.
The second wife suggests that the children be placed in a circle, and eliminated by counting continually around the circle, eliminating every $n$th child.

By malice, she makes sure that the first $14$ children eliminated are all the sons of the first wife.
The remaining child of that wife, seeing that he is alone, suggests that the order of the counting be reversed.
The second wife agrees, confident that one of her children must be the last survivor.
However, to her chagrin, the next $15$ children to be eliminated are all her own.

How were the children arranged, and how was the count done?


Solution
The children of the first and second wives should be placed in the following circular order, in which the first person follows the last, and the counting starts with the first person:

$\text {SSFSSSFFFFFSSFFSSSSFSFFFSFFSSF}$
The counting proceeds by eliminating every $10$th child.
After the first $14$ children have been eliminated, the counting starts at the child originally at position $14$, and the count reverses.


Proof
On the first time round the circle, we lose the children at positions:

$10$, $20$, $30$
We are left with:

$1$, $2$, $3$, $4$, $5$, $6$, $7$, $8$, $9$, $11$, $12$, $13$, $14$, $15$, $16$, $17$, $18$, $19$, $21$, $22$, $23$, $24$, $25$, $26$, $27$, $28$, $29$
Counting $10$ round from the now eliminated $30$ leads us to $11$, and so the following are eliminated from the above:

$11$, $22$
Now we are left with:

$1$, $2$, $3$, $4$, $5$, $6$, $7$, $8$, $9$, $12$, $13$, $14$, $15$, $16$, $17$, $18$, $19$, $21$, $23$, $24$, $25$, $26$, $27$, $28$, $29$
Counting $10$ round from the now eliminated $22$ leads us to $3$, and so the following are eliminated from the above:

$3$, $15$, $27$
Now we are left with:

$1$, $2$, $4$, $5$, $6$, $7$, $8$, $9$, $12$, $13$, $14$, $16$, $17$, $18$, $19$, $21$, $23$, $24$, $25$, $26$, $28$, $29$
Counting $10$ round from the now eliminated $27$ leads us to $9$, and so the following are eliminated from the above:

$9$, $24$
Now we are left with:

$1$, $2$, $4$, $5$, $6$, $7$, $8$, $12$, $13$, $14$, $16$, $17$, $18$, $19$, $21$, $23$, $25$, $26$, $28$, $29$
Counting $10$ round from the now eliminated $24$ leads us to $7$, and so the following are eliminated from the above:

$7$, $23$
Now we are left with:

$1$, $2$, $4$, $5$, $6$, $8$, $12$, $13$, $14$, $16$, $17$, $18$, $19$, $21$, $25$, $26$, $28$, $29$
Counting $10$ round from the now eliminated $23$ leads us to $8$, and so the following are eliminated from the above:

$8$, $26$
Now we are left with:

$1$, $2$, $4$, $5$, $6$, $12$, $13$, $14$, $16$, $17$, $18$, $19$, $21$, $25$, $28$, $29$
At this point, we have eliminated the $14$ children at the original positions:

$3$, $7$, $8$, $9$, $10$, $11$, $15$, $20$, $22$, $23$, $24$, $26$, $27$, $30$
Comparing with the original line of children given, it is seen that these correspond to those labelled $F$.
Now, the count starts at $14$ and goes backwards.
Counting backwards $10$ round from $14$ leads us to $28$, and so the following are eliminated from the above:

$28$, $6$
Now we are left with:

$1$, $2$, $4$, $5$, $12$, $13$, $14$, $16$, $17$, $18$, $19$, $21$, $25$, $29$
Counting backwards $10$ round from the now eliminated $6$ leads us to eliminate $17$, leaving us with:

$1$, $2$, $4$, $5$, $12$, $13$, $14$, $16$, $18$, $19$, $21$, $25$, $29$
Backwards $10$ from the now eliminated $17$ leads us to eliminate $25$ then $2$, leaving us with:

$1$, $4$, $5$, $12$, $13$, $14$, $16$, $18$, $19$, $21$, $29$
Backwards $10$ from the now eliminated $2$ leads us to eliminate $5$, leaving us with:

$1$, $4$, $12$, $13$, $14$, $16$, $18$, $19$, $21$, $29$
Backwards $10$ from the now eliminated $5$ leads us to eliminate $12$, leaving us with:

$1$, $4$, $13$, $14$, $16$, $18$, $19$, $21$, $29$
Backwards $10$ from the now eliminated $12$ leads us to eliminate $4$, leaving us with:

$1$, $13$, $14$, $16$, $18$, $19$, $21$, $29$
Backwards $10$ from the now eliminated $4$ leads us to eliminate $29$, leaving us with:

$1$, $13$, $14$, $16$, $18$, $19$, $21$
Backwards $10$ from the now eliminated $29$ leads us to eliminate $18$, leaving us with:

$1$, $13$, $14$, $16$, $19$, $21$
Backwards $10$ from the now eliminated $18$ leads us to eliminate $1$, leaving us with:

$13$, $14$, $16$, $19$, $21$
Backwards $10$ from the now eliminated $1$ leads us to eliminate $13$, leaving us with:

$14$, $16$, $19$, $21$
Backwards $10$ from the now eliminated $13$ leads us to eliminate $19$, leaving us with:

$14$, $16$, $21$
Backwards $10$ from the now eliminated $19$ leads us to eliminate $16$, leaving us with:

$14$, $21$
Backwards $10$ from the now eliminated $16$ leads us to eliminate $21$, leaving us with:

$14$
who is the last remaining son of the first wife.
$\blacksquare$


Historical Note
This Japanese version of the Josephus problem, we are informed in David Wells's Curious and Interesting Puzzles of $1992$, dates from later than the the Josephus problem itself.
However, we are not informed how much later.


Sources
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): The Josephus Problem: $100$




