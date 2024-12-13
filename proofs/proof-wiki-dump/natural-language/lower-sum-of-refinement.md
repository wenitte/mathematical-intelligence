# 

Source: https://proofwiki.org/wiki/Lower_Sum_of_Refinement

Theorem
Let $\closedint a b$ be a closed interval.
Let $P$ be a finite subdivision of $\closedint a b$. 
Let $Q$ be a refinement of $P$. 

Then: 

$\map L {f, P} \le \map L {f, Q}$
where $\map L {f, P}$ and $\map L {f, Q}$ denotes the lower Darboux sum of $f$ with respect to $P$ and $Q$.


Proof
Write: 

$P = \set {x_0, x_1, \ldots, x_k}$
and:

$Q = \set {y_0, y_1, \ldots, y_l}$
where:

$a = x_0 < x_1 < \ldots < x_k = b$
and:

$a = y_0 < y_1 < \ldots < y_l = b$
Since $P \subseteq Q$, we have $k \le l$ from Cardinality of Subset of Finite Set.
Set: 

$m_i = \inf \set {\map f x : x \in \closedint {x_{i - 1} } {x_i} }$
for each $1 \le i \le k$.
Also set: 

${\tilde m}_j = \inf \set {\map f x : x \in \closedint {y_{j - 1} } {y_j} }$
for each $1 \le j \le l$. 

Consider a pair of elements $\tuple {x_{i - 1}, x_i}$ in $P$. 
Since $P \subseteq Q$, there exists $a_i, b_i$ such that: 

$\tuple {x_{i - 1}, x_i} = \tuple {y_{a_i}, y_{b_i} }$
We can see that: 

$a_1 = 0$
and:

$b_k = l$
We also clearly have: 

$b_{i - 1} = a_i$ for each $1 \le i \le k$.
Note that: 

$\closedint {y_{j - 1} } {y_j} \subseteq \closedint {x_{i - 1} } {x_i}$
for all $a_i + 1 \le j \le b_i$. 
So:

$\set {\map f x : x \in \closedint {y_{j - 1} } {y_j} } \subseteq \set {\map f x : x \in \closedint {x_{i - 1} } {x_i} }$
for all $a_i + 1 \le j \le b_i$. 
So, from Infimum of Subset, we have:

$\inf \set {\map f x : x \in \closedint {y_{j - 1} } {y_j} } \ge \inf \set {\map f x : x \in \closedint {x_{i - 1} } {x_i} }$
for all $a_i + 1 \le j \le b_i$.
That is: 

$m_i \le {\tilde m}_j$
for each $\tuple {i, j}$ with $a_i + 1 \le j \le b_i$
We can then write: 

$\ds x_i - x_{i - 1} = \sum_{j \mathop = a_i + 1}^{b_i} \paren {y_j - y_{j - 1} }$
for each $1 \le i \le k$, giving:














\(\ds \map L {f, P}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^k m_i \paren {x_i - x_{i - 1} }\)





Definition of Lower Darboux Sum














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^k m_i \paren {\sum_{j \mathop = a_i + 1}^{b_i} \paren {y_j - y_{j - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^k \paren {\sum_{j \mathop = a_i + 1}^{b_i} m_i \paren {y_j - y_{j - 1} } }\)




















\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop = 1}^k \paren {\sum_{j \mathop = a_i + 1}^{b_i} {\tilde m}_j \paren {y_j - y_{j - 1} } }\)





since $m_i \le {\tilde m}_j$ for each $\tuple {i, j}$ with $a_i + 1 \le j \le b_i$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^l {\tilde m}_j \paren {y_j - y_{j - 1} }\)




















\(\ds \)

\(=\)







\(\ds \map L {f, Q}\)









$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $2.5$: The Riemann Integral




