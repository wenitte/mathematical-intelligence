# 

Source: https://proofwiki.org/wiki/Reduced_Residues_Modulo_5_under_Multiplication_form_Cyclic_Group

Theorem
Let $\struct {\Z'_5, \times_5}$ denote the multiplicative group of reduced residues modulo $5$.
Then $\struct {\Z'_5, \times_5}$ is cyclic.


Proof
From Reduced Residue System under Multiplication forms Abelian Group‎ it is noted that $\struct {\Z'_5, \times_5}$ is a group.
It remains to be shown that $\struct {\Z'_5, \times_5}$ is cyclic.
It will be demonstrated that:

$\gen {\eqclass 2 5} = \struct {\Z'_5, \times_5}$
That is, that $\eqclass 2 5$ is a generator of $\struct {\Z'_5, \times_5}$.

We note that $\eqclass 1 5$ is the identity element of $\struct {\Z'_5, \times_5}$.
Thus successive powers of $\eqclass 2 5$ are taken, until $n \in \Z$ is found such that $\eqclass 2 5^n = \eqclass 1 5$:














\(\ds \eqclass 2 5^2\)

\(=\)







\(\ds \eqclass {2 \times 2} 5\)




















\(\ds \)

\(=\)







\(\ds \eqclass 4 5\)




















\(\ds \eqclass 2 5^3\)

\(=\)







\(\ds \eqclass 2 5^2 \times \eqclass 2 5\)




















\(\ds \)

\(=\)







\(\ds \eqclass {2 \times 4} 5\)




















\(\ds \)

\(=\)







\(\ds \eqclass 8 5\)




















\(\ds \)

\(=\)







\(\ds \eqclass 3 5\)




















\(\ds \eqclass 2 5^4\)

\(=\)







\(\ds \eqclass 2 5^3 \times \eqclass 2 5\)




















\(\ds \)

\(=\)







\(\ds \eqclass {3 \times 2} 5\)




















\(\ds \)

\(=\)







\(\ds \eqclass 6 5\)




















\(\ds \)

\(=\)







\(\ds \eqclass 1 5\)










All elements of $\struct {\Z'_5, \times_5}$ are seen to be in $\gen {\eqclass 2 5}$.
Hence the result by definition of cyclic group.
$\blacksquare$





