# 

Source: https://proofwiki.org/wiki/General_Associativity_Theorem/Formulation_3



Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $a_i$ denote elements of $S$.
Let $\circ$ be associative.
Let $n \in \Z$ be a positive integer such that $n \ge 3$.
Then all possible parenthesizations of the expression:

$a_1 \circ a_2 \circ \cdots \circ a_n$
are equivalent.


Proof
Let $\circ$ be associative.
It will be shown that any parenthesization of $a_1 \circ a_2 \circ \dots \circ a_n$ is equal to the left-associated expression:

$\paren {\paren {\paren {\cdots \paren {a_1 \circ a_2} \circ a_3} \circ \cdots} \circ a_n}$
The proof proceeds by induction on $n$.


Basis for the Induction
The base case, $n = 3$:
The product $a_1 \circ a_2 \circ a_3$ has two parenthesizations:

$P_1: a_1 \circ \paren {a_2 \circ a_3}$
$P_2: \paren {a_1 \circ a_2} \circ a_3$
$P_2$ is the left-associative parenthesization for $n = 3$.
From the associativity condition, $P_1$ and $P_2$ are identical.
This is the basis for the induction.


Induction Hypothesis
If for all $m < n$, all parenthesizations of the $m$-product are identical to its left-associated parenthesization:

$\paren {\paren {\paren {\cdots \paren {a_1 \circ a_2} \circ a_3} \circ \cdots} \circ a_m}$
then all parenthesizations of the $n$-product are identical to its left-associated parenthesization:

$\paren {\paren {\paren {\cdots \paren {a_1 \circ a_2} \circ a_3} \circ \cdots} \circ a_n}$
This is the induction hypothesis.


Induction Step
Let $P_i$ denote any parenthesization of $a_1 \circ a_2 \circ \dots \circ a_n$.
Then $P_i$ is always the product of two smaller products:














\(\ds P_i\)

\(=\)







\(\ds A \circ B\)





outermost multiplication














\(\ds \)

\(=\)







\(\ds \paren {a_1 \circ a_2 \circ \cdots \circ a_m} \circ \paren {a_{m + 1} \circ a_{m + 2} \circ \cdots \circ a_n}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {\paren {\paren {\cdots \paren {a_1 \circ a_2} \circ a_3} \circ \cdots} \circ a_m} \circ \paren {\paren {\paren {\cdots \paren {a_{m + 1} \circ a_{m + 2} } \circ a_{m + 3} } \circ \cdots} \circ a_n} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {\paren {\paren {\cdots \paren {a_1 \circ a_2} \circ a_3} \circ \cdots} \circ a_{n - 1} } \circ a_n\)





Definition of Associative Operation



By the Principle of Mathematical Induction, the proof is complete.
$\Box$

It follows that all parenthesizations of $a_1 \circ a_2 \circ \dots \circ a_n$ yield identical results.
So the theorem holds.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 4.2$. Commutative and associative operations




