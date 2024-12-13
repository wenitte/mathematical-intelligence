# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/8_-_Buying_Buns/Solution



Modern Puzzles by Henry Ernest Dudeney: $8$
Buying Buns
Buns were being sold at three prices:
one a penny,
two a penny,
and three a penny.
Some children (there were as many boys as girls) were given sevenpence to spend on these buns, each receiving exactly alike.
How many buns did each receive?
Of course no buns were divided.


Solution
The solution given by Dudeney is:

There must have been three boys and three girls,
each of whom received two buns at three a penny
and one bun at two a penny,
the cost of which would be exactly sevenpence.

However, there are in fact $12$ solutions.
Let them be presented in the form $\tuple {a, b, c}$ where $a$, $b$ and $c$ are the numbers of penny buns, two-for-a-penny buns and three-for-a-penny buns received by each child:


$14$ children in total:
$\tuple {0, 1, 0}$


$6$ children in total (the solution given):
$\tuple {0, 1, 2}$


$2$ children in total:
$\tuple {0, 1, 9}$
$\tuple {0, 3, 6}$
$\tuple {0, 5, 3}$
$\tuple {0, 7, 0}$
$\tuple {1, 1, 6}$
$\tuple {1, 3, 3}$
$\tuple {1, 5, 0}$
$\tuple {2, 1, 3}$
$\tuple {2, 3, 0}$
$\tuple {3, 1, 0}$


Proof
Let $2 T$ be the total number of children.
Let $a$ be the number of penny buns bought by each child.
Let $b$ be the number of two-for-a-penny buns bought by each child.
Let $c$ be the number of three-for-a-penny buns bought by each child.

All of $a$, $b$, $c$ and $T$ are natural numbers where $T > 0$.

Hence we have:














\(\ds 2 T \paren {a + \dfrac b 2 + \dfrac c 3}\)

\(=\)







\(\ds 7\)














\(\ds \leadsto \ \ \)





\(\ds T \paren {6 a + 3 b + 2 c}\)

\(=\)







\(\ds 21\)





clearing fractions




Thus $T$ is a divisor of $21$, and so can be either $1$, $3$, $7$ or $21$.

$21$ is clearly off the table, because that would give:

$21 \paren {6 a + 3 b + 2 c} = 21$
and so:

$6 a + 3 b + 2 c = 1$
which cannot be satisfied in natural numbers.

Let $T = 7$.
Then we have:

$6 a + 3 b + 2 c = 3$
We note that $b$ must be odd in order to make $3$.
So whatever happens, $b \ge 1$.
When $b = 1$ we have:

$6 a + 3 \times 1 + 2 c = 3$
allowing the solution:

$\tuple {a, b, c} = \tuple {0, 1, 0}$
That is all you get for $T = 7$.
So, there can be $14$ children each receiving a single two-for-a-penny bun.
That is, $14$ buns are bought, and each child receives one.

Let $T = 3$.
Then we have:

$6 a + 3 b + 2 c = 7$
Setting $b = 1$ again gives:

$6 a + 3 \times 1 + 2 c = 7$
This leads to:

$6 a + 2 c = 4$
for which the only solution is $c = 2$.
This allows the solution:

$\tuple {a, b, c} = \tuple {0, 1, 2}$
So there can be $6$ children each receiving $1$ two-for-a-penny bun, and $2$ three-for-a-penny buns.

Finally let $T = 1$.
This leads to:

$6 a + 3 b + 2 c = 21$
which gives rise to the solutions for $\tuple {a, b, c}$ as:

$\tuple {0, 1, 9}$
$\tuple {0, 3, 6}$
$\tuple {0, 5, 3}$
$\tuple {0, 7, 0}$
$\tuple {1, 1, 6}$
$\tuple {1, 3, 3}$
$\tuple {1, 5, 0}$
$\tuple {2, 1, 3}$
$\tuple {2, 3, 0}$
$\tuple {3, 1, 0}$

So $2$ children have a total of $10$ different ways they can pool their $7 \oldpence$ to buy their buns and share them equitably.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $8$. -- Buying Buns
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $5$. Buying Buns




