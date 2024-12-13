# 

Source: https://proofwiki.org/wiki/Groups_of_Order_2p

Theorem
Let $p$ be a prime number.
Let $G$ be a group.
Let the order of $G$ be $2 p$.

Then $G$ is either:

the cyclic group $C_{2 p}$
or:

the dihedral group $D_p$.


Proof
When $p = 2$, the result follows from Groups of Order 4.

Let $p$ be an odd prime.
From Sylow p-Subgroups of Group of Order 2p, $G$ has exactly $1$ normal subgroup $P$ of order $p$.
$p$ is prime number.
So from Prime Group is Cyclic, $P$ is a cyclic group.
Let $P = \gen x$ for some $x \in G$.
By the First Sylow Theorem there exists at least one subgroup of $G$ of order $2$.
Hence:

$\exists y \in G: y^2 = e$
It follows that the elements of $G$ are known:

$G = \set {e, x, \ldots, x^{p - 1}, y, y x, y x^{p - 1} }$

Then:














\(\ds y x y^{-1}\)

\(\in\)







\(\ds P\)





as $P$ is normal in $G$.








\(\ds \leadsto \ \ \)





\(\ds y x y^{-1}\)

\(=\)







\(\ds x^i\)





for some $i \in \Z_{>0}$








\(\ds \leadsto \ \ \)





\(\ds y x y^{-1} x\)

\(=\)







\(\ds x^{i + 1}\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds y x y x = \paren {y x}^2\)

\(=\)







\(\ds x^{i + 1}\)





$y^2 = e$, so $y = y^{-1}$




Thus:

the even powers of $y x$ are powers of $x$
the odd powers of $y x$ are of the form $y x^j$ for some $j \in \Z_{>0}$.
By Order of Element Divides Order of Finite Group:

$\order {y x} \divides 2 p$
where:

$\order {y x}$ denotes the order of $y x$
$\divides$ denotes divisibility.
We have that:

$y x \ne e$
and so by Identity is Only Group Element of Order 1:

$\order {y x} \ne 1$

Thus:

$\order {y x} \in \set {2, p, 2 p}$
$\Box$

Suppose $i \ne -1$ in $(1)$ above.
Then:

$\paren {y x}^2 \ne e$
and so:

$\order {y x} \ne 2$

Because odd powers of $y x$ are of the form $y x^j$:

$\paren {y x}^p \ne e$
and so:

$\order {y x} \ne p$
It follows that:

$\order {y x} = 2 p$
and from Group whose Order equals Order of Element is Cyclic, $G$ is cyclic.

Thus, when $i \ne -1$:

$G = \gen {y x}$
and so is cyclic.
Thus by Cyclic Group is Abelian:

$y x = x y$
$\Box$

When $i = -1$ in $(1)$ above, we have that:














\(\ds y x y^{-1} x\)

\(=\)







\(\ds e\)














\(\ds \leadsto \ \ \)





\(\ds y x y^{-1}\)

\(=\)







\(\ds x^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds y x\)

\(=\)







\(\ds x^{-1} y\)









leading to the group presentation of $G$:

$G = \gen {x, y: x^p = e = y^2, y x = x^{-1} y}$
which is the Group Presentation of Dihedral Group $D_p$.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Sylow Theorems: $\S 59 \beta$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $12$: Applications of Sylow Theory: $(1)$ Groups of order $2p$




