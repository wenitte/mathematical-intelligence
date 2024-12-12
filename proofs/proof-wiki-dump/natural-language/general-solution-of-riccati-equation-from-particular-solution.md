# 

Source: https://proofwiki.org/wiki/General_Solution_of_Riccati_Equation_from_Particular_Solution

Theorem
Consider the Riccati equation:

$(1): \quad y' = \map p x + \map q x y + \map r x y^2$
Let $\map {y_1} x$ be a particular solution to $(1)$.

Then the general solution to $(1)$ has the form:

$\map y x = \map {y_1} x + \map z x$
where $\map z x$ is the general solution to the Bernoulli equation:

$z' - \paren {q - 2 r y_1} z = r z^2$


Proof
Let $\map y x = \map {y_1} x + \map z x$ be a particular solution to $(1)$.
Then:














\(\ds \dfrac {\d y} {\d x}\)

\(=\)







\(\ds y_1' + z'\)




















\(\ds \)

\(=\)







\(\ds \map p x + \map q x \paren {y_1 + z} + \map r x \paren {y_1 + z}^2\)




















\(\ds \)

\(=\)







\(\ds \map p x + \map q x \paren {y_1 + z} + \map r x \paren {y_1^2 + 2 y_1 z + z^2}\)














\(\ds \leadsto \ \ \)





\(\ds z'\)

\(=\)







\(\ds \map q x z + \map r x \paren {2 y_1 z + z^2}\)














\(\ds \leadsto \ \ \)





\(\ds z' - \paren {\map q x + 2 y_1 \map r x z}\)

\(=\)







\(\ds \map r x z^2\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $28$




