# 

Source: https://proofwiki.org/wiki/Dihedral_Group_D4/Normal_Subgroups/Subgroup_Generated_by_a

Example of Normal Subgroup of the Dihedral Group $D_4$
Let the dihedral group $D_4$ be represented by its group presentation:

$D_4 = \gen {a, b: a^4 = b^2 = e, a b = b a^{-1} }$

The subgroup of $D_4$ generated by $\gen a$ is normal.


Proof
Let $N = \gen a$
First it is noted that as $a^4 = e$:

$N = \set {e, a, a^2, a^3}$
and is cyclic.
The left cosets of $N$:















\(\ds e N\)

\(=\)







\(\ds e \set {e, a, a^2, a^3}\)




















\(\ds \)

\(=\)







\(\ds \set {e, a, a^2, a^3}\)




















\(\ds \)

\(=\)







\(\ds N\)
























\(\ds b N\)

\(=\)







\(\ds b \set {e, a, a^2, a^3}\)




















\(\ds \)

\(=\)







\(\ds \set {b, b a, b a^2, b a^3}\)










As $\order {\gen a} = \order {D_4} / 2$ it follows from Subgroup of Index 2 is Normal that $\gen a$ is normal.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $7$: Normal subgroups and quotient groups: Example $7.13$




