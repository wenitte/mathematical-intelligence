# 

Source: https://proofwiki.org/wiki/Power_Function_Preserves_Ordering_in_Ordered_Group/Corollary/Proof_1

Corollary to Power Function Preserves Ordering in Ordered Group
Let $\struct {G, \circ, \preccurlyeq}$ be an ordered group with identity $e$.
Let $\prec$ be the reflexive reduction of $\preceq$.
Let $x \in G$.
Let $n \in \N_{>0}$ be a strictly positive integer.

Then the following hold:










\(\ds \forall x \in S: \, \)



\(\ds x \preccurlyeq e\)

\(\implies\)







\(\ds x^n \preccurlyeq e\)




















\(\ds e \preccurlyeq x\)

\(\implies\)







\(\ds e \preccurlyeq x^n\)




















\(\ds x \prec e\)

\(\implies\)







\(\ds x^n \prec e\)




















\(\ds e \prec x\)

\(\implies\)







\(\ds e \prec x^n\)











Proof
By Power Function Preserves Ordering in Ordered Group:










\(\ds \forall x \in S: \, \)



\(\ds x \preccurlyeq e\)

\(\implies\)







\(\ds x^n \preccurlyeq e^n\)




















\(\ds e \preccurlyeq x\)

\(\implies\)







\(\ds e^n \preccurlyeq x^n\)




















\(\ds x \prec e\)

\(\implies\)







\(\ds x^n \prec e^n\)




















\(\ds e \prec x\)

\(\implies\)







\(\ds e^n \prec x^n\)










By Identity Element is Idempotent, $e$ is idempotent with respect to $\circ$.
Therefore by the definition of an idempotent element, $e^n = e$.
Thus the theorem holds.
$\blacksquare$





