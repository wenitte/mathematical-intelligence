# 

Source: https://proofwiki.org/wiki/Ordering_Compatible_with_Group_Operation_is_Strongly_Compatible/Corollary



Corollary to Ordering Compatible with Group Operation is Strongly Compatible
Let $\struct {G, \circ, \preccurlyeq}$ be an ordered group with identity $e$.
Let $\prec$ be the reflexive reduction of $\preccurlyeq$.

The following hold:











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











Proof 1
By the definition of an ordered group, $\preccurlyeq$ is a relation compatible with $\circ$.
Thus by Relation Compatible with Group Operation is Strongly Compatible: Corollary, we obtain the first four results.

By Reflexive Reduction of Relation Compatible with Group Operation is Compatible, $\prec$ is compatible with $\circ$.
Again by Relation Compatible with Group Operation is Strongly Compatible: Corollary, we obtain the remaining results.
$\blacksquare$


Proof 2
Each result follows from Ordering Compatible with Group Operation is Strongly Compatible.
For example, by Ordering Compatible with Group Operation is Strongly Compatible:

$x \preccurlyeq y \iff x \circ x^{-1} \preccurlyeq y \circ x^{-1}$
Since $x \circ x^{-1} = e$:

$x \preccurlyeq y \iff e \preccurlyeq y \circ x^{-1}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Theorem $15.3$




