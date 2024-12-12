# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Absolute_Convergence_of_Product_of_Complex_Numbers



Theorem
Let $\sequence {a_n}$ be a sequence of complex numbers.
Let $\log$ denote the complex logarithm.
The following definitions of the concept of Absolute Convergence of Product are equivalent:

Definition 1
The infinite product $\ds \prod_{n \mathop = 1}^\infty \paren {1 + a_n}$ is absolutely convergent if and only if $\ds \prod_{n \mathop = 1}^\infty \paren {1 + \size {a_n} }$ is convergent.

Definition 2
The infinite product $\ds \prod_{n \mathop = 1}^\infty \paren {1 + a_n}$ is absolutely convergent if and only if the series $\ds \sum_{n \mathop = 1}^\infty a_n$ is absolutely convergent.

Definition 3
The infinite product $\ds \prod_{n \mathop = 1}^\infty \paren {1 + a_n}$ is absolutely convergent if and only if there exists $n_0 \in \N$ such that:

$a_n \ne -1$ for $n > n_0$
The series $\ds \sum_{n \mathop = n_0 + 1}^\infty \log \paren {1 + a_n}$ is absolutely convergent
where $\log$ denotes the complex logarithm.


Proof
1 iff 2
Follows directly from Equivalence of Definitions of Absolute Convergence of Product.
$\blacksquare$


2 implies 3
By Terms in Convergent Series Converge to Zero, there exists $n_0 \in \N$ such that $\size {a_n} \le \dfrac 1 2$ for $n > n_0$.
Thus $a_n \ne -1$ for $n > n_0$.
By Bounds for Complex Logarithm:

$\size {\map \log {1 + a_n} } \le \dfrac 3 2 \size {a_n}$
for $n > n_0$.
By the Comparison Test, $\ds \sum_{n \mathop = n_0 + 1}^\infty \map \log {1 + a_n}$ is absolutely convergent.
$\blacksquare$


3 implies 2
By Terms in Convergent Series Converge to Zero, $\map \log {1 + a_n} \to 0$.
By Complex Exponential is Continuous, $1 + a_n \to 1$.
That is, $a_n \to 0$.
Let $n_1 \in \N$ be such that $\size {a_n} \le \dfrac 1 2$ for $n > n_1$.
By Bounds for Complex Logarithm, $\dfrac 1 2 \size {a_n} \le \size {\map \log {1 + a_n} }$ for $n > \map \max {n_0, n_1}$.
By the Comparison Test, $\ds \sum_{n \mathop = 1}^\infty a_n$ is absolutely convergent.
$\blacksquare$


Also see
Logarithm of Infinite Product of Complex Numbers for a refined relation between the series $\ds \sum_{n \mathop = 1}^\infty \map \log {1 + a_n}$ and the product $\ds \prod_{n \mathop = 1}^\infty \paren {1 + a_n}$


Sources
1973: John B. Conway: Functions of One Complex Variable $VII$: Compact and Convergence in the Space of Analytic Functions: $\S 5$: Weierstrass Factorization Theorem: Proposition $5.4$




