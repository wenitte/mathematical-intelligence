# 

Source: https://proofwiki.org/wiki/Inversion_Mapping_Reverses_Ordering_in_Ordered_Group/Corollary

Theorem
Let $\struct {G, \circ, \preccurlyeq}$ be an ordered group with identity $e$.
Let $x \in G$.

Then the following equivalences hold:










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











Proof 1
By Inversion Mapping Reverses Ordering in Ordered Group:










\(\ds \forall x \in G: \, \)



\(\ds x \preccurlyeq e\)

\(\iff\)







\(\ds e^{-1} \preccurlyeq x^{-1}\)




















\(\ds e \preccurlyeq x\)

\(\iff\)







\(\ds x^{-1} \preccurlyeq e^{-1}\)




















\(\ds x \prec e\)

\(\iff\)







\(\ds e^{-1} \prec x^{-1}\)




















\(\ds e \prec x\)

\(\iff\)







\(\ds x^{-1} \prec e^{-1}\)









Since $e^{-1} = e$, the theorem holds.
$\blacksquare$


Proof 2
By the definition of an ordered group, $\preccurlyeq$ is a relation compatible with $\circ$.
Thus by Inverses of Elements Related by Compatible Relation: Corollary:










\(\ds \forall x \in G: \, \)



\(\ds x \preccurlyeq e\)

\(\iff\)







\(\ds e \preccurlyeq x^{-1}\)




















\(\ds e \preccurlyeq x\)

\(\iff\)







\(\ds x^{-1} \preccurlyeq e\)









By Reflexive Reduction of Relation Compatible with Group Operation is Compatible, $\prec$ is also compatible with $\circ$.
Thus again by Inverses of Elements Related by Compatible Relation: Corollary:










\(\ds \forall x \in G: \, \)



\(\ds x \prec e\)

\(\iff\)







\(\ds e \prec x^{-1}\)




















\(\ds e \prec x\)

\(\iff\)







\(\ds x^{-1} \prec e\)









$\blacksquare$





