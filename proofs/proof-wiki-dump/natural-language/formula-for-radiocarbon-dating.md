# 

Source: https://proofwiki.org/wiki/Formula_for_Radiocarbon_Dating

Theorem
Let $Q$ be a quantity of a sample of dead organic material (usually wood) whose time of death is to be determined.

Let $t$ years be the age of $Q$ which is to be determined.
Let $r$ denote the ratio of the quantity of carbon-14 remaining in $Q$ after time $t$ to the quantity of carbon-14 in $Q$ at the time of its death.

Then the number of years that have elapsed since the death of $Q$ is given by:

$t = -8060 \ln r$


Proof
Let $x_0$ denote the ratio of carbon-14 to carbon-12 in $Q$ at the time of its death.
Let $x$ denote the ratio of carbon-14 to carbon-12 in $Q$ after time $t$.

Thus:

$r = \dfrac x {x_0}$

It is assumed that the rate of decay of carbon-14 is a first-order reaction.
Hence we use:














\(\ds x\)

\(=\)







\(\ds x_0 e^{-k t}\)





First-Order Reaction








\(\ds \leadsto \ \ \)





\(\ds \dfrac x {x_0}\)

\(=\)







\(\ds e^{-k t}\)














\(\ds \leadsto \ \ \)





\(\ds -k t\)

\(=\)







\(\ds \map \ln {\dfrac x {x_0} }\)














\(\ds \leadsto \ \ \)





\(\ds -k t\)

\(=\)







\(\ds \map \ln r\)














\(\ds \leadsto \ \ \)





\(\ds t\)

\(=\)







\(\ds -\dfrac {\ln r} k\)










Chemical analysis tells us that after $10$ years, $99.876 \%$ of the carbon-14 that was present in the organic matter still remains.
Thus at time $t = 10$, we have:














\(\ds 0.99876 x_0\)

\(=\)







\(\ds x_0 e^{-10 k}\)





substituting for $t$ and $x$ in $(1)$








\(\ds \leadsto \ \ \)





\(\ds \ln 0.99876\)

\(=\)







\(\ds -10 k\)














\(\ds \leadsto \ \ \)





\(\ds k\)

\(\approx\)







\(\ds 0.000124\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 k\)

\(\approx\)







\(\ds 8060\)









Hence the result.
$\blacksquare$


Sources
1963: Morris Tenenbaum and Harry Pollard: Ordinary Differential Equations ... (previous) ... (next): Chapter $1$: Basic Concepts: Lesson $1$: How Differential Equations Originate




