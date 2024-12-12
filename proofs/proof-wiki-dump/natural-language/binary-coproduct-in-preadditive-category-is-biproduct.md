# 

Source: https://proofwiki.org/wiki/Binary_Coproduct_in_Preadditive_Category_is_Biproduct

Theorem
Let $A$ be a preadditive category.
Let $a_1, a_2$ be objects of $A$.
Let $(a_1 \sqcup a_2, i_1, i_2)$ be their binary coproduct, assuming it exists.
Let $p_1 : a_1 \sqcup a_2 \to a_1$ be the unique morphism with:

$p_1 \circ i_1 = 1 : a_1 \to a_1$
$p_1 \circ i_2 = 0 : a_1 \to a_2$
Let $p_2 : a_1 \sqcup a_2 \to a_2$ be the unique morphism with:

$p_2 \circ i_1 = 0 : a_2 \to a_1$
$p_2 \circ i_2 = 1 : a_2 \to a_2$
where $1$ is the identity morphism and $0$ is the zero morphism.

Then $(a_1 \sqcup a_2, i_1, i_2, p_1, p_2)$ is the binary biproduct of $a_1$ and $a_2$.


Proof
By definition of binary biproduct, it remains to verify that:

$i_1\circ p_1 + i_2 \circ p_2 = 1 : a_1 \sqcup a_2 \to a_1 \sqcup a_2$.
By definition of binary coproduct and identity morphism, $1 : a_1 \sqcup a_2 \to a_1 \sqcup a_2$ is the unique morphism with:

$1 \circ i_1 = i_1$
$1 \circ i_2 = i_2$
Thus it remains to verify that $i_1\circ p_1 + i_2 \circ p_2$ satisfies the same condition:














\(\ds (i_1\circ p_1 + i_2 \circ p_2) \circ i_1\)

\(=\)







\(\ds i_1 \circ (p_1 \circ i_1) + i_2 \circ (p_2 \circ i_1)\)




















\(\ds \)

\(=\)







\(\ds i_1 \circ 1 + i_2 \circ 0\)




















\(\ds \)

\(=\)







\(\ds i_1\)





Definition of Identity Morphism, Definition of Bilinear Mapping
















\(\ds (i_1\circ p_1 + i_2 \circ p_2) \circ i_2\)

\(=\)







\(\ds i_1 \circ (p_1 \circ i_2) + i_2 \circ (p_2 \circ i_2)\)




















\(\ds \)

\(=\)







\(\ds i_1 \circ 0 + i_2 \circ 1\)




















\(\ds \)

\(=\)







\(\ds i_2\)





Definition of Identity Morphism, Definition of Bilinear Mapping



$\blacksquare$


Also see
Binary Product in Preadditive Category is Biproduct




