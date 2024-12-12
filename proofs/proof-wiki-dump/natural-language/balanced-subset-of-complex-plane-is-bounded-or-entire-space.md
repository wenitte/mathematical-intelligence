# 

Source: https://proofwiki.org/wiki/Balanced_Subset_of_Complex_Plane_is_Bounded_or_Entire_Space

Theorem
Consider $\C$ as a vector space over $\C$.
Let $E$ be a balanced subset of $\C$.

Then $E$ is bounded, or $E = \C$.


Proof
Suppose that $E$ is not bounded.
Then, for each $R > 0$ there exists some $z_R \in E$ such that $\size {z_R} > R$.
We show that: 

$\map {B_R} 0 \subseteq E$ for each $R > 0$
where $\map {B_R} 0$ is the open ball centered at $0$ with radius $R$.
Let:

$w \in \map {B_R} 0$
Then: 

$\ds \cmod {\frac w {z_R} } < 1$
So, since $E$ is balanced, we have: 

$\ds z_R \cdot \paren {\frac w {z_R} } = w \in E$
giving:

$\map {B_R} 0 \subseteq E$ for each $R > 0$.
From Union of Subsets is Subset, we have: 

$\ds \bigcup_{R > 0} \map {B_R} 0 \subseteq E$
giving:

$\C \subseteq E$
Since we also have $E \subseteq \C$, we obtain $E = \C$.
$\blacksquare$





