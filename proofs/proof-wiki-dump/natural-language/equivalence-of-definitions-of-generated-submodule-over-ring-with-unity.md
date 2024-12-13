# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Generated_Submodule_over_Ring_with_Unity



Theorem
Let $R$ be a ring with unity..
Let $\struct {M, +, \circ}_R$ be a unitary $R$-module.
Let $S\subset M$ be a subset.

The following definitions of the concept of Generated Submodule are equivalent:

Definition for $R$-module
The submodule generated by $S$ is the intersection of all submodules of $M$ containing $S$.

Definition for unitary $R$-module
Let $R$ be a ring with unity.
Let $M$ be a unitary $R$-module.

The submodule generated by $S$ is the set of all linear combinations of elements of $S$.


Proof
Let:

$\ds H_1 := \bigcap \set { M' \subseteq M : S \subseteq M', \textrm {$M'$ is a submodule of $M$} }$
be the intersection defined in first definition.
From Intersection of Submodules is Submodule:General Result, it follows that $H_1$ is a submodule of $M$.
Let:

$\ds H_2 := \set { \sum_{i \mathop = 1}^n \lambda_i \circ x_i: n \in \N_{\ge 1}, \lambda_i \in R, x_i \in S}$
be the set defined in second definition.
To show equivalence of the definitions, we prove that $H_1 = H_2$.


$H_2$ is a subset of $H_1$
Let $\ds \sum_{i \mathop = 1}^n \lambda_i \circ x_i \in H_2$, where $\lambda_i \in R, x_i \in S$ for all $i \in \set {1, \ldots, n}$.
Let $M'$ be a submodule of $M$ such that $S \subseteq M'$.
It follows that $x_1 ,\ldots, x_n \in M'$.
As an $R$-module is an $R$-algebraic structure , it follows that $M'$ is closed for addition $+$, and closed for scalar product $\circ$.
As $M'$ is closed for scalar product, it follows that $\lambda_i \circ x_i \in M'$ for all $i \in \set {1, \ldots, n}$.
As $M'$ is closed for addition , it follows that $\ds \sum_{i \mathop = 1}^n \lambda_i \circ x_i \in M'$.
Hence, $H_2 \subseteq M'$.
By definition of intersection, it follows that $H_2 \subseteq H_1$.
$\Box$


$H_1$ is a subset of $H_2$
Let $x \in S$.
Then $1_R \circ x = x$, where $1_R$ is the unity of the ring $R$.
As $1_R \circ x$ is a linear combination, it follows that $x \in H_2$.
Hence, $S \subseteq H_2$.
Let:

$\ds \sum_{i \mathop = 1}^n \lambda_i \circ x_i, \sum_{i \mathop = 1}^m \mu_i \circ y_i \in H_2$
where $m, n \in \N_{\ge 1}$, $\lambda_1, \ldots, \lambda_n, \mu_1, \ldots, \mu_m \in R$, and $x_1, \ldots, x_n, y_1, \ldots, y_m \in S$.
From definition of linear combination, it follows that the sum:

$\ds \sum_{i \mathop = 1}^n \lambda_i \circ x_i + \sum_{i \mathop = 1}^m \mu_i \circ y_i $
is a linear combination of the set $\set {x_1, \ldots, x_n, y_1, \ldots, y_m}$.
It follows that $H_2$ is closed for addition.
Let $\lambda \in R$.
From Ring Axiom $\text D$: Distributivity of Product over Addition, it follows that:

$\ds \lambda \circ \paren{\sum_{i \mathop = 1}^n \lambda_i \circ x_i} = \sum_{i \mathop = 1}^n \paren{ \lambda \circ \lambda_i } \circ x_i $
which is a linear combination of elements of $S$.
It follows that $H_2$ is closed for scalar product.
From the Submodule Test, it follows that $H_2$ is a submodule of $M$.
It follows that $H_2$ is one of the submodules in the intersection that defines:

$\ds H_1 := \bigcap \set { M' \subseteq M : S \subseteq M', \textrm {$M'$ is a submodule of $M$} }$

From Intersection is Subset:Family of Sets, it follows that $H_1 \subseteq H_2$.
$\blacksquare$




