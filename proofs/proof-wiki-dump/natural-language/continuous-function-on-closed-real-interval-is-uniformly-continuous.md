# 

Source: https://proofwiki.org/wiki/Continuous_Function_on_Closed_Real_Interval_is_Uniformly_Continuous



Theorem
Let $\closedint a b$ be a closed real interval.
Let $f: \closedint a b \to \R$ be a continuous function.

Then $f$ is uniformly continuous on $\closedint a b$.


Proof 1
We have that $\R$ is a metric space under the usual (Euclidean) metric.
We also have from the Heine-Borel Theorem that $\closedint a b$ is compact.
So the result Heine-Cantor Theorem applies.
$\blacksquare$


Proof 2
Aiming for a contradiction, suppose $f$ is not uniformly continuous. 
Then there exists an $\epsilon \in \R_{>0}$ such that for all $\delta \in \R_{>0}$ there are points $x ,y \in \closedint a b$ for which:

$\size {x - y} < \delta$
and:

$\size {\map f x - \map f y} \ge \epsilon$
We will now choose for each $k \in \N$ numbers $x_k, y_k \in \closedint a b$ such that:

$\size {x_k - y_k} < \dfrac 1 k$
and:

$\size {\map f {x_k} - \map f {y_k} } \ge \epsilon$
We have that the sequence $\sequence {x_k}$ is bounded in $\closedint a b$.
So, by the Bolzano-Weierstrass Theorem there exists a convergent subsequence $\sequence {x_{k_j} }$ whose limit lies in $\closedint a b$.
Let this limit be denoted $x_0$.
Now we have:

$\size {x_0 - y_{k_j} } \le \size {x_0 - x_{k_j} } + \size {x_{k_j} - y_{k_j} } \le \size {x_0 - x_{k_j} } + \dfrac 1 {k_j}$
Therefore the sequence $\sequence {y_{k_j} }$ also converges to $x_0$.


This article, or a section of it, needs explaining.In particular: Make it clear that the above is a definition of sequential continuity in order for the next statement to followIn fact, we should eb able to make use of the fact that a continuous function is already proven to be sequentially continuous, and if it does not so exist, add the above as a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Because $f$ is sequentially continuous at $x_0 \in \closedint a b$, we have:

$\ds \lim_{j \mathop \to \infty} \map f {x_{k_j} } = \map f {x_0} = \lim_{j \mathop \to \infty} \map f {y_{k_j} }$
This is however, a contradiction, as $\size {\map f {x_k} - \map f {y_k} } \ge \epsilon$ for all $k$ and thus all $k_j$. 
Therefore $f$ is uniformly continuous.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): uniformly continuous function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): uniformly continuous function




