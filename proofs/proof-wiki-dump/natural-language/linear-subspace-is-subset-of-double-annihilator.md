# 

Source: https://proofwiki.org/wiki/Linear_Subspace_is_Subset_of_Double_Annihilator

Theorem
Let $X$ be a Banach space. 
Let $X^\ast$ be the normed dual space of $X$. 
Let $N$ be a linear subspace of $X^\ast$. 

Then:

$N \subseteq \paren { {}^\bot N}^\bot$
where:

${}^\bot N$ denotes the annihilator of $N \subseteq X^\ast$
$\paren { {}^\bot N}^\bot$ denotes the annihilator of ${}^\bot N \subseteq X$.



This article is complete as far as it goes, but it could do with expansion.In particular: A "Notation" page to explain the notational idiosyncrasyYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Proof
From Set Complement inverts Subsets, we can equivalently show:

$X^\ast \setminus \paren { {}^\bot N}^\bot \subseteq X^\ast \setminus N$
Let $f \in X^\ast \setminus \paren { {}^\bot N}^\bot$, then:

$\map f x \ne 0$ for some $x \in {}^\bot N$.
By the definition of the annihilator of a subspace of $X$, we have: 

$\map g x = 0$ for all $g \in N$.
In particular, $g \in X^\ast \setminus N$.
So we obtain:

$X^\ast \setminus \paren { {}^\bot N}^\bot \subseteq X^\ast \setminus N$
and hence:

$N \subseteq \paren { {}^\bot N}^\bot$
from Set Complement inverts Subsets.
$\blacksquare$





