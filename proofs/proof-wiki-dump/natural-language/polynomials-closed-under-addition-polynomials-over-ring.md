# 

Source: https://proofwiki.org/wiki/Polynomials_Closed_under_Addition/Polynomials_over_Ring

Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $\struct {S, +, \circ}$ be a subring of $R$.

Then $\forall x \in R$, the set $S \sqbrk x$ of polynomials in $x$ over $S$ is closed under the operation $+$.


Polynomials over Integral Domain
The special case when $R$ is a commutative ring with unity and $D$ is an integral domain follows the same lines:

Let $\struct {R, +, \circ}$ be a commutative ring with unity.
Let $\struct {D, +, \circ}$ be an integral subdomain of $R$.

Then $\forall x \in R$, the set $D \sqbrk x$ of polynomials in $x$ over $D$ is closed under the operation $+$.


Proof
Let $p, q$ be polynomials in $x$ over $S$.
We can express them as:

$\ds p = \sum_{k \mathop = 0}^m a_k \circ x^k$
$\ds q = \sum_{k \mathop = 0}^n b_k \circ x^k$
where:

$(1): \quad a_k, b_k \in S$ for all $k$
$(2): \quad m, n \in \Z_{\ge 0}$, that is, are non-negative integers.

Suppose $m = n$.
Then:

$\ds p + q = \sum_{k \mathop = 0}^n a_k \circ x^k + \sum_{k \mathop = 0}^n b_k \circ x^k$
Because $\struct {R, +, \circ}$ is a ring, it follows that:

$\ds p + q = \sum_{k \mathop = 0}^n \paren {a_k + b_k} \circ x^k$
which is also a polynomial in $x$ over $S$.


This article contains statements that are justified by handwavery.In particular: What needs to be done here is to establish that each of the terms is an element of $R$ and that each of the coefficients is an element of $S$. Trivial, but important.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

Without loss of generality, suppose $m > n$.
Then we can express $q$ as:

$\ds \sum_{k \mathop = 0}^n b_k \circ x^k + \sum_{k \mathop = n \mathop + 1}^m 0_D \circ x^k$
Thus:

$\ds p + q = \sum_{k \mathop = 0}^n \paren {a_k + b_k} \circ x^k + \sum_{k \mathop = n \mathop + 1}^m a_k \circ x^k$
which is also a polynomial in $x$ over $S$.

Thus the sum of two polynomials in $x$ over $S$ is another polynomial in $x$ over $S$.
Hence the result.
$\blacksquare$





