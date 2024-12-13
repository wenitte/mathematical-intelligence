# 

Source: https://proofwiki.org/wiki/Kendall%27s_Coefficient_of_Concordance/Examples/Arbitrary_Example_1

Example of Kendall's Coefficient of Concordance
Consider the $3$ competitors $\text {Xavier}$, $\text {Yuri}$ and $\text {Zal}$, who are demonstrating their skills to the $4$ judges $\text {Araminta}$, $\text {Boecluvius}$, $\text {Coriolanius}$ and $\text {Derek}$.
The following table shows the ranking afforded the competitors by each judge, with the row summations per competitor:




 


$\textit {Judge}$


$\textit {Competitor}$


$\begin{array} {r {{|}} cccc {{|}} c}
 & \text A & \text B & \text C & \text D & s_i \\
\hline
\text X & 1 & 1 & 2 & 3 & 7 \\
\text Y & 3 & 2 & 3 & 1 & 9 \\
\text Z & 2 & 3 & 1 & 2 & 8 \\
\hline \end{array}$

Kendall's coefficient of concordance is $\dfrac 1 {16}$.


Proof
The mean $M$ is given by:

$M = \dfrac 1 2 \times 4 \times \paren {3 + 1} = 8$
The $S$ value is given by:














\(\ds S\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \paren {s_i - M}^2\)




















\(\ds \)

\(=\)







\(\ds \paren {7 - 8}^2 + \paren {9 - 8}^2 + \paren {8 - 8}^2\)




















\(\ds \)

\(=\)







\(\ds 2\)










Hence Kendall's coefficient of concordance is shown to be:














\(\ds W\)

\(=\)







\(\ds \dfrac {12 S} {m^2 n \paren {n^2 - 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {12 \times 2} {4^2 \times 3 \times \paren {3^2 - 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {16}\)









$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): coefficient of concordance
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): coefficient of concordance




