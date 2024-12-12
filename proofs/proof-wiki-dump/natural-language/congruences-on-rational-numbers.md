# 

Source: https://proofwiki.org/wiki/Congruences_on_Rational_Numbers

Theorem
There are only two congruence relations on the field of rational numbers $\struct {\Q, +, \times}$:

$(1): \quad$ The diagonal relation $\Delta_\Q$
$(2): \quad$ The trivial relation $\Q \times \Q$.


Proof
From:

Diagonal Relation is Universally Congruent and
Trivial Relation is Universally Congruent
we know that both these relations are congruent with both addition and multiplication on $\Q$.
Now we need to show that these are the only such relations.

Let $\RR$ be a congruence on $\Q$, such that $\RR \ne \Delta_\Q$.















\(\ds \RR\)

\(\ne\)







\(\ds \Delta_\Q\)














\(\ds \leadsto \ \ \)

\(\ds \exists r, s \in \Q: \, \)



\(\ds r\)

\(\ne\)







\(\ds s \land r \RR s\)














\(\ds \leadsto \ \ \)

\(\ds \exists h \in \Q, h \ne 0: \, \)



\(\ds h\)

\(=\)







\(\ds r - s\)














\(\ds \leadsto \ \ \)





\(\ds h\)

\(\RR\)







\(\ds 0\)





as $\RR$ is a congruence relation for $+$




Then:










\(\ds \forall x \in \Q: \, \)



\(\ds \paren {x / h}\)

\(\RR\)







\(\ds \paren {x / h}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\paren {x / h} \times h}\)

\(\RR\)







\(\ds \paren {\paren {x / h} \times 0}\)





as $\RR$ is a congruence relation for $\times$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\RR\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass 0 \RR\)

\(=\)







\(\ds \Q\)














\(\ds \leadsto \ \ \)





\(\ds \RR\)

\(=\)







\(\ds \Q \times \Q\)









$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Example $11.3$




