# 

Source: https://proofwiki.org/wiki/Orthocomplement_equal_to_Orthocomplement_of_Linear_Span

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {V, \innerprod \cdot \cdot}$ be an inner product space over $\GF$. 
Let $S \subseteq V$ be non-empty.

Then:

$S^\bot = \paren {\map \span S}^\bot$
where $\bot$ denotes orthocomplement.


Proof
From Orthocomplement Reverses Subset, we have:

$\paren {\map \span S}^\bot \subseteq S^\bot$
Conversely let $y \in S^\bot$. 
Let $x \in \map \span S$.
From the definition of the linear span there exists $x_1, \ldots, x_n \in S$ and $\alpha_1, \ldots, \alpha_n \in \GF$ such that:

$\ds x = \sum_{j \mathop = 1}^n \alpha_j x_j$
We then have:














\(\ds \innerprod x y\)

\(=\)







\(\ds \innerprod {\sum_{j \mathop = 1}^n \alpha_j x_j} y\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \alpha_j \innerprod {x_j} y\)





linearity in first argument














\(\ds \)

\(=\)







\(\ds 0\)





since $x_j \in S$ for each $j$, we have $\innerprod {x_j} y = 0$



So $\innerprod x y = 0$ for all $x \in \map \span S$.
So $y \in \paren {\map \span S}^\bot$.
Hence we have $S^\bot \subseteq \paren {\map \span S}^\bot$.
We conclude:

$S^\bot = \paren {\map \span S}^\bot$
$\blacksquare$





