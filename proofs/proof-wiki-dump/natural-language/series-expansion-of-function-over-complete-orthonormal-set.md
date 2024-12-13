# 

Source: https://proofwiki.org/wiki/Series_Expansion_of_Function_over_Complete_Orthonormal_Set

Theorem
Let $\map f x$ be a real function defined over the interval $\openint a b$.
Let $\map f x$ be able to be expressed in terms of a complete orthonormal set of real functions $S := \family {\map {\phi_i} x}_{i \mathop \in I}$ for some indexing set $I$:

$\map f x = \ds \sum_{i \mathop \in I} a_i \map {\phi_i} x$

Then the coefficients $\family {a_i}_{i \mathop \in I}$ can be determined as:

$\forall i \in I: a_i = \ds \int_a^b \map f x \map {\phi_i} x \rd x$


Proof













\(\ds \map f x\)

\(=\)







\(\ds \sum_{i \mathop \in I} a_i \map {\phi_i} x\)














\(\ds \leadsto \ \ \)





\(\ds \map f x \map {\phi_n} x\)

\(=\)







\(\ds \sum_{i \mathop \in I} a_i \map {\phi_i} x \map {\phi_n} x\)





for arbitrary $n \in I$








\(\ds \leadsto \ \ \)





\(\ds \int_a^b \map f x \map {\phi_n} x \rd x\)

\(=\)







\(\ds \int_a^b \sum_{i \mathop \in I} a_i \map {\phi_i} x \map {\phi_n} x rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in I} a_i \int_a^b \map {\phi_i} x \map {\phi_n} x \rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in I} a_i \delta_{i n}\)





Definition of Complete Orthonormal Set of Real Functions














\(\ds \)

\(=\)







\(\ds a_n\)









$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 8$. Orthonormal Sets of Functions: $(3)$




