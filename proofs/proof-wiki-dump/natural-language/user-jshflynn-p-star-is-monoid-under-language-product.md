# 

Source: https://proofwiki.org/wiki/User:Jshflynn/P-star_is_Monoid_under_Language_Product

Theorem
Let $\Sigma$ be an alphabet.

Let $\map \PP {\Sigma^*}$ be the $P$-star of $\Sigma$
Let $\circ_L$ denote the language product operation. 

Then $\struct {\map \PP {\Sigma^*}, \circ_L}$ is a monoid.


Proof
A monoid is an algebraic structure $\struct {\map \PP {\Sigma^*}, \circ_L}$, such that:
Monoid Axiom $\text S 0$: Closure: $\map \PP {\Sigma^*}$ is closed under $\circ_L$.

(This follows directly from Product of Languages is Language)

Monoid Axiom $\text S 1$: Associativity: $\circ_L$ is associative on $\map \PP {\Sigma^*}$. 

(This follows directly from Language Product is Associative)

Monoid Axiom $\text S 2$: Identity: $\map \PP {\Sigma^*}$ has an identity under $\circ_L$. 

(This follows directly from Null Language is Identity of Language Product) 

$\blacksquare$





