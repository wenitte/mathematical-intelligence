# 

Source: https://proofwiki.org/wiki/Characteristic_Function_of_Intersection/Variant_2

Theorem
Let $A, B \subseteq S$.
Let $\chi_{A \mathop \cap B}$ be the characteristic function of their intersection $A \cap B$.

Then:

$\chi_{A \mathop \cap B} = \min \set {\chi_A, \chi_B}$


Proof
By Characteristic Function Determined by 1-Fiber, it suffices to show that:

$\min \set {\map {\chi_A} s, \map {\chi_B} s} = 1 \iff s \in A \cap B$

By definition of characteristic function, we have:

$\min \set {\map {\chi_A} s, \map {\chi_B} s} = 1$
if and only if:

$\map {\chi_A} s = \map {\chi_B} s = 1$
because $\chi_A, \chi_B$ take values in $\set {0, 1}$.
By definition of $\chi_A$ and $\chi_B$, this is equivalent to the statement that both $s \in A$ and $s \in B$.
That is:

$s \in A \cap B$
by definition of set intersection.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 2$: Problem $5 \ \text{(vi)}$




