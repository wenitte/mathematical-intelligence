# 

Source: https://proofwiki.org/wiki/Quaternion_Group_is_Hamiltonian

Theorem
The quaternion group $Q$ is Hamiltonian.


Proof
For clarity the Cayley table of $Q$ is presented below:

$\begin {array} {r|rrrrrrrr}
& e     & a     & a^2   & a^3   & b     & a b   & a^2 b & a^3 b \\
\hline
e     & e     & a     & a^2   & a^3   & b     & a b   & a^2 b & a^3 b \\
a     & a     & a^2   & a^3   & e     & a b   & a^2 b & a^3 b & b     \\
a^2   & a^2   & a^3   & e     & a     & a^2 b & a^3 b & b     & a b   \\
a^3   & a^3   & e     & a     & a^2   & a^3 b & b     & a b   & a^2 b \\
b     & b     & a^3 b & a^2 b & a b   & a^2   & a     & e     & a^3   \\
a b   & a b   & b     & a^3 b & a^2 b & a^3   & a^2   & a     & e     \\
a^2 b & a^2 b & a b   & b     & a^3 b & e     & a^3   & a^2   & a     \\
a^3 b & a^3 b & a^2 b & a b   & b     & a     & e     & a^3   & a^2 
\end {array}$

By definition $Q$ is Hamiltonian if and only if:

$Q$ is non-abelian
and:

every subgroup of $Q$ is normal.
$Q$ is non-abelian as demonstrated by the counter-example:

$a b \ne b a$
From Subgroups of Quaternion Group:
The subsets of $Q$ which form subgroups of $Q$ are:














\(\ds \)

\(\)







\(\ds Q\)




















\(\ds \)

\(\)







\(\ds \set e\)




















\(\ds \)

\(\)







\(\ds \set {e, a^2}\)




















\(\ds \)

\(\)







\(\ds \set {e, a, a^2, a^3}\)




















\(\ds \)

\(\)







\(\ds \set {e, b, a^2, a^2 b}\)




















\(\ds \)

\(\)







\(\ds \set {e, a b, a^2, a^3 b}\)










From Quaternion Group is Hamiltonian we have that all of these subgroups of $Q$ are normal.

From Trivial Subgroup and Group Itself are Normal:

$Q$ and $\set e$ are normal subgroups of $Q$.
From Center of Quaternion Group, $\gen {a^2} = \set {e, a^2}$ is the center of $Q$.
From Center of Group is Normal Subgroup, $\set {e, a^2}$ is normal in $Q$.

The remaining subgroups of $Q$ are of order $4$, and so have index $2$.
From Subgroup of Index 2 is Normal it follows that all of these order $4$ subgroups of $Q$ are normal.

That accounts for all subgroups of $Q$.
Hence the result.
$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.10$: Example $36$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 46 \iota$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $8 \ \text{(ii)}$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $7$: Normal subgroups and quotient groups: Exercise $3$




