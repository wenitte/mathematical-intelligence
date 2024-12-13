# 

Source: https://proofwiki.org/wiki/Multiple_of_Function_of_Bounded_Variation_is_of_Bounded_Variation

Theorem
Let $a, b, k$ be real numbers with $a < b$.
Let $f : \closedint a b \to \R$ be a functions of bounded variation.
Let the total variation of $f$ on $\closedint a b$ be $\map {V_f} {\closedint a b}$.

Then $k f$ is of bounded variation with: 

$\map {V_{k f} } {\closedint a b} = \size k \map {V_f} {\closedint a b}$
where $\map {V_{k f} } {\closedint a b}$ is the total variation of $k f$ on $\closedint a b$.


Proof
For each finite subdivision $P$ of $\closedint a b$, write: 

$P = \set {x_0, x_1, \ldots, x_n }$
with:

$a = x_0 < x_1 < x_2 < \cdots < x_{n - 1} < x_n = b$
Then:














\(\ds \map {V_{k f} } {P ; \closedint a b}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \size {k \map f {x_i} - k \map f {x_{i - 1} } }\)





using the notation from the definition of bounded variation














\(\ds \)

\(=\)







\(\ds \size k \sum_{i \mathop = 1}^n \size {\map f {x_i} - \map f {x_{i - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \size k \map {V_f} {P ; \closedint a b}\)









Since $f$ is of bounded variation, there exists $M \in \R$ such that: 

$\map {V_f} {P ; \closedint a b} \le M$
for all finite subdivisions $P$. 
So:

$\map {V_{k f} } {P ; \closedint a b} \le \size k M$
So $k f$ is of bounded variation.
We then have: 














\(\ds \map {V_{k f} } {\closedint a b}\)

\(=\)







\(\ds \sup_P \paren {\map {V_{k f} } {P ; \closedint a b} }\)





Definition of Total Variation of Real Function














\(\ds \)

\(=\)







\(\ds \sup_P \paren {\size k \map {V_f} {P ; \closedint a b} }\)




















\(\ds \)

\(=\)







\(\ds \size k \sup_P \paren {\map {V_f} {P ; \closedint a b} }\)





Multiple of Supremum














\(\ds \)

\(=\)







\(\ds \size k \map {V_f} {\closedint a b}\)









$\blacksquare$





