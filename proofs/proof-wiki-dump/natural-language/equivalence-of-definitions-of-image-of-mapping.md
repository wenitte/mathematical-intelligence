# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Image_of_Mapping



Theorem
The following definitions of the concept of image of a mapping are equivalent:

Definition 1
The image of a mapping $f: S \to T$ is the set:

$\Img f = \set {t \in T: \exists s \in S: \map f s = t}$
That is, it is the set of values taken by $f$.

Definition 2
The image of a mapping $f: S \to T$ is the set:

$\Img f = f \sqbrk S$
where $f \sqbrk S$ is the image of $S$ under $f$.


Proof
Let $f: S \to T$ be a mapping.
Let:

$Y = \set {t \in T: \exists s \in S: \map f s = t}$
Then by definition:

$Y$ is the image of $f$ by definition 1.
But by definition of image of subset under mapping:

$Y = f \sqbrk S$
Thus $Y$ is the image of $f$ by definition 2.
Hence the result.
$\blacksquare$





