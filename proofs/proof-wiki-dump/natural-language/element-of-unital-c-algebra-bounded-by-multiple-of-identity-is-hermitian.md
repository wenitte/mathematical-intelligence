# 

Source: https://proofwiki.org/wiki/Element_of_Unital_C*-Algebra_Bounded_by_Multiple_of_Identity_is_Hermitian

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $a \in A$.
Let $\le_A$ be the canonical preordering of $A$.
Suppose that either:

$a \le_A \beta {\mathbf 1}_A$ for some $\alpha \in \R$
or:

$\alpha {\mathbf 1}_A \le_A a$ for some $\alpha \in \R$

Then $a$ is Hermitian.


Proof
Suppose first that:

$a \le_A \beta {\mathbf 1}_A$ for some $\alpha \in \R$
Then $\beta {\mathbf 1}_A - a$ is positive.
In particular, $\beta {\mathbf 1}_A - a$ is Hermitian.
That is:

$\paren {\beta {\mathbf 1}_A - a}^\ast = \overline \beta {\mathbf 1}_A - a^\ast = \beta {\mathbf 1}_A - a$
from the definition of an involution and Identity Element in Unital *-Algebra is Hermitian.
So $a = a^\ast$.
So $a$ is Hermitian in this case.

Now suppose that:

$\alpha {\mathbf 1}_A \le_A a$ for some $\alpha \in \R$
Then $a - \alpha {\mathbf 1}_A$ is positive.
In particular, $a - \alpha {\mathbf 1}_A$ is  Hermitian..
That is:

$\paren {a - \alpha {\mathbf 1}_A}^\ast = a^\ast - \overline \alpha {\mathbf 1}_A$
from the definition of an involution and Identity Element in Unital *-Algebra is Hermitian.
So $a = a^\ast$.
So $a$ is Hermitian in this case also.
$\blacksquare$





