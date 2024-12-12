# 

Source: https://proofwiki.org/wiki/Conditional_in_terms_of_NAND



Theorem
$p \implies q \dashv \vdash p \uparrow \paren {q \uparrow q}$
where $\implies$ denotes the conditional and $\uparrow$ denotes the logical NAND.


Proof 1













\(\ds p \implies q\)

\(\dashv \vdash\)







\(\ds \neg \paren {p \land \neg q}\)





Conditional is Equivalent to Negation of Conjunction with Negative














\(\ds \)

\(\dashv \vdash\)







\(\ds p \uparrow \neg q\)





Definition of Logical NAND














\(\ds \)

\(\dashv \vdash\)







\(\ds p \uparrow \paren {q \uparrow q}\)





NAND with Equal Arguments



$\blacksquare$


Proof 2













\(\ds p \implies q\)

\(\dashv \vdash\)







\(\ds \neg p \lor q\)





Rule of Material Implication














\(\ds \)

\(\dashv \vdash\)







\(\ds \neg p \lor \neg \neg q\)





Double Negation Introduction














\(\ds \)

\(\dashv \vdash\)







\(\ds p \uparrow \neg q\)





NAND as Disjunction of Negations














\(\ds \)

\(\dashv \vdash\)







\(\ds p \uparrow \left({q \uparrow q}\right)\)





NAND with Equal Arguments



$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic: Exercise $(5)$




