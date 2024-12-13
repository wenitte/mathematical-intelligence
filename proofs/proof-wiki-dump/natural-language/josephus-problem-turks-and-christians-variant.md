# 

Source: https://proofwiki.org/wiki/Josephus_Problem/Turks_and_Christians_Variant



Classic Problem
On board a ship, tossed in storms and in danger of shipwreck, are $15$ Christians and $15$ Turks.
To lighten the load and save the ship, half are to be thrown overboard.
One of the Christians suggests that all should stand in a circle and every $9$th person counting around the circle should be chosen.
How should the Turks arrange themselves in the circle to ensure that only the Christians die?


Solution
The Turks and Christians should be placed in the following circular order, in which the first person follows the last, and the counting starts with the first person:

$\text {TTTTCCCCCTTCTTTCTCCTTCCCTCCTTC}$


Proof
On the first time round the circle, we lose the people at positions:

$9$, $18$, $27$
We are left with:

$1$, $2$, $3$, $4$, $5$, $6$, $7$, $8$, $10$, $11$, $12$, $13$, $14$, $15$, $16$, $17$, $19$, $20$, $21$, $22$, $23$, $24$, $25$, $26$, $28$, $29$, $30$
Counting $9$ round from the now eliminated $27$ leads us to $6$, and so the following are eliminated from the above:

$6$, $16$, $26$
Now we are left with:

$1$, $2$, $3$, $4$, $5$, $7$, $8$, $10$, $11$, $12$, $13$, $14$, $15$, $17$, $19$, $20$, $21$, $22$, $23$, $24$, $25$, $28$, $29$, $30$
Counting $9$ round from the now eliminated $26$ leads us to $7$, and so the following are eliminated from the above:

$7$, $19$, $30$
Now we are left with:

$1$, $2$, $3$, $4$, $5$, $8$, $10$, $11$, $12$, $13$, $14$, $15$, $17$, $20$, $21$, $22$, $23$, $24$, $25$, $28$, $29$
Counting $9$ round from the now eliminated $30$ leads us to $12$, and so the following are eliminated from the above:

$12$, $24$
Now we are left with:

$1$, $2$, $3$, $4$, $5$, $8$, $10$, $11$, $13$, $14$, $15$, $17$, $20$, $21$, $22$, $23$, $25$, $28$, $29$
Counting $9$ round from the now eliminated $24$ leads us to $8$, and so the following are eliminated from the above:

$8$, $22$
Now we are left with:

$1$, $2$, $3$, $4$, $5$, $10$, $11$, $13$, $14$, $15$, $17$, $20$, $21$, $23$, $25$, $28$, $29$
and these are the positions where the surviving $15$ are to stand.
$\blacksquare$


Sources
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): The Josephus Problem: $99$




