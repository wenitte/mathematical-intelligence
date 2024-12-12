# 

Source: https://proofwiki.org/wiki/Fixed_Point_of_Progressing_Mapping_on_Minimally_Closed_Class_is_Greatest_Element/Proof

Theorem
Let $N$ be a class which is closed under a progressing mapping $g$.
Let $b$ be an element of $N$ such that $N$ is minimally closed under $g$ with respect to $b$.

$g$ has no fixed point, unless possibly the greatest element, if there is one.


Proof
Suppose $g$ has a fixed point.
Let $x$ be an element of $M$ such that $\map g x = x$.

We have from Smallest Element of Minimally Closed Class under Progressing Mapping that:

$b \subseteq x$
Suppose that $y \subseteq x$.
Then by Image of Proper Subset under Progressing Mapping on Minimally Closed Class:

$\map g y \subseteq \map g x$
But we have that $\map g x = x$.
Thus:

$\map g y \subseteq x$

So we have:

$b \subseteq x$
and:

$y \subseteq x \implies \map g y \subseteq x$
and the result follows by the Principle of General Induction for Minimally Closed Class.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 4$ A double induction principle and its applications: Exercise $4.1$




