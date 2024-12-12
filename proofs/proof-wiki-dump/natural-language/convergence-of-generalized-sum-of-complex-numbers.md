# 

Source: https://proofwiki.org/wiki/Convergence_of_Generalized_Sum_of_Complex_Numbers



Theorem
Let $\family {z_j}_{j \mathop \in I}$ be an $I$-indexed family of complex numbers.
That is, let $z_j \in \C$ for all $j \in I$.

Let $\map \Re {z_j}$ and $\map \Im {z_j}$ denote the families of real and imaginary parts of the family $z_j$.

Then the following are equivalent:

$(1): \quad \ds \sum_{j \mathop \in I} z_j$ converges to $z \in \C$
$(2): \quad \ds \sum_{j \mathop \in I} \map \Re {z_j}, \sum_{j \mathop \in I} \map \Im {z_j}$ converge to $\map \Re z, \map \Im z \in \R$, respectively


Corollary
Suppose that $\ds \sum_{j \mathop \in I} z_j$ converges to $z \in \C$.

Then $\ds \sum_{j \mathop \in I} \overline {z_j}$ converges to $\overline z$, where $\overline z$ denotes the complex conjugate of $z$.


Proof
$(2)$ implies $(1)$
By Generalized Sum is Linear, the stated convergences lead to:














\(\ds z\)

\(=\)







\(\ds \map \Re z + i \map \Im z\)





Definition of Real Part and Definition of Imaginary Part














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop \in I} \map \Re {z_j} + i \sum_{j \mathop \in I} \map \Im {z_j}\)





Statement $(2)$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop \in I} \paren {\map \Re {z_j} + i \map \Im {z_j} }\)





Generalized Sum is Linear














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop \in I} z_j\)





Definition of Real Part and Definition of Imaginary Part



$\Box$


$(1)$ implies $(2)$
Statement $(1)$, according to the definition of convergence, amounts to the following:
For every $\epsilon > 0$, there exists a finite $G \subseteq I$ such that:

For every finite $F \subseteq I$ with $G \subseteq F$:
$\ds \cmod {z - \sum_{j \mathop \in F} z_j} < \epsilon$

Now suppose that for $\epsilon > 0$, $G$ and $F$ are as above. Then observe that:














\(\ds \epsilon^2\)

\(>\)







\(\ds \cmod {z - \sum_{j \mathop \in F} z_j}^2\)




















\(\ds \)

\(=\)







\(\ds \paren {\map \Re z - \sum_{j \mathop \in F} \map \Re {z_j} }^2 + \paren {\map \Im z - \sum_{j \mathop \in F} \map \Im {z_j} }^2\)





Definition of Modulus of Complex Number



Hence, by Square of Real Number is Non-Negative, both of the terms on the right hand side are smaller than $\epsilon^2$.
It follows that, taking square roots, $G$ satisfies, for any finite $F \supseteq G$:

$\ds \size {\map \Re z - \sum_{j \mathop \in F} \map \Re {z_j} } < \epsilon$
$\ds \size {\map \Im z - \sum_{j \mathop \in F} \map \Im {z_j} } < \epsilon$

As $\epsilon > 0$ was arbitrary, using the definition of convergence, this implies precisely that:

$\ds \sum_{j \mathop \in I} \map \Re {z_j}, \sum_{j \mathop \in I} \map \Im {z_j}$ converge to $\map \Re z, \map \Im z \in \R$, respectively.
Hence, $(1)$ is shown to imply $(2)$.
$\blacksquare$


Also see
Generalized Sum is Linear, of which this is a partial converse.




