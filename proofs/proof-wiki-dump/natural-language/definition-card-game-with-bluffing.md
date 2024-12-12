# 

Source: https://proofwiki.org/wiki/Definition:Card_Game_with_Bluffing



Definition
The card game with bluffing is a class of games which is exemplified by the example whose mechanics are as follows:

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


Payoff Table
The payoff table of the card game with bluffing is as follows:




 


$\text B$


$\text A$


$\begin{array} {r {{|}} c {{|}} c {{|}} }
& B_1 & B_2 \\
\hline A_1 & 1/2 &  0  \\
\hline A_2 &   0 & -1  \\
\hline \end{array}$




Analysis
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


Solution
From the payoff table:




 


$\text B$


$\text A$


$\begin{array} {r {{|}} c {{|}} c {{|}} }
& B_1 & B_2 \\
\hline A_1 & 1/2 &  0  \\
\hline A_2 &   0 & -1  \\
\hline \end{array}$



The solution is:

$A$ takes strategy $A_1$ for $2/3$ of the time, and $A_2$ for $1/3$ of the time.
$B$ takes strategy $B_1$ for $2/3$ of the time, and $B_2$ for $1/3$ of the time.

This article contains statements that are justified by handwavery.In particular: It is not made clear in the source work why this is. You just get: "This is indeed a solution, because no player can do better if the other sticks to his strategy, but could gain or lose more than $1/3$ (which is what $A$ gains now) if he departed from the optimal solution and his opponent took advantage of it." This is handwaving. A source work with a higher level of precision is needed here.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
1956: Steven Vajda: The Theory of Games and Linear Programming ... (previous) ... (next): Chapter $\text{I}$: An Outline of the Theory of Games: $2$




