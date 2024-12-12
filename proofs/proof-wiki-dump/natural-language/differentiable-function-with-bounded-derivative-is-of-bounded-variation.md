# 

Source: https://proofwiki.org/wiki/Differentiable_Function_with_Bounded_Derivative_is_of_Bounded_Variation



Theorem
Let $a, b$ be real numbers with $a < b$.
Let $f : \closedint a b \to \R$ be a continuous function.
Let $f$ be differentiable on $\openint a b$, with bounded derivative.

Then $f$ is of bounded variation.


Proof
For each finite subdivision $P$ of $\closedint a b$, write: 

$P = \set {x_0, x_1, \ldots, x_n }$
with:

$a = x_0 < x_1 < x_2 < \cdots < x_{n - 1} < x_n = b$
Since the derivative of $f$ is bounded, there exists some $M \in \R$ such that: 

$\size {\map {f'} x} \le M$
for all $x \in \openint a b$.
By the Mean Value Theorem, for each $i \in \N$ with $i \le n$, there exists $\xi_i \in \openint {x_{i - 1} } {x_i}$ such that: 

$\map {f'} {\xi_i} = \dfrac {\map f {x_i} - \map f {x_{i - 1} } } {x_i - x_{i - 1} }$
Note that, from the boundedness of $f'$: 

$\size {\map {f'} {\xi_i} } \le M$
We also have from the fact that $x_i > x_{i - 1}$: 

$\size {x_i - x_{i - 1} } = x_i - x_{i - 1}$
So, for each $i$: 














\(\ds \size {\map f {x_i} - \map f {x_{i - 1} } }\)

\(=\)







\(\ds \size {\map {f'} {\xi_i} } \paren {x_i - x_{i - 1} }\)




















\(\ds \)

\(\le\)







\(\ds M \paren {x_i - x_{i - 1} }\)









We therefore have: 














\(\ds \map {V_f} {P ; \closedint a b}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \size {\map f {x_i} - \map f {x_{i - 1} } }\)





using the notation from the definition of bounded variation














\(\ds \)

\(\le\)







\(\ds M \sum_{i \mathop = 1}^n \paren {x_i - x_{i - 1} }\)




















\(\ds \)

\(=\)







\(\ds M \paren {x_n - x_0}\)





Telescoping Series: Example 2














\(\ds \)

\(=\)







\(\ds M \paren {b - a}\)









for all finite subdivisions $P$.
So $f$ is of bounded variation. 
$\blacksquare$


Also see
Differentiable Function of Bounded Variation may not have Bounded Derivative: demonstrating that while this theorem gives a simple sufficient condition for a differentiable continuous function $f$ to be of bounded variation, it is not a necessary condition.


Sources
1973: Tom M. Apostol: Mathematical Analysis (2nd ed.) ... (previous) ... (next): $\S 6.3$: Functions of Bounded Variation: Theorem $6.6$




