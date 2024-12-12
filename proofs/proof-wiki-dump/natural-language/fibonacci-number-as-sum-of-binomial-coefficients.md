# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_as_Sum_of_Binomial_Coefficients



Theorem
Let $F_n$ denote the $n$th Fibonacci number.

Then:










\(\ds \forall n \in \Z_{>0}: \, \)



\(\ds F_n\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{\floor {\frac {n - 1} 2} } \dbinom {n - k - 1} k\)




















\(\ds \)

\(=\)







\(\ds \binom {n - 1} 0 + \binom {n - 2} 1 + \binom {n - 3} 2 + \dotsb + \binom {n - j} {j - 1} + \binom {n - j - 1} j\)





where $j = \floor {\dfrac {n - 1} 2}$




where:

$\dbinom a b$ denotes a binomial coefficient
$\floor x$ denotes the floor function, which is the greatest integer less than or equal to $x$.


Proof
By definition of Fibonacci numbers:

$F_1 = 1, F_2 = 1, F_3 = 2, F_4 = 3, \ldots$

The proof proceeds by induction.

For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:

$\ds F_n = \sum_{k \mathop = 0}^{\floor {\frac {n - 1} 2} } \dbinom {n - k - 1} k$


Basis for the Induction
$\map P 1$ is the case:














\(\ds F_1\)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds \dbinom 0 0\)





Zero Choose Zero














\(\ds \)

\(=\)







\(\ds \dbinom {1 - 0 - 1} 0\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{\floor {\frac {1 - 1} 2} } \dbinom {1 - k - 1} k\)









So $\map P 1$ is seen to hold.

$\map P 2$ is the case:














\(\ds F_2\)

\(=\)







\(\ds 1 + 0\)




















\(\ds \)

\(=\)







\(\ds \dbinom 1 0\)





Binomial Coefficient with Zero














\(\ds \)

\(=\)







\(\ds \dbinom {2 - 0 - 1} 0\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{\floor {\frac {2 - 1} 2} } \dbinom {2 - k - 1} k\)









So $\map P 2$ is also seen to hold.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P {k - 1}$ and $\map P k$ are true, where $k > 2$ is an even integer, then it logically follows that $\map P {k + 1}$ and $\map P {k + 2}$ are both true.

So this is our induction hypothesis:

$\ds F_{k - 1} = \sum_{i \mathop = 0}^{\frac k 2 - 1} \dbinom {k - i - 2} i$
$\ds F_k = \sum_{i \mathop = 0}^{\frac k 2 - 1} \dbinom {k - i - 1} i$

Then we need to show:

$\ds F_{k + 1} = \sum_{i \mathop = 0}^{\frac k 2} \dbinom {k - i} i$
$\ds F_{k + 2} = \sum_{i \mathop = 0}^{\frac k 2} \dbinom {k - i + 1} i$


Induction Step
This is our induction step:
For the first part:














\(\ds \sum_{i \mathop = 0}^{\frac k 2} \dbinom {k - i} i\)

\(=\)







\(\ds \dbinom k 0 + \sum_{i \mathop = 1}^{\frac k 2 - 1} \dbinom {k - i} i + \dbinom {k - \frac k 2} {\frac k 2}\)




















\(\ds \)

\(=\)







\(\ds 1 + \sum_{i \mathop = 1}^{\frac k 2 - 1} \dbinom {k - i} i + \dbinom {\frac k 2} {\frac k 2}\)





Binomial Coefficient with Zero














\(\ds \)

\(=\)







\(\ds 1 + \sum_{i \mathop = 1}^{\frac k 2 - 1} \dbinom {k - i} i + 1\)





Binomial Coefficient with Self














\(\ds \)

\(=\)







\(\ds 1 + \sum_{i \mathop = 1}^{\frac k 2 - 1} \paren { \dbinom {k - i - 1} i + \dbinom {k - i - 1} {i - 1} } + 1\)





Pascal's Rule














\(\ds \)

\(=\)







\(\ds 1 + \sum_{i \mathop = 1}^{\frac k 2 - 1} \dbinom {k - i - 1} i + \sum_{i \mathop = 1}^{\frac k 2 - 1} \dbinom {k - i - 1} {i - 1} + 1\)





Summation is Linear














\(\ds \)

\(=\)







\(\ds 1 + \sum_{i \mathop = 1}^{\frac k 2 - 1} \dbinom {k - i - 1} i + \sum_{i \mathop = 0}^{\frac k 2 - 2} \dbinom {k - i - 2} i + 1\)




















\(\ds \)

\(=\)







\(\ds \dbinom {k - 2} 0 + \sum_{i \mathop = 1}^{\frac k 2 - 1} \dbinom {k - i - 1} i + \sum_{i \mathop = 0}^{\frac k 2 - 2} \dbinom {k - i - 2} i + 1\)





Binomial Coefficient with Zero














\(\ds \)

\(=\)







\(\ds \dbinom {k - 2} 0 + \sum_{i \mathop = 1}^{\frac k 2 - 1} \dbinom {k - i - 1} i + \sum_{i \mathop = 0}^{\frac k 2 - 2} \dbinom {k - i - 2} i + \dbinom {k - \paren {\frac k 2 - 1} - 2} {\frac k 2 - 1}\)





Binomial Coefficient with Self














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^{\frac k 2 - 1} \dbinom {k - i - 1} i + \sum_{i \mathop = 0}^{\frac k 2 - 1} \dbinom {k - i - 2} i\)




















\(\ds \)

\(=\)







\(\ds F_k + F_{k - 1}\)





Induction hypothesis














\(\ds \)

\(=\)







\(\ds F_{k + 1}\)





Definition of Fibonacci Number



For the second part:














\(\ds \sum_{i \mathop = 0}^{\frac k 2} \dbinom {k - i + 1} i\)

\(=\)







\(\ds \dbinom k 0 + \sum_{i \mathop = 1}^{\frac k 2} \dbinom {k - i + 1} i\)




















\(\ds \)

\(=\)







\(\ds 1 + \sum_{i \mathop = 1}^{\frac k 2} \dbinom {k - i + 1} i\)





Binomial Coefficient with Zero














\(\ds \)

\(=\)







\(\ds 1 + \sum_{i \mathop = 1}^{\frac k 2} \paren {\dbinom {k - i} i + \dbinom {k - i} {i - 1} }\)





Pascal's Rule














\(\ds \)

\(=\)







\(\ds 1 + \sum_{i \mathop = 1}^{\frac k 2} \dbinom {k - i} i + \sum_{i \mathop = 1}^{\frac k 2} \dbinom {k - i} {i - 1}\)





Summation is Linear














\(\ds \)

\(=\)







\(\ds 1 + \sum_{i \mathop = 1}^{\frac k 2} \dbinom {k - i} i + \sum_{i \mathop = 0}^{\frac k 2 - 1} \dbinom {k - i - 1} i\)




















\(\ds \)

\(=\)







\(\ds \dbinom {k - 2} 0 + \sum_{i \mathop = 1}^{\frac k 2} \dbinom {k - i} i + \sum_{i \mathop = 0}^{\frac k 2 - 1} \dbinom {k - i - 1} i\)





Binomial Coefficient with Zero














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^{\frac k 2} \dbinom {k - i} i + \sum_{i \mathop = 0}^{\frac k 2 - 1} \dbinom {k - i - 1} i\)




















\(\ds \)

\(=\)







\(\ds F_{k + 1} + F_k\)





Induction hypothesis














\(\ds \)

\(=\)







\(\ds F_{k + 2}\)





Definition of Fibonacci Number



So $\map P {k - 1} \land \map P k \implies \map P {k + 1} \land \map P {k + 2}$ and the result follows by the Principle of Mathematical Induction.
Therefore:

$\ds \forall n \in \Z_{>0}: F_n = \sum_{k \mathop = 0}^{\floor {\frac {n - 1} 2} } \dbinom {n - k - 1} k$
$\blacksquare$


Examples
Fibonacci Number $F_{12}$













\(\ds F_{12}\)

\(=\)







\(\ds \binom {11} 0 + \binom {10} 1 + \binom 9 2 + \binom 8 3 + \binom 7 4 + \binom 6 5\)




















\(\ds \)

\(=\)







\(\ds 1 + 10 + 36 + 56 + 35 + 6\)




















\(\ds \)

\(=\)







\(\ds 144\)











Historical Note
This result was discovered by François Édouard Anatole Lucas.


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-1}$ Permutations and Combinations: Exercise $13$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$
but note the misprint in the statement of the result.




