# 

Source: https://proofwiki.org/wiki/Natural_Numbers_are_Comparable/Strong_Result/Proof_1

Theorem
Let $\N$ be the natural numbers.
Let $m, n \in \N$.
Then either:

$(1): \quad m + 1 \le n$
or:

$(2): \quad n \le m$


Proof
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





