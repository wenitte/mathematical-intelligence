# 

Source: https://proofwiki.org/wiki/Bernstein%27s_Theorem_on_Unique_Global_Solution_to_y%27%27%3DF(x,y,y%27)


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
Let $F$ and its partial derivatives $F_y, F_{y'}$ be real functions, defined on the closed interval $I = \closedint a b$.
Let $F, F_y, F_{y'} $ be continuous at every point $\tuple {x, y}$ for all finite $y'$.
Suppose there exists a constant $k > 0$ such that:

$\map {F_y} {x, y, y'} > k$
Suppose there exist real functions $\alpha = \map \alpha {x, y} \ge 0$, $\beta = \map \beta {x, y}\ge 0$ bounded in every bounded region of the plane such that:

$\size {\map F {x, y, y'} } \le \alpha y'^2 + \beta$

Then one and only one integral curve of the equation $y = \map F {x, y, y'}$ passes through any two points $\tuple {a, A}$ and $\tuple {b, B}$ such that $a \ne b$.


Proof
Lemma 1 (Uniqueness)
Let $L$ be an integral curve of equation $y = \map F {x, y, y'}$ which passes through the two points $\tuple {a, A}$ and $\tuple {b, B}$ such that $a \ne b$.

Then $L$ is unique.
$\Box$


Lemma 2
Suppose that:

$\map {y} x = \map F {x, y, y'}$
for all $x \in \closedint a c$, where:

$\map y a = a_1$
$\map y c = c_1$

Then the following bound holds:

$\size {\map y x - \dfrac {a_1 \paren {c - x} + c_1 \paren {x - a} } {c - a} } \le \dfrac 1 k \max \limits_{a \mathop \le x \mathop \le b} \size {\map F {x, \dfrac {a_1 \paren {c - x} + c_1 \paren {x - a} } {c - a}, \dfrac {c_1 - a_1} {c - a} } }$
$\Box$


Lemma 3
Suppose that for $x \in I$:

$\map {y} x = \map F {x, y, y'}$
where:

$\map y a = a_1$
$\map y c = c_1$

Then:

$\forall x \in I: \exists M \in \R: \size {\map {y'} x - \dfrac {c_1 - a_1} {c - a} } \le M$
$\Box$

Consider a plane with axes denoted by $x$ and $y$:


Put the point $A \tuple {a, a_1}$.
Through this point draw an arc of the integral curve such that $\map {y'} a = 0$.
On this arc put another point $D \tuple {d, d_1}$.
For $x \ge d$ draw the straight line $y = d_1$.
Put the point $B \tuple {b, b_1}$.
For $y \ge d_1$ draw the straight line $x = b_1$.
Denote the intersection of these two straight lines by $Q$.
Then the broken curve $DQB$ connects points $D$ and $B$.
Choose any point of $DQB$ and denote it by $P \tuple {\xi, \xi_1}$.
Consider a family of integral curves $y = \map \phi {x, \alpha}$, passing through the point $A$, where $\alpha = \map {y'} a$.
For $\alpha = 0$ the integral curve concides with $AD$.
Suppose point $P$ is sufficiently close to the point $D$.
By Lemma $1$, there exists a unique curve $AP$.
Then, $\alpha$ can be found uniquely from:

$d_1 = \map \phi {\xi, \alpha}$.
Due to uniqueness and continuity, it follows that $\xi$ is a monotonic function of $\alpha$.
Hence, $\alpha$ is a monotonic function of $\xi$.
Put the point $R$ in between of $D$ and $Q$.
Suppose, that, except for $R$, any point of $DR$ can be reached by the aforementioned procedure.
When $\xi$ approaches the abscissa $r$ of $R$, $\alpha$ monotonically approaches a limit.
If it is different from $\pm \dfrac \pi 2$, point $R$ is attained.
By assumption, $R$ is not attained.
Thus: 

$\ds \lim_{\xi \mathop \to r} \alpha = \pm \dfrac \pi 2$
In other words, as $P$ approaches $R$, the derivative of $\map y x$ joining $A$ to $P$ will not be bounded at $x = a$.
This contradicts the bounds from Lemma $2$ and Lemma $3$, and the fact that the difference of abscissas of $A$ and $P$ does not approach $0$.
Therefore, $R$ can be reached.
Similar argument can be repeated for the line segment $QB$.
$\blacksquare$


Source of Name
This entry was named for Sergei Natanovich Bernstein.


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: lemmataIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1912: S.N. Bernstein: Sur les équations du calcul des variations ("On the equations of the calculus of variations") (Ann. Sci. École Norm. Sup. Vol. 29: pp. 431 – 485)
1962: N.I. Akhiezer: The Calculus of Variations: $\S 1.9$: A Theorem of Bernstein
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 1.4$: The Simplest Variational Problem. Euler's Equation
1978: A. Granas, R.B. Guenther and J.W. Lee: On a theorem of S. Bernstein (Pacific J. Math. Vol. 74, no. 1: pp. 67 – 82)




