# 

Source: https://proofwiki.org/wiki/Natural_Numbers_under_Min_Operation_forms_Total_Semilattice



Theorem
Let $\struct {\N, \wedge}$ denote the set of natural numbers $\N$ under the min operation:

$\forall a, b \in \N: a \wedge b := \min \set {a, b}$
Then $\struct {\N, \wedge}$ forms a total semilattice.


Proof
Taking the semilattice axioms in turn:


Semilattice Axiom $\text {SL} 0$: Closure
We have that:

$\min \set {a, b} = \begin {cases} a & : a \le b \\ b : b \le a \end {cases}$
Hence if $a, b \in \N$ then $a \wedge b \in \N$.
Thus $\struct {\N, \wedge}$ is closed.
$\Box$


Semilattice Axiom $\text {SL} 1$: Associativity









\(\ds \forall a, b, c \in \N: \, \)



\(\ds \paren {a \wedge b} \wedge c\)

\(=\)







\(\ds \min \set {\min \set {a, b}, c}\)





Definition of $\wedge$














\(\ds \)

\(=\)







\(\ds \min \set {a, \min \set {b, c} }\)





Min Operation is Associative














\(\ds \)

\(=\)







\(\ds a \wedge \paren {b \wedge c}\)









Thus $\wedge$ is associative.
$\Box$


Semilattice Axiom $\text {SL} 2$: Commutativity









\(\ds \forall a, b \in \N: \, \)



\(\ds a \wedge b\)

\(=\)







\(\ds \min \set {a, b}\)





Definition of $\wedge$














\(\ds \)

\(=\)







\(\ds \min \set {b, a}\)





Min Operation is Commutative














\(\ds \)

\(=\)







\(\ds b \wedge a\)









Thus $\wedge$ is commutative.
$\Box$


Semilattice Axiom $\text {SL} 3$: Idempotence









\(\ds \forall a \in \N: \, \)



\(\ds a \wedge a\)

\(=\)







\(\ds \min \set {a, a}\)





Definition of $\wedge$














\(\ds \)

\(=\)







\(\ds a\)





Min Operation is Idempotent



Thus $\wedge$ is idempotent.
$\Box$

All the semilattice axioms are thus seen to be fulfilled, and so $\struct {\N, \wedge}$ is a semilattice.
$\Box$


Totality
Let $T \subseteq S$.
Let $a, b\ in T$.
From Min Operation Equals an Operand:

$\forall a, b \in \N: \min \set {a, b} \in \set {a, b}$
Hence by definition of subset:

$\min \set {a, b} \in T$
Hence by definition $\struct {\N, \wedge}$ is a total semilattice.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.22 \ \text {(d)}$




