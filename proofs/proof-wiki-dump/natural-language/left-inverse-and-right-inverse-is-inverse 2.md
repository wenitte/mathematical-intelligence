# 

Source: https://proofwiki.org/wiki/Left_Inverse_and_Right_Inverse_is_Inverse

Theorem
Let $\struct {S, \circ}$ be a monoid with identity element $e_S$.
Let $x \in S$ such that $x$ has both a left inverse and a right inverse. That is:

$\exists x_L \in S: x_L \circ x = e_S$
$\exists x_R \in S: x \circ x_R = e_S$

Then $x_L = x_R$, that is, $x$ has an inverse.
Furthermore, that element is the only inverse (both right and left) for $x$


Proof
We note that as $\struct {S, \circ}$ is a monoid, $\circ$ is associative by definition.














\(\ds x_L\)

\(=\)







\(\ds x_L \circ e_S\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds x_L \circ \paren {x \circ x_R}\)





Definition of Right Inverse Element














\(\ds \)

\(=\)







\(\ds \paren {x_L \circ x} \circ x_R\)





Definition of Associative Operation














\(\ds \)

\(=\)







\(\ds e_S \circ x_R\)





Definition of Left Inverse Element














\(\ds \)

\(=\)







\(\ds x_R\)





Definition of Identity Element



Its uniqueness comes from Inverse in Monoid is Unique.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses: Exercise $4.9 \ \text{(a)}$




