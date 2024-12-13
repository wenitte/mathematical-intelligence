# 

Source: https://proofwiki.org/wiki/Prime-Counting_Function_in_terms_of_Eulerian_Logarithmic_Integral/Riemann_Hypothesis_Holds



Theorem
Let $\map \pi x$ denote the prime-counting function of a number $x$.
Let $\map \Li x$ denote the Eulerian logarithmic integral of $x$:

$\map \Li x := \ds \int_2^x \dfrac {\d t} {\ln t}$

If the Riemann Hypothesis holds, then:

$\map \pi x = \map \Li x + \map \OO {\sqrt x \ln x}$
where $\OO$ is the big-$\OO$ notation.


Proof

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This page has been identified as a candidate for refactoring of medium complexity.In particular: Usual exerciseUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Let $x$ denote a real number.
Let $n$ denote a natural number.
Let $p$ denote a prime number.
Let $\map \li x$ denote the  logarithmic integral.


This page has been identified as a candidate for refactoring of medium complexity.In particular: These definitions are to be removed from here and referenced to their definition pagesUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Definition 1
Let $\sequence {a_n}$ be a sequence of complex numbers.
Define the partial sum $\ds \map A x = \sum_{0 \mathop \le n \mathop \le x} a_n$.
Let $f$ be a real valued and continuously differentiable function on $\closedint y x$.
Then, Abel's summation is defined by:

$\ds \sum_{y \mathop \le n \mathop \le x} a_n \map f n = \map A x \map f x - \map A y \map f y - \int_y^x \map A u \map {f'} u \rd u$
Definition 2
Let $m$ and $n$ be natural numbers and let $f$ be a real valued and continuously differentiable function on $ [m,n] $.
Then, the Euler-Maclaurin summation formula is defined by:

$\ds \sum_{i \mathop = m}^n \map f i = \int_m^n \map f x \rd x + \frac {\map f n + \map f m} 2 + \frac {\map {f'} n - \map {f'} m} {12} + R_2$
where:

$\ds \size {R_2} \le \frac 1 {12} \int_m^n \size {\map {f^2} x} \rd x$
Since the remainder term $R_2$ only has a negligible value for these purposes, this inequality is sufficient for this proof.

Definition 3
Recall the definition of the Meissel-Mertens constant:














\(\ds M\)

\(=\)







\(\ds \map {\lim_{n \mathop \to \infty} } {\sum_{\substack {p \mathop \le n \\ \text {$p$ prime} } } \dfrac 1 p - \ln \ln n}\)




















\(\ds \)

\(\approx\)







\(\ds 0.2614972127 \ldots\)











Definition 4
Let $\map E x$ be the error term defined by:

$\ds \map E x = \sum_{p \mathop \le x} \frac 1 p - \ln \ln x - M$

This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
It is proved that $\map E x$ changes sign infinitely often.
For $x > 1$

$\size {\map E x} < \dfrac 1 {\ln^2 x}$


Lemma 1
For $n \ge 2$:

$(1): \quad \ds \sum_{p \mathop \le n} \frac 1 p = \frac {\map \pi n} n + \int_2^n \frac {\map \pi x} {x^2} \rd x$
Proof
Let $a_n= \cases {1 & : $n = p$ \cr 0 & : $n \neq p$}$ 
Let $\map A x = \map \pi x$.
Let $\map f x = \dfrac 1 x$ and $ f'(x)  = - \dfrac 1 {x^2}$.
Using Definition 1: 














\(\ds \ds \sum_{p \mathop \le n} \frac 1 p\)

\(=\)







\(\ds \frac {\map \pi n} n + \int_2^n \frac {\map \pi x} {x^2} \rd x\)





$y = 2$ since $p_1 = 2$



$\Box$
 

Lemma 2
For $n \ge 2$:

$(2): \quad \ds \sum_{k \mathop = 2}^n \sum_{p \mathop \le k} \frac 1 p = \paren {n + 1} \sum_{p \mathop \le n} \frac 1 p - \map \pi n$


Proof
Let $p_i$ denote the $i$th prime.














\(\ds \sum_{k \mathop = 2}^n \sum_{p \mathop \le k} \frac 1 p\)

\(=\)







\(\ds \sum_{p \mathop \le 2} \frac 1 p + \sum_{p \mathop \le 3} \frac 1 p + \sum_{p \mathop \le 4} \frac 1 p + \cdots + \sum_{p \mathop \le n} \frac 1 p\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p_1} + \paren {\frac 1 {p_1} + \frac 1 {p_2} } + \paren {\frac 1 {p_1} + \frac 1 {p_2} } + \cdots + \paren {\frac 1 {p_1} + \frac 1 {p_2} + \frac 1 {p_3} + \cdots + \frac 1 {p_{\map \pi n} } }\)




















\(\ds \)

\(=\)







\(\ds \paren {n - 1} \frac 1 {p_1} + \paren {n - 1 - \paren {p_2 - p_1} } \frac 1 {p_2} + \paren {n - 1 - \paren {p_3 - p_1} } \frac 1 {p_3} + \cdots + \paren {n - 1 - \paren {p_ {\map \pi n} - p_1} } \frac 1 {p_{\map \pi n} }\)





$n - 1$ since $p_1 = 2$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^{\map \pi n} \frac {n - 1 - \paren {p_i - p_1} } {p_i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^{\map \pi n} \frac {n + 1 - {p_i} } {p_i}\)





as $p_1 = 2$














\(\ds \)

\(=\)







\(\ds \paren {n + 1} \sum_{i \mathop = 1}^{\map \pi n} \frac 1 {p_i} - \sum_{i \mathop = 1}^{\map \pi n} 1\)




















\(\ds \)

\(=\)







\(\ds \paren {n + 1} \sum_{p \mathop \le n} \frac 1 p - \map \pi n\)









$\Box$


Corollary
Equating $(1)$ and $(2)$:

$\ds \sum_{k \mathop = 2}^{n - 1} \sum_{p \mathop \le k} \frac 1 p = n \int_2^n \frac {\map \pi x} {x^2}$


Proof













\(\ds \sum_{k \mathop = 2}^n \sum_{p \mathop \le k} \frac 1 p\)

\(=\)







\(\ds \paren {n + 1} \paren {\frac {\map \pi n} n + \int_2^n \frac {\map \pi x} {x^2} \rd x} - \map \pi n\)





substituting the right hand side of $(1)$ for $\ds \sum_{p \mathop \le n} \frac 1 p$ in $(2)$














\(\ds \)

\(=\)







\(\ds \map \pi n + n \int_2^n \frac {\map \pi x} {x^2} \rd x + \frac {\map \pi n} n + \int_2^n \frac {\map \pi x} {x^2} - \map \pi n\)




















\(\ds \)

\(=\)







\(\ds n \int_2^n \frac {\map \pi x} {x^2} \rd x + \sum_{p \mathop \le n} \frac 1 p\)




















\(\ds \sum_{k \mathop = 2}^{n - 1} \sum_{p \mathop \le k} \frac 1 p\)

\(=\)







\(\ds n \int_2^n \frac {\map \pi x} {x^2} \rd x\)









$\Box$

Lemma 3
For $ n \ge 2 $:

$(3): \quad \ds \sum_{k \mathop = 2}^n \sum_{p \mathop \le k} \frac 1 p = \sum_{k \mathop = 2}^n \ln \ln k + \paren {n - 1} M + \sum_{k \mathop = 2}^n \map E k$


Proof














\(\ds \sum_{k \mathop = 2}^n \sum_{p \mathop \le k} \frac 1 p\)

\(=\)







\(\ds \sum_{p \mathop \le 2} \frac 1 p + \sum_{p \mathop \le 3} \frac 1 p + \sum_{p \mathop \le 4} \frac 1 p + \cdots + \sum_{p \mathop \le n} \frac 1 p\)




















\(\ds \)

\(=\)







\(\ds ( \ln \ln 2 + M + \map E 2 ) + ( \ln \ln 3 + M + \map E 3 ) + ( \ln \ln 4 + M + \map E 4 ) + \ldots + ( \ln \ln n + M + \map E n )\)





Using Definition 4














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 2}^n \ln \ln k + \paren {n - 1} M + \sum_{k \mathop = 2}^n \map E k\)





$n-1$ since $p_1 = 2$



$\Box$

Theorem 1
For $n \ge 2$:

$(4): \quad \ds \map \pi n - \map \li n = n \map E n + \frac {\ln \ln n} 2 - \sum_{k \mathop = 2}^{n - 1} \map E k + C_1$
where:

$-1.07193 \ldots \le C_1 \le -1.01182 \ldots$
Proof
We start by equating $(2)$ and $(3)$:

$(5): \quad \ds \paren {n + 1} \sum_{p \mathop \le n} \frac 1 p - \map \pi n = \sum_{k \mathop = 2}^n \ln \ln k + \paren {n - 1} M + \sum_{k \mathop = 2}^n \map E k$
Applying Definition 4:

$\ds \sum_{p \mathop \le n} \frac 1 p = \ln \ln n + M + \map E n$
Applying Definition 2:














\(\ds \sum_{k \mathop = 2}^n \ln \ln k\)

\(=\)







\(\ds n \ln \ln n - \map \li n - 2 \ln \ln 2 + \map \li 2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 1 2 \paren {\ln \ln n + \ln \ln 2} + \dfrac 1 {12} \paren {\dfrac 1 {n \ln n} - \dfrac 1 {2 \ln 2} } + R_2\)










where:

$\ds \size {R_2} \le \frac 1 {12} \int_2^n \size {-\frac {\ln x + 1} {x^2 \ln^2 x} } \rd x = \frac 1 {12} \paren {\frac 1 {2 \ln 2} - \frac 1 {n \ln n} }$
Combining these results with $(5)$ we obtain $(4)$, where:

$C_1 = 2 M + \dfrac {3 \ln \ln 2} 2 - \map \li 2 - \dfrac 1 {12} \paren {\dfrac 1 {n \ln n} - \dfrac 1 {2 \ln 2} } - R_2$
$\Box$


Theorem 2
If $\map \pi x - \map \li x = \OO (\sqrt x \ln x)$, then for $n > 2657$:

$(6): \quad \ds \size {\sum_{k \mathop = 2}^{n - 1} \map E k - \frac {\ln \ln n} 2 - C_1 + n C_2} \le \frac n {8 \pi} \paren {\frac {2 \paren {\ln 2657 + 2} } {\sqrt {2657} } - \frac {2 \paren {\ln n + 2} } {\sqrt n} }$
where:

$C_2 = - 0.00701 \ldots$


Proof
Dividing $(4)$ by $n$ and by applying Lemma 1:

$(7): \quad \ds \sum_{p \mathop \le n} \frac 1 p - \int_2^n \frac {\map \pi x} {x^2} \rd x - \frac {\map \li n} n = \map E n + \frac {\ln \ln n} {2 n} - \frac {\ds \sum_{k \mathop = 2}^{n - 1} \map E k} n + \frac {C_1} n$
Applying Definition 4:

$\ds \sum_{p \mathop \le n} \frac 1 p = \ln \ln n + M + \map E n$
It is proved that if:

$\map \pi x - \map \li x = \map \OO {\sqrt x \ln x}$
then for all $ x \ge 2657$:

$\size {\map \pi x - \map \li x} \le \dfrac {\sqrt x \ln x} {8 \pi}$
For this reason, we modify the second term of the left-hand side of $(7)$ as follows:

$\ds \int_2^n \frac {\map \pi x} {x^2} \rd x = \int_2^{2657} \frac {\map \pi x} {x^2} \rd x + \int_{2657}^n \frac {\map \pi x} {x^2} \rd x$
Substituting $\map \li x + \map \OO {\sqrt x \ln x}$ for $\map \pi x$ in the last term:

$\ds \int_2^n \frac {\map \pi x} {x^2} d x = \int_2^{2657} \frac {\map \pi x} {x^2} \rd x + \int_{2657}^n \frac {\map \li x} {x^2} \rd x + \int_{2657}^n \frac {\map \OO {\sqrt x \ln x} } {x^2} \rd x$
Applying Lemma 1:

$\ds \int_2^{2657} \frac {\map \pi x} {x^2} \rd x = \sum_{p \mathop \le 2657} - \frac {\map \pi {2657} } {2657}$
Integrating:

$\ds \int_{2657}^n \frac {\map \li x} {x^2} \rd x = \ln \ln n - \frac {\map \li n} n - \ln \ln 2657 + \frac {\map \li {2657} } {2657}$
and:

$\ds \int_{2657}^n \frac {\map \OO {\sqrt x \ln x} } {x^2} \rd x = \map \OO {\frac {2 \paren {\ln 2657 + 2} } {\sqrt {2657} } - \frac {2 \paren {\ln n + 2} } {\sqrt n} }$
So:














\(\ds \int_2^n \frac {\map \pi x} {x^2} \rd x\)

\(=\)







\(\ds \sum_{p \mathop \le 2657} \frac 1 p - \frac {\map \pi {2657} } {2657} + \ln \ln n - \frac {\map \li n} n - \ln \ln 2657\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac {\map \li {2657} } {2657} + \map \OO {\dfrac {2 \paren {\ln 2657 + 2} } {\sqrt{2657} } - \dfrac {2 \paren {\ln n + 2} } {\sqrt n} }\)










Combining these results with $(7)$ we obtain $(6)$, where:

$\ds C_2 = M + \dfrac {\map \pi {2657} } {2657} + \ln \ln 2657 - \sum_{p \mathop \le 2657} \frac 1 p - \frac {\map \li {2657} } {2657}$
$\Box$

We prove the validity of $(6)$ in a sequence of the following lemmata.


Lemma 4
For $n - 1 \ge 2$:

$(8): \quad \ds \size {\sum_{k \mathop = 2}^{n - 1} \map E k} < \map \li {n - 1} - \frac {n - 1} {\map \ln {n - 1} } + C_3$
where $3.13114 \ldots \le C_3 \le 3.92159 \ldots$


Proof
Applying Definition 4, for $n \ge 3$:

$\ds \size {\sum_{k \mathop = 2}^{n - 1} \map E k} < \sum_{k \mathop = 2}^{n - 1} \frac 1 {\ln^2 k}$
Applying Definition 2:














\(\ds \sum_{k \mathop = 2}^{n - 1} \frac 1 {\ln^2 k}\)

\(=\)







\(\ds \map \li {n - 1} - \frac {n - 1} {\map \ln {n - 1} } - \map \li 2 + \frac 2 {\ln 2}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac 1 2 \paren {\frac 1 {\map {\ln^2} {n - 1} } + \frac 1 {\ln^2 2} } + \frac 1 {12} \paren {-\frac 2 {\paren {n - 1} \map {\ln^3} {n - 1} } + \frac 2 {2 \ln^3 2} } + R_2\)









where:

$\ds \size {R_2} \le \dfrac 1 {12} \int_2^{n - 1} \size {\frac {2 \paren {\ln x + 3} } {x^2 \ln^4 x} } \rd x = \frac 1 {12} \paren {\frac 1 {\ln^3 2} - \frac 2 {\paren {n - 1} \map {\ln^3} {n - 1} } }$
and:

$C_3 = \dfrac 2 {\ln 2} - \map \li 2 + \dfrac 1 2 \paren {\dfrac 1 {\map {\ln^2} {n - 1} } + \dfrac 1 {\ln^2 2} } + \dfrac 1 {12} \paren {-\dfrac 2 {\paren {n - 1} \map {\ln^3} {n - 1} } + \dfrac 2 {2 \ln^3 2} } + R_2$
$\Box$

In the following lemmata, we solve $(6)$ where we consider the case when the sum of error terms can be negative as well.
It is sufficient if we substitute the right hand side of $(8)$ for $\sum_{k \mathop = 2}^{n - 1} \map E k$ and replace $C_1$, $C_3$ by their bounding values, adequately for each inequality, so that the inequality certainly holds.


Lemma 5
If $\ds \sum_{k \mathop = 2}^{n - 1} \map E k > 0 $, then $(6)$ holds for $n \ge 20130$.


Proof
Let $C_1 = -1.07193$, $C_3 = 3.92159$.
Then the first inequality of $(6)$ holds for $n \ge 20130$.
Let $C_1 = -1.01182$, $C_3 = 3.13114$.
Then the second inequality of $(6)$ holds for $n \ge 2658$.
$\Box$


Lemma 6
If $\ds \sum_{k \mathop = 2}^{n - 1} \map E k \le 0$, then $(6)$ holds for $n \ge 6859948$. 


Proof
Let $C_1 = -1.07193$, $C_3 = 3.13114$.
Then, the first inequality of $(6)$ holds for $n \ge 2658$.
Let $C_1 = -1.01182$, $C_3 = 3.92159$.
Then, the second inequality of $(6)$ holds for $n \ge 6859948$.
$\Box$

It can be verified numerically that if $2657 < n < 20130$, then $(6)$ holds.
Because for $n < 6859948$:

$\ds \sum_{k=2}^{n - 1} \map E k > 0$
we conclude that $(6)$ holds for $n > 2657$.
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Explore direct relevance of these sources to this pageIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1874: Franz Mertens: Ein Beitrag zur analytischen Zahlentheorie (J. reine angew. Math. Vol. 78: pp. 46 – 62)
1914: J.E. Littlewood: Sur la distribution des nombres premiers (C.R. Acad. Sci. Vol. 158: pp. 1869 – 1872)
1932: A.E. Ingham: The Distribution of Prime Numbers
1962: J. Barkley Rosser and Lowell Schoenfeld: Approximate formulas for some functions of prime numbers (Illinois J. Math. Vol. 6: pp. 64 – 94)
1976: Lowell Schoenfeld: Sharper bounds for the Chebyshev functions $\map \theta x$ and $\map \psi x$. II. (Math. Comp. Vol. 30: pp. 337 – 360)  www.jstor.org/stable/2005976
1983: François Le Lionnais and Jean Brette: Les Nombres Remarquables ... (previous) ... (next): $0,5$
1983: Guy Robin: Sur l'ordre maximum de la fonction somme des diviseurs (Progr. Math. Vol. 38: pp. 233 – 244)
1999: Tom M. Apostol: An Elementary View of Euler's Summation Formula (Amer. Math. Monthly Vol. 106: pp. 409 – 418)  www.jstor.org/stable/2589145




