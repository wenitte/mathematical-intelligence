# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/283_-_Pat_in_Africa/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $283$
Pat in Africa
Many years ago, when the world was different, a team of explorers consisting of $5$ men from Western Civilization and $5$ natives
fell into the hands of a hostile local chief, who, after receiving a number of gifts, consented to let them go,
but only after half of them had been flogged by the head of the security services.
The Westerners cruelly hatched a plot to make the flogging fall upon the $5$ natives.
They were all to be arranged in a circle, and Pat, in position no. $1$, was given a number to count round and round in the clockwise direction.
In the diagram, $W$ represents a Westerner, and $N$ represents a native.

When that number fell on a man, he was to be taken out for flogging,
while the counting went on from where it left off until another man fell out,
and so on until the five men had been selected for punishment.
If Pat had remembered the number correctly, and had begun at the right man,
the flogging would all have fallen upon the $5$ natives.
But Pat was humane at heart, and did not hold with the casual cruelty of his fellows,
and so deliberately used the wrong number and started at the wrong man,
with the result that the Westerners all got the flogging instead.
Can you find:
$(1)$ the number Pat selected, and the man he started the count at,
$(2)$ the number he had been expected to use, and the man he was supposed to have begun at?
The smallest possible number is required in each case.


Solution
Pat was expected to start at $9$ and count $29$.
This would have counted out all the natives.
However, instead he started the count at $1$ (himself) and counted $11$.


Proof
We are given the order of the men:

$W_1, N_2, W_3, N_4, N_5, W_6, N_7, W_8, N_9, W_{10}$
Counting $11$ from $W_1$ (which is Pat) takes out $W_1$ himself, leaving:

$N_2, W_3, N_4, N_5, W_6, N_7, W_8, N_9, W_{10}$
Counting $11$ from $N_2$ takes out $W_3$, leaving:

$N_2, N_4, N_5, W_6, N_7, W_8, N_9, W_{10}$
Counting $11$ from $N_4$ takes out $W_6$, leaving:

$N_2, N_4, N_5, N_7, W_8, N_9, W_{10}$
Counting $11$ from $N_7$ takes out $W_{10}$, leaving:

$N_2, N_4, N_5, N_7, W_8, N_9$
Counting $11$ from $N_2$ takes out $W_8$, leaving:

$N_2, N_4, N_5, N_7, N_9$
So all Westerners are taken out for a flogging, while the natives escape.

Let us count $29$ starting at $N_9$.
Counting $29$ from $N_9$ takes out $N_7$, leaving:

$W_1, N_2, W_3, N_4, N_5, W_6, W_8, N_9, W_{10}$
Counting $29$ from $W_8$ takes out $N_9$, leaving:

$W_1, N_2, W_3, N_4, N_5, W_6, W_8, W_{10}$
Counting $29$ from $W_{10}$ takes out $N_4$, leaving:

$W_1, N_2, W_3, N_5, W_6, W_8, W_{10}$
Counting $29$ from $N_5$ takes out $N_5$, leaving:

$W_1, N_2, W_3, W_6, W_8, W_{10}$
Counting $29$ from $W_6$ takes out $N_2$, leaving:

$W_1, W_3, W_6, W_8, W_{10}$
So in this case, all the natives are flogged and the Westerners escape.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $283$. -- Pat in Africa
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $248$. Pat in Africa




