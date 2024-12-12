# 

Source: https://proofwiki.org/wiki/Cauchy%27s_Residue_Theorem



Theorem
Let $U$ be a simply connected open subset of the complex plane $\C$.
Let $a_1, a_2, \dots, a_n$ be finitely many points of $U$.
Let $f: U \to \C$ be analytic in $U \setminus \set {a_1, a_2, \dots, a_n}$. 
Let $L$ be a contour in $\C$ oriented anticlockwise.
Let $\partial U_k$ denote the closed contour bounding $U_k$.
Then:

$\ds \oint_L \map f z \rd z = 2 \pi i \sum_{k \mathop = 1}^n \Res f {a_k}$
where $\Res f {a_k}$ denotes the residue at $a_k$ of $f$.


Proof
Let $\set {U_1, \dotsc, U_n}$ be a set of open subsets of $U$ such that $a_i \in U_i$, and $a_i \notin U_j$ for $i \ne j$.
Let $U_i \cap U_j = \O$ for all $i \ne j$.
By Existence of Laurent Series, around each $a_k$ there is an expansion:

$\ds \map f z = \sum_{j \mathop = -\infty}^\infty c_j \paren {z - a_k}^j$
convergent in $U_k$.
Write: 

$\ds X = \bigcup_{i \mathop = 1}^n U_i$
Then, by Contour Integral of Concatenation of Contours: 

$\ds \oint_L \map f z \rd z = \oint_{\partial \paren {U \setminus X} } \map f z \rd z + \sum_{k \mathop = 1}^n \oint_{\partial U_k} \map f z \rd z$
As all poles of $f$ in $U$ are contained in $X$, $f$ is holomorphic on $U \setminus X$.

So by the Cauchy-Goursat Theorem: 

$\ds \oint_{\partial \paren {U \setminus X} } \map f z \rd z = 0$
giving: 

$\ds \oint_L \map f z \rd z = \sum_{k \mathop = 1}^n \oint_{\partial U_k} \map f z \rd z$
we have: 














\(\ds \oint_{\partial U_k} \map f z \rd z\)

\(=\)







\(\ds \oint_{\partial U_k} \sum_{j \mathop = -\infty}^\infty c_j \paren {z - a_k}^j \rd z\)




















\(\ds \)

\(=\)







\(\ds \oint_{\partial U_k} \paren {\sum_{j \mathop = -\infty}^{-2} c_j \paren {z - a_k}^j + \frac {c_{-1} } {z - a_k} + \sum_{j \mathop = 0}^\infty c_j \paren {z - a_k}^j} \rd z\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = -\infty}^{-2} \oint_{\partial U_k} c_j \paren {z - a_k}^j \rd z + \oint_{\partial U_k} \paren {\frac {c_{-1} } {z - a_k} } \rd z + \sum_{j \mathop = 0}^\infty \oint_{\partial U_k} c_j \paren {z - a_k}^j \rd z\)




















\(\ds \)

\(=\)







\(\ds \oint_{\partial U_k} \paren {\frac {c_{-1} } {z - a_k} } \rd z\)





by Contour Integral of Power, terms where $j \ge 0$ and $j < -1$ vanish














\(\ds \)

\(=\)







\(\ds 2 \pi i c_{-1}\)





Contour Integral of Power














\(\ds \)

\(=\)







\(\ds 2 \pi i \Res f {a_k}\)





Definition of Residue (Complex Analysis)



So:

$\ds \oint_L \map f z \rd z = \sum_{k \mathop = 1}^n \oint_{\partial U_k} \map f z \rd z = 2 \pi i \sum_{k \mathop = 1}^n \Res f {a_k}$
$\blacksquare$


Examples
Arbitrary Example
$\ds \int_\Gamma \dfrac c {z - a} =  2 \pi i c$
where $\Gamma$ is a simple closed curve enclosing the point $z = a$


Also known as
Cauchy's Residue Theorem can also be seen just as the Residue Theorem.


Source of Name
This entry was named for Augustin Louis Cauchy.


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Cauchy's residue theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): residue: 1.
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Cauchy's Residue Theorem




