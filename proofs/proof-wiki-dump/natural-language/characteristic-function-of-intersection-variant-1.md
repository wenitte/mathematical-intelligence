# 

Source: https://proofwiki.org/wiki/Characteristic_Function_of_Intersection/Variant_1

Theorem
Let $A, B \subseteq S$.
Let $\chi_{A \mathop \cap B}$ be the characteristic function of their intersection $A \cap B$.

Then:

$\chi_{A \mathop \cap B} = \chi_A \chi_B$


Proof
By Characteristic Function Determined by 1-Fiber, it suffices to show that:

$\map {\chi_A} s \map {\chi_B} s = 1 \iff s \in A \cap B$

Now, both $\chi_A$ and $\chi_B$ are characteristic functions.
It follows that, for any $s \in S$:

$\map {\chi_A} s \map {\chi_B} s = 1 \iff \map {\chi_A} s = \map {\chi_B} s = 1$
By definition of $\chi_A$ and $\chi_B$, this is equivalent to the statement that both $s \in A$ and $s \in B$.
That is, $s \in A \cap B$, by definition of set intersection.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 6$: Functions: Exercise $7 \ \text{(a)}$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 2$: Problem $5 \ \text{(i)}$




