# 

Source: https://proofwiki.org/wiki/Natural_Numbers_are_Comparable/Strong_Result



Theorem
Let $\N$ be the natural numbers.
Let $m, n \in \N$.
Then either:

$(1): \quad m + 1 \le n$
or:

$(2): \quad n \le m$


Proof 1
Let $\N$ be defined as the von Neumann construction $\omega$.
By definition of the ordering on von Neumann construction:

$m \le n \iff m \subseteq n$
From Von Neumann Construction of Natural Numbers is Minimally Inductive, $\omega$ is minimally inductive class under the successor mapping.
Then from Minimally Inductive Class under Progressing Mapping induces Nest, $\omega$ is a nest in which:

$\forall m, n \in \omega: \map g x \subseteq y \lor y \subseteq x$
From the definition of $\map g x$ in this context:

$\forall x \in \omega: \map g x = x^+$
That is:

$\forall m, n \in \N: m + 1 \subseteq n \lor n \subseteq m$
whence the result.
$\blacksquare$


Proof 2

This theorem requires a proof.In particular: Proof using Minimally Inductive Class under Slowly Progressing Mapping is Nest by exploiting Successor Mapping is Slowly Progressing.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 5$ Applications to natural numbers: Theorem $5.2$




