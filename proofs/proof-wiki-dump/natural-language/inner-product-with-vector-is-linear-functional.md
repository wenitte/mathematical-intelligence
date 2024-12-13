# 

Source: https://proofwiki.org/wiki/Inner_Product_with_Vector_is_Linear_Functional

Theorem
Let $\GF$ be a subfield of $\C$.
Let $\struct{ V, \innerprod \cdot \cdot }$ be an inner product space over $\GF$.
Let $v_0 \in V$.

Then the mapping $L: V \to \GF$ defined by:

$\map L v := \innerprod v {v_0}$
is a linear functional.


Proof
Let us directly check the definition of linear functional:














\(\ds \map L {\alpha v + \beta w}\)

\(=\)







\(\ds \innerprod { \alpha v + \beta w } {v_0}\)




















\(\ds \)

\(=\)







\(\ds \innerprod {\alpha v} {v_0} + \innerprod {\beta w} {v_0}\)




















\(\ds \)

\(=\)







\(\ds \alpha \innerprod v {v_0} + \beta \innerprod w {w_0}\)




















\(\ds \)

\(=\)







\(\ds \alpha \map L v + \beta \map L w\)









$\blacksquare$

Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 3.$ The Riesz Representation Theorem




