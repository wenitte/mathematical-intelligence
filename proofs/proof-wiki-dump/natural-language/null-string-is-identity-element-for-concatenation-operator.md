# 

Source: https://proofwiki.org/wiki/Null_String_is_Identity_Element_for_Concatenation_Operator

Theorem
Let $\AA$ be an alphabet of symbols.
Let $\WW$ denote the set of words in $\AA$.
Let $\epsilon$ denote the null string.
Let $C: \WW \times \WW \to \WW$ denote the concatenation operator on $\WW$:

$\forall A, B \in \WW: \map C {A, B} := A B$

Then $\epsilon$ is the identity element for $C$.


Proof
As $\epsilon$ is the null string:

$\map C {\epsilon, A}$









\(\ds \forall A \in \WW: \, \)



\(\ds \map C {\epsilon, A}\)

\(=\)







\(\ds \epsilon A\)





Definition of $C$














\(\ds \)

\(=\)







\(\ds A\)





Definition of Null String














\(\ds \)

\(=\)







\(\ds A \epsilon\)





Definition of Null String














\(\ds \)

\(=\)







\(\ds \map C {A, \epsilon}\)





Definition of $C$



Hence the result by definition of identity element.
$\blacksquare$


Sources
1979: John E. Hopcroft and Jeffrey D. Ullman: Introduction to Automata Theory, Languages, and Computation ... (previous) ... (next): Chapter $1$: Preliminaries: $1.1$ Strings, Alphabets and Languages




