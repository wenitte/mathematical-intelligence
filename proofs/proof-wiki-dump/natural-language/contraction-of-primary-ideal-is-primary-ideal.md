# 

Source: https://proofwiki.org/wiki/Contraction_of_Primary_Ideal_is_Primary_Ideal

Theorem
Let $A$ and $B$ be commutative rings with unity.
Let $f : A \to B$ be a ring homomorphism.
Let $\mathfrak b$ be a primary ideal of $B$.
Let $\mathfrak b^c$ be the contraction of $\mathfrak b$ by $f$.

Then $\mathfrak b^c$ is a primary ideal of $A$.


Proof
Let $x,y \in A$ such that:

$xy \in \mathfrak b^c$.
That is:

$\map f {xy} = \map f x \map f y \in \mathfrak b$

Suppose that $x \ne \mathfrak b^c$.
That is:

$\map f x \not \in \mathfrak b$
Since $\mathfrak b$ is primary:

$\exists n \in \N_{>0} : \map f {y^n} = \paren {\map f y}^n \in \mathfrak b$
That is:

$y^n \in \mathfrak b^c$
$\blacksquare$





