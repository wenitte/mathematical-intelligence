# 

Source: https://proofwiki.org/wiki/Distance_from_Subset_of_Real_Numbers_to_Infimum

Theorem
Let $S$ be a subset of the set of real numbers $\R$.
Let $x \in \R$ be a real number.
Let $\map d {x, S}$ be the distance between $x$ and $S$.

Let $S$ be bounded below such that $\xi = \inf S$.
Then:

$\map d {\xi, S} = 0$


Proof 1
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


Proof 2
Recall from Real Number Line is Metric Space that the set of real numbers $\R$ with the distance function $d$ is a metric space.
The result is then seen to be an example of Distance from Subset to Infimum.
$\blacksquare$





