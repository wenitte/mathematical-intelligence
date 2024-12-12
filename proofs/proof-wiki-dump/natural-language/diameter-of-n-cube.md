# 

Source: https://proofwiki.org/wiki/Diameter_of_N-Cube

Theorem
Let $Q_n = \closedint {c - R} {c + R}^n$ be an $n$-cube in Euclidean $n$-Space equipped with the usual metric.

Then the diameter of $Q_n$ is given by:

$\map \diam {Q_n} = 2 R \sqrt n$


Corollary
The diameter of $Q_n$ is the length of some diagonal of $Q_n$.


Proof
Write: 

$Q_n = \ds \prod_{i \mathop = 1}^n \closedint {c - R} {c + R}_i$
Let $x, y \in Q_n$
By the definition of the usual metric, the distance between any two points $x$ and $y$ is given by:

$\ds \map d {y - x} = \paren {\sum_{i \mathop = 1}^n \paren {y_i - x_i}^2}^{1 / 2}$
By Positive Power Function on Non-negative Reals is Strictly Increasing, this quantity is maximal when each summand is maximal.
Consider $x_i, y_i$ in the $i$th interval:

$\closedint {c - R} {c + R}_i$
To maximize $\size {y_i - x_i}$, take $x_i = \min \closedint {c - R} {c + R}_i$ and $y_i = \max \closedint {c - R} {c + R}_i$.
Then:

$\size {y_i - x_i} = \size {c + R - \paren {c - R} } = 2$
By the definition of an $n$-cube, each interval is of the same length.
Thus:














\(\ds \paren {\map \sup {\map d {y - x} } }^2\)

\(=\)







\(\ds \map \sup {\sum_{i \mathop = 1}^n \paren {y_i - x_i}^2 }\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^n \paren {2 R}^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {2 R}^2 n\)





Sum of Identical Terms














\(\ds \)

\(=\)







\(\ds \paren {2 R \sqrt n}^2\)









$\blacksquare$





