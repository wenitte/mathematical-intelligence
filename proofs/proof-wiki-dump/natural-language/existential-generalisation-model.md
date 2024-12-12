# 

Source: https://proofwiki.org/wiki/Existential_Generalisation/Model

Theorem
Let $\map {\mathbf A} x$ be a WFF of predicate logic.
Let $\tau$ be a term which is freely substitutable for $x$ in $\mathbf A$.

Then $\map {\mathbf A} \tau \implies \exists x: \map {\mathbf A} x$ is a tautology.


Proof
Let $\AA$ be a structure on a set $A$, and let $\sigma$ be an assignment for $\forall x: \map {\mathbf A} x \implies \map {\mathbf A} \tau$.
Define:

$a_\tau := \map {\operatorname{val}_\AA} \tau \sqbrk \sigma$
the value of $\tau$ under $\sigma$.

From the definition of value under $\sigma$:

$\map {\operatorname{val}_\AA} {\forall x: \map {\mathbf A} x \implies \map {\mathbf A} \tau} \sqbrk \sigma = \map {f^\to} {\map {\operatorname{val}_\AA} {\forall x: \map {\mathbf A} x} \sqbrk \sigma, \map {\operatorname{val}_\AA} {\map {\mathbf A} \tau} \sqbrk \sigma}$
where $f^\to$ is the truth function of $\implies$.

We thus need to ascertain that if:

$\map {\operatorname{val}_\AA} {\map {\mathbf A} \tau} \sqbrk \sigma = \T$
then also:

$\map {\operatorname{val}_\AA} {\exists x: \map {\mathbf A} x} \sqbrk \sigma = \T$

By the Substitution Theorem for Well-Formed Formulas, the former amounts to:

$\map {\operatorname{val}_\AA} {\map {\mathbf A} x} \sqbrk {\sigma + \paren {x / a_\tau} } = \T$
By the definition of value under $\sigma$, the latter reduces to:

$\map {\operatorname{val}_\AA} {\map {\mathbf A} x} \sqbrk {\sigma + \paren {x / a} } = \T$
for some $a \in A$.
Since $a_\tau \in A$, the conclusion follows, and $\map {\mathbf A} \tau \implies \exists x: \map {\mathbf A} x$ is a tautology.
$\blacksquare$


Sources
2009: Kenneth Kunen: The Foundations of Mathematics ... (previous) ... (next): $\text{II}.8$ Further Semantic Notions: Corollary $\text{II.8.12}$




