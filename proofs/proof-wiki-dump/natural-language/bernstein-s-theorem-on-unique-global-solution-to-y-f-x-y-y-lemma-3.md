# 

Source: https://proofwiki.org/wiki/Bernstein%27s_Theorem_on_Unique_Global_Solution_to_y%27%27%3DF(x,y,y%27)/Lemma_3

Lemma for Bernstein's Theorem on Unique Global Solution to $y = \map F {x, y, y'}$
Let $F$ and its partial derivatives $F_y, F_{y'}$ be real functions, defined on the closed interval $I = \closedint a b$.
Let $F, F_y, F_{y'} $ be continuous at every point $\tuple {x, y}$ for all finite $y'$.
Suppose there exists a constant $k > 0$ such that:

$\map {F_y} {x, y, y'} > k$
Suppose there exist real functions $\alpha = \map \alpha {x, y} \ge 0$, $\beta = \map \beta {x, y}\ge 0$ bounded in every bounded region of the plane such that:

$\size {\map F {x, y, y'} } \le \alpha y'^2 + \beta$

Suppose that for $x \in I$:

$\map {y} x = \map F {x, y, y'}$
where:

$\map y a = a_1$
$\map y c = c_1$

Then:

$\forall x \in I: \exists M \in \R: \size {\map {y'} x - \dfrac {c_1 - a_1} {c - a} } \le M$


Proof
Let $\AA$ and $\BB$ be the least upper bounds of $\map \alpha {x, y}$ and $\map \beta {x, y}$ respectively in the rectangle $a \le x \le c$, $\size y \le m + max \set {\size a_1, \size c_1}$
where:

$m = \dfrac 1 k \max \limits_{a \mathop \le x \mathop \le b} \size {\map F {x, \dfrac {a_1 \paren {c - x} + c_1 \paren {x - a} } {c - a}, \dfrac {c_1 - a_1} {c - a} } }$
Suppose that $\AA \ge 1$.
Let $u, v$ be real functions such that:




\(\text {(3)}: \quad\)









\(\ds \map y x - \dfrac {a_1 \paren {c - x} + c_1 \paren {x - a} } {c - a} + m\)

\(=\)







\(\ds \dfrac {\Ln u} {2 \AA}\)










\(\text {(4)}: \quad\)









\(\ds -\map y x + \dfrac {a_1 \paren {c - x} + c_1 \paren {x - a} } {c - a} + m\)

\(=\)







\(\ds \dfrac {\Ln v} {2 \AA}\)










This article, or a section of it, needs explaining.In particular: The precise meaning of $\Ln$ in this contextYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
From  Lemma 2, for $x \in I$ the left hand sides of $(3)$ and $(4)$ are not negative. 
Thus:

$\forall x \in I: u, v \ge 1$
Differentiate equations $(3)$ and $(4)$ with respect to $x$:




\(\text {(5)}: \quad\)









\(\ds \map {y'} x - \dfrac {c_1 - a_1} {c - a}\)

\(=\)







\(\ds \dfrac {u'} {2 \AA u}\)










\(\text {(6)}: \quad\)









\(\ds -\map {y'} x + \dfrac {c_1 - a_1} {c - a}\)

\(=\)







\(\ds \dfrac {v'} {2 \AA v}\)









Differentiate again: 




\(\text {(7)}: \quad\)









\(\ds \map {y} x\)

\(=\)







\(\ds \dfrac {u} {2 \AA u} - \dfrac {u'^2} {2 \AA u^2}\)










\(\text {(8)}: \quad\)









\(\ds -\map {y} x\)

\(=\)







\(\ds \dfrac {v} {2 \AA v} - \dfrac {v'^2} {2 \AA v^2}\)









By assumption:














\(\ds \size {\map F {x, y, y'} }\)

\(=\)







\(\ds \size {\map {y} x}\)




















\(\ds \)

\(\le\)







\(\ds \map \alpha {x, y} \map {y'^2} x + \map \beta {x, y}\)




















\(\ds \)

\(\le\)







\(\ds \AA \map {y'^2} x + \BB\)




















\(\ds \)

\(\le\)







\(\ds 2 \AA \map {y'^2} x + \BB\)




















\(\ds \)

\(=\)







\(\ds 2 \AA {\paren {\map {y'} x - \dfrac {c_1 - a_1} {c - a} }^2} + 2 \AA \paren {\dfrac {c_1 - a_1} {c - a} }^2 - 2 \map {y'} x \dfrac {c_1 - a_1} {c - a} + \BB\)










\(\text {(9)}: \quad\)









\(\ds \)

\(\le\)







\(\ds 2 \AA \paren {\map {y'} x - \dfrac {c_1 - a_1} {c - a} }^2 + \BB_1\)









where:

$\BB_1 = \BB + 2 \AA \paren {\dfrac {c_1 - a_1} {c - a} }^2$
Then:














\(\ds y\)

\(=\)







\(\ds \dfrac {u} {2 \AA u} - \dfrac {u'^2} {2 \AA u^2}\)





Equation $(7)$














\(\ds \)

\(\ge\)







\(\ds -2 \AA \paren {\map {y'} x - \dfrac {c_1 - a_1} {c - a} }^2 - \BB_1\)





Inequality $(9)$














\(\ds \)

\(=\)







\(\ds -2 \AA \paren {\dfrac {u'} {2 \AA u} }^2 - \BB_1\)





Equation $(5)$



Multiply the inequality by $2 \AA u$ and simplify:














\(\ds u\)

\(\ge\)







\(\ds -2 \AA \BB_1 u\)










Similarly: 














\(\ds y\)

\(=\)







\(\ds - \dfrac {v} {2 \AA v} + \dfrac {v'^2} {2 \AA v^2}\)





Equation $(8)$














\(\ds \)

\(\le\)







\(\ds 2 \AA \paren {\map {y'} x - \dfrac {c_1 - a_1} {c - a} }^2 + \BB_1\)





Inequality $(9)$














\(\ds \)

\(=\)







\(\ds 2 \AA \paren {\dfrac {v'} {2 \AA v} }^2 + \BB_1\)





Equation $(6)$



Multiply the inequality by $-2 \AA v$ and simplify:














\(\ds v\)

\(\ge\)







\(\ds -2 \AA \BB_1 v\)









Note that $\map u a = \map u c$ and $\map v a = \map v c$.
From Intermediate Value Theorem it follows that

$\exists K \subset I: \forall x_0 \in K: \map {y'} {x_0} - \dfrac {c_1 - a_1} {c - a} = 0$
Points $x_0$ divide $I$ into subintervals.
Due to $(5)$ and $(6)$ both $\map {u'} x$ and $\map {v'} x$ maintain sign in the subintervals and vanish at one or both endpoints of each subinterval.
Let $J$ be one of the subintervals.
Let functions $\map {u'} x$, $\map {v'} x$ be zero at $\xi$, the right endpoint. 
The quantity:

$\map {y'} x - \dfrac {c_1 - a_1} {c - a}$
has to be either positive or negative.
Suppose it is positive in $J$. 
From $(5)$, $u'$ is not negative.
Multiply both sides of $(10)$ by $u'$: 

$u u' \ge - 2 \AA \BB_1 u u'$
Integrating this from $x \in J$ to $\xi$, together with $\map {u'} \xi = 0$, yields:

$-\map {u'^2} x \ge - 2 \AA \BB_1 \paren {\map {u^2} \xi - \map {u^2} x}$
Then:














\(\ds \map {u'^2} x\)

\(\le\)







\(\ds 2 \AA \BB_1 \paren {\map {u^2} \xi - \map {u^2} x}\)




















\(\ds \)

\(\le\)







\(\ds 2 \AA \BB_1 \map {u^2} \xi\)




















\(\ds \)

\(=\)







\(\ds 2 \AA \BB_1 \exp \paren {4 \AA \paren {m + \map y x - \dfrac {a_1 \paren {c - x} + c_1 \paren {x - a} } {c - a} } }\)





Equation $(3)$














\(\ds \)

\(\le\)







\(\ds 2 \AA \BB_1 e^{8 \AA m}\)





Lemma 2








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\map {u'^2} x} {\map {u^2} x}\)

\(\le\)







\(\ds 2 \AA \BB_1 e^{8 \AA m}\)





$u \ge 1$








\(\ds \leadsto \ \ \)





\(\ds 4 \AA^2 \paren {\map {y'} x - \dfrac {c_1 - a_1} {c - a} }^2\)

\(\le\)







\(\ds 2 \AA \BB_1 e^{8 \AA m}\)





Equation $(5)$




Hence:

$\forall x \in J: \size {\map {y'} x - \dfrac {c_1 - a_1} {c - a} } \le \sqrt {\dfrac {\BB_1} {2 \AA} } e^{4 \AA m}$
Similar arguments for aforementioned quantity being negative.
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: lemmataIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1912: S.N. Bernstein: Sur les équations du calcul des variations ("On the equations of the calculus of variations") (Ann. Sci. École Norm. Sup. Vol. 29: pp. 431 – 485)
1962: N.I. Akhiezer: The Calculus of Variations: $\S 1.9$: A Theorem of Bernstein
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 1.4$: The Simplest Variational Problem. Euler's Equation
1978: A. Granas, R.B. Guenther and J.W. Lee: On a theorem of S. Bernstein (Pacific J. Math. Vol. 74, no. 1: pp. 67 – 82)




