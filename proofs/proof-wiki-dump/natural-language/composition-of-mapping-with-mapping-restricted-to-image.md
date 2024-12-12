# 

Source: https://proofwiki.org/wiki/Composition_of_Mapping_with_Mapping_Restricted_to_Image


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $A, B, C$ be sets.
Let $f : A \to B, g: B \to C$ be mappings.
Let $g \circ f : A \to C$ denote the composite mapping of $f$ with $g$.

Let $f \sqbrk A$ denote the image of $A$ under $f$.

Let $f \restriction_{A \times f \sqbrk A} : A \to f \sqbrk A$ denote the restriction of $f$ to $A \times f \sqbrk A$.
Let $g \restriction_{f \sqbrk A} : f \sqbrk A \to C$ denote the restriction of $g$ to $f \sqbrk A$.
Let $g \restriction_{f \sqbrk A} \circ f \restriction_{A \mathop \times f \sqbrk A} \mathop : A \to C$ denote the composite mapping of $f \restriction_{A \times f \sqbrk A}$ with $g \restriction_{f \sqbrk A}$.

Then:

$g \restriction_{f \sqbrk A} \circ f \restriction_{A \mathop \times f \sqbrk A} \mathop = g \circ f$


Proof
From Restriction of Mapping is Mapping:

$f \restriction_{A \times f \sqbrk A} : A \to f \sqbrk A$ is a mapping
and

$g \restriction_{f \sqbrk A} : f \sqbrk A \to C$ is a mapping

By definition of composite mapping:

$g \restriction_{f \sqbrk A} \circ f \restriction_{A \mathop \times f \sqbrk A} \mathop : A \to C$  is a well-defined mapping

We have:










\(\ds \forall a \in A: \, \)



\(\ds \map {\paren{g \restriction_{f \sqbrk A} \circ f \restriction_{A \mathop \times f \sqbrk A} } } a\)

\(=\)







\(\ds \map {g \restriction_{f \sqbrk A} } {\map {f \restriction_{A \mathop \times f \sqbrk A} } a }\)





Definition of Composite Mapping














\(\ds \)

\(=\)







\(\ds \map g {\map {f \restriction_{A \mathop \times f \sqbrk A} } a }\)





Definition of Restriction of Mapping














\(\ds \)

\(=\)







\(\ds \map g {\map f a }\)





Definition of Restriction of Mapping














\(\ds \)

\(=\)







\(\ds \map {\paren{g \circ f} } a\)





Definition of Composite Mapping



From Equality of Mappings:

$g \restriction_{f \sqbrk A} \circ f \restriction_{A \mathop \times f \sqbrk A} \mathop = g \circ f$
$\blacksquare$





