# 

Source: https://proofwiki.org/wiki/Precisely_One_Function_in_terms_of_And,_Or_and_Not

Theorem
Let $\map P {A, B, C}$ denote the precisely one function on the statements $A$, $B$ and $C$.
Then:

$\map P {A, B, C} \dashv \vdash \paren {A \land \neg B \land \neg C} \lor \paren {\neg A \land B \land \neg C} \lor \paren {\neg A \land \neg B \land C}$
where:

$\land$ denotes conjunction
$\lor$ denotes disjunction
$\neg$ denotes negation


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|cccc||ccccc|} \hline
P & (A & B & C) & (((A & \land & \neg & B) & \land & \neg & C) & \lor & ((\neg & A & \land & B) & \land & \neg & C)) & \lor & ((\neg & A & \land & \neg & B) & \land & C) \\
\hline
F & F & F & F & F & F & T & F & F & T & F & F & T & F & F & F & F & T & F & F & T & F & T & T & F & F & F \\
T & F & F & T & F & F & T & F & F & F & T & F & T & F & F & F & F & F & T & T & T & F & T & T & F & T & T \\
T & F & T & F & F & F & F & T & F & T & F & T & T & F & T & T & T & T & F & T & T & F & F & F & T & F & F \\
F & F & T & T & F & F & F & T & F & F & T & F & T & F & T & T & F & F & T & F & T & F & F & F & T & F & T \\
T & T & F & F & T & T & T & F & T & T & F & T & F & T & F & F & F & T & F & T & F & T & F & T & F & F & F \\
F & T & F & T & T & T & T & F & F & F & T & F & F & T & F & F & F & F & T & F & F & T & F & T & F & F & T \\
F & T & T & F & T & F & F & T & F & T & F & F & F & T & F & T & F & T & F & F & F & T & F & F & T & F & F \\
F & T & T & T & T & F & F & T & F & F & T & F & F & T & F & T & F & F & T & F & F & T & F & F & T & F & T \\
\hline
\end{array}$
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic: Exercise $(6)$




