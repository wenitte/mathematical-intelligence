# 

Source: https://proofwiki.org/wiki/Kendall%27s_Coefficient_of_Concordance/Examples/Arbitrary_Example_2

Example of Kendall's Coefficient of Concordance
Consider the $4$ competitors $\text {Wilhelmina}$, $\text {Xanthippe}$, $\text {Yondalla}$ and $\text {Zena}$, who are demonstrating their skills to the $4$ judges $\text {Ariadne}$, $\text {Boudicca}$, $\text {Constantine}$ and $\text {Donald}$.
The following table shows the ranking afforded the competitors by each judge, with the row summations per competitor:




 


$\textit {Judge}$


$\textit {Competitor}$


$\begin{array} {r {{|}} cccc {{|}} c}
 & \text A & \text B & \text C & \text D & s_i \\
\hline
\text X & 1 & 1 & 4 & 4 & 10 \\
\text Y & 2 & 2 & 3 & 3 & 10 \\
\text Z & 3 & 3 & 2 & 2 & 10 \\
\text Z & 4 & 4 & 1 & 1 & 10 \\
\hline \end{array}$

Kendall's coefficient of concordance is $0$.


Proof
The mean $M$ is given by:

$M = \dfrac 1 2 \times 4 \times \paren {4 + 1} = 10$
The $S$ value is given by:














\(\ds S\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \paren {s_i - M}^2\)




















\(\ds \)

\(=\)







\(\ds \paren {10 - 10}^2 + \paren {10 - 10}^2 + \paren {10 - 10}^2 + \paren {10 - 10}^2\)




















\(\ds \)

\(=\)







\(\ds 0\)










Hence Kendall's coefficient of concordance is shown to be:














\(\ds W\)

\(=\)







\(\ds \dfrac {12 S} {m^2 n \paren {n^2 - 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {12 \times 0} {4^2 \times 4 \times \paren {4^2 - 1} }\)




















\(\ds \)

\(=\)







\(\ds 0\)









$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): coefficient of concordance
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): coefficient of concordance




