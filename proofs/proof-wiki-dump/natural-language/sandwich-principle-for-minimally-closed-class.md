# 

Source: https://proofwiki.org/wiki/Sandwich_Principle_for_Minimally_Closed_Class

Theorem
Let $N$ be a class which is closed under a progressing mapping $g$.
Let $b$ be an element of $N$ such that $N$ is minimally closed under $g$ with respect to $b$.
Then for all $x, y \in N$:

$x \subseteq y \subseteq \map g x \implies x = y \lor y = \map g x$


Proof
From Minimally Closed Class under Progressing Mapping induces Nest, we have that $N$ is a nest in which:

$\forall x, y \in N: \map g x \subseteq y \lor y \subseteq x$
Thus the Sandwich Principle applies directly.
$\blacksquare$





