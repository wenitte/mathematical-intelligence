# 

Source: https://proofwiki.org/wiki/Power_Function_Preserves_Ordering_in_Ordered_Group/Proof_1

Theorem
Let $n \in \N_{>0}$ be a strictly positive integer.
Let $\prec$ be the reflexive reduction of $\preccurlyeq$.

Then the following hold:










\(\ds \forall x, y \in S: \, \)



\(\ds x \preccurlyeq y\)

\(\implies\)







\(\ds x^n \preccurlyeq y^n\)
















\(\ds \forall x, y \in S: \, \)



\(\ds x \prec y\)

\(\implies\)







\(\ds x^n \prec y^n\)









where $x^n$ denotes the $n$th power of $x$.


Proof
By definition of ordered group:

$\preccurlyeq$ is compatible with $\circ$.
By definition of ordering:

$\preccurlyeq$ is transitive.
From Reflexive Reduction of Relation Compatible with Group Operation is Compatible:

$\prec$ is also compatible with $\circ$.
From Reflexive Reduction of Transitive Antisymmetric Relation is Strict Ordering:

$\prec$ is also transitive.
By definition of ordered group:

$\struct {S, \circ}$ is a  ordered group, and therefore a fortiori a semigroup.
The result follows from Transitive Relation Compatible with Semigroup Operation Relates Powers of Related Elements.
$\blacksquare$





