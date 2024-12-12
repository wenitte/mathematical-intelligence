# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Elementary_Symmetric_Function/Proof_2

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


Proof
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





