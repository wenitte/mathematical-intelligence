# 

Source: https://proofwiki.org/wiki/Distance_from_Subset_of_Real_Numbers_to_Supremum

Theorem
Let $S$ be a subset of the set of real numbers $\R$.
Let $x \in \R$ be a real number.
Let $\map d {x, S}$ be the distance between $x$ and $S$.

Let $S$ be bounded above such that $\xi = \sup S$.
Then:

$\map d {\xi, S} = 0$


Proof 1
From the definition of distance:

$\forall x, y \in \R: \map d {x, y} = \size {x - y}$
Thus:

$\ds \map d {x, S} = \map {\inf_{y \mathop \in S} } {\size {x - y} }$

Let $\xi = \sup S$.
Then:

$\forall y \in S: \size {\xi - y} = \xi - y$
So we need to show that no $h > 0$ can be a lower bound for $T = \set {\size {\xi - y}: y \in S}$.
Aiming for a contradiction, suppose $\exists h > 0: \forall y \in S: \xi - y \ge h$.
But then:

$\forall y \in S: y \le \xi - h$
and hence $\xi - h$ is an upper bound for $T$ smaller than $\xi = \sup S$.
But this contradicts the definition of supremum, that is the smallest upper bound.
So there is no such $h > 0$.
Hence by Proof by Contradiction it follows that:

$\map d {\xi, S} = 0$.
$\blacksquare$


Proof 2
Recall from Real Number Line is Metric Space that the set of real numbers $\R$ with the distance function $d$ is a metric space.
The result is then seen to be an example of Distance from Subset to Supremum.
$\blacksquare$





