# 

Source: https://proofwiki.org/wiki/Bernstein%27s_Theorem_on_Unique_Global_Solution_to_y%27%27%3DF(x,y,y%27)/Lemma_2

Lemma for Bernstein's Theorem on Unique Global Solution to $y = \map F {x, y, y'}$
Let $F$ and its partial derivatives $F_y, F_{y'}$ be real functions, defined on the closed interval $I = \closedint a b$.
Let $F, F_y, F_{y'} $ be continuous at every point $\tuple {x, y}$ for all finite $y'$.
Suppose there exists a constant $k > 0$ such that:

$\map {F_y} {x, y, y'} > k$
Suppose there exist real functions $\alpha = \map \alpha {x, y} \ge 0$, $\beta = \map \beta {x, y}\ge 0$ bounded in every bounded region of the plane such that:

$\size {\map F {x, y, y'} } \le \alpha y'^2 + \beta$

Suppose that:

$\map {y} x = \map F {x, y, y'}$
for all $x \in \closedint a c$, where:

$\map y a = a_1$
$\map y c = c_1$

Then the following bound holds:

$\size {\map y x - \dfrac {a_1 \paren {c - x} + c_1 \paren {x - a} } {c - a} } \le \dfrac 1 k \max \limits_{a \mathop \le x \mathop \le b} \size {\map F {x, \dfrac {a_1 \paren {c - x} + c_1 \paren {x - a} } {c - a}, \dfrac {c_1 - a_1} {c - a} } }$


Proof
As a consequence of $y = \map F {x, y, y'}$ we have:














\(\ds y\)

\(=\)







\(\ds \map F {x, y, y'}\)




















\(\ds \)

\(=\)







\(\ds \map F {x, y, y'} - \map F {x, \dfrac {a_1 \paren {c - x} + c_1 \paren {x - a} } {c - a}, y'} + \map F {x, \dfrac {a_1 \paren {c - x} + c_1 \paren {x - a} } {c - a}, y'}\)










\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren {\map y x - \dfrac {a_1 \paren {c - x} + c_1 \paren {x - a} } {c - a} } \map {F_y} {x, \psi, y'} + \map F {x, \dfrac {a_1 \paren {c - x} + c_1 \paren {x - a} } {c - a},y'}\)





Mean Value Theorem with respect to $y$



where:

$\psi = \dfrac {a_1 \paren {c - x} + c_1 \paren {x - a} } {c - a} + \theta \paren {\map y x - \dfrac {a_1 \paren {c - x} + c_1 \paren {x - a} } {c - a} }$
and:

$0 < \theta < 1$

Note that the term $\chi$, defined as:

$\chi = \map y x - \dfrac {a_1 \paren {c - a} + c_1 \paren {x - a} } {c - a}$
vanishes at $x = a$ and $x = c$.
Unless $\chi$ is identically zero, there exists a point $\xi \in \openint a b$ such one of the following holds:

$\chi$ attains a positive maximum at $\xi$
$\chi$ attains a negative minimum at $\xi$.
In the first case:

$\map {y} \xi \le 0$,
$\map {y'} \xi = \dfrac {c_1 - a} {c - a}$
which implies:














\(\ds 0\)

\(\ge\)







\(\ds \map {y} \xi\)




















\(\ds \)

\(=\)







\(\ds \map F {\xi, \dfrac {a_1 \paren {c - \xi} + c_1 \paren {\xi - a} } {c - a}, \dfrac {c_1 - a_1} {c - a} } + \map {F_y} {x, \map \psi \xi, \map {y'} x} \paren {\map y \xi - \dfrac {a_1 \paren {c - \xi} + c_1 \paren {\xi - a} } {c - a} }\)





equation $(2)$














\(\ds \)

\(\ge\)







\(\ds \map F {\xi, \dfrac {a_1 \paren {c - \xi} + c_1 \paren {\xi - a} } {c - a}, \dfrac {c_1 - a_1} {c - a} } + k \paren {\map y \xi - \dfrac {a_1 \paren {c - \xi} + c_1 \paren {\xi - a} } {c - a} }\)





Assumption of Theorem




Hence:

$\map y \xi - \dfrac {a_1 \paren {c - \xi} + c_1 \paren {\xi - a} } {c - a} \le -\dfrac 1 k \map F {\xi, \dfrac {a_1 \paren {c - \xi} + c_1 \paren {\xi - a} } {c - a}, \dfrac {c_1 - a_1} {c - a} }$
The negative minimum part is proven analogously.
Hence, the following holds: 

$\size {\map y x - \dfrac {a_1 \paren {c - x} + c_1 \paren {x - a} } {c - a} } \le \dfrac 1 k \max \limits_{a \mathop \le x \mathop \le b} \size {\map F {x, \dfrac {a_1 \paren {c - x} + c_1 \paren {x - a} } {c - a}, \dfrac {c_1 - a_1} {c - a} } }$
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: lemmataIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1912: S.N. Bernstein: Sur les équations du calcul des variations ("On the equations of the calculus of variations") (Ann. Sci. École Norm. Sup. Vol. 29: pp. 431 – 485)
1962: N.I. Akhiezer: The Calculus of Variations: $\S 1.9$: A Theorem of Bernstein
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 1.4$: The Simplest Variational Problem. Euler's Equation
1978: A. Granas, R.B. Guenther and J.W. Lee: On a theorem of S. Bernstein (Pacific J. Math. Vol. 74, no. 1: pp. 67 – 82)




