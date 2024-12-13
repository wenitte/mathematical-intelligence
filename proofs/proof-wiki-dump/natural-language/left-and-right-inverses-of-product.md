# 

Source: https://proofwiki.org/wiki/Left_and_Right_Inverses_of_Product

Theorem
Let $\struct {S, \circ}$ be a monoid whose identity is $e_S$.
Let $x, y \in S$.
Let:

$(1): \quad x \circ y$ have a left inverse for $\circ$
$(2): \quad y \circ x$ have a right inverse for $\circ$.
Then both $x$ and $y$ are invertible for $\circ$.


Proof
Let $z_L$ be the left inverse of $x \circ y$ and $z_R$ be the right inverse of $y \circ x$. Then:














\(\ds z_L \circ \paren {x \circ y}\)

\(=\)







\(\ds e_S\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds \paren {z_L \circ x} \circ y\)

\(=\)







\(\ds e_S\)





Associativity of $\circ$


















\(\ds \paren {y \circ x} \circ z_R\)

\(=\)







\(\ds e_S\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds y \circ \paren {x \circ z_R}\)

\(=\)







\(\ds e_S\)





Associativity of $\circ$




Thus $y$ has both a left inverse $z_L \circ x$ and a right inverse $x \circ z_R$.

From Left Inverse and Right Inverse is Inverse:

$z_L \circ x = x \circ z_R$
and $y$ has an inverse, that is, is invertible.
$\Box$

From the above, we have:














\(\ds \paren {z_L \circ x} \circ y\)

\(=\)







\(\ds e_S\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ z_R} \circ y\)

\(=\)







\(\ds e_S\)





Left Inverse and Right Inverse is Inverse








\(\ds \leadsto \ \ \)





\(\ds x \circ \paren {z_R \circ y}\)

\(=\)







\(\ds e_S\)





Associativity of $\circ$




and:














\(\ds y \circ \paren {x \circ z_R}\)

\(=\)







\(\ds e_S\)














\(\ds \leadsto \ \ \)





\(\ds y \circ \paren {z_L \circ x}\)

\(=\)







\(\ds e_S\)





Left Inverse and Right Inverse is Inverse








\(\ds \leadsto \ \ \)





\(\ds \paren {y \circ z_L} \circ x\)

\(=\)







\(\ds e_S\)





Associativity of $\circ$




Thus $x$ has both a left inverse $y \circ z_L$ and a right inverse $z_R \circ y$.

From Left Inverse and Right Inverse is Inverse:

$y \circ z_L = z_R \circ y$
and $x$ has an inverse, that is, is invertible.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses: Exercise $4.9 \ \text{(b)}$




