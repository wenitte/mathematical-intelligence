# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Bounded_Variation_for_Real_Function_on_Closed_Bounded_Interval



Theorem
Let $a, b$ be real numbers with $a < b$.
Let $f : \closedint a b \to \R$ be a real function. 

The following definitions of the concept of Bounded Variation (Closed Bounded Interval) are equivalent:

Definition 1
For each finite subdivision $P$ of $\closedint a b$, write: 

$P = \set {x_0, x_1, \ldots, x_n}$
with:

$a = x_0 < x_1 < x_2 < \cdots < x_{n - 1} < x_n = b$
Also write:

$\ds \map {V_f} {P ; \closedint a b} = \sum_{i \mathop = 1}^n \size {\map f {x_i} - \map f {x_{i - 1} } }$

We say $f$ is of bounded variation if and only if there exists an $M \ge 0$ such that:

$\map {V_f} {P ; \closedint a b} \le M$
for all finite subdivisions $P$.


Definition 2
For each finite non-empty subset $\SS$ of $\closedint a b$, write: 

$\SS = \set {x_0, x_1, \ldots, x_n}$
with:

$a \le x_0 < x_1 < x_2 < \cdots < x_{n - 1} < x_n \le b$
Also write:

$\ds \map {V_f^\ast} {\SS; \closedint a b} = \sum_{i \mathop = 1}^n \size {\map f {x_i} - \map f {x_{i - 1} } }$

We say $f$ is of bounded variation if and only if there exists an $M \ge 0$ such that:

$\map {V_f^\ast} {\SS; \closedint a b} \le M$
for all finite non-empty subsets $\mathcal S$ of $\closedint a b$.


Proof
Definition 1 implies Definition 2
Suppose that there exists a $M \in \R$ such that:

$\map {V_f} {P ; \closedint a b} \le M$
for all finite subdivisions $P$.
Let $\SS$ be a finite non-empty subset of $\closedint a b$. 
Define: 

$\SS^\ast = \SS \cup \set {a, b}$
and write: 

$\SS^\ast = \set {x_0, x_1, \ldots, x_n}$
with: 

$a = x_0 < x_1 < x_2 < \cdots < x_{n - 1} < x_n = b$
Then $\SS^\ast$ is a finite subdivision of $\closedint a b$ and:














\(\ds \map {V_f^\ast} {\SS; \closedint a b}\)

\(=\)







\(\ds \sum_{i \mathop = 2}^{n - 1} \size {\map f {x_i} - \map f {x_{i - 1} } }\)




















\(\ds \)

\(\le\)







\(\ds \size {\map f {x_1} - \map f {x_0} } + \sum_{i \mathop = 2}^{n - 1} \size {\map f {x_i} - \map f {x_{i - 1} } } + \size {\map f {x_n} - \map f {x_{n - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \size {\map f {x_i} - \map f {x_{i - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \map {V_f} {\SS^\ast ; \closedint a b}\)




















\(\ds \)

\(\le\)







\(\ds M\)









so: 

$\map {V_f^\ast} {\SS; \closedint a b} \le M$
for all finite non-empty subset of $\closedint a b$.
$\Box$

Definition 2 implies Definition 1
Suppose that there exists a $M \in \R$ such that:

$\map {V_f^\ast} {\SS; \closedint a b} \le M$
for all finite non-empty subsets $\SS$ of $\closedint a b$.
Note that any finite subdivision of $\closedint a b$ is also a finite non-empty subset of $\closedint a b$. 
So, in particular, for any finite subdivision $P$ of $\closedint a b$, we have: 

$\map {V_f} {P ; \closedint a b} = \map {V_f^\ast} {P ; \closedint a b} \le M$
as required.
$\blacksquare$





