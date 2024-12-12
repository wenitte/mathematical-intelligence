# 

Source: https://proofwiki.org/wiki/Analysis_of_Card_Game_with_Bluffing



Analysis of Card Game with Bluffing
The card game with bluffing is analysed as follows.

First we recall the game mechanics:
There are two players: $A$ and $B$.
First it is $A$'s move.
$A$ receives one of two possible cards: either the high card or the low card.
If he receives the high card, he must bid $2$ credits.
If he receives the low card, he has two options, either:

$\map A 1: \quad$ He may pay $1$ credit, and the play is complete.
or

$\map A 2: \quad$ He may bid $2$ credits.

If $A$ has bid $2$ credits, it is $B$'s move.
$B$ has two options, either:

$\map B 1: \quad$ He may pay $1$ credit
or

$\map B 2: \quad$ He may challenge $A$'s bid.
If $A$ had the high card, $B$ must pay $2$ credits to $A$.
If $A$ had the low card, $A$ must pay $2$ credits to $B$.
The play is complete.


Strategies of $A$
If $A$ receives the high card, the bid is compulsory.
If $A$ receives the low card, the bid is optional.
Let $A_1$ be the strategy that $A$ pays $1$ credit.
Let $A_2$ be the strategy that $A$ bids $2$ credits.


Strategies of $B$
If $A$ pays, $B$ has no option but to receive $1$ credit.
If $A$ bids, then $B$ has $2$ strategies.
Let $B_1$ be the strategy that $B$ challenges $A$'s bid.
Let $B_2$ be the strategy that $B$ pays $1$ credit.


The outcome
There are $4$ possible combinations of strategies:


$\left({A_1, B_1}\right)$:
If $A$ had the low card, $A$ pays $1$ credit to $B$.
If $A$ had the high card, $B$ challenges $A$'s bid and so pays $2$ credits to $A$.
There is a $50 \%$ chance of either one happening.
The mean payoff to $A$ is therefore $\dfrac {2 - 1} 2 = \dfrac 1 2$ credit.


$\left({A_1, B_2}\right)$:
If $A$ had the low card, $A$ pays $1$ credit to $B$.
If $A$ had the high card, $B$ pays $1$ credit to $A$.
There is a $50 \%$ chance of either one happening.
The mean payoff to $A$ is therefore $\dfrac {1 - 1} 2 = 0$ credits.


$\left({A_2, B_1}\right)$:
If $A$ had the low card, $A$ bids $2$ credits, $B$ challenges $A$'s bid and wins, and so $A$ pays $2$ credits to $B$.
If $A$ had the high card, $A$ bids $2$ credits, $B$ challenges $A$'s bid and loses, and so $B$ pays $2$ credits to $A$.
There is a $50 \%$ chance of either one happening.
The mean payoff to $A$ is therefore $\dfrac {2 - 2} 2 = 0$ credits.


$\left({A_2, B_2}\right)$:
If $A$ had the low card, $A$ bids $2$ credits, $B$ accepts $A$'s bid and $B$ pays $1$ credit to $A$.
If $A$ had the high card, $A$ bids $2$ credits, $B$ accepts $A$'s bid and $B$ pays $1$ credit to $A$.
In both cases the payoff to $A$ is $1$ credit.
The mean payoff to $A$ is therefore $1$ credit.
$\blacksquare$


Sources
1956: Steven Vajda: The Theory of Games and Linear Programming ... (previous) ... (next): Chapter $\text{I}$: An Outline of the Theory of Games: $2$




