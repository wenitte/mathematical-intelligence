# 

Source: https://proofwiki.org/wiki/Inclusion-Exclusion_Principle/Examples/3_Events_in_Event_Space:_Example

Examples of Use of Inclusion-Exclusion Principle
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $A, B, C \in \Sigma$ such that:.
Then:














\(\ds \map \Pr A\)

\(=\)







\(\ds \dfrac 5 {10}\)




















\(\ds \map \Pr B\)

\(=\)







\(\ds \dfrac 7 {10}\)




















\(\ds \map \Pr C\)

\(=\)







\(\ds \dfrac 6 {10}\)




















\(\ds \map \Pr {A \cap B}\)

\(=\)







\(\ds \dfrac 3 {10}\)




















\(\ds \map \Pr {B \cap C}\)

\(=\)







\(\ds \dfrac 4 {10}\)




















\(\ds \map \Pr {A \cap C}\)

\(=\)







\(\ds \dfrac 2 {10}\)




















\(\ds \map \Pr {A \cap B \cap C}\)

\(=\)







\(\ds \dfrac 1 {10}\)









The probability that exactly $2$ of the events $A$, $B$ and $C$ occur is $\dfrac 6 {10}$.


Proof
We are looking for the probability of:

$\paren {\paren {A \cap B} \setminus \paren {A \cap B \cap C} } \cup \paren {\paren {B \cap C} \setminus \paren {A \cap B \cap C} } \cup \paren {\paren {A \cap C} \setminus\paren  {A \cap B \cap C} }$
We have that:

$\paren {\paren {A \cap B} \setminus \paren {A \cap B \cap C} } \cap \paren {A \cap B \cap C} = \O$
and similarly for the other two such terms.
Then we have that $\paren {A \cap B} \setminus \paren {A \cap B \cap C}$, $\paren {\paren {B \cap C} \setminus \paren {A \cap B \cap C} }$ and $\paren {\paren {A \cap C} \setminus \paren {A \cap B \cap C} }$ are pairwise disjoint.
Hence the probability $P$ that exactly $2$ of the events $A$, $B$ and $C$ occur is














\(\ds P\)

\(=\)







\(\ds \paren {\map \Pr {A \cap B} - \map \Pr {A \cap B \cap C} } - \paren {\map \Pr {B \cap C} - \map \Pr {A \cap B \cap C} } - \paren {\map \Pr {A \cap C} - \map \Pr {A \cap B \cap C} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\dfrac 3 {10} - \dfrac 1 {10} } - \paren {\dfrac 4 {10} - \dfrac 1 {10} } - \paren {\dfrac 2 {10} - \dfrac 1 {10} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 6 {10}\)









$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.4$: Probability spaces: Exercise $9$




