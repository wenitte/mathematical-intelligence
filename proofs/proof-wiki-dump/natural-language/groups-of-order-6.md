# 

Source: https://proofwiki.org/wiki/Groups_of_Order_6

Theorem
There exist exactly $2$ groups of order $6$, up to isomorphism:

$C_6$, the cyclic group of order $6$
$S_3$, the symmetric group on $3$ letters.


Proof
From Existence of Cyclic Group of Order n we have that one such group of order $6$ is $C_6$ the cyclic group of order $6$:
This is exemplified by the additive group of integers modulo $6$, whose Cayley table can be presented as:
$\quad \begin{array}{r|rrrrrr}
\struct {\Z_6, +_6} & \eqclass 0 6 & \eqclass 1 6 & \eqclass 2 6 & \eqclass 3 6 & \eqclass 4 6 & \eqclass 5 6 \\
\hline
\eqclass 0 6 & \eqclass 0 6 & \eqclass 1 6 & \eqclass 2 6 & \eqclass 3 6 & \eqclass 4 6 & \eqclass 5 6
\\
\eqclass 1 6 & \eqclass 1 6 & \eqclass 2 6 & \eqclass 3 6 & \eqclass 4 6 & \eqclass 5 6 & \eqclass 0 6
\\
\eqclass 2 6 & \eqclass 2 6 & \eqclass 3 6 & \eqclass 4 6 & \eqclass 5 6 & \eqclass 0 6 & \eqclass 1 6
\\
\eqclass 3 6 & \eqclass 3 6 & \eqclass 4 6 & \eqclass 5 6 & \eqclass 0 6 & \eqclass 1 6 & \eqclass 2 6
\\
\eqclass 4 6 & \eqclass 4 6 & \eqclass 5 6 & \eqclass 0 6 & \eqclass 1 6 & \eqclass 2 6 & \eqclass 3 6
\\
\eqclass 5 6 & \eqclass 5 6 & \eqclass 0 6 & \eqclass 1 6 & \eqclass 2 6 & \eqclass 3 6 & \eqclass 4 6
\\
\end{array}$

Then we have the symmetric group on $3$ letters.
From Order of Symmetric Group, this has order $6$.
It can be exemplified by the symmetry group of the equilateral triangle, whose Cayley table can be presented as:

$\begin{array}{c|ccc|ccc}
\circ & e & p & q & r & s & t \\
\hline
e & e & p & q & r & s & t \\
p & p & q & e & s & t & r \\
q & q & e & p & t & r & s \\
\hline
r & r & t & s & e & q & p \\
s & s & r & t & p & e & q \\
t & t & s & r & q & p & e \\
\end{array}$

It remains to be shown that these are the only $2$ groups of order $6$.

Let $G$ be a group of order $6$ whose identity is $e$.

By the First Sylow Theorem, $G$ has at least one Sylow $3$-subgroup.
By the Third Sylow Theorem, the number of Sylow $3$-subgroups is a divisor of $6$.
By the Fourth Sylow Theorem, the number of Sylow $3$-subgroups is equivalent to $1 \pmod p$.
Combining these results, this number is therefore $1$.
Call this Sylow $3$-subgroup $P$.
By Sylow $p$-Subgroup is Unique iff Normal, $P$ is normal.
From Prime Group is Cyclic, $P = \gen x$ for some $x \in G$ for $x^3 = e$.

By the First Sylow Theorem, $G$ also has at least one Sylow $2$-subgroup of order $2$.
Thus $G$ has an element $y$ such that $y^2 = e$.
We have that $P$ is normal.
Therefore:

$y^{-1} x y \in P$
Therefore one of the following applies:














\(\ds y^{-1} x y\)

\(=\)







\(\ds e\)




















\(\ds y^{-1} x y\)

\(=\)







\(\ds x\)




















\(\ds y^{-1} x y\)

\(=\)







\(\ds x^2\)









If $y^{-1} x y = e$ then it follows that $x = 1$, which is contrary to our deduction that $x^3 = e$.
Hence there remain two possibilities.

First suppose $y^{-1} x y = x$.
Then:














\(\ds y^{-1} x y\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds x y\)

\(=\)







\(\ds y x\)










Hence we can calculate the powers of $x y$ in turn:














\(\ds \paren {x y}^2\)

\(=\)







\(\ds x \paren {y x} y\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds x \paren {x y} y\)





as $x y = y x$ by hypothesis














\(\ds \)

\(=\)







\(\ds x^2 y^2\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds x^2\)





as $y^2 = e$


















\(\ds \paren {x y}^3\)

\(=\)







\(\ds \paren {x y}^2 \paren {x y}\)




















\(\ds \)

\(=\)







\(\ds x^2 x y\)





as $\paren {x y}^2 = x^2$ by $(1)$ above














\(\ds \)

\(=\)







\(\ds x^3 y\)










\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds y\)
























\(\ds \paren {x y}^4\)

\(=\)







\(\ds \paren {x y} \paren {x y}^3\)




















\(\ds \)

\(=\)







\(\ds x y y\)





as $\paren {x y}^3 = y$ by $(2)$ above














\(\ds \)

\(=\)







\(\ds x y^2\)










\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds x\)





as $y^2 = e$


















\(\ds \paren {x y}^5\)

\(=\)







\(\ds \paren {x y}^4 \paren {x y}\)




















\(\ds \)

\(=\)







\(\ds x x y\)





as $\paren {x y}^4 = x$ by $(3)$ above




\(\text {(4)}: \quad\)









\(\ds \)

\(=\)







\(\ds x^2 y\)
























\(\ds \paren {x y}^6\)

\(=\)







\(\ds \paren {x y}^5 \paren {x y}\)




















\(\ds \)

\(=\)







\(\ds x^2 y x y\)





as $\paren {x y}^5 = x^2 y$ by $(4)$ above














\(\ds \)

\(=\)







\(\ds x^2 y y x\)





as $x y = y x$ by hypothesis














\(\ds \)

\(=\)







\(\ds x^3\)





as $y^2 = e$














\(\ds \)

\(=\)







\(\ds e\)





as $x^3 = e$



Thus the order of $x y$ is $6$, and so $G$ is cyclic of order $6$.

Now suppose $y^{-1} x y = x^2$.
Then:














\(\ds y^{-1} x y\)

\(=\)







\(\ds x^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds x y\)

\(=\)







\(\ds y x^{-1}\)










and:














\(\ds \paren {x y}^2\)

\(=\)







\(\ds x y y x^{-1}\)




















\(\ds \)

\(=\)







\(\ds x x^{-1}\)





as $y^2 = e$














\(\ds \)

\(=\)







\(\ds e\)










It remains to investigate $x^2 y$:














\(\ds \paren {x^2 y}^2\)

\(=\)







\(\ds \paren {x y x^{-1} } \paren {x^2 y}\)





as $x y = y x^{-1}$














\(\ds \)

\(=\)







\(\ds x y x y\)




















\(\ds \)

\(=\)







\(\ds e\)





from above: $\paren {x y}^2 = e$




Thus we have $6$ elements:

$e, x, x^2$ which form a cyclic group of order $3$
$y, x y, x^2 y$ all of which are self-inverse.
Thus in this case $G$ is the symmetric group on $3$ letters $S_3$.
The possibilities are exhausted.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $25$. Cyclic Groups and Lagrange's Theorem
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 41 \zeta$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $5$: Cosets and Lagrange's Theorem: Groups with six elements
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $11$: The Sylow Theorems: Example $11.13$




