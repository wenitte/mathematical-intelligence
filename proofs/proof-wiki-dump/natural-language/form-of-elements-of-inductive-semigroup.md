# 

Source: https://proofwiki.org/wiki/Form_of_Elements_of_Inductive_Semigroup

Theorem
Let $\struct {S, \circ}$ be an inductive semigroup.
Then the elements of $S$ are of the form:

$\alpha \circ \beta \circ \beta \circ \cdots \circ \beta$


Proof
Recall the definition of inductive semigroup:
Let $\struct {S, \circ}$ be a semigroup.
Let there exist $\alpha, \beta \in S$ such that the only subset of $S$ containing both $\alpha$ and $x \circ \beta$ whenever it contains $x$ is $S$ itself.
That is:

$\exists \alpha, \beta \in S: \forall A \subseteq S: \paren {\alpha \in A \land \paren {\forall x \in A: x \circ \beta \in A} } \implies A = S$

Then $\struct {S, \circ}$ is an inductive semigroup.

It follows from the definition that all elements of the form:

$\alpha \circ \beta \circ \beta \circ \cdots \circ \beta$
are indeed elements of $S$.

Aiming for a contradiction, suppose $x \in S$ is not of the above form.
Let $A \subseteq S$ be such that $\alpha, x \in A$.
Then $A$ contains elements of the form:

$x, x \circ \beta, x \circ \beta \circ \beta, \ldots$
Now let $B \subseteq S$ be such that $\alpha \in B$ but $x \notin B$.
Then $B$ is of the form:

$\exists \alpha, \beta \in S: \paren {\alpha \in B \land \paren {\forall x \in B: x \circ \beta \in B} }$
but because $x \in S$ while $x \notin B$ it follows that:

$B \ne S$
and so $S$ is not inductive.
From this contradiction it follows that all elements of $S$ are of the form:

$\alpha \circ \beta \circ \beta \circ \cdots \circ \beta$
$\blacksquare$





