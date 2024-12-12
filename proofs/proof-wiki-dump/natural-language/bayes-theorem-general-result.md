# 

Source: https://proofwiki.org/wiki/Bayes%27_Theorem/General_Result



Theorem
Let $\Pr$ be a probability measure on a probability space $\struct {\Omega, \Sigma, \Pr}$.
Let $\set {B_1, B_2, \ldots}$ be a partition of the event space $\Sigma$.

Then, for any $B_i$ in the partition:

$\condprob {B_i} A = \dfrac {\condprob A {B_i} \map \Pr {B_i} } {\map \Pr A} = \dfrac {\condprob A {B_i} \map \Pr {B_i} } {\sum_j \condprob A {B_j} \map \Pr {B_j} }$
where $\ds \sum_j$ denotes the sum over $j$.


Proof
Follows directly from the Total Probability Theorem:

$\ds \map \Pr A = \sum_i \condprob A {B_i} \map \Pr {B_i}$
and Bayes' Theorem:

$\condprob {B_i} A = \dfrac {\condprob A {B_i} \map \Pr {B_i} } {\map \Pr A}$
$\blacksquare$


Examples
Arbitrary Example $1$
Let box $1$ contain $10$ good screws and $2$ unslotted screws.
Let box $2$ contain $8$ good screws and $4$ unslotted screws.
Let a box be selected at random.
Let a screw chosen from that box prove to be unslotted.
What is the probability that it came from box $2$?


Arbitrary Example $2$
Suppose that, in a population, $6$ out of every $1000$ people has an illness $X$.
It is known that:

if a person has $X$, there is a $92 \%$ probability that a blood test will be positive for $X$
if a person does not have $X$, there is a $0 \cdotp 5 \%$ probability that a blood test will be positive for $X$.
Let a person selected at random test positive for $X$.
What is the probability that this person actually has $X$?


Source of Name
This entry was named for Thomas Bayes.


Historical Note
Bayes' Theorem was published posthumously in $1763$.


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Bayes' theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Bayes' theorem
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Bayes' Theorem




