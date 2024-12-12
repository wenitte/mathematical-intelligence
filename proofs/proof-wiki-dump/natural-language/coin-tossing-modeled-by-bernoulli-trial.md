# 

Source: https://proofwiki.org/wiki/Coin-Tossing_Modeled_by_Bernoulli_Trial

Theorem
The act of coin-tossing can be modeled as a Bernoulli trial.
This applies whether the coin is fair or biased.


Proof
When a coin is tossed, it can land either with the "head" side up, or the "tail" side up.
Not taking into account tricks and teases in which the coin is given due consideration for landing on its edge, these are the only two possible outcomes.
Let the probability that it lands heads-up be $p$.

Let $\EE$ be the experiment of tossing a coin up into the air and seeing which side lands uppermost.
Let $\EE$ be modeled as the probability space $\struct {\Omega, \Sigma, \Pr}$.

We have that:

$\Omega = \set {H, T}$
where $H$ and $T$ are the elementary events "Heads land uppermost" and "Tails land uppermost" respectively.

We define $\Pr: \Omega \to \R$ as follows:

$\forall \omega \in \Omega: \map \Pr\omega = \begin{cases}
p & : \omega = H \\
1 - p & : \omega = T
\end{cases}$
in accordance with the definition of the experiment.

Finally, we let $\Sigma = \powerset \Omega$.
This is, by definition, clearly a Bernoulli trial.
$\blacksquare$





