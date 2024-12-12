# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Minimal_Polynomial



Theorem
The following definitions of the concept of Minimal Polynomial are equivalent:
Let $L / K$ be a field extension.
Let $\alpha \in L$ be algebraic over $K$.

Definition 1
The minimal polynomial of $\alpha$ over $K$ is the unique monic polynomial $f \in K \sqbrk x$ of smallest degree such that $\map f \alpha = 0$.

Definition 2
The minimal polynomial of $\alpha$ over $K$ is the unique irreducible, monic polynomial $f \in K \sqbrk x$ such that $\map f \alpha = 0$.

Definition 3
The minimal polynomial of $\alpha$ over $K$ is the unique monic polynomial $f \in K \sqbrk x$ that generates the kernel of the evaluation homomorphism $K \sqbrk x \to L$ at $\alpha$.
That is, such that for all $g \in K \sqbrk x$:

$\map g \alpha = 0$ if and only if $f$ divides $g$.


Proof
1 equals 2
By Minimal Polynomial is Irreducible, it follows that the two are equal.
$\Box$


1 equals 3

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Let $f \in K \sqbrk x$ be the monic polynomial of smallest degree such that $\map f \alpha = 0$.
Let $g \in K \sqbrk x$ be a polynomial.
If $f \divides g$, then $g = q f$ for some $q \in K \sqbrk x$.
Thus $\map g \alpha = \map f \alpha \, \map q \alpha = 0$.
Conversely, suppose $\map g \alpha = 0$.
By the Division Theorem for Polynomial Forms over Field, there exists $q, r \in K \sqbrk x$ such that:

$g = q f + r$
and:

$r = 0$ or $\deg r < \deg f$.
Evaluating this expression at $\alpha$ we find that:

$\map g \alpha = \map q \alpha \, \map f \alpha + \map r \alpha \implies \map r \alpha = 0$
since $\map f \alpha = \map g \alpha = 0$.
But $f$ has minimal degree among the non-zero polynomials that are zero at $\alpha$.
Therefore $r = 0$.
Therefore:

$g = q f$
That is, $f$ divides $g$.
$\blacksquare$





