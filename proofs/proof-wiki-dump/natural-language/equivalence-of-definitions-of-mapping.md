# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Mapping



Theorem
The following definitions of the concept of Mapping are equivalent:

Definition 1
A mapping from $S$ to $T$ is a binary relation on $S \times T$ which associates each element of $S$ with exactly one element of $T$.

Definition 2
A mapping $f$ from $S$ to $T$, denoted $f: S \to T$, is a relation $f = \struct {S, T, G}$, where $G \subseteq S \times T$, such that:

$\forall x \in S: \forall y_1, y_2 \in T: \tuple {x, y_1} \in G \land \tuple {x, y_2} \in G \implies y_1 = y_2$
and

$\forall x \in S: \exists y \in T: \tuple {x, y} \in G$
Definition 3
A mapping $f$ from $S$ to $T$, denoted $f: S \to T$, is a relation $f = \struct {S, T, R}$, where $R \subseteq S \times T$, such that:

$\forall \tuple {x_1, y_1}, \tuple {x_2, y_2} \in f: y_1 \ne y_2 \implies x_1 \ne x_2$
and

$\forall x \in S: \exists y \in T: \tuple {x, y} \in R$
Definition 4
A mapping from $S$ to $T$ is a relation on $S \times T$ which is:

$(1): \quad$ Many-to-one
$(2): \quad$ Left-total, that is, defined for all elements in $S$.


Proof
In the following, let $f \subseteq S \times T$ be a relation on $S \times T$.


$(1)$ if and only if $(4)$
$f$ is by definition left-total if and only if:

$\forall s \in S: \exists t \in T: \tuple {s, t} \in f$
which means exactly the same thing as:

each element of $S$ is associated with with at least one element of $T$.

$f$ is by definition many-to-one if and only if:

$\forall x \in \Dom f: \tuple {x, y_1} \in f \land \tuple {x, y_2} \in f \implies y_1 = y_2$
which means exactly the same thing as:

each element of $S$ is associated with with at most one element of $T$.

Thus:

$f$ is left-total and many-to-one
if and only if:

each element of $S$ is associated by $f$ with with exactly one one element of $T$.

That is:

$f$ is a mapping by definition 1
if and only if:

$f$ is a mapping by definition 4.
$\Box$


$(2)$ if and only if $(4)$
$f$ is by definition left-total if and only if:

$\forall s \in S: \exists t \in T: \tuple {s, t} \in G$
and:
$f$ is by definition many-to-one if and only if:

$\forall x \in \Dom f: \forall y_1, y_2 \in \Cdm f: \tuple {x, y_1} \in f \land \tuple {x, y_2} \in f \implies y_1 = y_2$
which means exactly the same thing as:

$\forall x \in S: \forall y_1, y_2 \in T: \tuple {x, y_1} \in f \land \tuple {x, y_2} \in f \implies y_1 = y_2$

That is:

$f$ is a mapping by definition 2
if and only if:

$f$ is a mapping by definition 4.
$\Box$


$(2)$ if and only if $(3)$
Both definition 2 and definition 3 carry the stipulation that:

$\forall x \in S: \exists y \in T: \tuple {x, y} \in f$

Then we have that definition 2 carries the stipulation that

$\forall x \in S: \forall y_1, y_2 \in T: \tuple {x, y_1} \in f \land \tuple {x, y_2} \in f \implies y_1 = y_2$

By the Rule of Transposition, that means the same as:

$\forall x \in S: \forall y_1, y_2 \in T: \neg \paren {y_1 = y_2} \implies \neg \paren {\tuple {x, y_1} \in f \land \tuple {x, y_2} \in f}$
which in turn is the same as:

$\forall \tuple {x_1, y_1}, \tuple {x_2, y_2} \in f: y_1 \ne y_2 \implies x_1 \ne x_2$
which is the other stipulation of definition 3.

That is:

$f$ is a mapping by definition 2
if and only if:

$f$ is a mapping by definition 3.
$\blacksquare$





