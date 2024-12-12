# 

Source: https://proofwiki.org/wiki/Fixed_Point_of_Progressing_Mapping_on_Minimally_Inductive_Class_is_Greatest_Element

Theorem
Let $M$ be a class which is minimally inductive under a progressing mapping $g$.
Let $x$ be a fixed point of $g$.

Then $x$ is the greatest element of $M$.


Proof 1
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


Proof 2
A minimally inductive class under $g$ is the same thing as a minimally closed class under $g$ with respect to $\O$.
The result then follows by a direct application of Fixed Point of Progressing Mapping on Minimally Closed Class is Greatest Element.
$\blacksquare$





