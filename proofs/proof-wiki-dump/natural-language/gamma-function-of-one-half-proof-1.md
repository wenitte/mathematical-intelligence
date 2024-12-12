# 

Source: https://proofwiki.org/wiki/Gamma_Function_of_One_Half/Proof_1

Theorem
$\map \Gamma {\dfrac 1 2} = \sqrt \pi$


Proof
From the definition of the Beta function:

$\map \Beta {x, y} := \dfrac {\map \Gamma x \map \Gamma y} {\map \Gamma {x + y} }$
Setting $x = y = \dfrac 1 2$:














\(\ds \map \Beta {\dfrac 1 2, \dfrac 1 2}\)

\(=\)







\(\ds \frac {\map \Gamma {\dfrac 1 2} \map \Gamma {\dfrac 1 2} } {\map \Gamma {\dfrac 1 2 + \dfrac 1 2} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\map \Gamma {\dfrac 1 2} }^2\)










Then from Beta Function of Half with Half:

$\map \Beta {\dfrac 1 2, \dfrac 1 2} = \pi$
Hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 17.7 \ (6)$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $43$




