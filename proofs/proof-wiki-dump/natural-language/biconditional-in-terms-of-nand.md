# 

Source: https://proofwiki.org/wiki/Biconditional_in_terms_of_NAND

Theorem
$p \iff q \dashv \vdash \paren {\paren {p \uparrow p} \uparrow \paren {q \uparrow q} } \uparrow \paren {p \uparrow q}$
where $\iff$ denotes logical biconditional and $\uparrow$ denotes logical NAND.


Proof













\(\ds p \iff q\)

\(\dashv \vdash\)







\(\ds \neg \paren {p \oplus q}\)





Exclusive Or is Negation of Biconditional














\(\ds \)

\(\dashv \vdash\)







\(\ds \neg \paren {\paren {p \lor q} \land \neg \paren {p \land q} }\)





Definition of Exclusive Or














\(\ds \)

\(\dashv \vdash\)







\(\ds \neg \paren {\paren {p \lor q} \land \paren {p \uparrow q} }\)





Definition of Logical NAND














\(\ds \)

\(\dashv \vdash\)







\(\ds \neg \paren {\paren {\paren {p \uparrow p} \uparrow \paren {q \uparrow q} } \land \paren {p \uparrow q} }\)





Disjunction in terms of NAND














\(\ds \)

\(\dashv \vdash\)







\(\ds \paren {\paren {p \uparrow p} \uparrow \paren {q \uparrow q} } \uparrow \paren {p \uparrow q}\)





Definition of Logical NAND



$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic: Exercise $(5)$




