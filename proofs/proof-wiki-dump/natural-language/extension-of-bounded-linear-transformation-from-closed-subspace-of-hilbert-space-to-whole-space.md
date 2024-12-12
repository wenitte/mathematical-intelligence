# 

Source: https://proofwiki.org/wiki/Extension_of_Bounded_Linear_Transformation_from_Closed_Subspace_of_Hilbert_Space_to_Whole_Space

Theorem
Let $\GF \in \set {\R, \C}$.
Let $\struct {\HH_1, \innerprod \cdot \cdot_1}$ and $\struct {\HH_2, \innerprod \cdot \cdot_2}$ be Hilbert spaces over $\GF$.
Let $\KK_1$ and $\KK_2$ be closed linear subspaces of $\HH_1$ and $\HH_2$ respectively.
Let $T_1 : \KK_1 \to \KK_2$ be a bounded linear transformation.
Let $\KK_1^\bot$ of $\KK_2^\bot$ be the orthocomplements of $\KK_1$ and $\KK_2$ respectively.
Let $T_2 : \KK_1^\bot \to \KK_2^\bot$ be a bounded linear transformation.
Define $T : \HH_1 \to \HH_2$ by:

$\map T {u + v} = T_1 u + T_2 v$
for each $u \in \KK_1$ and $v \in \KK_1^\bot$. 

Then $T$ is a bounded linear transformation extending $T_1$. 


Proof
We first show that $T$ is well-defined. 
Let $u_1, u_2 \in \KK_1$ and $v_1, v_2 \in \KK_2$.
From Direct Sum of Subspace and Orthocomplement, we have $\KK_1 \oplus \KK_1^\bot = \HH_1$ as an internal direct sum.
Hence $\KK_1 \cap \KK_1^\bot = \set { {\mathbf 0}_\HH}$, and if $u_1 + v_1 = u_2 + v_2$, then $u_1 = u_2$ and $v_1 = v_2$.
Hence $T$ is well-defined.

We show that $T$ is linear.
Let $x, y \in \HH$ and $\lambda \in \GF$. 
Since $\KK_1 \oplus \KK_1^\bot = \HH_1$, there exists $u_1, u_2 \in \KK_1$ and $v_1, v_2 \in \KK_1^\bot$ such that:

$x = u_1 + v_1$
and:

$y = u_2 + v_2$
We then have:

$x + \lambda y = \paren {u_1 + \lambda u_2} + \paren {v_1 + \lambda v_2}$
where $u_1 + \lambda u_2 \in \KK_1$ and $v_1 + \lambda v_2 \in \KK_1^\bot$.
Hence:














\(\ds \map T {x + \lambda y}\)

\(=\)







\(\ds \map {T_1} {u_1 + \lambda v_1} + \map {T_2} {u_2 + \lambda v_2}\)




















\(\ds \)

\(=\)







\(\ds T_1 u_1 + T_2 u_2 + \lambda \paren {T_1 v_1 + T_2 v_2}\)





$T_1$, $T_2$ are linear














\(\ds \)

\(=\)







\(\ds \map T {u_1 + u_2} + \lambda \map T {v_1 + v_2}\)





construction of $T$














\(\ds \)

\(=\)







\(\ds T x + \lambda T y\)









So $T$ is linear.

We show that $T$ is bounded.
Let $x \in \HH$ and take $u \in \KK_1$, $v \in \KK_1^\bot$ such that $x = u + v$.
We then have:














\(\ds \norm {T x}^2_2\)

\(=\)







\(\ds \norm {T_1 u + T_2 v}^2_2\)




















\(\ds \)

\(=\)







\(\ds \norm {T_1 u}^2_2 + \norm {T_2 v}^2_2\)





from Pythagoras's Theorem (Inner Product Space) since $T_1 u \in K_1$ and $T_2 v \in K_1^\bot$, so $T_1 u \perp T_2 v$














\(\ds \)

\(\le\)







\(\ds M_1 \norm u^2_1 + M_2 \norm v^2_1\)





Definition of Bounded Linear Transformation














\(\ds \)

\(\le\)







\(\ds \max \set {M_1, M_2} \paren {\norm u^2_1 + \norm v^2_1}\)




















\(\ds \)

\(=\)







\(\ds \max \set {M_1, M_2} \norm {u + v}^2_1\)





from Pythagoras's Theorem (Inner Product Space) since $u \perp v$














\(\ds \)

\(=\)







\(\ds \max \set {M_1, M_2} \norm x_1^2\)









We conclude that:

$\norm {T x}_2 \le \sqrt {\max \set {M_1, M_2} } \norm x_1$
for each $x \in \HH$.
So $T$ is a bounded transformation.

Finally, for $x \in \KK_1$ we have:

$T x = \map T {x + {\mathbf 0}_\HH} = T_1 x + \map {T_2} { {\mathbf 0}_\HH} = T_1 x$
since $T_2$ is linear.
Hence $T$ extends $T_1$.
$\blacksquare$





