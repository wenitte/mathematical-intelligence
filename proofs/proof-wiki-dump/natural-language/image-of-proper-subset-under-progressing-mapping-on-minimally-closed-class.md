# 

Source: https://proofwiki.org/wiki/Image_of_Proper_Subset_under_Progressing_Mapping_on_Minimally_Closed_Class

Theorem
Let $N$ be a class which is closed under a progressing mapping $g$.
Let $b$ be an element of $N$ such that $N$ is minimally closed under $g$ with respect to $b$.
Then:

$x \subset y \implies \map g x \subseteq y$


Proof
From Minimally Closed Class under Progressing Mapping induces Nest, we have that $N$ is a nest in which:

$\forall x, y \in N: \map g x \subseteq y \lor y \subseteq x$
Thus the corollary 1 of the Sandwich Principle applies directly.
$\blacksquare$





