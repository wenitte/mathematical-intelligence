# 

Source: https://proofwiki.org/wiki/Binary_Product_in_Preadditive_Category_is_Biproduct

Theorem
Let $A$ be a preadditive category.
Let $a_1, a_2$ be objects of $A$.
Let $(a_1 \times a_2, p_1, p_2)$ be their binary product, assuming it exists.
Let $i_1 : a_1 \to a_1 \times a_2$ be the unique morphism with:

$p_1 \circ i_1 = 1 : a_1 \to a_1$
$p_2 \circ i_1 = 0 : a_1 \to a_2$
Let $i_2 : a_1 \to a_1 \times a_2$ be the unique morphism with:

$p_1 \circ i_2 = 0 : a_2 \to a_1$
$p_2 \circ i_2 = 1 : a_2 \to a_2$
where $1$ is the identity morphism and $0$ is the zero morphism.

Then $(a_1 \times a_2, i_1, i_2, p_1, p_2)$ is the binary biproduct of $a_1$ and $a_2$.


Proof
By definition of binary biproduct, it remains to verify that:

$i_1\circ p_1 + i_2 \circ p_2 = 1 : a_1 \times a_2 \to a_1 \times a_2$.
By definition of binary product and identity morphism, $1 : a_1 \times a_2 \to a_1 \times a_2$ is the unique morphism with:

$p_1 \circ 1 = p_1$
$p_2 \circ 1 = p_2$
Thus it remains to verify that $i_1\circ p_1 + i_2 \circ p_2$ satisfies the same condition:














\(\ds p_1 \circ (i_1\circ p_1 + i_2 \circ p_2)\)

\(=\)







\(\ds (p_1 \circ i_1) \circ p_1 + (p_1 \circ i_2) \circ p_2\)




















\(\ds \)

\(=\)







\(\ds 1 \circ p_1 + 0 \circ p_2\)




















\(\ds \)

\(=\)







\(\ds p_1\)





Definition of Identity Morphism, Definition of Bilinear Mapping
















\(\ds p_2 \circ (i_1\circ p_1 + i_2 \circ p_2)\)

\(=\)







\(\ds (p_2 \circ i_1) \circ p_1 + (p_2 \circ i_2) \circ p_2\)




















\(\ds \)

\(=\)







\(\ds 0 \circ p_1 + 1 \circ p_2\)




















\(\ds \)

\(=\)







\(\ds p_2\)





Definition of Identity Morphism, Definition of Bilinear Mapping



$\blacksquare$


Also see
Binary Coproduct in Preadditive Category is Biproduct




