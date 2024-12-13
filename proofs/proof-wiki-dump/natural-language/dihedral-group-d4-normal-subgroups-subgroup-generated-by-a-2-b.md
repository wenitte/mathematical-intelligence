# 

Source: https://proofwiki.org/wiki/Dihedral_Group_D4/Normal_Subgroups/Subgroup_Generated_by_a%5E2,_b

Example of Normal Subgroup of the Dihedral Group $D_4$
Let the dihedral group $D_4$ be represented by its group presentation:

$D_4 = \gen {a, b: a^4 = b^2 = e, a b = b a^{-1} }$

The subgroup of $D_4$ generated by $\gen {a^2, b}$ is normal.


Proof
Let $N = \gen {a^2, b}$.
First it is noted that:














\(\ds \paren {a^2}^2\)

\(=\)







\(\ds e\)




















\(\ds b^2\)

\(=\)







\(\ds e\)









so:

$N = \set {e, a^2, b, b a^2}$
and is an instance of the Klein $4$-group.
The left cosets of $N$:















\(\ds e N\)

\(=\)







\(\ds e \set {e, a^2, b, b a^2}\)




















\(\ds \)

\(=\)







\(\ds \set {e, a^2, b, b a^2}\)




















\(\ds \)

\(=\)







\(\ds N\)
























\(\ds a N\)

\(=\)







\(\ds a \set {e, a^2, b, b a^2}\)




















\(\ds \)

\(=\)







\(\ds \set {a, a^3 b a, b a^3}\)










As $\order {\gen {a^2, b} } = \order {D_4} / 2$ it follows from Subgroup of Index 2 is Normal that $\gen {a^2, b}$ is normal.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $7$: Normal subgroups and quotient groups: Example $7.15$



