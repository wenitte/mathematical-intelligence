# 

Source: https://proofwiki.org/wiki/Finite_Integral_Domain_is_Galois_Field/Proof_1

Theorem
A finite integral domain is a Galois field.


Proof
Let $R$ be a finite integral domain whose unity is $1$ and whose zero is $0$.

Let $a \in R$ such that $a \ne 0$.
We wish to show that $a$ has a product inverse in $R$. So consider the map $f: R \to R$ defined by $f: x \mapsto a x$.

We first show that the kernel of $f$ is trivial.
Consider that:

$\map \ker f = \set {x \in R: \map f x = 0} = \set {x \in R: a x = 0}$
Since $R$ is an integral domain, it has no proper zero divisors and thus $a x = 0$ means that $a = 0$ or $x = 0$.
Since, by definition, $a \ne 0$, then it must be true that $x = 0$.
Therefore, $\map \ker f = \set 0$ and so $f$ is injective.

Next, the Pigeonhole Principle gives us that an injective mapping from a finite set onto itself is surjective.
Since $R$ is finite, the mapping $f$ is surjective.

Finally, since $f$ is surjective and $1 \in R$, we have:

$\exists x \in R: \map f x = a x = 1$
So this $x$ is the product inverse of $a$ and the proof is complete.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers: Theorem $23.4$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 1$: Exercise $7$




