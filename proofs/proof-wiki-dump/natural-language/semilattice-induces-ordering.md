# 

Source: https://proofwiki.org/wiki/Semilattice_Induces_Ordering



Theorem
Let $\struct {S, \circ}$ be a semilattice.
Let $\RR$ be the relation on $S$ defined by, for all $a, b \in S$:

$a \mathrel \RR b$ if and only if $a \circ b = b$

Then $\RR$ is an ordering.


Proof
Let us verify that $\RR$ satisfies the three conditions for an ordering.


Reflexivity
From Semilattice Axiom $\text {SL} 3$: Idempotence:

$\forall a \in S: a \circ a = a$
Hence by definition of $\RR$:

$\forall a \in S: a \mathrel \RR a = a$

So $\RR$ has been shown to be reflexive.
$\Box$


Antisymmetry
Let $a, b \in S$ such that $a \mathrel \RR b$ and $b \mathrel \RR a$.














\(\ds a \circ b\)

\(=\)







\(\ds b\)





Definition of $\RR$














\(\ds b \circ a\)

\(=\)







\(\ds a\)





Definition of $\RR$








\(\ds \leadsto \ \ \)





\(\ds a \circ b\)

\(=\)







\(\ds a\)





Semilattice Axiom $\text {SL} 2$: Commutativity








\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds b\)










So $\RR$ has been shown to be antisymmetric.
$\Box$


Transitivity
Let $a, b, c \in S$ such that $a \mathrel \RR b$ and $b \mathrel \RR c$.
Thus:














\(\ds a \circ b\)

\(=\)







\(\ds b\)





Definition of $\RR$














\(\ds b \circ c\)

\(=\)







\(\ds c\)





Definition of $\RR$








\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ b} \circ c\)

\(=\)







\(\ds b \circ c\)




















\(\ds \)

\(=\)







\(\ds c\)




















\(\ds \)

\(=\)







\(\ds a \circ \paren {b \circ c}\)





Semilattice Axiom $\text {SL} 1$: Associativity














\(\ds \)

\(=\)







\(\ds a \circ c\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(\RR\)







\(\ds c\)





Definition of $\RR$




So $\RR$ has been shown to be transitive.
$\Box$

Having verified all three conditions, it follows that $\RR$ is an ordering.
$\blacksquare$


Sources
1982: Peter T. Johnstone: Stone Spaces ... (previous) ... (next): Chapter $\text I$: Preliminaries, Definition $1.3$




