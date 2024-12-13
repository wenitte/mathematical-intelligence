# 

Source: https://proofwiki.org/wiki/Ring_of_Polynomial_Functions_is_Commutative_Ring_with_Unity

Theorem
Let $\struct {R, +, \circ}$ be a commutative ring with unity.
Let $R \sqbrk {\set {X_j: j \in J} }$ be the ring of polynomial forms over $R$ in the indeterminates $\set {X_j: j \in J}$.
Let $R^J$ be the free module on $J$.
Let $A$ be the set of all polynomial functions $R^J \to R$.
Let $\struct {A, +, \circ}$ be the ring of polynomial functions on $R$.

Then $\struct {A, +, \circ}$ is a commutative ring with unity.


Proof
First we check that the operations of ring product and ring addition are closed in $A$.
Let $Z$ be the set of all multiindices indexed by $J$.
Let:

$\ds f = \sum_{k \mathop \in Z} a_k \mathbf X^k, \ g = \sum_{k \mathop \in Z} b_k \mathbf X^k \in R \sqbrk {\set {X_j: j \in J} }$.
Under the evaluation homomorphism, $f$ and $g$ map to:

$\ds A \owns \hat f: \forall x \in R^J: \map {\hat f} x = \sum_{k \mathop \in Z} a_k x^k$
$\ds A \owns \hat g: \forall x \in R^J: \map {\hat g} x = \sum_{k \mathop \in Z} b_k x^k$

This article, or a section of it, needs explaining.In particular: Clarification needed on the above link: exactly what the "evaluation homomorphism" is needs to be established.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then the induced pointwise sum of $\hat f$ and $\hat g$ is:














\(\ds \map {\hat f} x + \map {\hat g} x\)

\(=\)







\(\ds \sum_{k \mathop \in Z} a_k x^k + \sum_{k \mathop \in Z} b_k x^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in Z} \paren {a_k + b_k} x^k\)




















\(\ds \)

\(=\)







\(\ds \map {\widehat {f + g} } x\)





Definition of Addition of Polynomial Forms



Thus polynomial functions are closed under ring addition.

The [[induced pointwise product of $\hat f$ and $\hat g$ is:














\(\ds \map {\hat f} x \circ \map {\hat g} x\)

\(=\)







\(\ds \paren {\sum_{k \mathop \in Z} a_k x^k} \circ \paren {\sum_{k \mathop \in Z} a_k x^k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in Z} \paren {\sum_{p + q \mathop = k} a_p b_q} \mathbf X^k\)




















\(\ds \)

\(=\)







\(\ds \map {\widehat {f \circ g} } x\)





Definition of Multiplication of Polynomial Forms



Thus polynomial functions are closed under ring product.
Finally, we invoke Structure Induced by Ring Operations is Ring, which shows that $\struct {A, +, \circ}$ is a commutative ring with unity.
$\blacksquare$





