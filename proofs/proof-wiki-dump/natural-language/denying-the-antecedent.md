# 

Source: https://proofwiki.org/wiki/Denying_the_Antecedent



Fallacy
Let $p \implies q$ be a conditional statement.
Let its antecedent $p$ be false.
Then it is a fallacy to assert that the consequent $q$ is also necessarily false.
That is:














\(\ds p\)

\(\implies\)







\(\ds q\)




















\(\ds \neg p\)

\(\)







\(\ds \)














\(\ds \not \vdash \ \ \)





\(\ds \neg q\)

\(\)







\(\ds \)









This fallacy is called denying the antecedent.


Corollary
Let $p \implies q$ be a conditional statement.
Let its antecedent $p$ be false.
Then nothing can be inferred about the truth value of $q$.


Proof
We apply the Method of Truth Tables to the proposition.
$\begin{array}{|ccc|cc||cc|} \hline
p & \implies & q & \neg & p & \neg & q\\
\hline
\F & \T & \F & \T & \F & \T & \F \\
\F & \T & \T & \T & \F & \F & \T \\
\T & \F & \F & \F & \T & \T & \F \\
\T & \T & \T & \F & \T & \F & \T \\
\hline
\end{array}$
As can be seen, when $p \implies q$ is true, and so is $\neg p$, then it is not always the case that $\neg q$ is also true.
$\blacksquare$


Also see
Affirming the Consequent
Conditional and Inverse are not Equivalent


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $2$ Conditionals and Negation
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.3$: Argument Forms and Truth Tables
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): denial of the antecedent
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): fallacy




