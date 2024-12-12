# 

Source: https://proofwiki.org/wiki/Closure_of_Subset_of_Metric_Space_by_Convergent_Sequence



Lemma
Let $M$ be a metric space.
Let $C \subseteq M$.
Let $x \in M$.
Let $\map \cl C$ denote the closure of $C$ in $T$.

Then $x \in \map \cl C$ if and only if there exists a sequence $\sequence {x_n}$ in $C$ which converges to $x$.


Proof
Necessary Condition
Suppose there exists a sequence $\sequence {x_n}$ in $C$ which converges to $x$.
Let $\epsilon > 0$.
Then by definition:

$\exists N \in \N: \forall n > N: x_n \in \map {B_\epsilon} x$
where $\map {B_\epsilon} x$ is the open $\epsilon$-ball of $x$ in $M$.
Since $\forall n: x_n \in C$, it follows that:

$\forall \epsilon > 0: \map {B_\epsilon} x \cap C \ne \O$
Let $U$ be an open neighborhood of $x$.
From Open Balls form Basis for Open Sets of Metric Space, there exists $\epsilon> 0$ such that $\map {B_\epsilon} x \subseteq U$.
Since $\map {B_\epsilon} x \cap C \ne \O$, we have $U \cap C \ne \O$. 
Since $U$ was an arbitrary open neighborhood, we have $x \in \map \cl C$.
$\Box$


Sufficient Condition
Now suppose $x \in \map \cl C$.
From Open Ball is Open Set, $\map {B_\epsilon} x$ is open for each $\epsilon > 0$. 
From the definition of closure, we have that $C \cap \map {B_{1/n} } x \ne \O$ for each $n \in \N$.
Hence we can pick $x_n \in C \cap \map {B_{1/n} } x$.
Then we have $\map d {x_n, x} < 1/n$ and $x_n \in C$ for each $n \in \N$.
Taking $n \to \infty$, we have $x_n \to x$. 
Hence we have found a sequence with terms in $C$ converging to $x$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $7.2$: Sequential compactness: Lemma $7.2.2$




