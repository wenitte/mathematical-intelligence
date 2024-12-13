# 

Source: https://proofwiki.org/wiki/Neighborhood_Basis_in_Real_Number_Line_is_Infinite

Theorem
Let $\R$ be the real number line with the usual (Euclidean) metric.
Let $a \in \R$ be a point in $\R$.
Let $\BB_a$ be a basis for the neighborhood system of $a$.

Then $\BB_a$ is an infinite set.


Proof
Aiming for a contradiction, suppose $\BB_a$ be finite.
Let the elements of $\BB_a$ be enumerated as $N_1, N_2, \ldots, N_n$.
For each $N_k \in \BB_a$, let $\map {B_{\epsilon_k} } a$ be the open $\epsilon_k$-ball of $a$ for some $\epsilon_k \in \R_{>0}$.
Let $\alpha = \min \set {\epsilon_k: k \in \set {1, 2, \ldots, n} }$.
Consider the open interval:

$I = \openint {a - \beta} {a + \beta}$
where $\beta = \dfrac \alpha 2$
By the method of construction of $I$, it follows that $\map {B_{\epsilon_k} } a \nsubseteq I$ for any $k$.
Thus $I$ is a neighborhood of $a$ which does not have an element of $\BB_a$ as a subset.
So $\BB_a$ cannot be a basis for the neighborhood system of $a$.
Hence the result.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 4$: Open Balls and Neighborhoods: Exercise $4$




