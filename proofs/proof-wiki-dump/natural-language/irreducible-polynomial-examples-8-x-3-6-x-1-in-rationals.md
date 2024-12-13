# 

Source: https://proofwiki.org/wiki/Irreducible_Polynomial/Examples/8_x%5E3_-_6_x_-_1_in_Rationals

Examples of Irreducible Polynomials
Consider the polynomial:

$\map P x = 8 x^3 - 6 x - 1$
over the ring of polynomials $\Q \sqbrk X$ over the rational numbers.

Then $\map P x$ is irreducible.


Proof
Aiming for a contradiction, suppose $\map P x$ has proper factors.
Then one of these has to be of degree $1$.
Thus from Factors of Polynomial with Integer Coefficients have Integer Coefficients we have:

$8 x^3 - 6 x - 1 = \paren {a x + b} \paren {c^2 + d x + e}$
for some $a, b, c, d, e \in \Z$.
Hence:














\(\ds a c\)

\(=\)







\(\ds 8\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(\divides\)







\(\ds 8\)




















\(\ds b e\)

\(=\)







\(\ds -1\)














\(\ds \leadsto \ \ \)





\(\ds b\)

\(\divides\)







\(\ds 1\)









The only possible degree $1$ factors with integer coefficients are:

$x \pm 1, 2 x \pm 1, 4 x \pm 1, 8 x \pm 1$
By trying each of these possibilities, it is determined that no integer value of $d$ gives the correct values.
Hence the result.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 31$. Polynomials with Integer Coefficients: Example $59$




