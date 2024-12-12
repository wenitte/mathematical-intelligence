# 

Source: https://proofwiki.org/wiki/First-Order_Reaction



Theorem
Let a substance decompose spontaneously in a first-order reaction.

Let $x_0$ be a measure of the quantity of that substance at time $t = 0$.
Let the quantity of the substance that remains after time $t$ be $x$.

Then:

$x = x_0 e^{-k t}$
where $k$ is the rate constant.


Proof 1
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


Proof 2
From Differential Equation governing First-Order Reaction, the differential equation governing this reaction is given by:

$-\dfrac {\d x} {\d t} = k x$
for $k \in \R_{>0}$.

This is an instance of the Decay Equation, and has the solution:

$x = x_0 e^{-k t}$
$\blacksquare$


Also see
Half-Life of Radioactive Substance




