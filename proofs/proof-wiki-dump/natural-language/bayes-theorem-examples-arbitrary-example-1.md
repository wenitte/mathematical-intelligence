# 

Source: https://proofwiki.org/wiki/Bayes%27_Theorem/Examples/Arbitrary_Example_1

Example of Use of Bayes' Theorem
Let box $1$ contain $10$ good screws and $2$ unslotted screws.
Let box $2$ contain $8$ good screws and $4$ unslotted screws.
Let a box be selected at random.
Let a screw chosen from that box prove to be unslotted.
What is the probability that it came from box $2$?


Solution
Let $A$ be the event: An unslotted screw is selected.
Let $B_1$ be the event: Screw is selected from box $1$.
Let $B_2$ be the event: Screw is selected from box $2$.

We have that:














\(\ds \map \Pr {B_1} = \map \Pr {B_2}\)

\(=\)







\(\ds \dfrac 1 2\)




















\(\ds \condprob A {B_1}\)

\(=\)







\(\ds \dfrac 1 6\)




















\(\ds \condprob A {B_2}\)

\(=\)







\(\ds \dfrac 1 3\)














\(\ds \leadsto \ \ \)





\(\ds \condprob {B_2} A\)

\(=\)







\(\ds \dfrac {\map \Pr {B_2} \condprob A {B_2} } {\map \Pr {B_1} \condprob A {B_1} + \map \Pr {B_2} \condprob A {B_2} }\)





Bayes' Theorem














\(\ds \)

\(=\)







\(\ds \dfrac {\frac 1 2 \times \frac 1 3} {\frac 1 2 \times \frac 1 6 + \frac 1 2 \times \frac 1 3}\)





plugging in the numbers














\(\ds \)

\(=\)







\(\ds \dfrac 2 3\)





calculation



Hence the probability is $\dfrac 2 3$ that the unslotted screw came from box $2$.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Bayes' theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Bayes' theorem




