# 

Source: https://proofwiki.org/wiki/Characteristics_of_Minimally_Inductive_Class_under_Progressing_Mapping/Mapping_Preserves_Subsets

Theorem
Let $M$ be a class which is minimally inductive under a progressing mapping $g$.
Then for all $x, y \in M$:

$x \subseteq y \implies \map g x \subseteq \map g y$


Proof
From Minimally Inductive Class under Progressing Mapping induces Nest, we have that $M$ is a nest in which:

$\forall x, y \in M: \map g x \subseteq y \lor y \subseteq x$
Thus corollary $2$ of the Sandwich Principle applies directly.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 4$ A double induction principle and its applications: Theorem $4.10 \ (3)$




