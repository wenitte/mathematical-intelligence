# 

Source: https://proofwiki.org/wiki/Semigroup_is_Group_Iff_Latin_Square_Property_Holds/Proof_1



Theorem
Let $\left({S, \circ}\right)$ be a semigroup.

Then $\left({S, \circ}\right)$ is a group if and only if for all $a, b \in S$ the Latin square property holds in $S$:

$a \circ x = b$
$y \circ a = b$
for $x$ and $y$ each unique in $S$.


Proof
Necessary Condition
Let $\struct {S, \circ}$ be a group.
$\struct {S, \circ}$ is a semigroup by the definition of a group.
By Group has Latin Square Property, the Latin square property holds in $S$.
$\Box$


Sufficient Condition
Let $\struct {S, \circ}$ be a semigroup on which the Latin square property holds.
Taking the group axioms in turn:


Group Axiom $\text G 0$: Closure
$\struct {S, \circ}$ is semigroup.
Hence $\struct {S, \circ}$ is closed by definition.
$\Box$


Group Axiom $\text G 1$: Associativity
$\struct {S, \circ}$ is semigroup.
Hence $\circ$ is associative by definition.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
Let $a \in S$.
Then there is an $x \in S$ such that:




\(\text {(1)}: \quad\)









\(\ds a \circ x\)

\(=\)







\(\ds a\)









Let $b \in S$.
Then there is a $y \in S$ such that:




\(\text {(2)}: \quad\)









\(\ds y \circ a\)

\(=\)







\(\ds b\)









Proving that $x$ is a right identity:














\(\ds b \circ x\)

\(=\)







\(\ds \paren {y \circ a} \circ x\)





by $(2)$














\(\ds \)

\(=\)







\(\ds y \circ \paren {a \circ x}\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds y \circ a\)





by $(1)$














\(\ds \)

\(=\)







\(\ds b\)





by $(2)$



Let $c \in S$.
Then there is a $z \in S$ such that:




\(\text {(3)}: \quad\)









\(\ds x \circ z\)

\(=\)







\(\ds c\)









Proving that $x$ is a left identity and thus an identity:














\(\ds x \circ c\)

\(=\)







\(\ds x \circ \paren {x \circ z}\)





by $(3)$














\(\ds \)

\(=\)







\(\ds \paren {x \circ x} \circ z\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds x \circ z\)





$x$ is a right identity














\(\ds \)

\(=\)







\(\ds c\)





by $(3)$



Relabel $x$ as $e$.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
Let $x \in S$.
Then $x$ has a right and left inverse by the property as there exists a $y$ and $z$ in $S$ such that:




\(\text {(4)}: \quad\)









\(\ds x \circ y\)

\(=\)







\(\ds e\)












\(\text {(5)}: \quad\)









\(\ds z \circ x\)

\(=\)







\(\ds e\)









We shall prove that $y$ is also the left inverse of $x$:














\(\ds y \circ x\)

\(=\)







\(\ds e \circ \paren {y \circ x}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds \paren {z \circ x} \circ \paren {y \circ x}\)





by $(5)$














\(\ds \)

\(=\)







\(\ds z \circ \paren {\paren {x \circ y} \circ x}\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds z \circ \paren {e \circ x}\)





by $(4)$














\(\ds \)

\(=\)







\(\ds z \circ x\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds e\)





by $(5)$



Hence every element of $S$ has a inverse.
$\blacksquare$


Sources
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\text{I}$: Groups: $\S 1$: Semigroups, Monoids and Groups: Proposition $1.4$




