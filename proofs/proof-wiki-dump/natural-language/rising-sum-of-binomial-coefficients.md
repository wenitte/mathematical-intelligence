# 

Source: https://proofwiki.org/wiki/Rising_Sum_of_Binomial_Coefficients



Theorem
Let $m, n \in \Z_{\ge 0}$ be positive integers.

Then:

$\ds \sum_{j \mathop = 0}^m \binom {n + j} n = \binom {n + m + 1} {n + 1} = \binom {n + m + 1} m$
where $\dbinom n k$ denotes a binomial coefficient.

That is:

$\dbinom n n + \dbinom {n + 1} n + \dbinom {n + 2} n + \cdots + \dbinom {n + m} n = \dbinom {n + m + 1} {n + 1} = \dbinom {n + m + 1} m$


Proof by Induction
Proof by induction:
Let $n \in \Z$.
For all $m \in \N$, let $\map P m$ be the proposition:

$\ds \sum_{j \mathop = 0}^m \binom {n + j} n = \binom {n + m + 1} {n + 1}$

$\map P 0$ is true, as this just says:

$\dbinom n n = \dbinom {n + 1} {n + 1}$
But $\dbinom n n = \dbinom {n + 1} {n + 1} = 1$ from the Definition of Binomial Coefficient.


Basis for the Induction
$\map P 1$ is the case:














\(\ds \sum_{j \mathop = 0}^1 \binom {n + j} n\)

\(=\)







\(\ds \binom n n + \binom {n + 1} n\)




















\(\ds \)

\(=\)







\(\ds 1 + \paren {n + 1}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds n + 2\)




















\(\ds \)

\(=\)







\(\ds \binom {n + 2} {n + 1}\)





Definition of Binomial Coefficient



So:

$\ds \sum_{j \mathop = 0}^1 \binom {n + j} n = \binom {n + 2} {n + 1}$
and $\map P 1$ is seen to hold.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \sum_{j \mathop = 0}^k \binom {n + j} n = \binom {n + k + 1} {n + 1}$

Then we need to show:

$\ds \sum_{j \mathop = 0}^{k+1} \binom {n + j} n = \binom {n + k + 2} {n + 1}$


Induction Step
This is our induction step:














\(\ds \sum_{j \mathop = 0}^{k + 1} \binom {n + j} n\)

\(=\)







\(\ds \sum_{j \mathop = 0}^k \binom {n + j} n + \binom {n + k + 1} n\)




















\(\ds \)

\(=\)







\(\ds \binom {n + k + 1} {n + 1} + \binom {n + k + 1} n\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \binom {n + k + 2} {n + 1}\)





Pascal's Rule



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \sum_{j \mathop = 0}^m \binom {n + j} n = \binom {n + m + 1} {n + 1}$

Finally, from Symmetry Rule for Binomial Coefficients:

$\dbinom {n + m + 1} {n + 1} = \dbinom {n + m + 1} m$
$\blacksquare$


Direct Proof
This proof adds up all the terms of the summation to obtain the desired result.
Since the first term equals $1$, it may be replaced with $\dbinom {n + 1} {n + 1}$.
So:

$\ds \sum_{j \mathop = 0}^m \binom {n + j} n = \binom {n + 1} {n + 1} + \sum_{j \mathop = 1}^m \binom {n + j} n$

The sum will be computed in $m$ steps, combining the first two terms with Pascal's Rule in each step.  
Step 1:

$\ds \binom {n + 1} {n + 1} + \binom {n + 1} n + \sum_{j \mathop = 2}^m \binom {n + j} n = \binom {n + 2} {n + 1} + \sum_{j \mathop = 2}^m \binom {n + j} n$

Step 2:

$\ds \binom {n + 2} {n + 1} + \binom {n + 2} n + \sum_{j \mathop = 3}^m \binom {n + j} n = \binom {n + 3} {n + 1} + \sum_{j \mathop = 3}^m \binom {n + j} n$

After $m - 1$ steps, we obtain:

$\dbinom {n + m} {n + 1} + \dbinom {n + m} n$

Step $m$:

$\dbinom {n + m} {n + 1} + \dbinom {n + m} n = \dbinom {n + m + 1} {n + 1}$
Hence the result.
$\blacksquare$


Proof 3
We have:














\(\ds \binom {n + j} n\)

\(=\)







\(\ds \binom {n + j} {\left({n + j}\right) - n}\)





Symmetry Rule for Binomial Coefficients














\(\ds \)

\(=\)







\(\ds \binom {n + j} j\)









The result follows from Sum of $\dbinom {r + k} k$ up to $n$.
$\blacksquare$


Marginal cases
Just to make sure, it is worth checking the marginal cases:

$n = 0$
When $n = 0$ we have:














\(\ds \sum_{j \mathop = 0}^m \binom j 0\)

\(=\)







\(\ds \binom 0 0 + \binom 1 0 + \binom 2 0 + \cdots \binom m 0\)




















\(\ds \)

\(=\)







\(\ds 1 + 1 + \cdots + 1\)





from $0$ to $m$














\(\ds \)

\(=\)







\(\ds m + 1\)





as there are $m + 1$ of them














\(\ds \)

\(=\)







\(\ds \binom {m + 1} 1\)









So the theorem holds for $n = 0$.
$\Box$


$n = 1$
When $n = 1$ we have:














\(\ds \sum_{j \mathop = 0}^m \binom {1 + j} 1\)

\(=\)







\(\ds \binom 1 1 + \binom 2 1 + \binom 3 1 + \cdots \binom {m + 1} 1\)




















\(\ds \)

\(=\)







\(\ds 1 + 2 + \cdots + \paren {m + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {m + 1} \paren {m + 2} } 2\)





Closed Form for Triangular Numbers














\(\ds \)

\(=\)







\(\ds \binom {m + 2} 2\)





Definition of Binomial Coefficient



So the theorem holds for $n = 1$.
$\Box$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 3$: The Binomial Formula and Binomial Coefficients: $3.9$
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.2.4$: Factorials and binomial coefficients: $1.33$




