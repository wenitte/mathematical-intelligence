# 

Source: https://proofwiki.org/wiki/Distance_from_Subset_of_Real_Numbers_to_Infimum/Proof_1

Theorem
Let $S$ be a subset of the set of real numbers $\R$.
Let $x \in \R$ be a real number.
Let $\map d {x, S}$ be the distance between $x$ and $S$.

Let $S$ be bounded below such that $\xi = \inf S$.
Then:

$\map d {\xi, S} = 0$


Proof
From the definition of distance:

$\forall x, y \in \R: \map d {x, y} = \size {x - y}$
Thus:

$\ds \map d {x, S} = \map {\inf_{y \mathop \in S} } {\size {x - y} }$

Let $\xi = \inf S$.
Consider $\map d {-\xi, S'}$ where $S' = \set {-\xi: \xi \in S}$.
By Negative of Infimum is Supremum of Negatives:

$\xi = \inf S \implies -\xi = \sup S'$
Thus from the above, $\map d {-\xi, S'} = 0$ and hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: Exercise $\S 2.13 \ (5) \ \text {(ii)}$




