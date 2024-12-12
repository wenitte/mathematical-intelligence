# 

Source: https://proofwiki.org/wiki/Bayes%27_Theorem/Examples/Arbitrary_Example_2

Example of Use of Bayes' Theorem
Suppose that, in a population, $6$ out of every $1000$ people has an illness $X$.
It is known that:

if a person has $X$, there is a $92 \%$ probability that a blood test will be positive for $X$
if a person does not have $X$, there is a $0 \cdotp 5 \%$ probability that a blood test will be positive for $X$.
Let a person selected at random test positive for $X$.
What is the probability that this person actually has $X$?


Solution
Let $A$ be the event: Person tests positive for $X$.
Let $B_1$ be the event: Person has $X$.
Let $B_2$ be the event: Person does not have $X$.

We have that:














\(\ds \map \Pr {B_1}\)

\(=\)







\(\ds 0 \cdotp 006\)




















\(\ds \map \Pr {B_2}\)

\(=\)







\(\ds 0 \cdotp 994\)




















\(\ds \condprob A {B_1}\)

\(=\)







\(\ds 0 \cdotp 92\)




















\(\ds \condprob A {B_2}\)

\(=\)







\(\ds 0 \cdotp 005\)














\(\ds \leadsto \ \ \)





\(\ds \condprob {B_1} A\)

\(=\)







\(\ds \dfrac {\map \Pr {B_1} \condprob A {B_1} } {\map \Pr {B_1} \condprob A {B_1} + \map \Pr {B_2} \condprob A {B_2} }\)





Bayes' Theorem














\(\ds \)

\(=\)







\(\ds \dfrac {0 \cdotp 006 \times 0 \cdotp 92} {0 \cdotp 006 \times 0 \cdotp 92 + 0 \cdotp 994 \times 0 \cdotp 005}\)





plugging in the numbers














\(\ds \)

\(=\)







\(\ds 0 \cdotp 526\)





calculation



Hence the probability that a person has $X$ is $0 \cdotp 6 \%$, but after testing positive the probability is $52 \cdotp 6 \%$.
$\blacksquare$


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Bayes' theorem




