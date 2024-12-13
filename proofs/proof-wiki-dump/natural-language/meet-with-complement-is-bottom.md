# 

Source: https://proofwiki.org/wiki/Meet_with_Complement_is_Bottom

Theorem
Let $\struct {S, \vee, \wedge, \neg}$ be a Boolean algebra, defined as in Definition 2.

Then:

$\exists \bot \in S: \forall a \in S: a \wedge \neg a = \bot$
where $\wedge$ denotes the meet operation in $S$.

This element $\bot$ is unique for any given $S$, and is named bottom.


Proof
Let $\exists r, s \in S: r \wedge \neg r = a, \ s \wedge \neg s = b$
Then:














\(\ds a\)

\(=\)







\(\ds r \wedge \neg r\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \paren {s \wedge \neg s} \vee \paren {r \wedge \neg r}\)





Boolean Algebra Axiom $(\text {BA}_2 5)$: Identity Elements














\(\ds \)

\(=\)







\(\ds \paren {r \wedge \neg r} \vee \paren {s \wedge \neg s}\)





Boolean Algebra Axiom $(\text {BA}_2 1)$: Commutativity














\(\ds \)

\(=\)







\(\ds s \wedge \neg s\)





Boolean Algebra Axiom $(\text {BA}_2 5)$: Identity Elements














\(\ds \)

\(=\)







\(\ds b\)





by hypothesis




Thus, whatever $r$ and $s$ may be:

$r \wedge \neg r = s \wedge \neg s$
This unique element can be assigned the symbol $\bot$ and named bottom as required.
$\blacksquare$


Sources
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.8$: Problems: $1 \ \text{A}$




