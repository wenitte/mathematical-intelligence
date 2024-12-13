# 

Source: https://proofwiki.org/wiki/Polynomials_Closed_under_Addition/Polynomials_over_Integral_Domain/Proof_1

Theorem
Let $\struct {R, +, \circ}$ be a commutative ring with unity.
Let $\struct {D, +, \circ}$ be an integral subdomain of $R$.

Then $\forall x \in R$, the set $D \sqbrk x$ of polynomials in $x$ over $D$ is closed under the operation $+$.


Proof
Let $p, q$ be polynomials in $x$ over $D$.
We can express them as:

$\ds p = \sum_{k \mathop = 0}^m a_k \circ x^k$
$\ds q = \sum_{k \mathop = 0}^n b_k \circ x^k$
where:

$(1): \quad a_k, b_k \in D$ for all $k$
$(2): \quad m, n \in \Z_{\ge 0}$, that is, are non-negative integers.

Suppose $m = n$.
Then:

$\ds p + q = \sum_{k \mathop = 0}^n a_k \circ x^k + \sum_{k \mathop = 0}^n b_k \circ x^k$
Because $\struct {R, +, \circ}$ is a commutative ring, it follows that:

$\ds p + q = \sum_{k \mathop = 0}^n \paren {a_k + b_k} \circ x^k$
which is also a polynomials in $x$ over $D$.


This article, or a section of it, needs explaining.In particular: Establish whether $R$ actually needs to be commutative for the above to hold.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Without loss of generality, suppose $m > n$.
Then we can express $q$ as:

$\ds \sum_{k \mathop = 0}^n b_k \circ x^k + \sum_{k \mathop = n \mathop + 1}^m 0_D \circ x^k$
Thus:

$\ds p + q = \sum_{k \mathop = 0}^n \paren {a_k + b_k} \circ x^k + \sum_{k \mathop = n \mathop + 1}^m a_k \circ x^k$
which is also a polynomials in $x$ over $D$.

Thus the sum of two polynomials in $x$ over $D$ is another polynomial in $x$ over $D$.
Hence the result.
$\blacksquare$





