# 

Source: https://proofwiki.org/wiki/Monotone_Function_is_of_Bounded_Variation

Theorem
Let $a, b$ be real numbers with $a < b$.
Let $f : \closedint a b \to \R$ be a monotone function.

Then $f$ is of bounded variation.


Proof
We use the notation from the definition of bounded variation.
Let $P = \set {x_0, x_1, \ldots, x_n}$ be a finite subdivision of $\closedint a b$.
As $f$ is monotone, it is either increasing or decreasing.
First consider the case of $f$ increasing, then: 

$\map f {x_i} \ge \map f {x_{i - 1} }$
for all $i \in \N$ with $i \le n$.
By the definition of the absolute value, we have: 

$\size {\map f {x_i} - \map f {x_{i - 1} } } = \map f {x_i} - \map f {x_{i - 1} }$
Therefore:














\(\ds \map {V_f} {P ; \closedint a b}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \size {\map f {x_i} - \map f {x_{i - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \paren {\map f {x_i} - \map f {x_{i - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \map f {x_n} - \map f {x_0}\)





Telescoping Series: Example 2














\(\ds \)

\(=\)







\(\ds \map f b - \map f a\)









for all finite subdivisions $P$.
Note that $\map f b - \map f a$ is independent of the subdivision $P$.
Therefore if $f$ is increasing, it is of bounded variation.
Now consider the case of $f$ decreasing.
We instead have:

$\map f {x_i} \le \map f {x_{i - 1} }$
for all $i \in \N$ with $i \le n$.
Hence, by the definition of the absolute value, we instead have:

$\size {\map f {x_i} - \map f {x_{i - 1} } } = -\paren {\map f {x_i} - \map f {x_{i - 1} } }$
Therefore:














\(\ds \map {V_f} {P ; \closedint a b}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \size {\map f {x_i} - \map f {x_{i - 1} } }\)




















\(\ds \)

\(=\)







\(\ds -\sum_{i \mathop = 1}^n \paren {\map f {x_i} - \map f {x_{i - 1} } }\)




















\(\ds \)

\(=\)







\(\ds -\paren {\map f b - \map f a}\)





as in the previous calculation














\(\ds \)

\(=\)







\(\ds \map f a - \map f b\)









for all finite subdivisions $P$.
Note again that $\map f a - \map f b$ is independent of the subdivision $P$. 
Therefore if $f$ is decreasing, it is of bounded variation.
Hence, if $f$ is either increasing or decreasing, it is of bounded variation.
Hence if $f$ is monotone, it is of bounded variation.
$\blacksquare$


Sources
1973: Tom M. Apostol: Mathematical Analysis (2nd ed.) ... (previous) ... (next): $\S 6.3$: Functions of Bounded Variation: Theorem $6.5$




