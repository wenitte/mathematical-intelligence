# 

Source: https://proofwiki.org/wiki/Bounds_for_Weierstrass_Elementary_Factors


This page has been identified as a candidate for refactoring of medium complexity.In particular: task itself easy, but how to do naming?Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $E_p: \C \to \C$ denote the $p$th Weierstrass elementary factor:
$\quad\map {E_p} z = \begin {cases} 1 - z & : p = 0 \\ 
\paren {1 - z} \map \exp {z + \dfrac {z^2} 2 + \cdots + \dfrac {z^p} p} & : \text {otherwise} \end {cases}$
Let $z \in \C$.


Some bound
Let $\cmod z \le \dfrac 1 2$.
Then:

$\cmod {\map {E_p} z - 1} \le 3 \cmod z^{p + 1}$


Another bound
Let $\cmod z \le 1$.
Then:

$\cmod {\map {E_p} z - 1} \le \cmod z^{p + 1}$


Proof
Proof of some bound
Let $\cmod z \le \dfrac 1 2$.
We may assume $p \ge 1$.
We have:

$\map {E_p} z = \map \exp {\map \log {1 - z} + \ds \sum_{k \mathop = 1}^p \frac {z^k} k}$

Then:














\(\ds \cmod {\map \log {1 - z} + \sum_{k \mathop = 1}^p \frac {z^k} k}\)

\(=\)







\(\ds \cmod {-\sum_{k \mathop = p + 1}^\infty \frac{z^k} k}\)





Series Expansion of Complex Logarithm














\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = p + 1}^\infty \frac {\cmod z^k} k\)





Triangle Inequality for Series














\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = p + 1}^\infty \cmod z^k\)





because $k \ge 1$














\(\ds \)

\(=\)







\(\ds \frac {\cmod z^{p + 1} } {1 - \cmod z}\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(\le\)







\(\ds 2 \cmod z^{p + 1}\)





because $\cmod z \le \dfrac 1 2$



Because $p \ge 1$:

$2 \cmod z^{p + 1} \le \dfrac 1 2$
By Bounds for Complex Exponential:

$\cmod {\map {E_p} z - 1} \le 3 \cmod z^{p + 1}$
$\blacksquare$


Proof of another bound

This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $\cmod z \le 1$.
We may assume $p \ge 1$.
For a fixed $p$, let:

$\map {E_p} z = \paren {1 - z} \map \exp {z + \dfrac {z^2} 2 + \cdots + \dfrac {z^p} p} = 1 + \ds \sum_{k \mathop = 1}^\infty a_k z^k$
be its power series expansion about $z = 0$.
By Derivative of Complex Power Series we obtain:

$\map {E_p'} z = \ds \sum_{k \mathop = 1}^\infty k a_k z^{k - 1} = -z^p \map \exp {z + \cdots + \dfrac {z^p} p}$
Comparing the two expressions gives two pieces of information about the coefficients $a_k$.
First:

$a_1 = a_2 = \cdots = a_p = 0$
Second, since the coefficients of the expansion of $\map \exp {z + \cdots + \dfrac {z^p} p}$ are all positive:

$a_k \le 0$ for $k \ge p + 1$
Thus:

$\cmod {a_k} = -a_k$ for $k \ge p + 1$
This gives:

$0 = \map {E_p} 1 = 1 + \ds \sum_{k\mathop = p + 1}^\infty a_k$
or:

$\ds \sum_{k \mathop = p + 1}^\infty \cmod {a_k} = -\sum_{k \mathop = p + 1}^\infty a_k = 1$
Hence:














\(\ds \cmod {\map{E_p} z - 1}\)

\(=\)







\(\ds \cmod {\sum_{k \mathop = p + 1}^\infty a_k z^k}\)




















\(\ds \)

\(=\)







\(\ds \cmod z^{p + 1} \cmod {\sum_{k \mathop = p + 1}^\infty a_k z^{k - p - 1} }\)




















\(\ds \)

\(\le\)







\(\ds \cmod z^{p + 1} \sum_{k \mathop = p + 1}^\infty \cmod {a_k}\)





Triangle Inequality for Series and $\cmod z\le1$














\(\ds \)

\(=\)







\(\ds \cmod z^{p + 1}\)





because $\ds \sum_{k \mathop = p + 1}^\infty \cmod {a_k} = 1$



$\blacksquare$


Also see
Weierstrass Factorization Theorem, what this is made for
Bounds for Complex Exponential
Bounds for Complex Logarithm


Sources
1966: Walter Rudin: Real and Complex Analysis: $15$: Zeros of holomorphic functions: The Weierstrass Factorization Theorem: Lemma $15.8$
1973: John B. Conway: Functions of One Complex Variable $\text {VII}$: Compact and Convergence in the Space of Analytic Functions: $\S 5$: Weierstrass Factorization Theorem: Lemma $5.11$




