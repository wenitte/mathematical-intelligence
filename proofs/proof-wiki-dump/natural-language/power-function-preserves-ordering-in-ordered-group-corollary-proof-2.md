# 

Source: https://proofwiki.org/wiki/Power_Function_Preserves_Ordering_in_Ordered_Group/Corollary/Proof_2

Corollary to Power Function Preserves Ordering in Ordered Group
Let $\struct {G, \circ, \preccurlyeq}$ be an ordered group with identity $e$.
Let $\prec$ be the reflexive reduction of $\preccurlyeq$.
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
By the definition of an ordered group, $\preccurlyeq$ is a transitive relation compatible with $\circ$.
By Transitive Relation Compatible with Semigroup Operation Relates Powers of Related Elements:

$x \preccurlyeq e \implies x^n \preccurlyeq e^n$
$e \preccurlyeq x \implies e^n \preccurlyeq x^n$
By Identity Element is Idempotent, $e$ is idempotent with respect to $\circ$.
Thus we obtain the first two results:

$x \preccurlyeq e \implies x^n \preccurlyeq e$
$e \preccurlyeq x \implies e \preccurlyeq x^n$

By Reflexive Reduction of Relation Compatible with Group Operation is Compatible, $\prec$ is compatible with $\circ$.
By Reflexive Reduction of Transitive Antisymmetric Relation is Strict Ordering, $\prec$ is transitive.
Thus by the same method as above, we obtain the remaining results:

$x \prec e \implies x^n \prec e$
$e \prec x \implies e \prec x^n$
$\blacksquare$





