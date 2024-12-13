# 

Source: https://proofwiki.org/wiki/Definition:Image_of_Class_under_Mapping/Warning

Image of Class under Mapping: Warning
Let $V$ be a basic universe
Let $f: V \to V$ be a mapping.
Let $A$ be a class.
Let $x \in A$ be a set of sets
Then:

$f \sqbrk x$ is not necessarily the same as $\map f x$
where:

$f \sqbrk x$ denotes the image of $x$ under $f$ where $x$ is treated as a class
$\map f x$ denotes the image of $x$ under $f$ where $x$ is treated as an element of the class $A$.
Thus:

$\map f x$ is what you get by applying $f$ to $x$
$f \sqbrk x$ is what you get by applying $f$ to each of the elements of $x$ (but not $x$ itself) and then gathering the results into a set.


Proof
Consider the mapping $f$ defined on the class of all ordinals $\On$ as:

$\forall \alpha \in \On: \map f \alpha = 5 \times \alpha$
where $\times$ denotes ordinal multiplication.
Consider the ordinal $4$
We have that:

$\map f 4 = 20$
but:

$f \sqbrk 4 = \set {5 \times \beta: \beta \in 4}$
From the von Neumann construction of natural numbers:

$4 = \set {0, 1, 2, 3}$
and so:

$f \sqbrk 4 = \set {0, 5, 10, 15}$
As can be seen, they are not the same thing at all.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $6$: Order Isomorphism and Transfinite Recursion: $\S 1$ A few preliminaries




