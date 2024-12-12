# 

Source: https://proofwiki.org/wiki/Characteristic_Function_of_Union/Variant_1

Theorem
Let $A, B \subseteq S$.
Let $\chi_{A \mathop \cup B}$ be the characteristic function of their union $A \cup B$.

Then:

$\chi_{A \mathop \cup B} = \min \set {\chi_A + \chi_B, 1}$
where $\min$ denotes the min operation.


Proof
By Characteristic Function Determined by 1-Fiber, it suffices to show:

$\min \set {\map {\chi_A} s + \map {\chi_B} s, 1} = 1 \iff s \in A \cup B$
By the nature of the min operation, this amounts to showing that:

$\map {\chi_A} s + \map {\chi_B} s \ge 1 \iff s \in A \cup B$
As $\chi_A, \chi_B$ are characteristic functions, the left hand side amounts to:

$s \in A \lor s \in B$
which is precisely the definition of $s \in A \cup B$.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 2$: Problem $5 \ \text{(ii)}$




