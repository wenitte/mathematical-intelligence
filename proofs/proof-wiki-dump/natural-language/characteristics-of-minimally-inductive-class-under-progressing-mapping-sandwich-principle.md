# 

Source: https://proofwiki.org/wiki/Characteristics_of_Minimally_Inductive_Class_under_Progressing_Mapping/Sandwich_Principle

Theorem
Let $M$ be a class which is minimally inductive under a progressing mapping $g$.
Then for all $x, y \in M$:

$x \subseteq y \subseteq \map g x \implies x = y \lor y = \map g x$


Proof 1
From Minimally Inductive Class under Progressing Mapping induces Nest, we have that $M$ is a nest in which:

$\forall x, y \in M: \map g x \subseteq y \lor y \subseteq x$
Thus the Sandwich Principle applies directly.
$\blacksquare$


Proof 2
By definition of minimally inductive class, $M$ is minimally closed under $g$ with respect to $\O$.
The result is then seen to be a direct application of Sandwich Principle for Minimally Closed Class.
$\blacksquare$





