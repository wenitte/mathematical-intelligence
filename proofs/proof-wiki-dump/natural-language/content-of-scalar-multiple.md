# 

Source: https://proofwiki.org/wiki/Content_of_Scalar_Multiple

Theorem
Let $f$ be a polynomial with rational coefficients.
Let $\cont f$ denote the content of $f$.
Let $q \in \Q$ be a rational number.

Then:

$\cont {q f} = q \cont f$


Proof
Let $q = \dfrac a b$ with $a, b \in \Z$.
Let $\Z \sqbrk X$ denote the ring of polynomials over $\Z$.
Let $n \in \Z$ such that $n f \in \Z \sqbrk X$. 
Then we have:

$b n \paren {q f} = a n f \in \Z \sqbrk X$
By the definition of content, and using that $a \in \Z$:

$\cont {b n q f} = a \cont {n f}$

This article contains statements that are justified by handwavery.In particular: why is $b n$ the infimum mentioned in the definition?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
By definition of content:

$\cont {q f} = \dfrac 1 {b n} \cont {b n q f}$
Combining the above with the definition of $\cont f$:

$\cont {q f} = \dfrac a b \dfrac 1 n \cont {n f} = q \cont f$
$\blacksquare$





