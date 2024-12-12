# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Elementary_Symmetric_Function



Theorem
Let $U$ be a set of $n$ numbers $\set {x_1, x_2, \ldots, x_n}$.
Let $\map {e_m} U$ be the elementary symmetric function of degree $m$ on $U$:














\(\ds \map {e_m} U\)

\(=\)







\(\ds \sum_{1 \mathop \le j_1 \mathop < j_2 \mathop < \mathop \cdots \mathop < j_m \mathop \le n} \paren {\prod_{i \mathop = 1}^m x_{j_i} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{1 \mathop \le j_1 \mathop < j_2 \mathop < \mathop \cdots \mathop < j_m \mathop \le n} x_{j_1} x_{j_2} \cdots x_{j_m}\)









Let $a_m := \map {e_m} U$ for $m = 0, 1, 2, \ldots$

Let $\map G z$ be a generating function for the sequence $\sequence {a_m}$:

$\ds \map G z = \sum_{m \mathop = 0}^\infty a_m z^m$

Then:

$\ds \map G z = \prod_{k \mathop = 1}^n \paren {1 + x_k z}$


Outline
Generating function discovery methods can find a formula for $\map G z$.
Let $n = 1$.
Then $U$ is a singleton:

$U = \set {x_1}$.
Expand the formal series:














\(\ds \map G z\)

\(=\)







\(\ds \map {e_0} U + \map {e_1} z + \sum_{m \mathop = 2}^\infty 0 z^m\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds 1 + x_1 z\)





because $\map {e_0} U = 1$ and $\map {e_1} U = x_a$



Product of Generating Functions and experience with elementary symmetric functions suggests:

$\map G z = \paren {1 + x_1 z} \paren {1 + x_2 z} \cdots \paren {1 + x_n z}$


Proof 1
The summation for $\map G z$ is a finite sum $m = 0, 1, \ldots, n$, which settles convergence issues.
Begin with Viète's Formulas:

$\ds \prod_{k \mathop = a}^b \paren {x - x_k} = x^n + \sum_{m \mathop = 0}^{n - 1} \paren {-1}^{n - m} \map {e_{n - m} } U \, x^m$
Change variables $x = -1 / z$:














\(\ds \prod_{k \mathop = 1}^n \paren {-\frac 1 z  - x_k}\)

\(=\)







\(\ds \paren {-z}^{-n} + \sum_{m \mathop = 0}^{n - 1} \paren {-1}^{n - m} \map {e_{n - m} } U \, \paren {-z}^{-m}\)














\(\ds \leadsto \ \ \)





\(\ds \prod_{k \mathop = 1}^n \paren {1 + x_k z}\)

\(=\)







\(\ds z^n + \sum_{m \mathop = 0}^{n - 1} \map {e_{n - m} } U \, \paren z^{n - m}\)





all signs cancel








\(\ds \leadsto \ \ \)





\(\ds \prod_{k \mathop = 1}^n \paren {1 + x_k z}\)

\(=\)







\(\ds \sum_{m \mathop = 0}^n \map {e_m} U \, z^m\)









$\blacksquare$


Proof 2
Apply mathematical induction on $n$.
Let $\map P n$ be the statement:














\(\ds \map G z\)

\(\equiv\)







\(\ds \sum_{m \mathop = 0}^{n + 1} \map {e_m} {\set {x_1, \ldots, x_n} } z^m\)




















\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 1}^n \paren {1 + x_k z}\)









Basis for the induction:
Set $U = \set {x_1}$ for $n = 1$.
Expand the formal series:














\(\ds \map G z\)

\(=\)







\(\ds \map {e_0} U + \map {e_1} U z + \sum_{m \mathop = 2}^\infty \map {e_m} U z^m\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \map {e_0} U + \map {e_1} U z\)





as the summation has all zero terms








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds 1 + x_1 z\)









Then $\map P 1$ holds.
Induction step:
Assume $\map P n$ holds.
Let's prove $\map P {n + 1}$ holds.


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Let's rewrite this so it's not in kindergarten language.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
The induction step uses a recursion relation:




\(\text {(1)}: \quad\)









\(\ds \map {e_m} {\set {x_1, \ldots, x_n, x_{n + 1} } }\)

\(=\)







\(\ds x_{n + 1} \map {e_{m - 1} } {\set {x_1, \ldots, x_n} } + \map {e_m} {\set {x_1, \ldots, x_n} }\)





Recursion Property of Elementary Symmetric Function



Let $\map G z$ be defined by statement $\map P n$.
Let $\map {G^*} z$ be defined by statement $\map P {n + 1}$.
Then:














\(\ds \map {G^*} z\)

\(=\)







\(\ds \prod_{k \mathop = 1}^{n + 1} \paren {1 + x_k z}\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \map G z \paren {1 + x_{n + 1} z}\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \map G z + x_{n + 1} z \map G z\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 0}^n \map {e_m} U z^m + \sum_{m \mathop = 1}^{n+1} x_{n+1} \map {e_{m-1} } U z^m\)





use hypothesis $\map P n$








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \map {e_0} U + \sum_{m \mathop = 1}^{n + 1} \paren {\map {e_m} U + x_{n + 1} \map {e_{m - 1} } U} z^m\)





because $\map {e_{n+1} } {U} = 0$








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \map {e_0} U + \sum_{m \mathop = 1}^{n + 1} \map {e_m} {\set {x_1, \ldots, x_n, x_{n + 1} } } z^m\)





by recursion relation $(1)$








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 0}^{n + 1} \map {e_m} {\set {x_1, \ldots, x_n, x_{n + 1} } } z^m\)





because $\map {e_0} X = 1$ for all sets $X$



Then $\map P {n + 1}$ holds, completing the induction.


There is believed to be a mistake here, possibly a typo.In particular: The indices on the summation are inconsistent with the statement of $\map P n$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$


Proof 3
We have by definition of generating function that:

$\map G z = \ds \sum_{n \mathop \ge 0} a_n z^n$
We have that:

$a_0 = 1$

This article, or a section of it, needs explaining.In particular: We need $a_0 = 1$ but I can't get my head around as to why at the momentYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Suppose $n = 1$.
Let $\map G z$ be the generating function for $\sequence {a_m}$ under this condition.
Then:

$1 \mathop \le j_1 \mathop < j_2 \mathop < \mathop \cdots \mathop < j_m \mathop \le 1$
can be fulfilled by only one set $\set {j_1, j_2, \ldots, j_m}$, that is:

$j_1 = 1$

Thus in this case:














\(\ds a_m\)

\(=\)







\(\ds x_1 \delta_{m 1}\)





where $\delta_{m 1}$ is the Kronecker delta.








\(\ds \leadsto \ \ \)





\(\ds \map G z\)

\(=\)







\(\ds \sum_{n \mathop \ge 0} x_1 \delta_{n 1} z^n\)














\(\ds \leadsto \ \ \)





\(\ds \map G z\)

\(=\)







\(\ds 1 + x_1 z\)









Then by Product of Generating Functions, it follows that:

$\map G z = \paren {1 + x_1 z} \paren {1 + x_2 z} \cdots \paren {1 + x_n z}$

This needs considerable tedious hard slog to complete it.In particular: Explain exactly how. I'm having difficulty getting my head around this. Help would be appreciated here.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: Exercise $10$




