# 

Source: https://proofwiki.org/wiki/Ordering_Compatible_with_Group_Operation_is_Strongly_Compatible



Theorem
Let $\struct {G, \circ, \preccurlyeq}$ be an ordered group whose identity element is $e$.
Let $\prec$ be the reflexive reduction of $\preccurlyeq$.

The following hold:










\(\ds \forall x, y, z \in G: \, \)



\(\ds x \preccurlyeq y\)

\(\iff\)







\(\ds x \circ z \preccurlyeq y \circ z\)




















\(\ds x \preccurlyeq y\)

\(\iff\)







\(\ds z \circ x \preccurlyeq z \circ y\)




















\(\ds x \prec y\)

\(\iff\)







\(\ds x \circ z \prec y \circ z\)




















\(\ds x \preceq y\)

\(\iff\)







\(\ds z \circ x \prec z \circ y\)











Corollary









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
By definition of ordered group, $\preccurlyeq$ is a relation compatible with $\circ$.
Thus by Relation Compatible with Group Operation is Strongly Compatible:














\(\ds x \preccurlyeq y\)

\(\iff\)







\(\ds x \circ z \preccurlyeq y \circ z\)




















\(\ds x \preccurlyeq y\)

\(\iff\)







\(\ds z \circ x \preccurlyeq z \circ y\)









By Reflexive Reduction of Relation Compatible with Group Operation is Compatible, $\prec$ is compatible with $\circ$.

Thus again by Relation Compatible with Group Operation is Strongly Compatible:














\(\ds x \prec y\)

\(\iff\)







\(\ds x \circ z \prec y \circ z\)




















\(\ds x \preceq y\)

\(\iff\)







\(\ds z \circ x \prec z \circ y\)









Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Theorem $15.3$




