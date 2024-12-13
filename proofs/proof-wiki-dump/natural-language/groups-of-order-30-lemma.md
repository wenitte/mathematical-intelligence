# 

Source: https://proofwiki.org/wiki/Groups_of_Order_30/Lemma

Theorem
Let $G$ be a group of order $30$.
Then $G$ is one of the following:

The cyclic group $C_{30}$
The dihedral group $D_{15}$
Isomorphic to one of:
$\gen {x, y: x^{15} = e = y^2, y x y^{-1} = x^4}$
$\gen {x, y: x^{15} = e = y^2, y x y^{-1} = x^{11} }$


Proof
By Group of Order 30 has Normal Cyclic Subgroup of Order 15, $G$ has a normal subgroup of order $15$ which is cyclic.
Let this normal cyclic order $15$ subgroup be denoted $N$:

$N = \gen x$

Let $y$ be the generator for any Sylow $2$-subgroup of $G$.
Then:














\(\ds y x y^{-1}\)

\(\in\)







\(\ds N\)





as $N$ is normal








\(\ds \leadsto \ \ \)





\(\ds y x y^{-1}\)

\(=\)







\(\ds x^i\)





for some $i \in \Z_{\ge 0}$



Then:














\(\ds x\)

\(=\)







\(\ds y^2 x y^{-2}\)





as $y^2 = e$














\(\ds \)

\(=\)







\(\ds y \paren {y x y^{-1} } y^{-1}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds y x^i y^{-1}\)





as $y x y^{-1} = x^i$














\(\ds \)

\(=\)







\(\ds \paren {y x y^{-1} }^i\)





Power of Conjugate equals Conjugate of Power














\(\ds \)

\(=\)







\(\ds \paren {x^i}^i\)





as $y x y^{-1} = x^i$














\(\ds \)

\(=\)







\(\ds x^{i^2}\)





Powers of Group Elements



and so:

$i^2 - 1 \equiv 0 \pmod {15}$
Investigating the powers of $i$, case by case, searching for those which satisfy this congruence, yields:

$i \in \set {1, 4, 11, 14}$

The case $i \equiv 1 \pmod {15}$ leads to the cyclic group $C_{30}$.

The case where $i \equiv {14} \equiv {-1} \pmod {15}$ leads to the dihedral group $D_{15}$.

The other two cases lead to:

$\gen {x, y: x^{15} = e = y^2, y x y^{-1} = x^4}$
$\gen {x, y: x^{15} = e = y^2, y x y^{-1} = x^{11} }$
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $12$: Applications of Sylow Theory: $(5)$ Groups of order $30$: Proposition $12.6$




