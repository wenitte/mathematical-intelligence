# 

Source: https://proofwiki.org/wiki/User:Jshflynn/Length_is_Epimorphism

Theorem
Let $\Sigma$ be an alphabet.

Let $\Sigma^{*}$ be the Kleene star of $\Sigma$ and $\circ$ denote concatenation.

Then the length function is an epimorphism from $(\Sigma^{*}, \circ)$ to $(\mathbb{N}_0, +)$.


Proof
The morphism property follows immediately from Length of Concatenation as:


$\operatorname{len}(x \circ y) = \operatorname{len}(x) + \operatorname{len}(y)$.

Hence it remains to be shown that length is a surjective function.

As a special case $0$ has a pre-image as:


$\operatorname{len}(\lambda \circ \lambda) = \operatorname{len}(\lambda) + \operatorname{len}(\lambda) = 0 + 0 = 0$

Now let $n \in \mathbb{N}$ and let $x \in \Sigma^{n}$

As:

$\operatorname{len}(x) = n$

We have that $\forall n \in \mathbb{N}_0:

\exists x \in \Sigma^{*}: \operatorname{len}(x)=n$ 

Hence the result.

$\blacksquare$





