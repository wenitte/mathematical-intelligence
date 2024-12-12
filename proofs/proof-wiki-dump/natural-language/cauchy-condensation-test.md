# 

Source: https://proofwiki.org/wiki/Cauchy_Condensation_Test

  This article was Featured Proof between 14 February 2013 and 5 May 2013.



This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\sequence {a_n}: n \mapsto \map a n$ be a decreasing sequence of strictly positive terms in $\R$ which converges with a limit of zero.
That is, for every $n$ in the domain of $\sequence {a_n}$: $a_n > 0$, $a_n \ge a_{n + 1}$, and $a_n \to 0$ as $n \to +\infty$.

Then the series:

$\ds \sum_{n \mathop = 1}^\infty a_n$
converges if and only if the condensed series:

$\ds \sum_{n \mathop = 1}^\infty 2^n \map a {2^n}$
converges.


Proof
Necessary Condition
We will first show that:

if the condensed series $\ds \sum_{n \mathop = 1}^\infty 2^n \map a {2^n}$ converges
then:

$\ds \sum_{n \mathop = 1}^\infty a_n$ converges as well.

Assume $\ds \sum_{n \mathop = 1}^\infty 2^n \map a {2^n}$ converges.
Consider the graph of $\sequence {a_n}$ and the partial sums of $\sum 2^n \map a {2^n}$:



The dotted black line represents the sequence $\sequence {a_n}$.
The $n$th rectangle has:

Base equal to $2^n$
Altitude equal to $\map a {2^n}$
The series of partial sums of the areas of the rectangles are:

$\ds \sum_{n \mathop = 1}^N 2^n \map a {2^n}$
which is precisely the defined condensed series.

The series $\sum a_n$ can be viewed as the sum of the areas of rectangles with width $1$ and height $a_n$. 
The diagram suggests that the partial sums of $\sum a_n$ are not greater than the condensed partial sums:

$\ds \sum_{n \mathop = 1}^N a_n \le \sum_{n \mathop = 1}^N 2^n \map a {2^n}$
To formalize this claim, observe that because $\sequence {a_n}$ is decreasing:

$a_1 + \underbrace {a_2 + a_3}_{\le 2 a_2} + \underbrace {a_4 + a_5 + a_6 + a_7}_{\le 4 a_4} + \cdots + a_N \le a_1 + 2 a_2 + 4 a_4 + \cdots + 2^N \map a {2^N}$

As $n \to +\infty$, the right hand side converges by hypothesis.
Hence $\ds \sum_{n \mathop = 1}^\infty a_n$ also converges, by the Comparison Test.
$\Box$


Sufficient Condition
We will show that if $\ds \sum_{n \mathop = 1}^\infty a_n$ converges, the condensed series $\ds \sum_{n \mathop = 1}^\infty 2^n \map a {2^n}$ converges as well.
Assume $\ds \sum_{n \mathop = 1}^\infty a_n$ converges.
From the Combination Theorem for Sequences, $2\ds \sum_{n \mathop = 1}^\infty a_n = \ds \sum_{n \mathop = 1}^\infty 2 a_n$ converges as well.
Consider, then, the graph of $\sequence {a_n}$ and of the partial sums of what will be shown to equal $\ds \frac 1 2 \sum 2^n \map a {2^n}$:



The dotted black line represents the sequence $\sequence {a_n}$.
The $n$th rectangle has:

Base equal to $2^n$
Altitude equal to $\map a {2 \cdot 2^n}$
The series of partial sums of the areas of the rectangles are:














\(\ds \)

\(\)







\(\ds \sum_{n \mathop = 1}^N 2^n \map a {2 \cdot 2^n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^N 2^n \map a {2^{n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n - 1 \mathop = 1}^N 2^{n - 1} \map a {2^n}\)





replacing $n$ with $n - 1$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 2}^N 2^n \map a {2^n}\)










From Deletion of Terms from a Sequence, it is justified to examine only the behavior of $n$ for $n \ge 2$.
The series $\sum a_n$ can be viewed as the sum of the area of rectangles with height $a_n$ and width $1$.
The diagram suggests that the partial sums of $\sum a_n$ satisfy the following inequality:














\(\ds \sum_{n \mathop = 2}^N a_n\)

\(\ge\)







\(\ds \frac 1 2 \sum_{n \mathop = 2}^N 2^n \map a {2^n}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \sum_{n \mathop = 2}^N 2 a_n\)

\(\ge\)







\(\ds \sum_{n \mathop = 2}^N 2^n \map a {2^n}\)










To formalize this claim, observe that because $\sequence {a_n}$ is decreasing: 














\(\ds \sum_{n \mathop = 2}^N 2a_n\)

\(=\)







\(\ds a_2 + \underbrace {a_2 + a_3}_{\ge 2 a_4} + \underbrace {a_3 + 2 a_4 + a_5}_{\ge 4 a_8} + \underbrace {a_5 + 2 a_6 + 2 a_7 + 2 a_8 + a_9}_{\ge 8 a_{16} } + \cdots + 2 a_N\)




















\(\ds \)

\(\ge\)







\(\ds a_2 + 2 a_4 + 4 a_8 + 8 a_{16} + \cdots + 2^n \map a {2^n}\)










By hypothesis, the left hand side converges as $n \to +\infty$.
Hence the condensed series converges as well, by the Comparison Test.
$\blacksquare$


Source of Name
This entry was named for Augustin Louis Cauchy.


Also see
Cauchy Condescension Test


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Cauchy condensation test
2009: Steven G. Krantz: Discrete Mathematics Demystified: $\S 13.10$




