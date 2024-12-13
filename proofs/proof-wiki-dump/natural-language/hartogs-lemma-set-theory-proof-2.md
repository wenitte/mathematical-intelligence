# 

Source: https://proofwiki.org/wiki/Hartogs%27_Lemma_(Set_Theory)/Proof_2


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $S$ be a set.

Then there exists an ordinal $\alpha$ such that there is no injection from $\alpha$ to $S$.


Proof
Let $W$ be the set of all well-orderings on subsets of $S$.
By the Counting Theorem, there exists a mapping $F: W \to \On$ defined by letting $\map F s$ be the ordinal which is isomorphic to $s$.


This article, or a section of it, needs explaining.In particular: "isomorphism" between ordinalsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By Mapping from Set to Class of All Ordinals is Bounded Above, $F \sqbrk W$ has an upper bound $\alpha_0$.
Then if $\alpha$ is any ordinal strictly greater than $\alpha_0$, then $\alpha \notin F \sqbrk W$.
Aiming for a contradiction, suppose there is an injection $g: \alpha \to S$.
Then by Injection to Image is Bijection, there is a bijection from $\alpha$ onto $g \sqbrk \alpha$.
But this induces a well-ordering on $g \sqbrk \alpha \subseteq S$ which is isomorphic to $\alpha$, contradicting the fact that $\alpha \notin F \sqbrk W$.
$\blacksquare$


Source of Name
This entry was named for Friedrich Moritz Hartogs.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.): Theorem $9.5.1$




