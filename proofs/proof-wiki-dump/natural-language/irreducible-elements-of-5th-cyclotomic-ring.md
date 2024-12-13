# 

Source: https://proofwiki.org/wiki/Irreducible_Elements_of_5th_Cyclotomic_Ring

Theorem
Let $\struct {\Z \sqbrk {i \sqrt 5}, +, \times}$ denote the $5$th cyclotomic ring.

The following elements of $\struct {\Z \sqbrk {i \sqrt 5}, +, \times}$ are irreducible:

$2$
$3$
$1 + i \sqrt 5$
$1 - i \sqrt 5$


Proof

A particular theorem is missing.In particular: For the concept of irreducibility to be defined, it needs to be demonstrated that $\struct {\Z \sqbrk {i \sqrt 5}, +, \times}$ is actually an integral domain.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding the theorem.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{TheoremWanted}} from the code.

Let $z = x + i y$ be an element of $\Z \sqbrk {i \sqrt 5}$ in the set $S$, where:

$S := \set {2, 3, 1 + i \sqrt 5, 1 - i \sqrt 5}$
Let $z$ have a non-trivial factorization:

$z = z_1 z_2$
where neither $z_1$ nor $z_2$ are units of $\Z \sqbrk {i \sqrt 5}$.

Let $\map N z$ denote the field norm of $z \in \Z \sqbrk {i \sqrt 5}$.
Then:














\(\ds \map N z\)

\(=\)







\(\ds \map N {z_1 z_2}\)




















\(\ds \)

\(=\)







\(\ds \map N {z_1} \map N {z_2}\)





Definition of Field Norm of Complex Number




Then we have:














\(\ds \map N 2\)

\(=\)







\(\ds 2^2 + 5 \times 0^2\)





Field Norm on 5th Cyclotomic Ring














\(\ds \)

\(=\)







\(\ds 4\)




















\(\ds \map N 3\)

\(=\)







\(\ds 3^2 + 5 \times 0^2\)





Field Norm on 5th Cyclotomic Ring














\(\ds \)

\(=\)







\(\ds 9\)




















\(\ds \map N {1 + i \sqrt 5}\)

\(=\)







\(\ds 1^2 + 5 \times 1^2\)





Field Norm on 5th Cyclotomic Ring














\(\ds \)

\(=\)







\(\ds 6\)




















\(\ds \map N {1 - i \sqrt 5}\)

\(=\)







\(\ds 1^2 + 5 \times 1^2\)





Field Norm on 5th Cyclotomic Ring














\(\ds \)

\(=\)







\(\ds 6\)









From Elements of 5th Cyclotomic Ring with Field Norm 1, the only elements of $\Z \sqbrk {i \sqrt 5}$ whose field norm is $1$ are the units of $\struct {\Z \sqbrk {i \sqrt 5}, +, \times}$: $1$ and $-1$.
From 5th Cyclotomic Ring has no Elements with Field Norm of 2 or 3, none of $4$, $6$ and $9$ have proper divisors which are field norms of elements of $\Z \sqbrk {i \sqrt 5}$.
Thus either $z_1$ or $z_2$ is a unit of $\struct {\Z \sqbrk {i \sqrt 5}, +, \times}$.
So none of the elements of $S$ has a non-trivial factorization in $\struct {\Z \sqbrk {i \sqrt 5}, +, \times}$.
Hence the result, by definition of irreducible.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $19 \ \text {(iii)}$




