# 

Source: https://proofwiki.org/wiki/Centralizer_of_Ring_Subset_is_Subring

Theorem
Let $S$ be a subset of a ring $\struct {R, +, \circ}$
Then $\map {C_R} S$, the centralizer of $S$ in $R$, is a subring of $R$.


Proof
Certainly $0_R \in \map {C_R} S$ as $0_R$ commutes (trivially) with all elements of $R$.

Suppose $x, y \in \map {C_R} S$.
Then:










\(\ds \forall s \in S: \, \)



\(\ds s \circ \paren {x + \paren {-y} }\)

\(=\)







\(\ds s \circ x + s \circ \paren {-y}\)





Distributivity of $\circ$ over $+$














\(\ds \)

\(=\)







\(\ds x \circ s + \paren {-y} \circ s\)





$x$ and $y$ are in $\map {C_R} S$














\(\ds \)

\(=\)







\(\ds \paren {x + \paren {-y} } \circ s\)





Distributivity of $\circ$ over $+$




So:

$x + \paren {-y} \in \map {C_R} s$

Suppose $x, y \in \map {C_R} S$ again.
Then from Element Commutes with Product of Commuting Elements:

$x \circ y \in \map {C_R} S$
Thus all the conditions are fulfilled for Subring Test, and $\map {C_R} S$ is a subring of $R$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $21$. Rings and Integral Domains: Theorem $21.5$




