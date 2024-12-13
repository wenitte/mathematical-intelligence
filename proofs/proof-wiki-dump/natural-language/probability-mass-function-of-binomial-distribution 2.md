# 

Source: https://proofwiki.org/wiki/Probability_Mass_Function_of_Binomial_Distribution

Theorem
The probability mass function (pmf) of a binomially distributed random variable $X$ is equal to:

$\map \Pr {X = x} = \dbinom n x p^x \paren {1 - p}^{n - x}$
where $n$ is the number of trials and $p$ is the probability of success.


Proof
Let $B_i: i = 1, 2, \ldots, \dbinom n x$ be events such that:

$(1): \quad B_i$ is the $i$th possible way to see $x$ successes in $n$ Bernoulli trials
$(2): \quad \forall i \ne j: B_i \cap B_j = \O$

We can see that:

$\forall i: \map \Pr {B_i} = p^x \paren {1 - p}^{n - x}$
This is true since there will be $x$ successes, each with probability $p$ of occurring, and $n - x$ failures each with probability $1 - p$ of occurring.
Furthermore we can assume independent trials and thus the result follows.
See Bernoulli Process as Binomial Distribution for further analysis of this.

Now our task becomes finding:

$\ds \map \Pr {X = x} = \map \Pr {\bigcup_{i \mathop = 1}^{\binom n x} B_i}$
which is the probability of one of the $\dbinom n x$ outcomes occurring.
Then by the Inclusion-Exclusion Principle considered as an extension of the Addition Law of Probability we have that for any countable union of events:


$\ds \map \Pr {\bigcup_{i \mathop = 1}^n A_i} = \sum_{i \mathop = 1}^n \map \Pr {A_i} - \sum_{i \mathop \ne j: i, j \mathop = 1}^n \map \Pr {A_i \cap A_j} - \map \Pr {\bigcap_{i \mathop = 1}^n A_i}$
Fortunately in this case the above reduces to:

$\ds \map \Pr {\bigcup_{i \mathop = 1}^n A_i} = \sum_{i \mathop = 1}^n \map \Pr {A_i}$
since the events are pairwise disjoint and $\map \Pr \O = 0$.

Thus:














\(\ds \map \Pr {X = x}\)

\(=\)







\(\ds \map \Pr {\bigcup_{i \mathop = 1}^{\binom n x} B_i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^{\binom n x} \map \Pr {B_i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^{\binom n x} p^x \paren {1 - p}^{n - x}\)




















\(\ds \)

\(=\)







\(\ds \binom n x p^x \paren {1 - p}^{n - x}\)









$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): frequency function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): frequency function
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $13$: Probability distributions
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $15$: Probability distributions




