# 

Source: https://proofwiki.org/wiki/Fixed_Point_of_Progressing_Mapping_on_Minimally_Inductive_Class_is_Greatest_Element/Proof_1

Theorem
Let $M$ be a class which is minimally inductive under a progressing mapping $g$.
Let $x$ be a fixed point of $g$.

Then $x$ is the greatest element of $M$.


Proof
Let $x$ be an element of $M$ such that $\map g x = x$.
From Empty Set is Subset of All Sets, we have that:

$\O \subseteq x$

Suppose that $y \subseteq x$.
Then by Characteristics of Minimally Inductive Class under Progressing Mapping:

$\map g y \subseteq \map g x$
But we have that $\map g x = x$.
Thus:

$\map g y \subseteq x$
That is:

$\O \subseteq x$
and:

$y \subseteq x \implies \map g y \subseteq x$
and the result follows by the Principle of General Induction.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 4$ A double induction principle and its applications: Theorem $4.14$




