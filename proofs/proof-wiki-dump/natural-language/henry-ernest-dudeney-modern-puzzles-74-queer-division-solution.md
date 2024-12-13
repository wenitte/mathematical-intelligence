# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/74_-_Queer_Division/Solution



Modern Puzzles by Henry Ernest Dudeney: $74$
Queer Division
Find the smallest number which when divided successively by $45$, $454$, $4545$, and $45454$
leaves the remainders $4$, $45$, $454$, and $4545$ respectively.


Solution
$35 \, 641 \, 667 \, 749$


Proof
We are to solve the following system of simultaneous linear congruences:




\(\text {(1)}: \quad\)









\(\ds x\)

\(\equiv\)







\(\ds 4\)

\(\ds \pmod {45}\)








\(\text {(2)}: \quad\)









\(\ds x\)

\(\equiv\)







\(\ds 45\)

\(\ds \pmod {454}\)








\(\text {(3)}: \quad\)









\(\ds x\)

\(\equiv\)







\(\ds 454\)

\(\ds \pmod {4545}\)








\(\text {(4)}: \quad\)









\(\ds x\)

\(\equiv\)







\(\ds 4545\)

\(\ds \pmod {45454}\)







First note that $(3)$ implies $(1)$.
Now we split $(2)$ using the Chinese Remainder Theorem.
We have:




\(\text {(5)}: \quad\)









\(\ds x\)

\(\equiv\)







\(\ds 45\)

\(\ds \pmod {2}\)








\(\text {(6)}: \quad\)









\(\ds x\)

\(\equiv\)







\(\ds 45\)

\(\ds \pmod {227}\)







Note that $(5)$ is implied by $(4)$, so we just need to simutaneously solve $(3), (4), (6)$.
As $227, 4545$ and $45454$ are pairwise coprime, the Chinese Remainder Theorem guarantees a unique solution modulo $227 \times 4545 \times 45454 = 46 \, 895 \, 573 \, 610$.



This article is complete as far as it goes, but it could do with expansion.In particular: Is the following method of finding the solution here somewhere? It could be an adaption of the proof in Solution to Simultaneous Linear Congruences.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
To find this solution, we first need to find, in each modulo, the inverse of the product of the other modulos.
One way to find them is to use the Euclidean Algorithm.
We have:














\(\ds \paren {4545 \times 45454}^{-1}\)

\(\equiv\)







\(\ds 132\)

\(\ds \pmod {227}\)


















\(\ds \paren {227 \times 45454}^{-1}\)

\(\equiv\)







\(\ds 1817\)

\(\ds \pmod {4545}\)


















\(\ds \paren {227 \times 4545}^{-1}\)

\(\equiv\)







\(\ds 851\)

\(\ds \pmod {45454}\)







Next we multiply each inverse with the remainder in that modulo from our equations, and then to the product of the other modulos and sum them up.
This will give us the solution modulo $46 \, 895 \, 573 \, 610$:














\(\ds x\)

\(\equiv\)







\(\ds 132 \times 4545 \times 45454 \times 45 + 1817 \times 227 \times 45454 \times 454 + 851 \times 227 \times 4545 \times 4545\)

\(\ds \pmod {46 \, 895 \, 573 \, 610}\)




















\(\ds \phantom x\)

\(\equiv\)







\(\ds 13 \, 729 \, 149 \, 161 \, 869\)

\(\ds \pmod {46 \, 895 \, 573 \, 610}\)


















\(\ds \)

\(\equiv\)







\(\ds 35 \, 641 \, 667 \, 749\)

\(\ds \pmod {46 \, 895 \, 573 \, 610}\)







which is the smallest positive solution to our congruences.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $74$. -- Queer Division
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $121$. Queer Division




