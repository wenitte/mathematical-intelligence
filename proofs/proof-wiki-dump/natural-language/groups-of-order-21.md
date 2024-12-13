# 

Source: https://proofwiki.org/wiki/Groups_of_Order_21



Theorem
There exist exactly $2$ groups of order $21$, up to isomorphism:

$(1): \quad C_{21}$, the cyclic group of order $21$
$(2): \quad$ the group whose group presentation is:
$\gen {x, y: x^7 = e = y^3, y x y^{-1} = x^2}$


Proof
Let $G$ be of order $21$.
From Group of Order $p q$ has Normal Sylow $p$-Subgroup, $G$ has exactly one Sylow $7$-subgroup, which is normal.
Let this Sylow $7$-subgroup of $G$ be denoted $P = \gen {x: x^7 = 1}$.
From the First Sylow Theorem, $G$ also has at least one Sylow $3$-subgroup.
Thus there exists $y \in G$ of order $3$.

As $P$ is normal:

$y x y^{-1} = x^i$
for some $i \in \set {0, 1, \ldots, 6}$.
Thus:














\(\ds x\)

\(=\)







\(\ds y^3 x y^{-3}\)




















\(\ds \)

\(=\)







\(\ds y^2 \paren {y x y^{-1} } y^{-2}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds y^2 x^i y^2\)





as $y x y^{-1} = x^i$














\(\ds \)

\(=\)







\(\ds \paren {y^2 x y^{-2} }^i\)





Power of Conjugate equals Conjugate of Power














\(\ds \)

\(=\)







\(\ds \paren {y \paren {y x y^{-1} } y^{-1} }^i\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {y x^i y^{-1} }^i\)





as $y x y^{-1} = x^i$














\(\ds \)

\(=\)







\(\ds y \paren {x^i}^i y^{-1}\)





Power of Conjugate equals Conjugate of Power














\(\ds \)

\(=\)







\(\ds y \paren {x^{i^2} } y^{-1}\)





Powers of Group Elements














\(\ds \)

\(=\)







\(\ds \paren {y x y^{-1} }^{i^2}\)





Power of Conjugate equals Conjugate of Power














\(\ds \)

\(=\)







\(\ds \paren {x^i}^{i^2}\)





as $y x y^{-1} = x^i$














\(\ds \)

\(=\)







\(\ds x^{i^3}\)





Powers of Group Elements



So $x^1 = x^{i^3}$ and so:

$i^3 \equiv 1 \pmod 7$
and so:

$7 \divides \paren {i^3 - 1}$
where $\divides$ indicates divisibility.

Let us consider the $7$ possible values of $i$ in turn.








\(\ds i = 0: \ \ \)





\(\ds 0^3 - 1\)

\(=\)







\(\ds -1\)




















\(\ds \)

\(\equiv\)







\(\ds 6\)

\(\ds \pmod 7\)



so $0$ is not a possible value of $i$












\(\ds i = 1: \ \ \)





\(\ds 1^3 - 1\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 7\)



so $1$ is a possible value of $i$












\(\ds i = 2: \ \ \)





\(\ds 2^3 - 1\)

\(=\)







\(\ds 7\)




















\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 7\)



so $2$ is a possible value of $i$












\(\ds i = 3: \ \ \)





\(\ds 3^3 - 1\)

\(=\)







\(\ds 26\)




















\(\ds \)

\(\equiv\)







\(\ds 5\)

\(\ds \pmod 7\)



so $3$ is not a possible value of $i$












\(\ds i = 4: \ \ \)





\(\ds 4^3 - 1\)

\(=\)







\(\ds 63\)




















\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 7\)



so $4$ is a possible value of $i$












\(\ds i = 5: \ \ \)





\(\ds 5^3 - 1\)

\(=\)







\(\ds 124\)




















\(\ds \)

\(\equiv\)







\(\ds 5\)

\(\ds \pmod 7\)



so $5$ is not a possible value of $i$












\(\ds i = 6: \ \ \)





\(\ds 6^3 - 1\)

\(=\)







\(\ds 215\)




















\(\ds \)

\(\equiv\)







\(\ds 5\)

\(\ds \pmod 7\)



so $6$ is not a possible value of $i$




Thus $i \bmod 7 \in \set {1, 2, 4}$.
$\Box$

Suppose $i \equiv 1 \pmod 7$.
Then:














\(\ds y x y^{-1}\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds y x\)

\(=\)







\(\ds x y\)









Hence:














\(\ds \paren {x y}^3\)

\(=\)







\(\ds x^3 y^3\)





Power of Product of Commutative Elements in Group














\(\ds \)

\(=\)







\(\ds x^3\)





as $y^3 = e$



and:














\(\ds \paren {x y}^7\)

\(=\)







\(\ds x^7 y^7\)





Power of Product of Commutative Elements in Group














\(\ds \)

\(=\)







\(\ds y^7\)





as $x^7 = e$














\(\ds \)

\(=\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x^{21}\)

\(=\)







\(\ds y^3\)




















\(\ds \)

\(=\)







\(\ds e\)










It follows that:

$\order {x y} = 21$
where $\order {x y}$ denotes the order of $x y$.
Thus $G$ is cyclic.
$\Box$

Suppose that $i \equiv 2 \pmod 7$.
Thus, let $y$ be an element of order $3$ for which $y x y^{-1} = x^2$.
Then $z = y^2$ is an element of order $3$ for which $z x z^{-1} = x^4$.
Thus the group as defined here where $i = 2$ is isomorphic to the group as defined here where $i = 4$.

Thus, apart from $C_{21}$, the other group of order $21$ has the group presentation:

$\gen {x, y: x^7 = e = y^3, y x y^{-1} = x^2 }$
$\blacksquare$


Matrix Representation of Non-Abelian Instance
Let $G$ be the group of order $21$ whose group presentation is:

$\gen {x, y: x^7 = e = y^3, y x y^{-1} = x^2}$

Then $G$ can be instantiated by the following pair of matrices over $\Z_7$:

$X = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \qquad Y = \begin{pmatrix} 4 & 0 \\ 0 & 2 \end{pmatrix}$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $12$: Applications of Sylow Theory: $(2)$ Groups of order $21$




