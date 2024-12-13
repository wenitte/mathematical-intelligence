# 

Source: https://proofwiki.org/wiki/Product_with_Inverse_on_Homomorphic_Image_is_Group_Homomorphism



Theorem
Let $G$ be a group.
Let $H$ be an abelian group.
Let $\theta: G \to H$ be a (group) homomorphism.

Let $\phi: G \times G \to H$ be the mapping defined as:

$\forall \tuple {g_1, g_2} \in G \times G: \map \phi {g_1, g_2} = \map \theta {g_1} \map \theta {g_2}^{-1}$

Then $\phi$ is a homomorphism.


Proof
First note that from Group Homomorphism Preserves Inverses:

$\map \theta {g_2}^{-1} = \paren {\map \theta {g_2} }^{-1} = \map \theta { {g_2}^{-1} }$
and so $\map \theta {g_1} \map \theta {g_2}^{-1}$ is not ambiguous:

$\map \theta {g_1} \map \theta {g_2}^{-1} = \map \theta {g_1} \paren {\map \theta {g_2} }^{-1} = \map \theta {g_1} \map \theta { {g_2}^{-1} }$

From External Direct Product of Groups is Group, $G \times G$ is a group.

Let $a_1, a_2, b_1, b_2 \in G$.
We have:














\(\ds \map \phi {a_1 b_1, a_2 b_2}\)

\(=\)







\(\ds \map \theta {a_1 b_1} \map \theta {a_2 b_2}^{-1}\)




















\(\ds \)

\(=\)







\(\ds \map \theta {a_1 b_1} \paren {\map \theta {a_2 b_2} }^{-1}\)





Group Homomorphism Preserves Inverses














\(\ds \)

\(=\)







\(\ds \map \theta {a_1} \map \theta {b_1} \paren {\map \theta {a_2} \map \theta {b_2} }^{-1}\)





Definition of Group Homomorphism














\(\ds \)

\(=\)







\(\ds \map \theta {a_1} \map \theta {b_1} \paren {\map \theta {b_2}^{-1} } \paren {\map \theta {a_2}^{-1} }\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds \map \theta {a_1} \paren {\map \theta {a_2}^{-1} } \map \theta {b_1} \paren {\map \theta {b_2}^{-1} }\)





Definition of Abelian Group: $H$ is Abelian














\(\ds \)

\(=\)







\(\ds \map \phi {a_1, a_2} \map \phi {b_1, b_2}\)





Definition of $\phi$



Hence the result by definition of homomorphism.
$\blacksquare$


Examples
Mapping from Dihedral Group $D_3$ to Parity Group
Let $D_3$ denote the symmetry group of the equilateral triangle:














\(\ds e\)

\(:\)







\(\ds (A) (B) (C)\)





Identity mapping














\(\ds p\)

\(:\)







\(\ds (ABC)\)





Rotation of $120 \degrees$ anticlockwise about center














\(\ds q\)

\(:\)







\(\ds (ACB)\)





Rotation of $120 \degrees$ clockwise about center














\(\ds r\)

\(:\)







\(\ds (BC)\)





Reflection in line $r$














\(\ds s\)

\(:\)







\(\ds (AC)\)





Reflection in line $s$














\(\ds t\)

\(:\)







\(\ds (AB)\)





Reflection in line $t$







Let $G$ denote the parity group, defined as:

$\struct {\set {1, -1}, \times}$
where $\times$ denotes conventional multiplication.

Let $\theta: D_3 \to G$ be the homomorphism defined as:

$\forall x \in D_3: \map \theta x = \begin{cases} 1 & : \text{$x$ is a rotation} \\ -1 & : \text{$x$ is a reflection} \end{cases}$
Let $\phi: D_3 \times D_3 \to G$ be the mapping defined as:

$\forall \tuple {g_1, g_2} \in D_3 \times D_3: \map \phi {g_1, g_2} = \map \theta {g_1} \map \theta {g_2}^{-1}$

Then the kernel $\map \ker \phi$ is the set of all pairs $\tuple {g_1, g_2}$ of elements of $D_3$ such that:

$g_1$ and $g_2$ are both rotations
$g_1$ and $g_2$ are both reflections.


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Exercise $3$




