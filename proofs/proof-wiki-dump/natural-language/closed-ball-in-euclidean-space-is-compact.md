# 

Source: https://proofwiki.org/wiki/Closed_Ball_in_Euclidean_Space_is_Compact

Theorem
Let $x \in \R_n$ be a point in the Euclidean space $\R^n$.
Let $\epsilon \in \R_{>0}$.

Then the closed $\epsilon$-ball $\map {B_\epsilon^-} x$ is compact.


Proof
From Closed Ball is Closed in Metric Space, it follows that $\map {B_\epsilon^-} x$ is closed in $\R^n$.
For all $a \in \map {B_\epsilon^-} x$ we have $\map d {x, a} \le \epsilon$, where $d$ denotes the Euclidean metric.
Then $\map {B_\epsilon^-} x$ is bounded in $\R^n$.
From the Heine-Borel Theorem, it follows that $\map {B_\epsilon^-} x$ is compact.
$\blacksquare$





