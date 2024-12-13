# 

Source: https://proofwiki.org/wiki/Hartogs%27_Lemma_(Set_Theory)

This proof is about Hartogs' Lemma in the context of Set Theory. For other uses, see Hartogs' Lemma.



Theorem
Let $S$ be a set.

Then there exists an ordinal $\alpha$ such that there is no injection from $\alpha$ to $S$.


Proof 1
Define $\alpha = \set {\beta: \text{$\beta$ is an ordinal and there is an injection $\beta \to S$}}$.

First of all, it is to be shown that $\alpha$ is a set.
To this end, define the set $W$ by:

$W = \set {\paren {S', \preceq}: \text{$S' \subseteq S$ and $\preceq$ well-orders $S'$}}$
By the Counting Theorem, each $w \in W$ corresponds to a unique ordinal $\beta_w$.
Thus by the Axiom of Replacement, the following is a set:

$\set {\beta: \exists w \in W: \beta = \beta_w}$
It follows from Injection Induces Well-Ordering that this set coincides with $\alpha$.
In particular, then, $\alpha$ is a set.

Next, to establish $\alpha$ is an ordinal.
Suppose $\beta \in \alpha$ and $\gamma < \beta$.
Let $i: \beta \to S$ be an injection, and let $\iota: \gamma \to \beta$ be the inclusion of $\gamma$ in $\beta$.
Then by Composite of Injections is Injection, $i \circ \iota: \gamma \to S$ is an injection.
Hence $\gamma \in \alpha$, and therefore $\alpha$ is an ordinal.

Finally, by Ordinal is not Element of Itself, $\alpha \notin \alpha$.
That is to say, there is no injection $\alpha \to S$.
$\blacksquare$


Proof 2
Let $W$ be the set of all well-orderings on subsets of $S$.
By the Counting Theorem, there exists a mapping $F: W \to \On$ defined by letting $\map F s$ be the ordinal which is isomorphic to $s$.


This article, or a section of it, needs explaining.In particular: "isomorphism" between ordinalsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By Mapping from Set to Class of All Ordinals is Bounded Above, $F \sqbrk W$ has an upper bound $\alpha_0$.
Then if $\alpha$ is any ordinal strictly greater than $\alpha_0$, then $\alpha \notin F \sqbrk W$.
Aiming for a contradiction, suppose there is an injection $g: \alpha \to S$.
Then by Injection to Image is Bijection, there is a bijection from $\alpha$ onto $g \sqbrk \alpha$.
But this induces a well-ordering on $g \sqbrk \alpha \subseteq S$ which is isomorphic to $\alpha$, contradicting the fact that $\alpha \notin F \sqbrk W$.
$\blacksquare$


Also known as
This result is also known as Hartogs' Theorem.


Source of Name
This entry was named for Friedrich Moritz Hartogs.





