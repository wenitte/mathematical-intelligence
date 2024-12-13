# 

Source: https://proofwiki.org/wiki/Invertibility_of_Identity_Transformation_Plus_Product_of_Two_Continuous_Linear_Transformations

Theorem
Let $\struct {X, \norm{, \cdot ,} }$ be the normed vector space.
Let $I : X \to X$ be the identity mapping.
Let $\map {CL} X := \map {CL} {X, X}$ be the continuous linear transformation space on $X$.
Suppose $I + A \circ B$ is invertible, where $\circ$ denotes the composition of mappings.

Then $I + B \circ A$ is invertible, with the inverse given by:

$\paren {I + B \circ A}^{-1} = I - B \circ \paren {I + A \circ B}^{-1} \circ A$


Proof













\(\ds \paren {I + B \circ A} \circ \paren {I - B \circ \paren {I + A \circ B}^{-1} \circ A}\)

\(=\)







\(\ds I - B \circ \paren {I + A \circ B}^{-1} \circ A + B \circ A - B \circ A \circ B \circ \paren {I + A \circ B}^{-1} \circ A\)




















\(\ds \)

\(=\)







\(\ds I - B \circ \paren {I + A \circ B}^{-1} \circ A + B \circ A - B \circ \paren {I + A \circ B - I} \circ \paren {I + A \circ B}^{-1} \circ A\)




















\(\ds \)

\(=\)







\(\ds I - B \circ \paren {I + A \circ B}^{-1} \circ A + B \circ A - B \circ \paren {I + A \circ B} \circ \paren {I + A \circ B}^{-1} \circ A + B \circ \paren {I + A \circ B}^{-1} \circ A\)




















\(\ds \)

\(=\)







\(\ds I + B \circ A - B \circ A\)




















\(\ds \)

\(=\)







\(\ds I\)






















\(\ds \paren {I - B \circ \paren {I + A \circ B}^{-1} \circ A} \circ \paren {I + B \circ A}\)

\(=\)







\(\ds I + B \circ A - B \circ \paren {I + A \circ B}^{-1} \circ A - B \circ \paren {I + A \circ B}^{-1} \circ A \circ B \circ A\)




















\(\ds \)

\(=\)







\(\ds I + B \circ A - B \circ \paren {I + A \circ B}^{-1} \circ A - B \circ \paren {I + A \circ B}^{-1} \circ \paren{I + A \circ B - I} \circ A\)




















\(\ds \)

\(=\)







\(\ds I + B \circ A - B \circ \paren {I + A \circ B}^{-1} \circ A - B \circ \paren {I + A \circ B}^{-1} \circ \paren{I + A \circ B} \circ A +  B \circ \paren {I + A \circ B}^{-1} \circ A\)




















\(\ds \)

\(=\)







\(\ds I + B \circ A - B \circ A\)




















\(\ds \)

\(=\)







\(\ds I\)









$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.4$: Composition of continuous linear transformations




