# 

Source: https://proofwiki.org/wiki/Cancellability_by_Cayley_Table



Theorem
Let $\struct {S, \circ}$ be a finite algebraic structure.
Let $\TT$ be the Cayley table for $\left({S, \circ}\right)$.

Let $a \in S$ be an element of $S$.
Then $a$ is cancellable for $\circ$ if and only if:

$(1): \quad$ no element of $S$ is repeated in $\TT$ in the row headed by $a$
and:

$(2): \quad$ no element of $S$ is repeated in $\TT$ in the column headed by $a$.


Proof
Necessary Condition
Let $a \in S$ be cancellable for $\circ$.
Suppose there exists $x \in S$ which appears twice in a row in $\TT$ headed by $a$.
Thus by definition of the structure of a Cayley table:

$\exists y_1, y_2 \in S: a \circ y_1 = x = a \circ y_2$
such that $y_1 \ne y_2$.
That contradicts the stipulation that $a$ is cancellable for $\circ$.
So no element of $S$ is repeated in $\TT$ in the row headed by $a$.

Similarly, suppose there exists $x \in S$ which appears twice in a column in $\TT$ headed by $a$.
Thus by definition of the structure of a Cayley table:

$\exists y_1, y_2 \in S: y_1 \circ a = x = y_2 \circ a$
such that $y_1 \ne y_2$.
That contradicts the stipulation that $a$ is cancellable for $\circ$.
So no element of $S$ is repeated in $\TT$ in the column headed by $a$.
$\Box$


Sufficient Condition
Let $a$ be such that:

$(1): \quad$ no element of $S$ is repeated in $\TT$ in the row headed by $a$
and:

$(2): \quad$ no element of $S$ is repeated in $\TT$ in the column headed by $a$.
Thus from $(1)$:

$\forall y_1, y_2 \in S: y_1 \ne y_2 \implies a \circ y_1 \ne a \circ y_2$
So by the Rule of Transposition:

$\forall y_1, y_2 \in S: a \circ y_1 = a \circ y_2 \implies y_1 = y_2$

Also from $(2)$:

$\forall y_1, y_2 \in S: y_1 \ne y_2 \implies y_1 \circ a \ne y_2 \circ a$
So by the Rule of Transposition:

$\forall y_1, y_2 \in S: y_1 \circ a = y_2 \circ a \implies y_1 = y_2$

Thus it follows that $a$ is cancellable for $\circ$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups




