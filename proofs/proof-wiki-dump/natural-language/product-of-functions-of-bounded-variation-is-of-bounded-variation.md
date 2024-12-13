# 

Source: https://proofwiki.org/wiki/Product_of_Functions_of_Bounded_Variation_is_of_Bounded_Variation

Theorem
Let $a, b$ be real numbers with $a < b$.
Let $f, g : \closedint a b \to \R$ be functions of bounded variation.
Let $\map {V_f} {\closedint a b}$ and $\map {V_g} {\closedint a b}$ be the total variations of $f$ and $g$ respectively. 

Then the pointwise product $f \cdot g$ is of bounded variation with:

$\map {V_{f \cdot g} } {\closedint a b} \le A \map {V_f} {\closedint a b} + B \map {V_g} {\closedint a b}$
where:

$\map {V_{f \cdot g} } {\closedint a b}$ denotes the total variation of $f \cdot g$ on $\closedint a b$
$A, B$ are non-negative real numbers.


Proof
For each finite subdivision $P$ of $\closedint a b$, write: 

$P = \set {x_0, x_1, \ldots, x_n }$
with:

$a = x_0 < x_1 < x_2 < \cdots < x_{n - 1} < x_n = b$
By Function of Bounded Variation is Bounded: 

$f$ and $g$ are bounded.
So, there exists $A, B \in \R$ such that: 

$\size {\map f x} \le B$
$\size {\map g x} \le A$
for all $x \in \closedint a b$.
Then:














\(\ds \map {V_{f \cdot g} } {P ; \closedint a b}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \size {\map {\paren {f \cdot g} } {x_i} - \map {\paren {f \cdot g} } {x_{i - 1} } }\)





using the notation from the definition of bounded variation














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \size {\map f {x_i} \map g {x_i} - \map f {x_{i - 1} } \map g {x_{i - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \size {\map f {x_i} \map g {x_i} - \map f {x_{i - 1} } \map g {x_i} + \map f {x_{i - 1} } \map g {x_i} - \map f {x_{i - 1} } \map g {x_{i - 1} } }\)




















\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop = 1}^n \size {\map f {x_i} \map g {x_i} - \map f {x_{i - 1} } \map g {x_i} } + \sum_{i \mathop = 1}^n \size {\map f {x_{i - 1} } \map g {x_i} - \map f {x_{i - 1} } \map g {x_{i - 1} } }\)





Triangle Inequality














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \size {\map g {x_i} } \size {\map f {x_i} - \map f {x_{i - 1} } } + \sum_{i \mathop = 1}^n \size {\map f {x_{i - 1} } } \size {\map g {x_i} - \map g {x_{i - 1} } }\)




















\(\ds \)

\(\le\)







\(\ds A \sum_{i \mathop = 1}^n \size {\map f {x_i} - \map f {x_{i - 1} } } + B \sum_{i \mathop = 1}^n \size {\map g {x_i} - \map g {x_{i - 1} } }\)





since $\size {\map g {x_i} } \le A$ and $\size {\map f {x_{i - 1} } } \le B$














\(\ds \)

\(=\)







\(\ds A \map {V_f} {P ; \closedint a b} + B \map {V_g} {P ; \closedint a b}\)









Since $f$ and $g$ are of bounded variation, there exists $M, K \in \R$ such that: 

$\map {V_f} {P ; \closedint a b} \le M$
$\map {V_g} {P ; \closedint a b} \le K$
for all finite subdivisions $P$.
We therefore have: 

$\map {V_{f \cdot g} } {P ; \closedint a b} \le A M + B K$
so $f \cdot g$ is of bounded variation.
Further, we have: 














\(\ds \map {V_{f \cdot g} } {\closedint a b}\)

\(=\)







\(\ds \sup_P \paren {\map {V_{f \cdot g} } {P ; \closedint a b} }\)





Definition of Total Variation of Real Function on Closed Bounded Interval














\(\ds \)

\(\le\)







\(\ds \sup_P \paren {A \map {V_f} {P ; \closedint a b} } + \sup_P \paren {B \map {V_g} {P ; \closedint a b} }\)




















\(\ds \)

\(=\)







\(\ds A \sup_P \paren {\map {V_f} {P ; \closedint a b} } + B \sup_P \paren {\map {V_g} {P ; \closedint a b} }\)





Multiple of Supremum














\(\ds \)

\(=\)







\(\ds A \map {V_f} {\closedint a b} + B \map {V_g} {\closedint a b}\)





Definition of Total Variation of Real Function on Closed Bounded Interval



$\blacksquare$


Sources
1973: Tom M. Apostol: Mathematical Analysis (2nd ed.) ... (previous) ... (next): $\S 6.4$: Total Variation: Theorem $6.9$




