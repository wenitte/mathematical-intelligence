# 

Source: https://proofwiki.org/wiki/Boolean_Algebra_as_Boolean_Lattice



Theorem
Let $\struct {S, \vee, \wedge, \neg}$ be a Boolean algebra.
Let $\preceq$ be the ordering on $S$ defined as:

$a \preceq b \iff a \vee b = b$
for all $a, b \in S$.

Then $\struct {S, \vee, \wedge, \preceq}$ is a Boolean lattice.


Proof
Recall definition $2$ of Boolean Lattice:
An ordered structure $\struct {S, \vee, \wedge, \preceq}$ is a Boolean lattice if and only if:
$(1): \quad \struct {S, \vee, \wedge}$ is a Boolean algebra
$(2): \quad$ For all $a, b \in S$: $a \wedge b \preceq a \vee b$

Recall the definition of Ordered Structure:
An ordered structure $\struct {S, \circ, \preceq}$ is an algebraic system such that:

$(1): \quad \struct {S, \circ}$ is an algebraic structure
$(2): \quad \struct {S, \preceq}$ is an ordered set
$(3): \quad \preceq$ is compatible with $\circ$.

Hence it suffices to show that:

$(1): \quad \preceq$ is in fact an ordering
$(2): \quad \preceq$ is compatible with $\vee$ and $\wedge$
$(3): \quad$ For all $a, b \in S: a \wedge b \preceq a \vee b$


$(1)$: Ordering of $\preceq$
By Operations of Boolean Algebra are Idempotent:

$a \vee a = a$
for all $a \in S$.
Therefore, $\forall a \in S: a \preceq a$.
Thus, $\preceq$ is reflexive.
$\Box$

Let $a, b, c \in S$ be arbitrary, and suppose $a \preceq b$ and $b \preceq c$.
By definition, that is:

$\paren 1 \quad a \vee b = b$
$\paren 2 \quad b \vee c = c$
By substitution of $\paren 1$ into $\paren 2$ we have:

$\paren {a \vee b} \vee c = c$
By Operations of Boolean Algebra are Associative:

$a \vee \paren {b \vee c} = c$
By substitution of $\paren 2$:

$a \vee c = c$
Therefore, $a \preceq c$ by definition.
Since $a, b, c \in S$ were arbitrary, it follows that $\preceq$ is transitive.
$\Box$

Let $a, b \in S$ be arbitrary, and suppose $a \preceq b$ and $b \preceq a$.
By definition, that is:

$a \vee b = b$
$b \vee a = a$
By Boolean Algebra Axiom $(\text {BA}_1 1)$: Commutativity, it follows that $a \vee b = b \vee a$.
It immediately follows that $a = b$ from the assumptions.
Since $a, b \in S$ were arbitrary, it follows that $\preceq$ is antisymmetric.
$\Box$

From the above, $\preceq$ is an ordering by definition.
$\Box$


$(2.1)$: Compatibility of $\preceq$ with $\wedge$
By Boolean Algebra Axiom $(\text {BA}_1 1)$: Commutativity, it suffices to show that, for any $a, b, c \in S$:

$a \preceq b \implies \paren {c \wedge a} \preceq \paren {c \wedge b}$
Let $a, b, c \in S$ be arbitrary, and suppose $a \preceq b$.
By definition of $\preceq$:

$a \vee b = b$
Then:














\(\ds \paren {c \wedge a} \vee \paren {c \wedge b}\)

\(=\)







\(\ds c \wedge \paren {a \vee b}\)





Boolean Algebra Axiom $(\text {BA}_1 2)$: Distributivity














\(\ds \)

\(=\)







\(\ds c \wedge b\)





by hypothesis



But, by definition of $\preceq$:

$\paren {c \wedge a} \preceq \paren {c \wedge b}$
Since $a, b, c \in S$ were arbitrary, it follows that $\preceq$ is compatible with $\wedge$.
$\Box$


$(2.2)$: Compatibility of $\preceq$ with $\vee$
By Boolean Algebra Axiom $(\text {BA}_1 1)$: Commutativity, it suffices to show that, for any $a, b, c \in S$:

$a \preceq b \implies \paren {c \vee a} \preceq \paren {c \vee b}$
Let $a, b, c \in S$ be arbitrary, and suppose $a \preceq b$.
By definition of $\preceq$:

$a \vee b = b$
Then:














\(\ds \paren {c \vee a} \vee \paren {c \vee b}\)

\(=\)







\(\ds \paren {c \vee c} \vee {a \vee b}\)





Boolean Algebra Axiom $(\text {BA}_1 1)$: Commutativity, as well as Operations of Boolean Algebra are Associative














\(\ds \)

\(=\)







\(\ds c \vee b\)





Operations of Boolean Algebra are Idempotent, as well as by hypothesis



Therefore, $c \vee a \preceq c \vee b$.
Since $a, b, c \in S$ were arbitrary, it follows that $\preceq$ is compatible with $\vee$.
$\Box$


$(3)$: Ordering of $\wedge$ and $\vee$
Let $a, b \in S$ be arbitrary.
Then:














\(\ds \paren {a \wedge b} \vee \paren {a \vee b}\)

\(=\)







\(\ds \paren {a \vee \paren {a \vee b} } \wedge \paren {b \vee \paren {a \vee b} }\)





Boolean Algebra Axiom $(\text {BA}_1 2)$: Distributivity














\(\ds \)

\(=\)







\(\ds \paren {a \vee \paren {a \vee b} } \wedge \paren {\paren {a \vee b} \vee b}\)





Boolean Algebra Axiom $(\text {BA}_1 1)$: Commutativity














\(\ds \)

\(=\)







\(\ds \paren {\paren {a \vee a} \vee b} \wedge \paren {a \vee \paren {b \vee b} }\)





Operations of Boolean Algebra are Associative














\(\ds \)

\(=\)







\(\ds \paren {a \vee b} \wedge \paren {a \vee b}\)





Operations of Boolean Algebra are Idempotent














\(\ds \)

\(=\)







\(\ds a \vee b\)





Operations of Boolean Algebra are Idempotent



Therefore, by definition:

$a \wedge b \preceq a \vee b$
$\Box$

All of the conditions listed above have been satisfied.
By inspecting the relevant definitions, it follows that $\struct {S, \vee, \wedge, \preceq}$ is a Boolean lattice.
$\blacksquare$





