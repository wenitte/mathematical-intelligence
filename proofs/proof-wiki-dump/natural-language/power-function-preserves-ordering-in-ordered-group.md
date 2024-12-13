# 

Source: https://proofwiki.org/wiki/Power_Function_Preserves_Ordering_in_Ordered_Group



Theorem
Let $\struct {S, \circ, \preccurlyeq}$ be an ordered group.
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


Corollary









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











Proof 1
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


Proof 2
An ordered group is an ordered structure which is also a group.
Hence an ordered group is a fortiori an ordered semigroup.

From Power Function Preserves Ordering in Ordered Semigroup:

$\forall x, y \in S: x \preccurlyeq y \implies x^n \preccurlyeq y^n$

From the Cancellation Laws, every element of a group is cancellable.
Hence from Power Function with Cancellable Element Preserves Strict Ordering in Ordered Semigroup:

$\forall x, y \in S: x \prec y \implies x^n \prec y^n$
$\blacksquare$





