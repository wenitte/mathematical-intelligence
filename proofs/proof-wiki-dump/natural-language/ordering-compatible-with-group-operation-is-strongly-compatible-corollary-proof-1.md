# 

Source: https://proofwiki.org/wiki/Ordering_Compatible_with_Group_Operation_is_Strongly_Compatible/Corollary/Proof_1

Theorem
Let $\struct {G, \circ, \preccurlyeq}$ be an ordered group with identity $e$.
Let $\prec$ be the reflexive reduction of $\preceq$.
Let $x, y \in G$.

Then the following equivalences hold:










\(\ds \forall x, y \in G: \, \)



\(\ds x \preccurlyeq y\)

\(\iff\)







\(\ds e \preccurlyeq y \circ x^{-1}\)




















\(\ds x \preccurlyeq y\)

\(\iff\)







\(\ds e \preccurlyeq x^{-1} \circ y\)




















\(\ds x \preccurlyeq y\)

\(\iff\)







\(\ds x \circ y^{-1} \preccurlyeq e\)




















\(\ds x \preccurlyeq y\)

\(\iff\)







\(\ds y^{-1} \circ x \preccurlyeq e\)




















\(\ds \forall x, y \in G: \, \)



\(\ds x \prec y\)

\(\iff\)







\(\ds e \prec y \circ x^{-1}\)




















\(\ds x \prec y\)

\(\iff\)







\(\ds e \prec x^{-1} \circ y\)




















\(\ds x \prec y\)

\(\iff\)







\(\ds x \circ y^{-1} \prec e\)




















\(\ds x \prec y\)

\(\iff\)







\(\ds y^{-1} \circ x \prec e\)











Proof
By the definition of an ordered group, $\preccurlyeq$ is a relation compatible with $\circ$.
Thus by Relation Compatible with Group Operation is Strongly Compatible: Corollary, we obtain the first four results.

By Reflexive Reduction of Relation Compatible with Group Operation is Compatible, $\prec$ is compatible with $\circ$.
Again by Relation Compatible with Group Operation is Strongly Compatible: Corollary, we obtain the remaining results.
$\blacksquare$





