# 

Source: https://proofwiki.org/wiki/Newton-Girard_Identities/Proof_1


This article needs to be tidied.In particular: Inconsistent with house style. We also need to fix the mistakes.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

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
The proof is divided into three cases: $k < n$, $k = n$ and $k > n$.
The tools are Viète's Formulas, Recursion Property of Elementary Symmetric Function, telescoping sums and  homogeneous functions of degree $k$.


Details

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Get rid of all the waffleYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Discovery of formulas (1)-(2) has humble beginnings:




\(\text {(3)}: \quad\)









\(\ds \prod_{r \mathop = 1}^n \paren { x - x_r }\)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \paren {-1}^{n-i} {\map {e_{n - i} } X} x^i\)





Viète's Formulas



Create $n$ equations all with left hand side zero by substitution  $x = x_j$ in (3), $1 \le j \le n$.

$\ds 0 = \sum_{i \mathop = 0}^n \paren {-1}^{n-i} {\map {e_{n - i} } X} x_j^i$
Then multiply the $j$th equation by $x_j^r$ and add the $n$ equations, for $1 \le j \le n$:




\(\text {(4)}: \quad\)









\(\ds 0\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \sum_{i \mathop = 0}^n \paren {-1}^{n - i} \map {e_{n - i} } X x_j^{i + r}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \paren {-1}^{n - i} \map {e_{n - i} } X \map {p_{i + r} } X\)





Term $\map {e_m} X$ is zero for $m \gt n$, affecting case $r \gt 0$.



Case $r = 0$ in (4) gives (1) for $k = n$, by isolating term $n \map {e_n} X$.
Case $r > 0$ in (4) gives (2) by re-indexing: $m = k - n + i$ with $m = k - n$ to $k$.

Case $k < n$ in (1), not yet discussed, does not use multiply and add as in (4).
The key ingredient:




\(\text {(5)}: \quad\)









\(\ds \map {e_m} {z_1, \ldots, z_p, z_{p + 1} }\)

\(=\)







\(\ds z_{p + 1} \map {e_{m - 1} } {z_1, \ldots, z_p} + \map {e_m} {z_1, \ldots, z_p}\)





Recursion Property of Elementary Symmetric Function, valid for $1 \le m \le p$.



The right hand side of (1) is:




\(\text {(6)}: \quad\)









\(\ds \)

\(\)







\(\ds \sum_{i \mathop = 1}^k \paren {-1}^{i - 1} \sum_{j \mathop = 1}^n \map {e_{k - i} } X x_j^i\)





Replace in (1) each power sum $p_i$ by its summation.








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \paren {-1}^{k - 1} \sum_{m \mathop = 0}^{k - 1} \paren {-1}^m \sum_{j \mathop = 1}^n \map {e_m} X x_j^{k - m}\)





Re-index with $m = k - i$ and adjust powers of $-1$.








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \paren {-1}^{k - 1} \sum_{j \mathop = 1}^n \paren {\map {e_0} X x_j^k + \sum_{m \mathop = 1}^{k - 1} \paren {-1}^m \paren {x_j \map {e_{m - 1} } {U_j} x_j^{k - m} + \map {e_m} {U_j} x_j^{k - m} } }\)





by (5), where $U_j = X \setminus \set {x_j}$








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \paren {-1}^{k - 1} \sum_{j \mathop = 1}^n \paren {\map {e_0} X x_j^k + \sum_{m \mathop = 1}^{k - 1} \paren {-1}^m \map {e_{m - 1} } {U_j} x_j^{k - m + 1} + \sum_{m \mathop = 1}^{k - 1} \paren {-1}^m \map {e_m} {U_j} {x_j^{k - m} } }\)





adjust summations and collect powers of $x_j$




\(\text {(7)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \paren {-1}^{k - 1} \sum_{j \mathop = 1}^n \paren {-1}^{k - 1} x_j \map {e_k} {U_j}\)





telescoping sum reduces to a single term




There is believed to be a mistake here, possibly a typo.In particular: The wrong conjunction seems to have been used in the above. $\leadsto$ connects statementsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
It remains to prove (7) matches (1):




\(\text {(8)}: \quad\)









\(\ds \sum_{j \mathop = 1}^n x_j \map {e_k} {X \setminus \set {x_j} }\)

\(=\)







\(\ds k \map {e_k} X\)





for $1 \le k \le n$



Define:

$\map {y_i} t = t\, x_i, 1 \le i \le n$
$X_t = \set {\map {y_1} t, \ldots, \map {y_n} t}$
$\map f t = \map {e_k} {tx_1, \ldots, tx_n}$.
Then there are two equations (9)-(10) for $\map {f'} t$:




\(\text {(9)}: \quad\)









\(\ds \map {f'} t\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n x_j \map {e_k} {X_t \setminus \set {\map {y_j} t} }\)





chain rule for several variables




\(\text {(10)}: \quad\)









\(\ds \map f t\)

\(=\)







\(\ds t^k \map {e_k} X\)





because $f$ is a homogeneous function of degree $k$








\(\ds \leadsto \ \ \)





\(\ds \map {f'} t\)

\(=\)







\(\ds k t^{k - 1} \map {e_k} X\)





Power Rule for Derivatives



Let $t = 1$ in (9) and (10) to prove (8).
$\blacksquare$





