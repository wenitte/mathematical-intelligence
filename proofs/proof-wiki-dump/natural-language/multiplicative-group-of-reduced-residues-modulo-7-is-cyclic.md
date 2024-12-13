# 

Source: https://proofwiki.org/wiki/Multiplicative_Group_of_Reduced_Residues_Modulo_7_is_Cyclic

Theorem
Let $\struct {\Z'_7, \times_7}$ denote the multiplicative group of reduced residues modulo $7$.
Then $\struct {\Z'_7, \times_7}$ is cyclic.


Proof
From Reduced Residue System under Multiplication forms Abelian Group‎ it is noted that $\struct {\Z'_7, \times_7}$ is a group.
It remains to be shown that $\struct {\Z'_7, \times_7}$ is cyclic.
It will be demonstrated that:

$\gen {\eqclass 3 7} = \struct {\Z'_7, \times_7}$
That is, that $\eqclass 3 7$ is a generator of $\struct {\Z'_7, \times_7}$.

We note that $\eqclass 1 7$ is the identity element of $\struct {\Z'_7, \times_7}$.
Thus successive powers of $\eqclass 3 7$ are taken, until $n \in \Z$ is found such that $\eqclass 3 7^n = \eqclass 1 7$:














\(\ds \eqclass 3 7^2\)

\(=\)







\(\ds \eqclass {3 \times 3} 7\)




















\(\ds \)

\(=\)







\(\ds \eqclass 9 7\)




















\(\ds \)

\(=\)







\(\ds \eqclass 2 7\)




















\(\ds \eqclass 3 7^3\)

\(=\)







\(\ds \eqclass 3 7^2 \times \eqclass 3 7\)




















\(\ds \)

\(=\)







\(\ds \eqclass {2 \times 3} 7\)




















\(\ds \)

\(=\)







\(\ds \eqclass 6 7\)




















\(\ds \eqclass 3 7^4\)

\(=\)







\(\ds \eqclass 3 7^3 \times \eqclass 3 7\)




















\(\ds \)

\(=\)







\(\ds \eqclass {6 \times 3} 7\)




















\(\ds \)

\(=\)







\(\ds \eqclass {18} 7\)




















\(\ds \)

\(=\)







\(\ds \eqclass 4 7\)




















\(\ds \eqclass 3 7^5\)

\(=\)







\(\ds \eqclass 3 7^4 \times \eqclass 3 7\)




















\(\ds \)

\(=\)







\(\ds \eqclass {4 \times 3} 7\)




















\(\ds \)

\(=\)







\(\ds \eqclass {12} 7\)




















\(\ds \)

\(=\)







\(\ds \eqclass 5 7\)




















\(\ds \eqclass 3 7^6\)

\(=\)







\(\ds \eqclass 3 7^5 \times \eqclass 3 7\)




















\(\ds \)

\(=\)







\(\ds \eqclass {5 \times 3} 7\)




















\(\ds \)

\(=\)







\(\ds \eqclass {15} 7\)




















\(\ds \)

\(=\)







\(\ds \eqclass 1 7\)










All elements of $\struct {\Z'_7, \times_7}$ are seen to be in $\gen {\eqclass 3 7}$.
Hence the result by definition of cyclic group.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: An Introduction to Groups: Exercise $16$




