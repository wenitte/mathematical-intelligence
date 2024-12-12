# 

Source: https://proofwiki.org/wiki/Dual_Category_is_Category

Theorem
Let $\mathbf C$ be a metacategory.
Let $\mathbf C^{\text{op} }$ be its dual category.

Then $\mathbf C^{\text{op} }$ is also a metacategory.


Proof
Let us verify the axioms $(C1)$ up to $(C3)$ for a metacategory.

Let $f^{\text{op} }: C^{\text{op} } \to D^{\text{op} }$ and $g^{\text{op} }: D^{\text{op} } \to E^{\text{op} }$ be morphisms in $\mathbf C^{\text{op} }$.
Then $f: D \to C$ and $g: E \to D$ are morphisms in $\mathbf C$, and so is $f \circ g: E \to C$.
Therefore, also $g^{\text{op} } \circ f^{\text{op} }: C^{\text{op} } \to E^{\text{op} }$ is a morphism in $\mathbf C^{\text{op} }$, and $(C1)$ is shown to hold.

For $(C2)$, observe that for $f^{\text{op} }: C^{\text{op} } \to D^{\text{op} }$, we have:














\(\ds f^{\text{op} } \circ \operatorname{id}_{C^{\text{op} } }\)

\(=\)







\(\ds f^{\text{op} } \circ \operatorname{id}_C^{\text{op} }\)





Definition of $\operatorname{id}_{C^{\text{op} } }$














\(\ds \)

\(=\)







\(\ds \paren {\operatorname{id}_C \circ f}^{\text{op} }\)





Definition of Composition of Morphisms














\(\ds \)

\(=\)







\(\ds f^{\text{op} }\)





Since $\mathbf C$ is a metacategory



Similarly:














\(\ds \operatorname{id}_{D^{\text{op} } } \circ f^{\text{op} }\)

\(=\)







\(\ds \operatorname{id}_D^{\text{op} } \circ f^{\text{op} }\)





Definition of $\operatorname{id}_{D^{\text{op} } }$














\(\ds \)

\(=\)







\(\ds \paren {f \circ \operatorname{id}_D}^{\text{op} }\)





Definition of Composition of Morphisms














\(\ds \)

\(=\)







\(\ds f^{\text{op} }\)





Since $\mathbf C$ is a metacategory



Hence $(C2)$ is shown to hold.

To show $(C3)$, reason as follows:














\(\ds \paren {f^{\text{op} } \circ g^{\text{op} } } \circ h^{\text{op} }\)

\(=\)







\(\ds \paren {g \circ f}^{\text{op} } \circ h^{\text{op} }\)





Definition of Composition of Morphisms














\(\ds \)

\(=\)







\(\ds \paren {h \circ \paren {g \circ f} }^{\text{op} }\)





Definition of Composition of Morphisms














\(\ds \)

\(=\)







\(\ds \paren {\paren {h \circ g} \circ f}^{\text{op} }\)





Since $\mathbf C$ is a metacategory














\(\ds \)

\(=\)







\(\ds f^{\text{op} } \circ \paren {h \circ g}^{\text{op} }\)




















\(\ds \)

\(=\)







\(\ds f^{\text{op} } \circ \paren {g^{\text{op} } \circ h^{\text{op} } }\)










Hence $\mathbf C^{\text{op} }$ is a metacategory.
$\blacksquare$





