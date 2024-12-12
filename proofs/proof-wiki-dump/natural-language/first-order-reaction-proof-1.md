# 

Source: https://proofwiki.org/wiki/First-Order_Reaction/Proof_1

Theorem
Let a substance decompose spontaneously in a first-order reaction.

Let $x_0$ be a measure of the quantity of that substance at time $t = 0$.
Let the quantity of the substance that remains after time $t$ be $x$.

Then:

$x = x_0 e^{-k t}$
where $k$ is the rate constant.


Proof
From Differential Equation governing First-Order Reaction, the differential equation governing this reaction is given by:

$-\dfrac {\d x} {\d t} = k x$
for $k \in \R_{>0}$.














\(\ds \int \dfrac {\d x} x\)

\(=\)







\(\ds \int - k \rd t\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds \ln x\)

\(=\)







\(\ds -k t + c\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds e^{- k t + c}\)




















\(\ds \)

\(=\)







\(\ds e^c e^{- k t}\)









At time $t = 0$ we have that $x = x_0$.
So:

$x_0 = e^c e^0 = e^c$
and hence the result

$x = x_0 e^{-k t}$
$\blacksquare$


Sources
1963: Morris Tenenbaum and Harry Pollard: Ordinary Differential Equations ... (previous) ... (next): Chapter $1$: Basic Concepts: Lesson $1$: How Differential Equations Originate
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $1$: The Nature of Differential Equations: $\S 4$: Growth, Decay and Chemical Reactions




