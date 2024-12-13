# 

Source: https://proofwiki.org/wiki/Inversion_Mapping_Reverses_Ordering_in_Ordered_Group



Theorem
Let $\struct {G, \circ, \preccurlyeq}$ be an ordered group.
Let $x, y \in G$.
Let $\prec$ be the reflexive reduction of $\preceq$.

Then the following equivalences hold:










\(\ds \forall x, y \in G: \, \)



\(\ds x \preccurlyeq y\)

\(\iff\)







\(\ds e \prec y^{-1} \preccurlyeq x^{-1}\)
















\(\ds \forall x, y \in S: \, \)



\(\ds x \prec y\)

\(\iff\)







\(\ds y^{-1} \prec x^{-1}\)











Corollary









\(\ds \forall x \in G: \, \)



\(\ds x \preccurlyeq e\)

\(\iff\)







\(\ds e \preccurlyeq x^{-1}\)




















\(\ds e \preccurlyeq x\)

\(\iff\)







\(\ds x^{-1} \preccurlyeq e\)




















\(\ds x \prec e\)

\(\iff\)







\(\ds e \prec x^{-1}\)




















\(\ds e \prec x\)

\(\iff\)







\(\ds x^{-1} \prec e\)











Proof
By the definition of an ordered group, $\preceq$ is a relation compatible with $\circ$.
Thus by Inverses of Elements Related by Compatible Relation, we obtain the first result:

$x \preccurlyeq y \iff y^{-1} \preccurlyeq x^{-1}$

By Reflexive Reduction of Relation Compatible with Group Operation is Compatible, $\prec$ is also compatible with $\circ$.
Thus by again Inverses of Elements Related by Compatible Relation, we obtain the second result:

$x \prec y \iff y^{-1} \prec x^{-1}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Theorem $15.3$




