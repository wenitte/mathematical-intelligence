# 

Source: https://proofwiki.org/wiki/Power_of_Elements_is_Subgroup

Theorem
Let $G$ be an abelian group whose identity is $e$.

Then for any $n \in \Z$, the set $G^n = \set {x^n: x \in G}$ is a subgroup of $G$.

Moreover, if:

$(1): \quad G$ is finite
and:

$(2): \quad n \ne 1$ is a divisor of the order of $G$
then $G^n$ is a proper subgroup of $G$.


Proof
As $e^n = e \in G^n$, the set $G^n$ is not empty.
Let $x^n, y^n \in G^n$.
From Power of Product in Abelian Group, we have:

$x^n \paren {y^n}^{-1} = x^n \paren {y^{-1} }^n = \paren {x y^{-1} }^n$
It follows that $x^n \paren {y^n}^{-1} \in G^n$.
From the One-Step Subgroup Test, we conclude that $G^n$ is a subgroup of $G$.

Now assume $G$ is finite.
Let $n \ne 1$ such that $n \divides \order G$.
For $G^n$ to be a proper subgroup, it is enough to show that the map $x \mapsto x^n$ is not injective.
Now as $n \ne 1$, from the Fundamental Theorem of Arithmetic it is possible to find a prime $p$ such that $p \divides n$.
By Cauchy's Lemma (Group Theory), there is an element $x$ with order $p$.
It then follows that $x^n = e$, but $x \ne e$.
Therefore, the map $x \mapsto x^n$ is not injective.
Hence the result.
$\blacksquare$





