# 

Source: https://proofwiki.org/wiki/Join_with_Complement_is_Top

Theorem
Let $\struct {S, \vee, \wedge, \neg}$ be a Boolean algebra, defined as in Definition 2.

Then:

$\exists \top \in S: \forall a \in S: a \vee \neg a = \top$
where $\vee$ denotes the join operation in $S$.

This element $\top$ is unique for any given $S$, and is named top.


Proof
Let $\exists r, s \in S: r \vee \neg r = a, \ s \vee \neg s = b$
Then:














\(\ds a\)

\(=\)







\(\ds r \vee \neg r\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \paren {s \vee \neg s} \wedge \paren {r \vee \neg r}\)





Boolean Algebra Axiom $(\text {BA}_2 5)$: Identity Elements














\(\ds \)

\(=\)







\(\ds \paren {r \vee \neg r} \wedge \paren {s \vee \neg s}\)





Boolean Algebra Axiom $(\text {BA}_2 1)$: Commutativity














\(\ds \)

\(=\)







\(\ds s \vee \neg s\)





Boolean Algebra Axiom $(\text {BA}_2 5)$: Identity Elements














\(\ds \)

\(=\)







\(\ds b\)





by hypothesis




Thus, whatever $r$ and $s$ may be:

$r \vee \neg r = s \vee \neg s$
This unique element can be assigned the symbol $\top$ and named top as required.
$\blacksquare$


Sources
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.8$: Problems: $1 \ \text{B}$




