# 

Source: https://proofwiki.org/wiki/Group/Examples/Self-Inverse_and_Cancellable_Elements



Theorem
Let $S$ be a set with an operation which assigns to each $\tuple {a, b} \in S \times S$ an element $a \ast b \in S$ such that:

$(1): \quad \exists e \in S: a \ast b = e \iff a = b$
$(2): \quad \forall a, b, c \in S: \paren {a \ast c} \ast \paren {b \ast c} = a \ast b$

Then $\struct {S, \circ}$ is a group, where $\circ$ is defined as $a \circ b = a \ast \paren {e \ast b}$.


Proof
We verify the group axioms, in the following order (for convenience):


Group Axiom $\text G 0$: Closure
Let $a, b \in S$. Then from the definition of $\ast$, we have $a \ast b \in S$, and hence also $a \circ b = a \ast \paren {e \ast b} \in S$.
This proves closure of $\circ$.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
We assert that $e$ is the identity with respect to $\circ$.
We verify this as follows (let $a \in S$):














\(\ds a \circ e\)

\(=\)







\(\ds a \ast \paren {e \ast e}\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds a \ast e\)





Property $(1)$ of $\ast$














\(\ds e \circ a\)

\(=\)







\(\ds e \ast \paren {e \ast a}\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds \paren {a \ast a} \ast \paren {e \ast a}\)





Property $(1)$ of $\ast$














\(\ds \)

\(=\)







\(\ds a \ast e\)





Property $(2)$ of $\ast$



It follows that $a \circ e = e \circ a = a \ast e$.

It remains to prove the following identity:

$(3): \quad a \ast e = a$
By property $(1)$, it suffices to prove $a \ast \paren {a \ast e} = e$:














\(\ds a \ast \paren {a \ast e}\)

\(=\)







\(\ds \paren {a \ast e} \ast \paren {\paren {a \ast e} \ast e}\)





Property $(2)$ of $\ast$














\(\ds \)

\(=\)







\(\ds \paren {a \ast e} \ast \paren {\paren {a \ast e} \ast \paren {e \ast e} }\)





Property $(1)$ of $\ast$














\(\ds \)

\(=\)







\(\ds \paren {a \ast e} \ast \paren {a \ast e}\)





Property $(2)$ of $\ast$














\(\ds \)

\(=\)







\(\ds e\)





Property $(1)$ of $\ast$



So indeed $e$ is the identity for $\circ$.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
For any element $a \in S$, we claim that $e \ast a$ is the inverse for $a$.
This is verified as follows:














\(\ds \paren {e \ast a} \circ a\)

\(=\)







\(\ds \paren {e \ast a} \ast \paren {e \ast a}\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds e\)





Property $(1)$ of $\ast$














\(\ds a \circ \paren {e \ast a}\)

\(=\)







\(\ds a \ast \paren {e \ast \paren {e \ast a} }\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds a \ast \paren {e \circ a}\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds a \ast a\)





$e$ is the identity element for $\circ$














\(\ds \)

\(=\)







\(\ds e\)





Property $(1)$ of $\ast$



We conclude that $e \ast a$ is indeed the inverse for $a$.
$\Box$


Group Axiom $\text G 1$: Associativity
Lastly, we prove that $\circ$ is associative, i.e.:

$a \circ \paren {b \circ c} = \paren {a \circ b} \circ c$
To this end, we observe the following property of $\ast$:




\(\text {(4)}: \quad\)









\(\ds e \ast \paren {a \ast b}\)

\(=\)







\(\ds \paren {b \ast b} \ast \paren {a \ast b}\)





Property $(1)$ of $\ast$














\(\ds \)

\(=\)







\(\ds b \ast a\)





Property $(2)$ of $\ast$



Subsequently, we compute:














\(\ds \paren {a \circ b} \circ c\)

\(=\)







\(\ds \paren {a \ast \paren {e \ast b} } \ast \paren {e \ast c}\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds \paren {a \ast \paren {e \ast b} } \ast \paren {\paren {e \ast c} \ast e}\)





Property $(3)$ of $\ast$














\(\ds \)

\(=\)







\(\ds \paren {a \ast \paren {e \ast b} } \ast \paren {\paren {\paren {e \ast c} \ast b} \ast \paren {e \ast b} }\)





Property $(2)$ of $\ast$














\(\ds \)

\(=\)







\(\ds a \ast \paren {\paren {e \ast c} \ast b}\)





Property $(2)$ of $\ast$














\(\ds \)

\(=\)







\(\ds a \ast \paren {e \ast \paren {b \ast \paren {e \ast c} } }\)





Property $(4)$ of $\ast$














\(\ds \)

\(=\)







\(\ds a \circ \paren {b \circ c}\)





Definition of $\circ$



This somewhat cumbersome calculation shows that we indeed have associativity.
$\Box$

It follows that $\struct {S, \circ}$ is indeed a group.
$\blacksquare$


Also see
$B$-Algebra, where it can be seen that the operation $*$ as defined here is related to that in the definition of a $B$-Algebra.


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Definition of Group Structure: $\S 28 \delta$




