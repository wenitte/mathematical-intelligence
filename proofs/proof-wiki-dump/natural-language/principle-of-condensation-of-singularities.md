# 

Source: https://proofwiki.org/wiki/Principle_of_Condensation_of_Singularities

Theorem
Let $\struct {X, \norm {\,\cdot\,}_X}$ be a Banach space.
Let $\struct {Y, \norm {\,\cdot\,}_Y}$ be a normed vector space.
Let $\family {T_\alpha: X \to Y}_{\alpha \mathop \in A}$ be an $A$-indexed family of bounded linear transformations from $X$ to $Y$ such that: 

$\ds \sup_{\alpha \in A} \norm {T_\alpha} = \infty$

Then: 

$\ds \sup_{\alpha \in A} \norm {T_\alpha x} = \infty$ for some $x \in X$.


Proof
Aiming for a contradiction, suppose that: 

$\ds \sup_{\alpha \in A} \norm {T_\alpha x} < \infty$ for each $x \in X$.
From the Banach-Steinhaus Theorem, we have: 

$\ds \sup_{\alpha \in A} \norm {T_\alpha} < \infty$.
contradicting that: 

$\ds \sup_{\alpha \in A} \norm {T_\alpha} = \infty$
So, we have: 

$\ds \sup_{\alpha \in A} \norm {T_\alpha x} = \infty$ for some $x \in X$.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $22.2$: The Principle of Uniform Boundedness




