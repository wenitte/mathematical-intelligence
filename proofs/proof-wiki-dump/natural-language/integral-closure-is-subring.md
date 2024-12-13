# 

Source: https://proofwiki.org/wiki/Integral_Closure_is_Subring

Theorem
Let $A$ be an extension of a commutative ring with unity $\struct {R, +, \circ}$.
Let $C$ be the integral closure of $R$ in $A$.

Then $C$ is a subring of $A$.


Proof
For each $r \in R$, we have $r$ is a zero of $a - r = 0$.


This article needs to be linked to other articles.In particular: zeroYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Hence $R \subseteq C$, and in particular, $C$ is non-empty.
By Subring Test it is sufficient to prove that if $x, y \in C$ then $x + \paren {-y}, x \circ y \in C$.

Let $x, y \in C$.
By Equivalent Definitions of Integral Dependence: $(1) \implies (2)$, $R \sqbrk x$ and $R \sqbrk y$ are finitely generated over $R$.
Because $R \subseteq R \sqbrk x$, $R \sqbrk x \sqbrk y$ is also finitely generated over $R \sqbrk x$.

Therefore, we have finitely generated extensions:

$R \hookrightarrow R \sqbrk x \hookrightarrow R \sqbrk x \sqbrk y = R \sqbrk {x, y}$
Hence, by Transitivity of Finite Generation, $R \sqbrk {x, y}$ is finitely generated over $R$.

So by Equivalent Definition of Integral Dependence: $(2) \implies (1)$, every element of $R \sqbrk {x, y}$ is integral over $R$.
In particular, $x + \paren {-y}$ and $x \circ y$ are integral over $R$.
$\blacksquare$





