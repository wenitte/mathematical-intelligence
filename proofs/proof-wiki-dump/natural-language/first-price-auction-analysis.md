# 

Source: https://proofwiki.org/wiki/First_Price_Auction/Analysis



Analysis of First Price Auction
Let $G$ denote the game under analysis, that is, the first price auction under discussion.
Let $F$ be the object being bid for.
As in the formal definition of the sealed-bid auction, let the players be labelled in order of their valuations of $F$:

$v_1 > v_2 > \cdots > v_n > 0$
In this context, a move by player $i$ is the bid that $i$ places on $F$.
Let $b$ be the profile of moves made by all players.

Let player $i$ win the auction by move $b_i$.
By hypothesis, player $i$'s valuation for $F$ is $v_i$.
Hence $i$'s payoff is $v_i - b_i$.
For the other players the payoff is $0$.

Thus the payoff function of player $i$ is defined as follows:

$\map {p_i} b = \begin{cases} v_i − b_i & : i = \map m b \\ 0 & : \text{otherwise} \end{cases}$
where $\map m b$ is defined as the lowest $j$ such that $\ds b_j = \max_{k \mathop \in \set {1, 2, \ldots, n} } b_k$.

$b$ is a Nash equilibrium if and only if:

$\ds \max_{j \mathop \ne 1} v_j \le \max_{j \mathop \ne 1} b_j = b_1 \le v_1$

That is:

$(1): \quad b_1 \le v_1$ (that is, player $1$ does not suffer from the winner's curse)
$(2): \quad \ds \max_{j \mathop \ne 1} v_j \le b_1$ (that is, player $1$'s bid was high enough to win)
$(3): \quad \ds b_1 = \max_{j \mathop \ne i} b_j$ (that is, another player submitted the same bid as player $1$)
and so player $1$ wins the auction.


Proof
Sufficient Condition
Suppose that $b_1 > v_1$.
Then $1$'s payoff is negative.
It follows that his payoff increases to $0$ if he were to submit a reduced bid that is equal to $v_1$, whether this ends up with him winning the auction or not.
Thus if $b_1 > v_1$, $b$ is not a Nash equilibrium.

Suppose that $\ds \max_{j \mathop \ne 1} v_j > b_1$.
Then player $j$ such that $v_j > b_1$ can win $F$ by submitting a bid in the open interval $\openint {b_1} {v_j}$, say $v_j − \epsilon$.
Then his payoff increases from $0$ to $\epsilon$.
Thus if $\ds \max_{j \mathop \ne 1} v_j > b_1$, $b$ is not a Nash equilibrium.

Suppose $\ds b_1 > \max_{j \mathop \ne 1} b_j$.
Then player $1$ can increase his payoff by submitting a bid in the open interval $\ds \openint {\max_{j \mathop \ne 1} b_j} {b_1}$, say $b_1 + \epsilon$.
Then his payoff increases from $v_1 − b_1$ to $v_1 − b_1 + \epsilon$.
Thus if $\ds b_1 > \max_{j \mathop \ne 1} b_j$, $b$ is not a Nash equilibrium.

Thus it can be seen that if any of the conditions $(1)$ to $(3)$ do not hold, then $b$ is not a Nash equilibrium.


Necessary Condition
Let $b$ be a profile of moves that satisfies $(1)$ to $(3)$.
By the rules of a first price auction, it follows that player $1$ is the winner.
By $(1)$ his payoff is non-negative.
His payoff can increase only if he bids less.
But by $(3)$, at least one other player submitted the same bid as player $1$.
It follows by the rules of a first price auction that one of those players becomes the winner instead.
Thus player $1$'s payoff becomes $0$.

The payoff of any other player $j$ is $0$.
This can increase only if he bids more and becomes the winner.
But then by $(2)$:

$\ds \max_{j \mathop \ne 1} v_j < b_j$
and so his payoff becomes negative.
So $b$ is a Nash equilibrium.
$\blacksquare$


Also see
Definition:Winner's Curse: when the valuation is less than the bid, and the payoff is thereby negative.


Sources
1994: Martin J. Osborne and Ariel Rubinstein: A Course in Game Theory ... (previous) ... (next): $\text I$ Strategic Games: Chapter $2$ Nash Equilibrium: $2.3$: Examples: Exercise $18.2$




