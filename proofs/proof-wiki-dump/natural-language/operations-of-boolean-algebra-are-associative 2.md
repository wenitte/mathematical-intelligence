# 

Source: https://proofwiki.org/wiki/Operations_of_Boolean_Algebra_are_Associative

Theorem
Let $\struct {S, \vee, \wedge, \neg}$ be a Boolean algebra, defined as in Definition 1.

Then:










\(\ds \forall a, b, c \in S: \, \)



\(\ds \paren {a \wedge b} \wedge c\)

\(=\)







\(\ds a \wedge \paren {b \wedge c}\)
















\(\ds \forall a, b, c \in S: \, \)



\(\ds \paren {a \vee b} \vee c\)

\(=\)







\(\ds a \vee \paren {b \vee c}\)










That is, both $\vee$ and $\wedge$ are associative operations.


Proof
Let $a, b, c \in S$.
Let:

$x = a \wedge \paren {b \wedge c}$
$y = \paren {a \wedge b} \wedge c$
Then:














\(\ds a \vee x\)

\(=\)







\(\ds a \vee \paren {a \wedge \paren {b \wedge c} }\)




















\(\ds \)

\(=\)







\(\ds \paren {a \vee a} \wedge \paren {a \vee \paren {b \wedge c} }\)





Boolean Algebra Axiom $(\text {BA}_1 2)$: Distributivity: both $\vee$ and $\wedge$ distribute over the other














\(\ds \)

\(=\)







\(\ds a \wedge \paren {a \vee \paren {b \wedge c} }\)





Operations of Boolean Algebra are Idempotent














\(\ds \)

\(=\)







\(\ds a\)





Absorption Laws (Boolean Algebras)




Similarly:














\(\ds a \vee y\)

\(=\)







\(\ds a \vee \paren {\paren {a \wedge b} \wedge c}\)




















\(\ds \)

\(=\)







\(\ds \paren {a \vee \paren {a \wedge b} } \wedge \paren {a \vee c}\)





Boolean Algebra Axiom $(\text {BA}_1 2)$: Distributivity: both $\vee$ and $\wedge$ distribute over the other














\(\ds \)

\(=\)







\(\ds a \wedge \paren {a \vee c}\)





Absorption Laws (Boolean Algebras)














\(\ds \)

\(=\)







\(\ds a\)





Absorption Laws (Boolean Algebras)



Thus we see we have $a \vee x = a \vee y$.

Next:














\(\ds \neg a \vee x\)

\(=\)







\(\ds \neg a \vee \paren {a \wedge \paren {b \wedge c} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\neg a \vee a} \wedge \paren {\neg a \vee \paren {b \wedge c} }\)





Boolean Algebra Axiom $(\text {BA}_1 2)$: Distributivity: both $\vee$ and $\wedge$ distribute over the other














\(\ds \)

\(=\)







\(\ds \top \wedge \paren {\neg a \vee \paren {b \wedge c} }\)





Boolean Algebra Axiom $(\text {BA}_1 4)$: Complements: $\neg a \vee a = \top$














\(\ds \)

\(=\)







\(\ds \neg a \vee \paren {b \wedge c}\)





Boolean Algebra Axiom $(\text {BA}_1 3)$: Identity Elements: $\top$ is the identity of $\wedge$




Similarly:














\(\ds \neg a \vee y\)

\(=\)







\(\ds \neg a \vee \paren {\paren {a \wedge b} \wedge c}\)




















\(\ds \)

\(=\)







\(\ds \paren {\neg a \vee \paren {a \wedge b} } \wedge \paren {\neg a \vee c}\)





Boolean Algebra Axiom $(\text {BA}_1 2)$: Distributivity: both $\vee$ and $\wedge$ distribute over the other














\(\ds \)

\(=\)







\(\ds \paren {\paren {\neg a \vee a} \wedge \paren {\neg a \vee b} } \wedge \paren {\neg a \vee c}\)





Boolean Algebra Axiom $(\text {BA}_1 2)$: Distributivity: both $\vee$ and $\wedge$ distribute over the other














\(\ds \)

\(=\)







\(\ds \paren {\top \wedge \paren {\neg a \vee b} } \wedge \paren {\neg a \vee c}\)





Boolean Algebra Axiom $(\text {BA}_1 4)$: Complements: $\neg a \vee a = \top$














\(\ds \)

\(=\)







\(\ds \paren {\neg a \vee b} \wedge \paren {\neg a \vee c}\)





Boolean Algebra Axiom $(\text {BA}_1 3)$: Identity Elements: $\top$ is the identity of $\wedge$














\(\ds \)

\(=\)







\(\ds \neg a \vee \paren {b \wedge c}\)





Boolean Algebra Axiom $(\text {BA}_1 2)$: Distributivity: both $\vee$ and $\wedge$ distribute over the other



Thus we see we have $\neg a \vee x = \neg a \vee y$.

In conclusion, we have:

$a \vee x = a \vee y$
$\neg a \vee x = \neg a \vee y$
Hence $x = y$ by Cancellation of Join in Boolean Algebra, that is:

$\paren {a \wedge b} \wedge c = a \wedge \paren {b \wedge c}$
$\Box$

The result:

$\paren {a \vee b} \vee c = a \vee \paren {b \vee c}$
follows from the Duality Principle.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 1.5$: Theorem $1.16$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Boolean algebra
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 2$: Exercise $2$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Boolean algebra




