# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Limit_of_Vector-Valued_Function


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
Let $D \subseteq \R$ be a subset and $f: D \to \R^n, \map f x = \tuple {\map {f_1} x, \ldots, \map {f_n} x}$ a vector valued function.
Let $x_0 \in \R$ be a limit point of $D$ and $L = (L_1,\ldots,L_n) \in \R^n$.

Then $\ds \lim_{x \mathop \to x_0} \map f x = L$ if and only if $\ds \lim_{x \mathop \to x_0} \map {f_j} x = L_j$
In particular the limit of $f$ exists if and only if the limit of each component exists.


Proof
Sufficient Condition
First assume that $\ds \lim_{x \mathop \to x_0} \map f x = L$.
Let $\epsilon \in \R_{\gt 0}$.
Then there exists $\delta \in \R_{\gt 0}$ such that for all $x \in D$ with $\size {x - x_0} \lt \delta$ we have $\size {\map f x - L} \lt \epsilon$.
Then it follows for all $j = \set {1, \ldots, n}$, that
$\ds \size {\map {f_j} x - L_j} = \sqrt {\paren {\map {f_j} x - L_j}^2} \le \sqrt {\sum_{j \mathop = 1}^n \paren {\map {f_j} x - L_j}^2} = \size {\map f x - L} \lt \epsilon$
And therefore $\ds \lim_{x \mathop \to x_0} \map {f_j} x = L_j$ for all $j$.
$\Box$


Necessary Condition
Now assume for all $j$ that $\ds \lim_{x \mathop \to x_0} \map {f_j} x = L_j$.
Let $\epsilon \in \R_{\gt 0}$.
Then there exists $\delta_j \in \R_{\gt 0}$ such that for all $x \in D$ with $\size {x - x_0} \lt \delta_j$ we have $\size {\map {f_j} x - L_j} \lt \dfrac \epsilon n$ for $j \in \set {1, \ldots, n}$.
Set $\ds \delta := \min_{1 \mathop = 1}^n \delta_j$.
Then it follows for all $\size {x - x_0} \lt \delta$:














\(\ds \size {\map f x - L}\)

\(=\)







\(\ds \sqrt {\sum_{j \mathop = 1}^n \paren {\map {f_j} x - L_j}^2}\)




















\(\ds \)

\(\le\)







\(\ds \sum_{j \mathop = 1}^n \sqrt {\paren {\map {f_j} x - L_j}^2}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \size {\map {f_j} x - L_j}^2\)




















\(\ds \)

\(\lt\)







\(\ds n \frac \epsilon n\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









Therefore:

$\ds \lim_{x \mathop \to x_0} \map f x = L$
$\blacksquare$


Sources




