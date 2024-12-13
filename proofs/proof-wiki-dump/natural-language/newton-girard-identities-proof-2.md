# 

Source: https://proofwiki.org/wiki/Newton-Girard_Identities/Proof_2


This article needs to be tidied.In particular: obviousPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This page has been identified as a candidate for refactoring of basic complexity.In particular: extract lemmata according to our standard practiceUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.In particular: obviousYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $X$ be a set of $n$ numbers $\set {x_1, x_2, \ldots, x_n}$.
Define:














\(\ds \mathbf S_m\)

\(=\)







\(\ds \set {\paren {j_1, \ldots, j_m} : 1 \le j_1 < \cdots < j_m \le n}\)





$1 \le m \le n$














\(\ds \map {e_m} X\)

\(=\)







\(\ds \begin {cases} 1 & : m = 0 \\ \ds \sum_{\mathbf S_m} x_{j_1} \cdots x_{j_m} & : 1 \le m \le n \\ 0 & : m > n \\ \end {cases}\)





Definition of Elementary Symmetric Function














\(\ds \map {p_k} X\)

\(=\)







\(\ds \begin{cases} n & : k = 0 \\ \ds \sum_{i \mathop = 1}^n  x_i^k & : k \ge 1 \end {cases}\)





Definition of Power Sum




The Newton-Girard Identities are:




\(\text {(1)}: \quad\)









\(\ds k \map {e_k} X\)

\(=\)







\(\ds \sum_{i \mathop = 1}^k \paren {-1}^{i - 1} \map {e_{k - i} } X \map {p_i} X\)





for $1 \le k \le n$




\(\text {(2)}: \quad\)









\(\ds 0\)

\(=\)







\(\ds \sum_{i \mathop = k - n}^k \paren {-1}^{i - 1} \map {e_{k - i} } X \map {p_i} X\)





for $1 \le n < k$





Proof
Outline
Calculus is used to prove identities (1) and (2) in a single effort. 
The tools are Viète's Formulas, the calculus derivative of powers $x^n$ and logarithm $\ln \size x$, Maclaurin series expansion coefficients, mathematical induction, and Leibniz's Rule in One Variable.


Lemma 1













\(\ds \prod_{r \mathop = 1}^n  \paren {1 + x_r z}\)

\(=\)







\(\ds \sum_{m \mathop = 0}^n {\map {e_m} X} z^m\)










Proof of Lemma 1
Begin with:




\(\text {(11)}: \quad\)









\(\ds \prod_{r \mathop = 1}^n  \paren {x - x_r}\)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \paren {-1}^{n - i} {\map {e_{n - i} } X} x^i\)





Viète's Formulas



Change variables in $(11)$: 

$x = -1/z$
Details: Generating Function for Elementary Symmetric Function.
$\Box$


Lemma 2
Denote by $D^k \map f z$ the $k$th derivative of $\map f z$.
Let:














\(\ds \map G z\)

\(=\)







\(\ds \prod_{k \mathop = 1}^n \paren {1 + x_k z}\)





as in Lemma 1














\(\ds \map F z\)

\(=\)







\(\ds \dfrac {\map {DQ} z} {\map Q z}\)





the calculus derivative of $\ln \size {\map Q z}$



Then:




\(\text {(12)}: \quad\)









\(\ds \dfrac {D^m \map G 0} {m!}\)

\(=\)







\(\ds \map {e_m } X\)










\(\text {(13)}: \quad\)









\(\ds \dfrac {D^m \map F 0} {m!}\)

\(=\)







\(\ds \paren {-1}^m \map {p_{m + 1} } X\)










Proof of Lemma 2














\(\ds \map G z\)

\(=\)







\(\ds \sum_{m \mathop = 0}^n {\map {e_m} X} z^m\)





by Lemma 1



Then identity $(12)$ holds by Maclaurin series expansion applied to polynomial $G$.
Identity $(13)$ will be proved after mathematical induction establishes $(14)$ infra. 
Let $\map {\mathbf P} m$ be the statement:




\(\text {(14)}: \quad\)









\(\ds D^m \map F z\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \dfrac{ m!\paren {-1}^m  x_i^{m+1} }{ \paren { 1 + x_i z }^{m+1} }\)





for $m \ge 0$



Basis for the induction: $m=0$
By calculus and the definition of $G$:














\(\ds \map F z\)

\(=\)







\(\ds \dfrac { D \map Q z}{\map Q z}\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \dfrac { x_i }{ 1 + x_i z }\)









Then $\map {\mathbf P} 0$ is true.
Induction step $\map {\mathbf P} m$ implies $\map {\mathbf P} {m+1}$:














\(\ds D^{m + 1} \map F z\)

\(=\)







\(\ds \map D {\sum_{i \mathop = 1}^n \dfrac {m! \paren {-1}^m  x_i^{m + 1} } {\paren {1 + x_i z}^{m + 1} } }\)





by induction hypothesis $\map {\mathbf P} m$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \dfrac{ m! \paren {-1}^m x_i^{m + 1} \paren {-1} \paren {m + 1} x_i} {\paren {1 + x_i z}^{m + 2} }\)





Power Rule for Derivatives: $\dfrac {\d u^{-n} } {\d z } = \paren {-n} u^{-n - 1} \dfrac {\d u} {\d z}$



Simplify to prove $\map {\mathbf P} {m + 1}$ is true. 
The induction is complete.
To prove equation (13), first let $z = 0$ in equation (14). 
Divide by $m!$ to isolate $\map {p_{m + 1} } X$, which proves (13).
$\Box$


Lemma 3



\(\text {(15)}: \quad\)









\(\ds \paren {m + 1} \map {e_{m + 1} } X\)

\(=\)







\(\ds \sum_{r \mathop = 0}^m \paren {-1}^r {\map {e_{m - r} } X} {\map {p_{r + 1} } X}\)





for $m \ge 0$




Proof of Lemma 3
Begin with $D \map G z = {\map F z} {\map G z}$ and differentiate $m$ times on variable $z$:














\(\ds D^{m + 1} \map G z\)

\(=\)







\(\ds \sum_{r \mathop = 0}^m {\dbinom m r} D^r {\map F z} D^{m - r} {\map G z}\)





Leibniz's Rule in One Variable














\(\ds D^{m + 1} {\map G 0}\)

\(=\)







\(\ds \sum_{r \mathop = 0}^m \dbinom m r r! \paren {-1}^r {\map {p_{r + 1} } X} \paren {m - r}! \map {e_{m-r} } X\)





Evaluate at $ z = 0$ and use equations (12) and (13) in Lemma 2














\(\ds \paren {m + 1} {\map {e_m} X}\)

\(=\)







\(\ds \sum_{r \mathop = 0}^m  \paren {-1}^r {\map {e_{m-r} } X} {\map {p_{r+1} } X}\)





Use (12), then collect factorials and simplify



$\Box$

Proof of the Theorem
To prove (1), start with equation (15) in Lemma 3.
Change indices via equations $m + 1 = k$, $r + 1 = i$. 
The summation is from $i = 0 + 1$ to $i = m + 1$, which gives range $i = 1$ to $k$. 
Subscript $m - r$ equals $k - 1- i + 1$, which simplifies to $k - i$.
Then:




\(\text {(16)}: \quad\)









\(\ds k \map {e_k} X\)

\(=\)







\(\ds \sum_{i \mathop = 1}^{k} \paren {-1}^{i - 1} {\map {e_{k - i} } X} {\map {p_i} X}\)





for $k \ge 1$, which is equation (1)



To prove (2), assume $k > n \ge 1$ and $X = \set {x_1, \ldots, x_n}$.
Equation (16) implies:




\(\text {(17)}: \quad\)









\(\ds 0\)

\(=\)







\(\ds k \map {e_{k} } X\)





because $ \map {e_j} X = 0$ for $j = n + 1, \ldots, k$.








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds \sum_{i \mathop = 1}^k \paren {-1}^{i - 1} {\map {e_{k - i} } X} {\map {p_i} X}\)





by (16) for $k \ge 1$








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds \sum_{i \mathop = k - n}^k \paren {-1}^{i - 1} {\map {e_{k - i} } X} {\map {p_i} X}\)





because $ \map {e_{k - i} } X = 0$ when $n + 1 \le k - i \le k$



Then (2) holds.
$\blacksquare$





