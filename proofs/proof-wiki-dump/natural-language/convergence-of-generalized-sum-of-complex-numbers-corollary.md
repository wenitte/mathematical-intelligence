# 

Source: https://proofwiki.org/wiki/Convergence_of_Generalized_Sum_of_Complex_Numbers/Corollary

Corollary to Convergence of Generalized Sum of Complex Numbers
Let $\family {z_j}_{j \mathop \in I}$ be an $I$-indexed family of complex numbers.
That is, let $z_j \in \C$ for all $j \in I$.

Suppose that $\ds \sum_{j \mathop \in I} z_j$ converges to $z \in \C$.

Then $\ds \sum_{j \mathop \in I} \overline {z_j}$ converges to $\overline z$, where $\overline z$ denotes the complex conjugate of $z$.
Here, the $\sum$ denote generalized sums.


Proof
Using Convergence of Generalized Sum of Complex Numbers, one has:

$\ds \sum_{j \mathop \in I} \map \Re {z_j} = \map \Re z$
$\ds \sum_{j \mathop \in I} \map \Im {z_j} = \map \Im z$

Now, observe that, from the definition of complex conjugate:














\(\ds \overline z\)

\(=\)







\(\ds \map \Re z - i \map \Im z\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop \in I} \map \Re {z_j} - i \sum_{j \mathop \in I} \map \Im {z_j}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop \in I} \paren {\map \Re {z_j} - i \map \Im {z_j} }\)





Generalized Sum is Linear














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop \in I} \overline {z_j}\)









$\blacksquare$





