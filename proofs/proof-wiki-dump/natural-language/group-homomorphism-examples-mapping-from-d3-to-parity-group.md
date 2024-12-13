# 

Source: https://proofwiki.org/wiki/Group_Homomorphism/Examples/Mapping_from_D3_to_Parity_Group

Examples of Group Homomorphisms
Let $D_3$ denote the symmetry group of the equilateral triangle:














\(\ds e\)

\(:\)







\(\ds \paren A \paren B \paren C\)





Identity mapping














\(\ds p\)

\(:\)







\(\ds \paren {ABC}\)





Rotation of $120 \degrees$ anticlockwise about center














\(\ds q\)

\(:\)







\(\ds \paren {ACB}\)





Rotation of $120 \degrees$ clockwise about center














\(\ds r\)

\(:\)







\(\ds \paren {BC}\)





Reflection in line $r$














\(\ds s\)

\(:\)







\(\ds \paren {AC}\)





Reflection in line $s$














\(\ds t\)

\(:\)







\(\ds \paren {AB}\)





Reflection in line $t$







Let $G$ denote the parity group, defined as:

$\struct {\set {1, -1}, \times}$
where $\times$ denotes conventional multiplication.

Let $\theta: D_3 \to G$ be the mapping defined as:

$\forall x \in D_3: \map \theta x = \begin{cases} 1 & : \text{$x$ is a rotation} \\ -1 & : \text{$x$ is a reflection} \end{cases}$

Then $\theta$ is a (group) homomorphism, where:














\(\ds \map \ker \theta\)

\(=\)







\(\ds \set {e, p, q}\)




















\(\ds \Img \theta\)

\(=\)







\(\ds G\)











Proof
Let $x, y \in D_3$.
Let $P$ denote the subset of $D_3$ consisting of the rotations:

$P := \set {e, p, q}$
Let $R$ denote the subset of $D_3$ consisting of the reflections:

$R := \set {r, s, t}$
It is noted that $e$ is classified as a rotation of zero angle.

The Cayley table for $D_3$ is:

$\begin{array}{c|ccc|ccc}
\circ & e & p & q & r & s & t \\
\hline
e & e & p & q & r & s & t \\
p & p & q & e & s & t & r \\
q & q & e & p & t & r & s \\
\hline
r & r & t & s & e & q & p \\
s & s & r & t & p & e & q \\
t & t & s & r & q & p & e \\
\end{array}$

Direct reference to this Cayley table gives us:










\(\ds \forall x, y \in P: \, \)



\(\ds x \circ y\)

\(\in\)







\(\ds P\)
















\(\ds \forall x, y \in R: \, \)



\(\ds x \circ y\)

\(\in\)







\(\ds P\)
















\(\ds \forall x \in P, y \in R: \, \)



\(\ds x \circ y\)

\(\in\)







\(\ds R\)
















\(\ds \forall x \in R, y \in P: \, \)



\(\ds x \circ y\)

\(\in\)







\(\ds R\)










Thus we have:










\(\ds \forall x, y \in P: \, \)



\(\ds \map \phi x \times \map \phi y\)

\(=\)







\(\ds 1 \times 1\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds \map \phi {x \circ y}\)




















\(\ds \forall x, y \in R: \, \)



\(\ds \map \phi x \times \map \phi y\)

\(=\)







\(\ds \paren {-1} \times \paren {-1}\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds \map \phi {x \circ y}\)




















\(\ds \forall x \in P, y \in R: \, \)



\(\ds \map \phi x \times \map \phi y\)

\(=\)







\(\ds 1 \times \paren {-1}\)




















\(\ds \)

\(=\)







\(\ds -1\)




















\(\ds \)

\(=\)







\(\ds \map \phi {x \circ y}\)




















\(\ds \forall x \in R, y \in P: \, \)



\(\ds \map \phi x \times \map \phi y\)

\(=\)







\(\ds \paren {-1} \times 1\)




















\(\ds \)

\(=\)







\(\ds -1\)




















\(\ds \)

\(=\)







\(\ds \map \phi {x \circ y}\)










By definition, $\map \ker \phi$ is the set of all elements of $D_3$ which map to $1$.
Hence by definition:

$\map \ker \phi = \set {e, p, q}$

Also by definition, $\Img \phi$ is the set of all elements of $G$ which are mappped to by $\phi$.
Hence by definition:

$\Img \phi = \set {1, -1}$

Hence the result.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Exercise $2$




