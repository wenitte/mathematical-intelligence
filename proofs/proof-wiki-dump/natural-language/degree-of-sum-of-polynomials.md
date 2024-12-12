# 

Source: https://proofwiki.org/wiki/Degree_of_Sum_of_Polynomials

Theorem
Let $\struct {R, +, \circ}$ be a ring with unity whose zero is $0_R$.
Let $R \sqbrk X$ be the ring of polynomials over $R$ in the indeterminate $X$.
For $f \in R \sqbrk X$ let $\map \deg f$ be the degree of $f$.

Then:

$\forall f, g \in R \sqbrk X: \map \deg {f + g} \le \max \set {\map \deg f, \map \deg g}$


Proof
First we associate to $f = a_0 + a_1 X + \cdots + a_n X^n \in R \sqbrk X$ a formal vector $x_f = \tuple {a_0, a_1, \ldots, a_n, 0_R, \ldots} \in R^\infty$.
Let $x_f^i \in R$ denote the element at the $i$th position. 
Then:

$\map \deg f = \sup \set {i \in \N : x_f^i \ne 0_R}$
The sum $+$ in the polynomial ring $R \sqbrk X$ gives rise to the following identity in $R^\infty$:

$x_{f + g}^i = x_f^i + x_g^i$

Next, let $f, g \in R \sqbrk X$, and let $d = \max \set {\map \deg f, \map \deg g}$.
Then $x_f^i = 0_R = x_g^i$ for all $i > d$, so we have:

$\map \deg {f + g} = \sup \set {i \in \N : x_{f + g}^i \ne 0_R} = \sup \set {i \in \N : x_f^i + x_g^i \ne 0_R} \le d$
$\blacksquare$


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 3.2$: Polynomial rings: Lemma $3.7 \ \text{(i)}$




