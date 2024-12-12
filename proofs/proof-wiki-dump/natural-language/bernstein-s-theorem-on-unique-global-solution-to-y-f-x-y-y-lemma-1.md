# 

Source: https://proofwiki.org/wiki/Bernstein%27s_Theorem_on_Unique_Global_Solution_to_y%27%27%3DF(x,y,y%27)/Lemma_1

Lemma for Bernstein's Theorem on Unique Global Solution to $y = \map F {x, y, y'}$
Let $F$ and its partial derivatives $F_y, F_{y'}$ be real functions, defined on the closed interval $I = \closedint a b$.
Let $F, F_y, F_{y'} $ be continuous at every point $\tuple {x, y}$ for all finite $y'$.
Suppose there exists a constant $k > 0$ such that:

$\map {F_y} {x, y, y'} > k$
Suppose there exist real functions $\alpha = \map \alpha {x, y} \ge 0$, $\beta = \map \beta {x, y}\ge 0$ bounded in every bounded region of the plane such that:

$\size {\map F {x, y, y'} } \le \alpha y'^2 + \beta$

Let $L$ be an integral curve of equation $y = \map F {x, y, y'}$ which passes through the two points $\tuple {a, A}$ and $\tuple {b, B}$ such that $a \ne b$.

Then $L$ is unique.


Proof
Aiming for a contradiction, suppose there are two integral curves $y = \map {\phi_1} x$ and $y = \map {\phi_2} x$ such that:

$\map {y} x = \map F {x, y, y'}$
Define a mapping $\delta: I \to S \subset \R$:

$\map \delta x = \map {\phi_2} x - \map {\phi_1} x$
From definition it follows that:

$\map \delta a = \map \delta b = 0$
Then the second derivative of $\delta$ yields:














\(\ds \map {\delta} x\)

\(=\)







\(\ds \map {\phi_2} x - \map {\phi_1} x\)





Definition of $\delta$














\(\ds \)

\(=\)







\(\ds \map F {x, \phi_2, \phi_2'} - \map F {x, \phi_1, \phi_1'}\)





as $y = \map F {x, y', y}$














\(\ds \)

\(=\)







\(\ds \map F {x, \phi_1 + \delta, \phi_1' + \delta'} - \map F {x, \phi_1, \phi_1'}\)





Definition of $\delta$




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \map \delta x F_y^* + \map {\delta'} x F_{y'}^*\)





Multivariate Mean Value Theorem with respect to $y, y'$



where:

$F_y^* = \map {F_y} {x, \phi_1 + \theta \delta, \phi_1' + \theta \delta'}$
$F_{y'}^* = \map {F_{y'} } {x, \phi_1 + \theta \delta, \phi_1' + \theta \delta'}$
and $0 < \theta < 1$.
Suppose:

$\forall x \in I: \map {\phi_2} x \ne \map {\phi_1} x$
Then there are two possibilities for $\delta$:

$\map \delta x$ attains a positive maximum within $\tuple {a, b}$
$\map \delta x$ attains a negative minimum within $\tuple {a, b}$.
Denote this point by $\xi$.
Suppose $\xi$ denotes a maximum.
Then:

$\map {\delta} \xi \le 0$
$\map \delta \xi > 0$
$\map {\delta'} \xi = 0$
These, together with $(1)$, imply that $F_y^* \le 0$. 
This is in contradiction with assumption.
For the minimum the inequalities are reversed, but the last equality is the same.
Therefore, it must be the case that:

$\map {\phi_1} x = \map {\phi_2} x$
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: lemmataIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1912: S.N. Bernstein: Sur les équations du calcul des variations ("On the equations of the calculus of variations") (Ann. Sci. École Norm. Sup. Vol. 29: pp. 431 – 485)
1962: N.I. Akhiezer: The Calculus of Variations: $\S 1.9$: A Theorem of Bernstein
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 1.4$: The Simplest Variational Problem. Euler's Equation
1978: A. Granas, R.B. Guenther and J.W. Lee: On a theorem of S. Bernstein (Pacific J. Math. Vol. 74, no. 1: pp. 67 – 82)




