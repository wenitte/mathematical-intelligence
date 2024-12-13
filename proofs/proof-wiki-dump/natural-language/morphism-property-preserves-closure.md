# 

Source: https://proofwiki.org/wiki/Morphism_Property_Preserves_Closure

Theorem
Let $\phi: \struct {S, \circ_1, \circ_2, \ldots, \circ_n} \to \struct {T, *_1, *_2, \ldots, *_n}$ be a mapping from one algebraic structure $\struct {S, \circ_1, \circ_2, \ldots, \circ_n}$ to another $\struct {T, *_1, *_2, \ldots, *_n}$.
Let $\circ_k$ have the morphism property under $\phi$ for some operation $\circ_k$ in $\struct {S, \circ_1, \circ_2, \ldots, \circ_n}$.

Then the following properties hold:

If $S' \subseteq S$ is closed under $\circ_k$, then $\phi \sqbrk {S'}$ is closed under $*_k$
If $T' \subseteq T$ is closed under $*_k$, then $\phi^{-1} \sqbrk {T'}$ is closed under $\circ_k$
where $\phi \sqbrk {S'}$ denotes the image of $S'$.


Proof
Suppose that $\circ_k$ has the morphism property under $\phi$.


This theorem requires a proof.In particular: It remains to be shown that the Theorem is true where S is the empty set The empty case seems considered, doesn't it?Please feel free to take this debate to the talk page. I also have no idea why we need explicitly to consider the empty set. Suspect AI.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Suppose that $S' \subseteq S$ is closed under $\circ_k$.
Thus, for non-empty $S'$:

$s_1, s_2 \in S' \implies s_1 \circ_k s_2 \in S'$

Similarly, suppose that  $T' \subseteq T$ is closed under $*_k$.
Thus, non-empty $T'$:

$t_1, t_2 \in T' \implies t_1 *_k t_2 \in T'$

First we prove that $\phi \sqbrk {S'}$ is closed under $*_k$:














\(\ds t_1, t_2\)

\(\in\)







\(\ds \phi \sqbrk {S'}\)














\(\ds \leadsto \ \ \)

\(\ds \exists s_1 \in S': \, \)



\(\ds t_1\)

\(=\)







\(\ds \map \phi {s_1}\)





Definition of Image of Subset under Mapping








\(\ds \land \ \ \)

\(\ds \exists s_2 \in S': \, \)



\(\ds t_2\)

\(=\)







\(\ds \map \phi {s_2}\)














\(\ds \leadsto \ \ \)





\(\ds t_1 *_k t_2\)

\(=\)







\(\ds \map \phi {s_1} *_k \map \phi {s_2}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {s_1 \circ_k s_2}\)





Definition of Morphism Property








\(\ds \leadsto \ \ \)





\(\ds t_1 *_k t_2\)

\(\in\)







\(\ds \phi \sqbrk {S'}\)





$S'$ is closed under $\circ$




Then we prove that $\phi^{-1} \sqbrk {T'}$ is closed under $\circ_k$:














\(\ds s_1, s_2\)

\(\in\)







\(\ds \phi^{-1} \sqbrk {T'}\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi {s_1}, \map \phi {s_2}\)

\(\in\)







\(\ds T'\)





Definition of Inverse Mapping














\(\ds \map \phi {s_1} *_k \map \phi {s_2}\)

\(\in\)







\(\ds T'\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi {s_1 \circ_k s_2}\)

\(\in\)







\(\ds T'\)





Definition of Morphism Property








\(\ds \leadsto \ \ \)





\(\ds s_1 \circ_k s_2\)

\(\in\)







\(\ds \phi^{-1} \sqbrk {T'}\)





Definition of Inverse Mapping



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Theorem $12.1$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.2$




