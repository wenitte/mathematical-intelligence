# 

Source: https://proofwiki.org/wiki/Bayes%27_Theorem

  This article was Featured Proof between 28 February 2010 and 6 November 2010.




Theorem
Let $\Pr$ be a probability measure on a probability space $\struct {\Omega, \Sigma, \Pr}$.
Let $\condprob A B$ denote the conditional probability of $A$ given $B$.

Let $\map \Pr A > 0$ and $\map \Pr B > 0$.
Then:

$\condprob B A = \dfrac {\condprob A B \, \map \Pr B} {\map \Pr A}$


General Result
There are other more or less complicated ways of saying very much the same thing, all of which can be derived from the basic version with the help of other fairly elementary results.
For example:
Let $\set {B_1, B_2, \ldots}$ be a partition of the event space $\Sigma$.

Then, for any $B_i$ in the partition:

$\condprob {B_i} A = \dfrac {\condprob A {B_i} \map \Pr {B_i} } {\map \Pr A} = \dfrac {\condprob A {B_i} \map \Pr {B_i} } {\sum_j \condprob A {B_j} \map \Pr {B_j} }$
where $\ds \sum_j$ denotes the sum over $j$.


Proof
From the definition of conditional probabilities, we have:

$\condprob A B = \dfrac {\map \Pr {A \cap B} } {\map \Pr B}$
$\condprob B A = \dfrac {\map \Pr {A \cap B} } {\map \Pr A}$

After some algebra:

$\condprob A B \, \map \Pr B = \map \Pr {A \cap B} = \condprob B A \, \map \Pr A$

Dividing both sides by $\map \Pr A$ (we are told that it is non-zero), the result follows:

$\condprob B A = \dfrac {\condprob A B \, \map \Pr B} {\map \Pr A}$
$\blacksquare$


Also known as
This result is also known as Bayes' Formula.

The formula:

$\condprob A B \, \map \Pr B = \map \Pr {A \cap B} = \condprob B A \, \map \Pr A$
is sometimes called the product rule for probabilities.


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
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 1.6$: Exercise $18$
1991: Roger B. Myerson: Game Theory ... (previous) ... (next): $1.2$ Basic Concepts of Decision Theory




