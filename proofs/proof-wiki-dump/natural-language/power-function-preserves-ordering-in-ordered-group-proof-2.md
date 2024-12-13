# 

Source: https://proofwiki.org/wiki/Power_Function_Preserves_Ordering_in_Ordered_Group/Proof_2

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
An ordered group is an ordered structure which is also a group.
Hence an ordered group is a fortiori an ordered semigroup.

From Power Function Preserves Ordering in Ordered Semigroup:

$\forall x, y \in S: x \preccurlyeq y \implies x^n \preccurlyeq y^n$

From the Cancellation Laws, every element of a group is cancellable.
Hence from Power Function with Cancellable Element Preserves Strict Ordering in Ordered Semigroup:

$\forall x, y \in S: x \prec y \implies x^n \prec y^n$
$\blacksquare$





