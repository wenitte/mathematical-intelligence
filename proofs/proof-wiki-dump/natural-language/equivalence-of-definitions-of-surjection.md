# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Surjection



Theorem
The following definitions of the concept of Surjection are equivalent:

Definition 1
$f: S \to T$ is a surjection if and only if:

$\forall y \in T: \exists x \in \Dom f: \map f x = y$
That is, if and only if $f$ is right-total.

Definition 2
$f: S \to T$ is a surjection if and only if:

$f \sqbrk S = T$
or, in the language and notation of direct image mappings:

$\map {f^\to} S = T$

That is, $f$ is a surjection if and only if its image equals its codomain:

$\Img f = \Cdm f$


Proof
Definition 1 implies Definition 2
Let $f$ be a mapping which fulfills the condition:

$\forall y \in T: \exists x \in \Dom f: \map f x = y$
From Image is Subset of Codomain:

$\Img f \subseteq T$
It remains to be proved that:

$T \subseteq \Img f$

Thus:














\(\ds y\)

\(\in\)







\(\ds T\)














\(\ds \leadsto \ \ \)

\(\ds \exists x \in \Dom f: \, \)



\(\ds \map f x\)

\(=\)







\(\ds y\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds \Img f\)





Definition of Image of Mapping








\(\ds \leadsto \ \ \)





\(\ds T\)

\(\subseteq\)







\(\ds \Img f\)





Definition of Subset




Thus by definition of set equality:

$\Img f = T$
and by definition of image of mapping:

$f \sqbrk S = T$

Hence $f$ is a surjection by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $f$ be a mapping which fulfills the condition:

$f \sqbrk S = T$
that is:

$\Img f = T$
Then by definition of set equality:

$T \subseteq \Img f$
Hence:














\(\ds y\)

\(\in\)







\(\ds T\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds \Img f\)









So by the definition of the image of $f$:

$\exists x \in \Dom f: \map f x = y$
Hence $f$ is a surjection by definition 1.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 8$: Functions
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.10$: Functions: Remark $10.8 \ \text{(f)}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 21$: The image of a subset of the domain; surjections
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.5$: Identity, One-one, and Onto Functions: Proposition $\text{A}.5.1: 2 \ \text{(b, c)}$




