# 

Source: https://proofwiki.org/wiki/Applesellers%27_Problem



Classic Problem
Two market-women were selling apples, one at $2$ for $1$ cent and the other at $3$ for $2$ cents.
They had $30$ apples apiece.
In order to end their competition they formed a trust, pooling their stocks and selling the apples at $5$ for $3$ cents.
This was to their advantage because under the new arrangement they took in total $36$ cents.
Under the old system they would have taken a total of only $35$ cents.

Their example was contagious.
Two other women, who also had $30$ apples apiece and who were selling them at $2$ for $1$ cent and $3$ for $1$ cent, formed a trust to sell their apples at $5$ for $2$ cents.
But instead of the $25$ cents which they would have taken in operating separate enterprises, their trust grossed only $24$ cents.
Why?


Variant
Three women, $A$, $B$ and $C$, carried apples to a market to sell.
$A$ had sold $20$,
$B$ had sold $30$,
and $C$ had sold $40$.
They sold at the same price, the one as the other,
and, each having sold all their apples,
brought home as much money as each other.
How could this be?


Solution
Consider a general trust such as these.
Let one participant sell $a$ apples for $b$ cents, and the other sell $c$ apples for $d$ cents.
Then the first sells apples at $\dfrac b a$ cents each, and the other at $\dfrac d c$ cents each.
Without loss of generality, let $\dfrac b a > \dfrac d c$.
The average price per apple is $\dfrac 1 2 \paren {\dfrac b a + \dfrac d c} = \dfrac {b c + a d} {2 a c}$.
The trust sets the price at $\dfrac {b + d} {a + c}$.
This trust price will be advantageous if and only if:

$\dfrac {b + d} {a + c} > \dfrac {b c + a d} {2 a c}$
After algebra, this works out at:

$\paren {b c - a d} \paren {a - c} > 0$
For this to hold, it is important for both factors to be positive.
We have that:

$b c - a d > 0 \implies \dfrac b a > \dfrac d c$
This, combined with $a - c > 0$, means that the trust will be advantageous only if:

the original prices are unequal
and:

the denominator of the higher price is greater than that of the lower price.

For the first trust, we configure our variables such that:

$a = 3$, $b = 2$
$c = 2$, $d = 1$
in order to make $a - c > 0$.
Then we see:

$b c - a d = 2 \times 2 - 3 \times 1 = 1$
and so the trust is favourable.

For the second trust, we configure our variables such that:

$a = 3$, $b = 1$
$c = 2$, $d = 1$
in order to make $a - c > 0$.
Then we see:

$b c - a d = 2 \times 1 - 3 \times 1 = -1$
revealing that the trust is not favourable.
$\blacksquare$

It is interesting to note that the trust price is arbitrarily dependent upon the form in which the original prices are presented.
Suppose the first participant in the second trust sold apples at $4$ for $2$ cents each.
Then the trust price of $\dfrac {2 + 1} {4 + 3} = \dfrac 3 7$ per apple is advantageous, as we see:

$a = 4$, $b = 2$
$c = 3$, $d = 1$
and:

$b c - a d = 3 \times 2 - 4 \times 1 = 2$
As Maurice Kraitchik puts it:

... the formula which by chance or accident fits both the presently considered trust prices is a wholly unsound one.


Also known as
The Applesellers' Problem is also known as the missing penny or marketwomen's problem


Historical Note
According to David Singmaster, this type of problem first appeared in Propositiones ad Acuendos Juvenes by Alcuin of York, in $800$ CE.
It hinges on the fact that a common mean is erroneously being calculated of $2$ for a monetary unit plus $3$ for a monetary unit equals $5$ for $2$ monetary units.
David Singmaster goes on to remark that, while this problem appears everywhere in European puzzle-books since its appearance here, he has never seen a non-European version.

Maurice Kraitchik, on the other hand, includes it in his Mathematical Recreations of $1960$ under the heading Hindu Problems.
David Wells, who includes Kraitchik's version in his Curious and Interesting Puzzles of $1992$, notes that this was taken by Kraitchik from a theme in Mahaviracharya's Ganita Sara Samgraha, which dates from c. $850$.
However, this has not been corroborated, and it remains to be identified where in that source it was obtained.


Sources
1960: Maurice Kraitchik: Mathematical Recreations (2nd ed.): Chapter $2$. Ancient and Curious Problems: Hindu Problems: $41$. Imitation Punished
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Indian Puzzles: $49$




