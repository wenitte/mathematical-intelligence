# 

Source: https://proofwiki.org/wiki/Image_of_Union_of_Nest_of_Mappings_is_Union_of_Class_of_Images

Theorem
Let $N$ be a nest of mappings.
Let $\bigcup N$ denote the union of $N$.
Then:

$\Img {\bigcup N} = \ds \bigcup_{f \mathop \in N} \Img f$
where $\Img f$ denotes the image of $f$.


Proof
From Union of Nest of Mappings is Mapping we have that $\bigcup N$ is a mapping.
Let $y \in \Img {\bigcup N}$.
Then by definition of mapping:

$\exists \tuple {x, y} \in \bigcup N$
Then by definition of union of class:

$\exists f \subseteq \bigcup N: \tuple {x, y} \in f$
Hence:

$\exists f \subseteq \bigcup N: y \in \Img f$
That is:

$y \in \ds \bigcup_{f \mathop \in N} \Img f$
That is:

$\Img {\bigcup N} \subseteq \ds \bigcup_{f \mathop \in N} \Img f$

Let $y \in \ds \bigcup_{f \mathop \in N} \Img f$.
Then:

$\exists f \subseteq \bigcup N: y \in \Img f$
Then by definition of mapping:

$\exists f \subseteq \bigcup N: \tuple {x, y} \in f$
Thus by definition of union of class:

$\exists \tuple {x, y} \in \bigcup N$
It follows that:

$y \in \Img {\bigcup N}$
That is:

$\ds \bigcup_{f \mathop \in N} \Img f \subseteq \Img {\bigcup N}$

Hence by definition of set equality:

$\Img {\bigcup N} = \ds \bigcup_{f \mathop \in N} \Img f$
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $6$: Order Isomorphism and Transfinite Recursion: $\S 1$ A few preliminaries: Proposition $1.4$




