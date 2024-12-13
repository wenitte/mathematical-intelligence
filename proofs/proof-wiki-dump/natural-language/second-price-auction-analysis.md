# 

Source: https://proofwiki.org/wiki/Second_Price_Auction/Analysis



Analysis of Second Price Auction
Let $G$ denoted the game under analysis, that is, the second price auction under discussion.
Let $F$ be the object being bid for.
As in the formal definition of the sealed-bid auction, let the players be labelled in order of their valuations of $F$:

$v_1 > v_2 > \cdots > v_n > 0$
In this context, a move by player $i$ is the bid that $i$ places on $F$.
Let $b$ be the profile of moves made by all players.

Let $\map m b$ be defined as the lowest $j$ such that $\ds b_j = \max_{k \mathop \in \set {1, 2, \ldots, n} } b_k$.
That is, $\map m b$ is the index of the player who has the lowest index of all players who place the highest bid on $F$.

Let player $i$ win the auction by move $b_i$.
By hypothesis, player $i$'s valuation for $F$ is $v_i$.
Hence $i$'s payoff is $v_i - \max_{j \mathop \ne 1} b_j$.
For the other players the payoff is $0$.

Thus the payoff function of player $i$ is defined as follows:

$\map {p_i} b = \begin{cases} v_i − \max_{j \mathop \ne i} b_j & : i = \map m b \\ 0 & : \text{otherwise} \end{cases}$

$b$ is a Nash equilibrium if and only if:

$\ds \max_{j \mathop \ne i} v_j \le \max_{j \mathop \ne i} b_j = b_i \le v_1$

That is:

$(1): \quad \ds \max_{j \mathop \ne i} v_j \le b_i$ (that is, player $i$'s bid was high enough to win)
$(2): \quad \ds \max_{j \mathop \ne i} b_j \le v_i$ (that is, player $i$'s valuation was high enough to avoid suffering the winner's curse).


Proof
Sufficient Condition
Suppose that $\ds \max_{j \mathop \ne i} v_j > b_i$.
Then player $j$ such that $v_j > b_i$ can win $F$ by submitting a bid in the open interval $\openint {b_i} {v_j}$, say $v_j − \epsilon$.
Then his payoff increases from $0$ to $v_j - b_i$.
Thus if $\ds \max_{j \mathop \ne i} v_j > b_i$, $b$ is not a Nash equilibrium.

Suppose $\ds \max_{j \mathop \ne i} b_j > v_i$.
Then player $i$ has a negative payoff.
$i$ can then increase that payoff to $0$ by submitting a losing bid.
Thus if $\ds \max_{j \mathop \ne i} b_j > v_i$, $b$ is not a Nash equilibrium.

Thus it can be seen that if any of the conditions $(1)$ to $(3)$ do not hold, then $b$ is not a Nash equilibrium.


Necessary Condition
Let $b$ be a profile of moves that satisfies $(1)$ and $(2)$.
Thus player $i$ is the winner.
By $(2)$, his payoff is non-negative.
By submitting another bid either:

$i$ remains the winner with the same payoff
or:

$i$ becomes a loser, with a payoff of $0$.

The payoff of any other player $j$ is $0$.
This can increase only if $j$ bids more and becomes the winner.
Then his payoff is $v_j - b_i$.
But by $(1)$, this payoff is negative.

So $b$ is a Nash equilibrium.
$\blacksquare$


Also see
Definition:Winner's Curse: when the valuation is less than the bid, and the payoff is thereby negative.


Sources
1994: Martin J. Osborne and Ariel Rubinstein: A Course in Game Theory ... (previous) ... (next): $\text I$ Strategic Games: Chapter $2$ Nash Equilibrium: $2.3$: Examples: Exercise $18.3$




