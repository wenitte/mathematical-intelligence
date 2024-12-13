# 

Source: https://proofwiki.org/wiki/Quotient_Mapping_of_Inverse_Completion

Theorem
Let $\struct {T, \circ'}$ be an inverse completion of a commutative semigroup $\struct {S, \circ}$, where $C$ is the set of cancellable elements of $S$.
Let $f: S \times C: T$ be the mapping defined as:

$\forall x \in S, y \in C: \map f {x, y} = x \circ' y^{-1}$
Let $\RR_f$ be the equivalence relation induced by $f$.

Then:

$\tuple {x_1, y_1} \mathrel {\RR_f} \tuple {x_2, y_2} \iff x_1 \circ y_2 = x_2 \circ y_1$


Proof
By the definition of $\RR_f$:

$\tuple {x_1, y_1} \mathrel {\RR_f} \tuple {x_2, y_2} \iff x_1 \circ' y_1^{-1} = x_2 \circ' y_2^{-1}$

Now:














\(\ds x_1 \circ' y_1^{-1}\)

\(=\)







\(\ds x_2 \circ' y_2^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds x_1 \circ' y_1^{-1} \circ' y_1 \circ' y_2\)

\(=\)







\(\ds x_2 \circ' y_2^{-1} \circ' y_1 \circ' y_2\)





Elements $y_1$ and $y_2$ are cancellable








\(\ds \leadsto \ \ \)





\(\ds x_1 \circ' y_2\)

\(=\)







\(\ds x_2 \circ' y_1\)





Definition of Inverse Element, and commutativity of $\circ'$








\(\ds \leadsto \ \ \)





\(\ds x_1 \circ y_2\)

\(=\)







\(\ds x_2 \circ y_1\)





$\circ'$ extends $\circ$




which leads us to:

$\tuple {x_1, y_1} \mathrel {\RR_f} \tuple {x_2, y_2} \iff x_1 \circ y_2 = x_2 \circ y_1$
$\blacksquare$





