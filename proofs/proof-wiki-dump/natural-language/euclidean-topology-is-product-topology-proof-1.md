# 

Source: https://proofwiki.org/wiki/Euclidean_Topology_is_Product_Topology/Proof_1

Theorem
Let $T_1 = \struct {\R, \tau_1}$ be the topological space such that $\tau_1$ is the Euclidean topology on $\R$.
Let $T_n = \struct {\R^n, \tau_n}$ be the topological space such that $\tau_n$ is the product topology on the cartesian product $\ds \R_n = \prod_{i \mathop = 1}^n \R$.

Then the Euclidean topology on $\R^n$ and the product topology on $\R^n$ are the same.


Proof
Denote the Euclidean topology on $\R^n$ as $\tau$, and denote the product topology on $\R^n$ as $\tau'$.
Let $U \in \tau$, and let $x = \tuple{x_1, \ldots, x_n} \in U$.
Then there exists $\epsilon \in \R_{>0}$ such that the open ball $\map {B_\epsilon} x \subseteq U$.
We show that:

$\ds B' = \prod_{i \mathop = 1}^n \openint {x_i - \dfrac \epsilon n} {x_i + \dfrac \epsilon n} \subseteq \map {B_\epsilon} x$
For if $y = \tuple {y_1, \ldots, y_n} \in B'$, then:














\(\ds \map d {x, y}\)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^n \size {x_i - y_i}^2}^{1/2}\)





where $d$ denotes the Euclidean metric














\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop = 1}^n \size{x_i - y_i}\)





by Minkowski's Inequality for Sums














\(\ds \)

\(<\)







\(\ds \sum_{i \mathop = 1}^n \dfrac \epsilon n\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









From Natural Basis of Product Topology of Finite Product, $B' \in \tau'$.
As $B' \subseteq \map {B_\epsilon} x \subseteq U$, Neighborhood Condition for Coarser Topology shows that $\tau' \subseteq \tau$.
$\Box$

Let $U' \in \tau'$.
Let $x = \tuple {x_1, \ldots, x_n} \in U'$.
From Natural Basis of Product Topology of Finite Product, sets of the type $\ds \prod_{i \mathop = 1}^n U'_i$ with $U'_i \in \tau_1$ form an analytic basis for $\tau'$.
From Equivalence of Definitions of Analytic Basis, it follows that we can select $U'_1, \ldots, U'_n \in \tau_1$ such that $\ds x \in \prod_{i \mathop = 1}^n U'_i \subseteq U'$.
By definition of open set, it follows that for all $i \in \set {1, \ldots, n}$, we can find $\epsilon_i \in \R_{>0}$ such that $\openint {x_i - \epsilon_i} {x_i + \epsilon_i} \subseteq U'_i$.
Put $\epsilon = \min \set {\epsilon_i : i = 1, \ldots, n}$.
We show that the open ball $\map {B_\epsilon} x \subseteq U'$.
For if $y = \tuple {y_1, \ldots, y_n} \in \map {B_\epsilon} x$, then $y_i \in \openint {x_i - \epsilon_i} {x_i + \epsilon_i }$, as:

$\size {x_i - y_i} < \epsilon \le \epsilon_i$
It follows that:

$\ds \map {B_\epsilon} x \subseteq \prod_{i \mathop = 1}^n \openint {x_i - \epsilon_i} {x_i + \epsilon_i} \subseteq \prod_{i \mathop = 1}^n U'_i \subseteq U'$
Then Neighborhood Condition for Coarser Topology shows that $\tau \subseteq \tau'$.
$\Box$

It follows that $\tau = \tau'$.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): $\S 20$




