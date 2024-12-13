# 

Source: https://proofwiki.org/wiki/Product_with_Inverse_on_Homomorphic_Image_is_Group_Homomorphism/Examples/Mapping_from_D3_to_Parity_Group

Examples of Use of Product with Inverse on Homomorphic Image is Group Homomorphism
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


Proof













\(\ds \map \ker \phi\)

\(=\)







\(\ds \set {\tuple {g_1, g_2} \in D_3 \times D_3: \map \phi {g_1, g_2} = 1}\)





Definition of Kernel of Group Homomorphism: $1$ is the identity of $G$














\(\ds \)

\(=\)







\(\ds \set {\tuple {g_1, g_2} \in D_3 \times D_3: \map \theta {g_1} \map \theta {g_2}^{-1} = 1}\)




















\(\ds \)

\(=\)







\(\ds \set {\tuple {g_1, g_2} \in D_3 \times D_3: \map \theta {g_1} \map \theta {g_2} = 1}\)





as all elements of $G$ are self-inverse














\(\ds \)

\(=\)







\(\ds \set {\tuple {g_1, g_2} \in D_3 \times D_3: \map \theta {g_1} = \map \theta {g_2} }\)





Definition of Parity Group




Thus $\map \ker \phi$ is the set of all pairs $\tuple {g_1, g_2}$ of elements of $D_3$ such that:

$g_1$ and $g_2$ are both rotations
$g_1$ and $g_2$ are both reflections.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Exercise $3$




