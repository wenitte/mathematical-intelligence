# 

Source: https://proofwiki.org/wiki/Paving_Lemma



Theorem
Let $S$ be an open subset of the Euclidean space $\R^m$ or the set of complex numbers $\C$.
Let $\gamma: \closedint a b \to S$ be a path in $S$.

Then there exists $K \in \R_{>0}$ such that:

For all $\epsilon \in \openint 0 K$, there exists a normal subdivision $\set {x_0, x_1, \ldots, x_{n - 1}, x_n}$ of the closed interval $\closedint a b$ such that:
$\ds \bigcup_{i \mathop = 0}^n \map {B_\epsilon} {\map \gamma {x_i} } \subseteq S$
and for all $i \in \set {0, 1, \ldots, n - 1}$:
$\map \gamma {\closedint {x_i} {x_{i + 1} } } \subseteq \map {B_\epsilon} {\map \gamma {x_i} }$

Here, $\map {B_\epsilon} {\map \gamma {x_i} }$ denotes the open ball of $\map \gamma {x_i}$ with radius $\epsilon$.


Proof
Finding the constant
First, suppose that $S$ is a subset of $\R^m$.
From Closed Real Interval is Compact in Metric Space, it follows that $\closedint a b$ is compact.
Then Continuous Image of Compact Space is Compact shows that $\map \gamma {\closedint {x_i} {x_{i + 1} } }$ is compact.
From the Heine-Borel Theorem, it follows that $\map \gamma {\closedint {x_i} {x_{i + 1} } }$ is bounded and closed.

Suppose that $S \ne \R^m$.
As $\R^m \setminus S$ is closed, it follows from Distance between Closed Sets in Euclidean Space that:

$\map d {\map \gamma {\closedint a b}, \R^m \setminus S} > 0$
Put $K = \map d {\map \gamma {\closedint a b}, \R^m \setminus S}$, the distance between $\map \gamma {\closedint a b}$ and $\R^m \setminus S$.
If instead $S = \R^m$, then $K$ may be any strictly positive real number.


Finding the subdivision
Let $\epsilon \in \openint 0 K$.
From the Heine-Cantor Theorem, it follows that $\gamma$ is uniformly continuous.
Then there exists $\delta \in \R_{>0}$ such that:

$\forall y, z \in \closedint a b : \size {y - z} < \delta$ implies $\map d {\map \gamma y, \map \gamma z } < \epsilon$
where $d$ denotes the Euclidean metric.
Choose $n \in \N$ such that $\dfrac {b - a} n < \delta$, and put $x_i = a + i \dfrac {b - a} n$ for all $i \in \set {0, 1, \ldots, n}$.
Then $\set {x_0, x_1, \ldots, x_n}$ is a normal subdivision of $\closedint a b$.
It follows that $\map {B_\epsilon} {\map \gamma {x_i} }$ and $\R^m \setminus S$ are disjoint, as either:

$\epsilon < \map d {\map \gamma {\closedint a b }, \R^m \setminus S}$
or:

$\R \setminus S = \O$
Then: 

$\ds \bigcup_{i \mathop = 0}^n \map {B_\epsilon} {\map \gamma {x_i} } \subseteq S$
Let $x \in \closedint {x_i} {x_{i + 1} }$.
Then:

$\size {x - x_i} \le \dfrac{b - a} n < \delta$
As the uniorm continuity condition applies, it follows that:

$\map \gamma {\closedint {x_i} {x_{i + 1} } } \subseteq \map {B_\epsilon} {\map \gamma {x_i} }$
$\Box$


Complex plane case
Suppose that $S$ is a subset of $\C$.
This theorem only uses the properties of $\C$ that depends on the metric.
From Complex Plane is Metric Space, it follows that $\C$ and $\R^2$ are homeomorphic.
It follows that the proof that applies for $\R^2$ also applies for $\C$.
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 5.1$




