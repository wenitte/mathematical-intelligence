# 

Source: https://proofwiki.org/wiki/Polynomials_Closed_under_Addition/Polynomial_Forms

Theorem
Let:

$\ds f = \sum_{k \mathop \in Z} a_k \mathbf X^k$
$\ds g = \sum_{k \mathop \in Z} b_k \mathbf X^k$
be polynomials in the indeterminates $\set {X_j: j \in J}$ over the ring $R$.

Then the operation of polynomial addition on $f$ and $g$:
Define the sum:

$\ds f \oplus g = \sum_{k \mathop \in Z} \paren {a_k + b_k} \mathbf X^k$
Then $f \oplus g$ is a polynomial.

That is, the operation of polynomial addition is closed on the set of all polynomials on a given set of indeterminates $\set {X_j: j \in J}$.


This article, or a section of it, needs explaining.In particular: Clarify the notation: explicitly introduce $R$ and define what $Z$ is (presume integers, in which case it is denoted $\Z$) but as $Z$ has been seen to be used for something else in the exposition of polynomial forms, this can not be assumed automatically.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
It  is immediate that $f \oplus g$ is a map from the free commutative monoid to $R$, so we need only prove  that $f \oplus g$ is nonzero on finitely many $\mathbf X^k$, $k \in Z$.
Suppose that for some $k \in Z$, $a_k + b_k \ne 0$
This forces at least one of $a_k$ and $b_k$ to be non-zero.
This can only be true for a finite number of terms because $f$ and $g$ are polynomials.
The result follows.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.




