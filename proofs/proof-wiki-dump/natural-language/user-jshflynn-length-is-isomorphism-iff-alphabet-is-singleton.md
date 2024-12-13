# 

Source: https://proofwiki.org/wiki/User:Jshflynn/Length_is_Isomorphism_Iff_Alphabet_is_Singleton



Theorem
Let $\Sigma$ be an alphabet.

Let $\Sigma^{*}$ be the Kleene star of $\Sigma$ and $\circ$ denote concatenation.

Then the length function is an isomorphism from $(\Sigma^{*}, \circ)$ to $(\mathbb{N}_0, +)$ iff $|\Sigma|=1$.


Proof
Sufficient Condition
Suppose the length function is an isomorphism from $(\Sigma^{*}, \circ)$ to $(\mathbb{N}_0, +)$ and suppose $|\Sigma| > 1$.

Let $a$ and $b$ be distinct letters of $\Sigma$ and let $n \in \mathbb{N}$.

Then:

$\operatorname{len}(a^{n-1} \circ a) = \operatorname{len}(a^{n-1} \circ b) = n$ and $a^{n-1} \circ a \ne a^{n-1} \circ b$

Which contradicts the assumption that the length function was an isomorphism.

Hence $|\Sigma| = 1$. 

(Note by the definition of an alphabet, $|\Sigma| \ne 0$ (and there is no special case to consider for $\lambda$ as it is a word not a letter)).


Necessary Condition
From Length is Epimorphism, it remains to be shown that $|\Sigma|=1$ implies the length function is injective.

That is, $\forall x, y \in \Sigma^{*}$:


$\operatorname{len}(x) = \operatorname{len}(y) \implies x = y$.

Let $x, y \in \Sigma^{*}$ and let $\operatorname{len}(x) = \operatorname{len}(y)$.

We have that:


$\forall i: x_i = y_i$

So from the definition of word equality $x=y$. 

Hence the length function is injective.

$\blacksquare$





