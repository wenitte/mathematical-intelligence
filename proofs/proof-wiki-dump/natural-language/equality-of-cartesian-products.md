# 

Source: https://proofwiki.org/wiki/Equality_of_Cartesian_Products

Theorem
Let $A, B, C, D$ be nonempty sets.

Then:

$A \times B = C \times D \iff A = C \land B = D$
where $\times$ denotes cartesian product.


Proof
If $A = C$ and $B = D$, it is immediate that $A \times B = C \times D$.

Now suppose that $A \times B = C \times D$.
By definition of Cartesian product:














\(\ds x \in A, y \in B\)

\(\leadstoandfrom\)







\(\ds \tuple {x, y} \in A \times B\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds \tuple {x, y} \in C \times D\)





Definition of Set Equality














\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in C, y \in D\)









It follows that $x \in A$ if and only if $x \in C$, and so $A = C$.
Similarly, $y \in B$ if and only if $y \in D$, hence $B = D$.

The result follows.
$\blacksquare$


Also see
Cartesian Product is not Associative




