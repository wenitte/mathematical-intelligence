# 

Source: https://proofwiki.org/wiki/Orthogonal_Projection_is_Linear_Transformation

Theorem
Let $\GF \in \set {\R, \C}$.


This article, or a section of it, needs explaining.In particular: Does this hold for all subfields of $\C$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $H$ be a Hilbert space over $\mathbb F$ with inner product $\innerprod \cdot \cdot$.
Let $K$ be a closed linear subspace of $H$.
Let $P_K$ denote the orthogonal projection on $K$.

Then $P_K$ is a linear transformation on $H$.


Proof
Let $x, y \in H$. 
Let $\alpha, \beta \in \GF$. 
Let $k \in \KK$. 

Since the inner product is linear in its first argument, we have: 

$\innerprod {\paren {\alpha x + \beta y} - \paren {\alpha \map {P_K} x + \beta \map {P_K} y} } k = \alpha \innerprod {x - \map {P_K} x} k + \beta \innerprod {y - \map {P_K} y} k$
From Unique Point of Minimal Distance to Closed Convex Subset of Hilbert Space, we have: 

$\alpha \innerprod {x - \map {P_K} x} k = 0$
and:

$\beta \innerprod {y - \map {P_K} y} k = 0$
Since $k$ was arbitrary, we have: 

$\innerprod {\paren {\alpha x + \beta y} - \paren {\alpha \map {P_K} x + \beta \map {P_K} y} } k = 0$
for all $k \in K$. 
Note that from Unique Point of Minimal Distance to Closed Convex Subset of Hilbert Space: 

$\map {P_K} {\alpha x + \beta y}$ is the unique point in $H$ such that $\innerprod {\paren {\alpha x + \beta y} - \map {P_K} {\alpha x + \beta y} } k = 0$ for each $k \in K$.
So we therefore have: 

$\alpha \map {P_K} x + \beta \map {P_K} y = \map {P_K} {\alpha x + \beta y}$
for each $x, y \in H$ and $\alpha, \beta \in \mathbb F$.
So $P_K$ is a linear transformation, as required.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 2.$ Orthogonality: Theorem $2.7 \text{(a)}$




