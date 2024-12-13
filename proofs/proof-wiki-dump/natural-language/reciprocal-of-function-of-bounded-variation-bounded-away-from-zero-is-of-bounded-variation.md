# 

Source: https://proofwiki.org/wiki/Reciprocal_of_Function_of_Bounded_Variation_Bounded_away_from_Zero_is_of_Bounded_Variation

Theorem

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Extract proper definition of "bounded away from zero"You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $a, b$ be real numbers with $a < b$.
Let $f: \closedint a b \to \R$ be functions of bounded variation.
Let $f$ be bounded away from zero. 
That is, there exists $M \in \R$ such that: 

$\size {\map f x} \ge M > 0$
for all $x \in \closedint a b$. 
Let $\map {V_f} {\closedint a b}$ be the total variation of $f$ on $\closedint a b$.

Then:

$\dfrac 1 f$ is of bounded variation
with:

$\map {V_{1 / f} } {\closedint a b} \le \dfrac {\map {V_f} {\closedint a b} } {M^2}$
where $\map {V_{1 / f} } {\closedint a b}$ denotes the total variation of $\dfrac 1 f$ on $\closedint a b$.


Proof
For each finite subdivision $P$ of $\closedint a b$, write: 

$P = \set {x_0, x_1, \ldots, x_n }$
with:

$a = x_0 < x_1 < x_2 < \cdots < x_{n - 1} < x_n = b$
Note that: 

$\dfrac 1 {\map f x} \le \dfrac 1 M$
for all $x \in \closedint a b$.
We then have: 














\(\ds \map {V_{1 / f} } {P ; \closedint a b}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \size {\frac 1 {\map f {x_i} } - \frac 1 {\map f {x_{i - 1} } } }\)





using the notation from the definition of bounded variation














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \size {\frac {\map f {x_{i - 1} } - \map f {x_i} } {\map f {x_i} \map f {x_{i - 1} } } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \frac {\size {\map f {x_i} - \map f {x_{i - 1} } } } {\size {\map f {x_i} \map f {x_{i - 1} } } }\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 {M^2} \sum_{i \mathop = 1}^n \size {\map f {x_i} - \map f {x_{i - 1} } }\)





since $\size {\map f {x_i} \map f {x_{i - 1} } } \le M^2$














\(\ds \)

\(=\)







\(\ds \frac {\map {V_f} {P ; \closedint a b} } {M^2}\)









Since $f$ is of bounded variation, there exists $K \in \R$ such that: 

$\map {V_f} {P ; \closedint a b} \le K$
for every finite subdivision $P$. 
Therefore: 

$\map {V_{1 / f} } {P ; \closedint a b} \le \dfrac K {M^2}$
So $\dfrac 1 f$ is of bounded variation.
We also have: 














\(\ds \map {V_{1 / f} } {\closedint a b}\)

\(=\)







\(\ds \sup_P \paren {\map {V_{1 / f} } {P ; \closedint a b} }\)





Definition of Total Variation of Real Function on Closed Bounded Interval














\(\ds \)

\(\le\)







\(\ds \sup_P \paren {\frac {\map {V_f} {P ; \closedint a b} } {M^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {M^2} \sup_P \paren {\map {V_f} {P ; \closedint a b} }\)





Multiple of Supremum














\(\ds \)

\(=\)







\(\ds \frac {\map {V_f} {\closedint a b} } {M^2}\)





Definition of Total Variation of Real Function on Closed Bounded Interval



$\blacksquare$


Sources
1973: Tom M. Apostol: Mathematical Analysis (2nd ed.) ... (previous) ... (next): $\S 6.4$: Total Variation: Theorem $6.10$




