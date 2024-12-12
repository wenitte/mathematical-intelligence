# 

Source: https://proofwiki.org/wiki/Cancellation_of_Join_in_Boolean_Algebra

Theorem
Let $\struct {S, \vee, \wedge, \neg}$ be a Boolean algebra.
Let $a, b, c \in S$, and suppose that:














\(\ds a \vee c\)

\(=\)







\(\ds b \vee c\)




















\(\ds a \vee \neg c\)

\(=\)







\(\ds b \vee \neg c\)










Then $a = b$.


Proof













\(\ds a\)

\(=\)







\(\ds a \vee \bot\)





Boolean Algebra Axiom $(\text {BA}_1 3)$: Identity Elements: $\bot$ is the identity for $\vee$














\(\ds \)

\(=\)







\(\ds a \vee \paren {c \wedge \neg c}\)





Boolean Algebra Axiom $(\text {BA}_1 4)$: Complements














\(\ds \)

\(=\)







\(\ds \paren {a \vee c} \wedge \paren {a \vee \neg c}\)





Boolean Algebra Axiom $(\text {BA}_1 2)$: Distributivity: $\vee$ distributes over $\wedge$














\(\ds \)

\(=\)







\(\ds \paren {b \vee c} \wedge \paren {b \vee \neg c}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds b \vee \paren {c \wedge \neg c}\)





Boolean Algebra Axiom $(\text {BA}_1 2)$: Distributivity: $\vee$ distributes over $\wedge$














\(\ds \)

\(=\)







\(\ds b \vee \bot\)





Boolean Algebra Axiom $(\text {BA}_1 4)$: Complements














\(\ds \)

\(=\)







\(\ds b\)





Boolean Algebra Axiom $(\text {BA}_1 3)$: Identity Elements: $\bot$ is the identity for $\vee$



Hence the result.
$\blacksquare$


Also see
Cancellation of Meet in Boolean Algebra




