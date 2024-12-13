# 

Source: https://proofwiki.org/wiki/Norm_satisfying_Parallelogram_Law_induced_by_Inner_Product/Real_Case/Corollary



Corollary
Let $\struct {V, \norm \cdot}$ be a normed vector space over $\R$.

Then there exists an inner product $\innerprod \cdot \cdot : V \times V \to \R$ such that: 

$\norm x = \sqrt {\innerprod x x}$
if and only if:

$\norm {x + y}^2 + \norm {x - y}^2 = 2 \paren {\norm x^2 + \norm y^2}$
for each $x, y \in V$.

That is, a norm is induced by an inner product if and only if it satisfies the Parallelogram Law for Inner Product Spaces.


Proof
Necessary Condition
Suppose that there exists an inner product $\innerprod \cdot \cdot : V \times V \to \R$ such that: 

$\norm x = \sqrt {\innerprod x x}$
Then $\struct {V, \innerprod \cdot \cdot}$ is an inner product space with inner product norm $\norm \cdot$. 
So from the Parallelogram Law for Inner Product Spaces, we have: 

$\norm {x + y}^2 + \norm {x - y}^2 = 2 \paren {\norm x^2 + \norm y^2}$
for each $x, y \in V$.
$\Box$

Sufficient Condition
Suppose that: 

$\norm {x + y}^2 + \norm {x - y}^2 = 2 \paren {\norm x^2 + \norm y^2}$
Then, from Norm satisfying Parallelogram Law induced by Inner Product: Real Case, there exists an inner product $\innerprod \cdot \cdot : V \times V \to \R$ such that: 

$\norm x = \sqrt {\innerprod x x}$
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $8.3$: Properties of the Induced Norms




